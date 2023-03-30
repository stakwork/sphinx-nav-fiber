import { useGraphData } from "~/components/DataRetriever";
import { useAppStore } from "~/stores/useAppStore";
import { useSelectedNode } from "~/stores/useDataStore";
import { Creator } from "../Creator";
import { Data } from "../Data";
import { Person } from "../Person";
import { Relevance } from "../Relevance";
import { TwitData } from "../TwitData";
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
    case "data_series":
      return <Data />;
    case "tweet":
      return <TwitData />;
    default:
      return <Creator />;
  }
};
