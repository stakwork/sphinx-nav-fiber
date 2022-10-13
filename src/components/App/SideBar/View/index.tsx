import { useGraphData } from "~/components/DataRetriever";
import { useAppStore } from "~/stores/useAppStore";
import { useDataStore } from "~/stores/useDataStore";
import { Creator } from "../Creator";
import { Person } from "../Person";
import { Relevance } from "../Relevance";
import { Twitter } from "../Twitter";
import { YouTube } from "../YouTube";

export const View = () => {
  const data = useGraphData();
  const selectedNode = useDataStore((s) => s.selectedNode);
  const relevanceIsSelected = useAppStore((s) => s.relevanceIsSelected);

  if (!selectedNode && data?.nodes?.length) {
    return <Relevance />;
  }

  if (relevanceIsSelected) {
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
