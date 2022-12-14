import { useGraphData } from "~/components/DataRetriever";
import { useAppStore } from "~/stores/useAppStore";
import { useSelectedNode } from "~/stores/useDataStore";
import { Creator } from "../Creator";
import { Person } from "../Person";
import { Relevance } from "../Relevance";
import { Twitter } from "../Twitter";

export const View = () => {
  const data = useGraphData();

  const selectedNode = useSelectedNode();
  const relevanceIsSelected = useAppStore((s) => s.relevanceIsSelected);

  const isBaseSearchView = !selectedNode && data?.nodes?.length;
  const isRelevanceView = relevanceIsSelected;

  if (isBaseSearchView || isRelevanceView) {
    return <Relevance />;
  }

  switch (selectedNode?.type) {
    case "twitter":
      return <Twitter />;
    case "guest":
      return <Person />;
    default:
      return <Creator />;
  }
};
