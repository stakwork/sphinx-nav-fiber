import getLinks from "./links";
import getNodes from "./nodes";

import getNodesChile from "./nodesChile";
import getLinksChile from "./linksChile";
import { API_URL } from "~/constants";

const initialGraphData = {
  chile: {
    nodes: getNodesChile,
    links: getLinksChile
  },
  main: {
    nodes: getNodes,
    links: getLinks
  }
};

export const getMockGraphData = () => {

  const graphFor = API_URL.includes('boltwall') ? 'chile' : 'main';

  const ids: Record<string, number> = {};

  const nodes = initialGraphData[graphFor].nodes();
  const links = initialGraphData[graphFor].links();

  // eslint-disable-next-line no-restricted-syntax
  for (const node of nodes) {
    const count = ids[node.id] || 0;

    ids[node.id] = count + 1;

    node.id = `${node.id}${count - 1 > 0 ? `-${count - 1}` : ""}`;
  }

  return ({ links, nodes });
};
