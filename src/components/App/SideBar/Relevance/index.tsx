import { ReactNode, useCallback, useMemo, useRef, useState } from "react";
import { Flex } from "~/components/common/Flex";
import { Pill } from "~/components/common/Pill";
import { Text } from "~/components/common/Text";
import { useGraphData } from "~/components/DataRetriever";
import { useAppStore } from "~/stores/useAppStore";
import { Heading } from "../Creator/Heading";
import { ScrollView } from "~/components/ScrollView";
import { useDataStore } from "~/stores/useDataStore";
import { NodeExtended } from "~/types";
import { saveConsumedContent } from "~/utils/relayHelper";
import { Episode } from "./Episode";
import { ErrorSection } from "../Creator/ErrorSection";

const pageSize = 80;

type Props = {
  header?: ReactNode;
};

export const Relevance = ({ header = null }: Props) => {
  const data = useGraphData();

  const scrollViewRef = useRef<HTMLDivElement | null>(null);

  const setSelectedNode = useDataStore((s) => s.setSelectedNode);
  const setSelectedTimestamp = useDataStore((s) => s.setSelectedTimestamp);
  const flagErrorIsOpen = useAppStore((s) => s.flagErrorIsOpen);
  
  const [relevanceIsSelected, setRelevanceSelected] = useAppStore((s) => [
    s.relevanceIsSelected,
    s.setRelevanceSelected,
  ]);

  const [currentPage, setCurrentPage] = useState(0);

  const startSlice = currentPage * pageSize;
  const endSlice = startSlice + pageSize;

  const hasNext = data.nodes.length - 1 > endSlice;
  const hasPrevious = startSlice > 0;

  const currentNodes = useMemo(
    () =>
      data.nodes
        .slice(startSlice, endSlice)
        .filter((f) => f.node_type === "clip"),
    [data.nodes, endSlice, startSlice]
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
      {relevanceIsSelected && <Heading />}
      {flagErrorIsOpen && <ErrorSection />}

      <ScrollView ref={scrollViewRef} shrink={1}>
        {header}

        <Flex pb={10} px={20}>
          <Text color="textSecondary">
            Page {currentPage + 1} of {Math.ceil(data.nodes.length / pageSize)}
          </Text>
        </Flex>

        {currentNodes.map((n, index) => {
          const {
            image_url: imageUrl,
            episode_title: episodeTitle,
            description,
            date,
            boost,
          } = n || {};

          return (
            <Episode
              // eslint-disable-next-line react/no-array-index-key
              key={index.toString()}
              boostCount={boost || 0}
              date={date || 0}
              description={description || ""}
              imageUrl={imageUrl || "audio_default.svg"}
              onClick={() => handleNodeClick(n)}
              title={episodeTitle || ""}
            />
          );
        })}

        <Flex direction="row" justify="space-between" p={20}>
          <Pill
            disabled={!hasPrevious}
            onClick={() => {
              if (hasPrevious) {
                setCurrentPage(currentPage - 1);
                scrollViewRef.current?.scrollTo(0, 0);
              }
            }}
          >
            Previous
          </Pill>
          <Pill
            disabled={!hasNext}
            onClick={() => {
              if (hasNext) {
                setCurrentPage(currentPage + 1);
                scrollViewRef.current?.scrollTo(0, 0);
              }
            }}
          >
            Next
          </Pill>
        </Flex>
      </ScrollView>
    </>
  );
};
