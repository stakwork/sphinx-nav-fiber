import { Node } from "~/types";
import { boostAgainstBudget } from "~/main/map/helpers";
import * as sphinx from "sphinx-bridge-kevkevinpal";
import { getSecondBrainObj } from "~/utils/relayHelper";

export const payStream = async (
  amount: number,
  streamDuration: string,
  selectedNode: Node | null
) => {
  try {
    const stream = await boostAgainstBudget(
      amount,
      selectedNode?.details?.pub_key
    );
    console.log(stream);
    // @ts-ignore
    await sphinx.saveGraphData({
      type: "stream-content",
      metaData: { ...getSecondBrainObj(selectedNode!), streamDuration },
    });
  } catch (error) {
    console.log(error);
  }
};
