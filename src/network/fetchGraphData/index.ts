import {
  AWS_IMAGE_BUCKET_URL,
  CLOUDFRONT_IMAGE_BUCKET_URL,
  isDevelopment,
} from "~/constants";
import { api } from "~/network/api";
import {
  FetchDataResponse,
  GraphData,
  Guests,
  Link,
  Node,
  NodeExtended,
} from "~/types";
import { getLSat } from "~/utils/getLSat";

type guestMapChild = {
  children: string[],
  imageUrl: string,
  name: string,
  twitterHandle: string,
}

const defautData: GraphData = {
  links: [],
  nodes: [],
};

const shouldIncludeTopics = false;

export const fetchGraphData = async (search: string) => {
  try {
    return getGraphData(search);
  } catch (e) {
    return defautData;
  }
};

const fetchNodes = async (search: string) => {
  if (isDevelopment) {
    return {
      exact: await api.get<Node[]>(`/mock_data`),
      related: [],
    };
  }

  console.log("getting prod data");

  const lsatToken = await getLSat("searching");

  if (!lsatToken) {
    throw new Error("An error occured calling getLSat");
  }

  return api.get<FetchDataResponse>(`/search?word=${search}`, {
    Authorization: lsatToken,
  });
};

const getGraphData = async (searchterm: string) => {
  try {
    const fetchGraphDataResponse = await fetchNodes(searchterm);

    const data = [
      ...fetchGraphDataResponse.exact,
      ...fetchGraphDataResponse.related,
    ];

    const nodes: NodeExtended[] = [];
    const links: Link[] = [];

    let topicMap: Record<string, string[]> = {};
    const guestMap: Record<string, guestMapChild> = {};

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
          (guests || []).forEach((guest) => {
            const currentGuest = guest as Guests;

            if (currentGuest.name) {
              guestMap[currentGuest.ref_id] = {
                children: [...(guestMap[currentGuest.ref_id]?.children || []), node.ref_id],
                imageUrl: currentGuest.profile_picture || '',
                name: currentGuest.name,
                twitterHandle: currentGuest.twitter_handle,
              };
            }
          });
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
            colors: ["#000"],
            id: topicNodeId,
            label: topic,
            name: topic,
            node_type: "topic",
            ref_id: topicNodeId,
            scale,
            show_title: topic,
            text: topic,
            weight: 0,
          };

          nodes.push(topicNode);
        });
      }

      Object.entries(guestMap).forEach(([guest, guestValue], index) => {
        const guestChildren = guestValue.children;
        const scale = guestChildren.length * 2;
        const guestNodeId = `guestnode_${index}`;

        // make links to children
        guestChildren.forEach((childRefId: string) => {
          const link: Link = {
            source: childRefId,
            target: guestNodeId,
          };

          links.push(link);
        });

        const guestNode: NodeExtended = {
          colors: ["#000"],
          id: guestNodeId,
          image_url: guestValue.imageUrl,
          label: guestValue.name,
          name: guestValue.name,
          node_type: "guest",
          ref_id: guestNodeId,
          scale,
          show_title: guestValue.name,
          text: guestValue.twitterHandle,
          type: "guest",
          weight: 0,
        };

        nodes.push(guestNode);
      });
    }

    nodes.sort((a, b) => (b.weight || 0) - (a.weight || 0));

    return { links, nodes };
  } catch (e) {
    console.error(e);

    return defautData;
  }
};
