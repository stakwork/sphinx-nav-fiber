import { Node } from "~/types";

const ids: Record<string, number> = {};

export const getMockGraphData = async () => {
  const { default: defaultNodes } = (await import("./nodes.json")) as {
    default: Node[];
  };

  const { default: links } = await import("./links.json");

  const nodes = defaultNodes.map((node) => {
    const count = ids[node.id] || 0;

    ids[node.id] = count + 1;

    return {
      ...node,
      id: `${node.id}${count - 1 > 0 ? `-${count - 1}` : ""}`,
    };
  });

  return { links, nodes };
};
