import * as sphinx from "sphinx-bridge-kevkevinpal";
import {
  AWS_IMAGE_BUCKET_URL,
  CLOUDFRONT_IMAGE_BUCKET_URL,
  isDevelopment,
} from "~/constants";
import { api } from "~/network/api";
import { GraphData, Link, Moment, Node } from "~/types";
import { getLSat } from "~/utils/getLSat";

const defautData: GraphData = {
  nodes: [],
  links: [],
};

const shouldIncludeTopics = false;

export const fetchGraphData = async (search: string) => {
  // @ts-ignore
  await sphinx.enable();

  try {
    return getGraphData(search);
  } catch (e) {
    return defautData;
  }
};

const fetchNodes = async (search: string) => {
  if (isDevelopment) {
    console.log("is dev", origin);

    return api.get<Moment[]>("/mock_data");
  }

  console.log("getting prod data");

  const lsatToken = await getLSat();

  if (!lsatToken) {
    throw new Error("An error occured calling getLSat");
  }

  return api.get<Moment[]>(`/search?word=${search}`, {
    Authorization: lsatToken,
  });
};

const getGraphData = async (searchterm: string) => {
  try {
    const data = await fetchNodes(searchterm);

    const nodes: Node[] = [];
    const links: Link[] = [];

    if (data.length) {
      const topicMap: Record<string, string[]> = {};
      const guestMap: Record<string, string[]> = {};

      // Populating nodes array with podcasts and constructing a topic map
      data.forEach((moment) => {
        const {
          children,
          topics,
          guests,
          boost,
          show_title: showTitle,
          node_type: nodeType,
        } = moment;

        if (!shouldIncludeTopics && nodeType === "topic") {
          return;
        }

        if (children) {
          children.forEach((childRefId: string) => {
            const link: Link = {
              source: moment.ref_id,
              target: childRefId,
            };

            links.push(link);
          });
        }

        if (topics) {
          topics.forEach((topic: string) => {
            topicMap[topic] = [...(topicMap[topic] || []), showTitle];
          });
        }

        if (moment.node_type === "episode") {
          guests.forEach((guest) => {
            guestMap[guest] = [...(guestMap[guest] || []), moment.ref_id];
          });
        }

        // replace aws bucket url with cloudfront, and add size indicator to end
        const smallImage = moment.image_url
          ?.replace(AWS_IMAGE_BUCKET_URL, CLOUDFRONT_IMAGE_BUCKET_URL)
          .replace(".jpg", "_s.jpg");

        nodes.push({
          boost,
          colors: [],
          details: { ...moment, image_url: smallImage },
          id: moment.ref_id,
          image_url: smallImage,
          label: moment.show_title,
          name: `${moment.show_title}:${moment.episode_title}:${moment.timestamp}`,
          node_type: moment.node_type,
          text: moment.text,
          type: moment.type,
          weight: moment.weight,
        });
      });

      if (shouldIncludeTopics) {
        Object.entries(topicMap).forEach(([topic, topicTitles], index) => {
          /** we dont create topic node for search term,
           *  otherwise everything will be linked to it
           */
          if (topic === searchterm) {
            return;
          }

          const scale = topicTitles.length * 2;
          const topicNodeId = `topic_node_${index}`;

          // make links to children
          topicTitles.forEach((showTitle) => {
            const show = data.find(
              (f) => f.show_title === showTitle && f.node_type === "episode"
            );

            const showRefId = show?.ref_id || "";

            const link: Link = {
              source: showRefId,
              target: topicNodeId,
            };

            links.push(link);
          });

          const topicNode: Node = {
            id: topicNodeId,
            name: topic,
            weight: 0,
            label: topic,
            type: "topic",
            node_type: "topic",
            text: topic,
            scale: scale,
            colors: ["#000"],
          };

          nodes.push(topicNode);
        });
      }
      // Adds guest nodes
      Object.entries(guestMap).forEach(([guest, guestChildren], index) => {
        const scale = guestChildren.length * 2;
        const guestNodeId = "guestnode_" + index;

        // make links to children
        guestChildren.forEach((childRefId: string) => {
          const link: Link = {
            source: childRefId,
            target: guestNodeId,
          };

          links.push(link);
        });

        const guestNode: Node = {
          id: guestNodeId,
          name: guest,
          weight: 0,
          label: guest,
          type: "guest",
          node_type: "guest",
          text: guest,
          scale: scale,
          colors: ["#000"],
        };

        nodes.push(guestNode);
      });
    }

    nodes.sort((a, b) => (b.weight || 0) - (a.weight || 0));

    return { nodes, links };
  } catch (e) {
    console.error(e);

    return defautData;
  }
};
