import * as sphinx from "sphinx-bridge-kevkevinpal";
import { getGraphData } from "../../main/map/helpers";
import { GraphData } from "../../types";

const defautData: GraphData = {
  nodes: [],
  links: [],
};

export const fetchGraphData = async (search: string) => {
  // @ts-ignore
  await sphinx.enable();

  try {
    return getGraphData(search);
  } catch (e) {
    return Promise.resolve(defautData);
  }
};
