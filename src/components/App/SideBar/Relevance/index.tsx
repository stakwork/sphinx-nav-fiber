import { ReactNode, useCallback, useMemo, useRef } from "react";
import { useGraphData } from "~/components/DataRetriever";
import { useAppStore } from "~/stores/useAppStore";
import { ScrollView } from "~/components/ScrollView";
import { useDataStore } from "~/stores/useDataStore";
import { NodeExtended } from "~/types";
import { saveConsumedContent } from "~/utils/relayHelper";
import { Episode } from "./Episode";
import { ErrorSection } from "../Creator/ErrorSection";
import { formatDescription } from "~/utils/formatDescription";

type Props = {
  header?: ReactNode;
};

export const Relevance = ({ header = null }: Props) => {
  const data = useGraphData();

  const scrollViewRef = useRef<HTMLDivElement | null>(null);

  const setSelectedNode = useDataStore((s) => s.setSelectedNode);
  const setSelectedTimestamp = useDataStore((s) => s.setSelectedTimestamp);
  const flagErrorIsOpen = useAppStore((s) => s.flagErrorIsOpen);

  const  setRelevanceSelected = useAppStore((s) => s.setRelevanceSelected);

  const currentNodes = useMemo(
    () =>
      data.nodes
        .filter((f) => f.node_type === "clip"),
    [data.nodes]
  );

  const handleNodeClick = useCallback(
    (node: NodeExtended) => {
      saveConsumedContent(node);
      setSelectedTimestamp(node);
      setRelevanceSelected(true);
      setSelectedNode(node);
    },
    [setSelectedNode, setRelevanceSelected, setSelectedTimestamp]
  );

  return (
    <>
      {flagErrorIsOpen && <ErrorSection />}

      <ScrollView ref={scrollViewRef} shrink={1}>
        {header}

        {currentNodes.map((n, index) => {
          const {
            image_url: imageUrl,
            episode_title: episodeTitle,
            description,
            date,
            boost,
            type,
            id,
          } = n || {};

          return (
            <Episode
              // eslint-disable-next-line react/no-array-index-key
              key={index.toString()}
              boostCount={boost || 0}
              date={date || 0}
              description={formatDescription(description)}
              id={id}
              imageUrl={imageUrl || "audio_default.svg"}
              onClick={() => handleNodeClick(n)}
              title={episodeTitle || ""}
              type={type}
            />
          );
        })}

      </ScrollView>
    </>
  );
};
