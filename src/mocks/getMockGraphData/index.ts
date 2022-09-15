import { Node } from "~/types";

export const getMockGraphData = async () => {
  const { default: nodes } = (await import("./nodes.json")) as {
    default: Node[];
  };
  const { default: links } = await import("./links.json");

  return { nodes, links };
};
