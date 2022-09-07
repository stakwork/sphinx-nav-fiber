import { useGraphData } from "~/components/DataRetriever";
import { useDataStore } from "~/stores/useDataStore";
import { Creator } from "../Creator";
import { Person } from "../Person";
import { Relevance } from "../Relevance";
import { Twitter } from "../Twitter";
import { YouTube } from "../YouTube";

export const View = () => {
  const data = useGraphData();
  const selectedNode = useDataStore((s) => s.selectedNode);

  if (!selectedNode && data?.nodes?.length) {
    return <Relevance />;
  }

  switch (selectedNode?.type) {
    case "twitter":
      return <Twitter />;
    case "youtube":
      return <YouTube />;
    case "guest":
      return <Person />;
    default:
      return <Creator />;
  }
};
