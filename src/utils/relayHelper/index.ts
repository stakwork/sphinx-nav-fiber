import { Node } from "~/types/index";
export const getSecondBrainObj = (
  selectedNode: Node | null,
  boost?: number
) => {
  return {
    boost: boost || selectedNode?.details?.boost,
    description: selectedNode?.details?.description,
    episode_title: selectedNode?.details?.episode_title,
    guests: selectedNode?.details?.guests,
    image_url: selectedNode?.details?.image_url,
    keyword: selectedNode?.details?.keyword,
    link: selectedNode?.details?.link,
    node_type: selectedNode?.details?.node_type,
    ref_id: selectedNode?.details?.ref_id,
    show_title: selectedNode?.details?.show_title,
    text: selectedNode?.details?.text,
    timestamp: selectedNode?.details?.timestamp,
    topics: selectedNode?.details?.topics,
    type: selectedNode?.details?.type,
    weight: selectedNode?.details?.weight,
  };
};
