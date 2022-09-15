import * as sphinx from "sphinx-bridge-kevkevinpal";
import {
  AWS_IMAGE_BUCKET_URL,
  CLOUDFRONT_IMAGE_BUCKET_URL,
  isDevelopment,
} from "~/constants";
import { api } from "~/network/api";
import { GraphData, Link, Node, NodeExtended } from "~/types";
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

    return api.get<Node[]>("/mock_data");
  }

  console.log("getting prod data");

  const lsatToken = await getLSat();

  if (!lsatToken) {
    throw new Error("An error occured calling getLSat");
  }

  return api.get<Node[]>(`/search?word=${search}`, {
    Authorization: lsatToken,
  });
};

const getGraphData = async (searchterm: string) => {
  try {
    const data = await fetchNodes(searchterm);

    const nodes: NodeExtended[] = [];
    const links: Link[] = [];

    let topicMap: Record<string, string[]> = {};
    let guestMap: Record<string, string[]> = {};

    if (data.length) {
      // Populating nodes array with podcasts and constructing a topic map
      data.forEach((node) => {
        const {
          children,
          topics,
          guests,
          show_title: showTitle,
          node_type: nodeType,
        } = node;

        if (!shouldIncludeTopics && nodeType === "topic") {
          return;
        }

        children?.forEach((childRefId: string) => {
          const link: Link = {
            source: node.ref_id,
            target: childRefId,
          };

          links.push(link);
        });

        if (topics) {
          topicMap = topics.reduce((acc, topic) => {
            if (showTitle) {
              acc[topic] = [...(topicMap[topic] || []), showTitle];
            }

            return acc;
          }, {} as Record<string, string[]>);
        }

        if (node.node_type === "episode") {
          guestMap =
            guests?.reduce((acc, guest) => {
              if (guest) {
                acc[guest] = [...(guestMap[guest] || []), node.ref_id];
              }
              return acc;
            }, {} as Record<string, string[]>) || {};
        }

        // replace aws bucket url with cloudfront, and add size indicator to end
        const smallImageUrl = node.image_url
          ?.replace(AWS_IMAGE_BUCKET_URL, CLOUDFRONT_IMAGE_BUCKET_URL)
          .replace(".jpg", "_s.jpg");

        nodes.push({
          ...node,
          id: node.ref_id,
          // label: moment.show_title,
          image_url: smallImageUrl,
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

          const topicNode: NodeExtended = {
            id: topicNodeId,
            ref_id: topicNodeId,
            name: topic,
            label: topic,
            weight: 0,
            show_title: topic,
            node_type: "topic",
            text: topic,
            scale,
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

        const guestNode: NodeExtended = {
          id: guestNodeId,
          ref_id: guestNodeId,
          name: guest,
          weight: 0,
          show_title: guest,
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
