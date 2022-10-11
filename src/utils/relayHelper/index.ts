import { Node } from "~/types/index";
import * as sphinx from "sphinx-bridge-kevkevinpal";
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

export const saveConsumedContent = async (selectedNode: Node | null) => {
  // @ts-ignore
  let res: any = await sphinx.enable(true);

  if (!res) {
    console.log(
      "Sphinx enable failed, means no pubkey and no budget (including budget of 0)"
    );
  }

  try {
    // @ts-ignore
    await sphinx.saveGraphData({
      type: "second_brain_consumed_content",
      metaData: {
        date: Math.floor(new Date().getTime() / 1000),
        ...getSecondBrainObj(selectedNode),
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const saveSearchTerm = async (searchTerm: string) => {
  // @ts-ignore
  let res: any = await sphinx.enable(true);

  if (!res) {
    console.log(
      "Sphinx enable failed, means no pubkey and no budget (including budget of 0)"
    );
  }
  try {
    // @ts-ignore
    sphinx.saveGraphData({
      type: "search",
      metaData: { frequency: 1, searched_term: searchTerm },
    });
  } catch (error) {
    console.log(error);
  }
};
