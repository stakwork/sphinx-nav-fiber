import getLinks from "./links";
import getNodes from "./nodes";

export const getMockGraphData = async () => {
  const ids: Record<string, number> = {};

  const nodes = getNodes();

  // eslint-disable-next-line no-restricted-syntax
  for (const node of nodes) {
    const count = ids[node.id] || 0;

    ids[node.id] = count + 1;

    node.id = `${node.id}${count - 1 > 0 ? `-${count - 1}` : ""}`;
  }

  return { links: getLinks(), nodes };
};
