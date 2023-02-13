import { ReactNode, useCallback, useMemo, useRef, useState } from "react";
import { Flex } from "~/components/common/Flex";
import { Pill } from "~/components/common/Pill";
import { Text } from "~/components/common/Text";
import { useGraphData, usePathway } from "~/components/DataRetriever";
import { ScrollView } from "~/components/ScrollView";
import { useAppStore } from "~/stores/useAppStore";
import { useDataStore } from "~/stores/useDataStore";
import { NodeExtended } from "~/types";
import { formatDescription } from "~/utils/formatDescription";
import { saveConsumedContent } from "~/utils/relayHelper";
import { ErrorSection } from "../Creator/ErrorSection";
import { Episode } from "./Episode";

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

  const setRelevanceSelected = useAppStore((s) => s.setRelevanceSelected);

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

  const { pathway, currentNodeIndex } = usePathway();

  const handleNodeClick = useCallback(
    (node: NodeExtended) => {
      saveConsumedContent(node);
      setSelectedTimestamp(node);
      setRelevanceSelected(true);
      setSelectedNode(node);
    },
    [setSelectedNode, setRelevanceSelected, setSelectedTimestamp]
  );

  const handleOnAudioEnds = useCallback(() => {
    if (currentNodeIndex === -1) {
      return;
    }

    const nextNode = pathway[currentNodeIndex + 1];

    if (nextNode) {
      handleNodeClick(nextNode);

      setTimeout(() => {
        const audioElement = document.getElementById(
          "audio-player"
        ) as HTMLAudioElement;

        audioElement?.play();
      }, 500);
    }
  }, [currentNodeIndex, handleNodeClick, pathway]);

  return (
    <>
      {!header && flagErrorIsOpen && <ErrorSection />}

      <ScrollView ref={scrollViewRef} shrink={1}>
        {header}

        <Flex pb={10} px={20}>
          <Text color="mainBottomIcons">
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
              onAudioEnds={handleOnAudioEnds}
              onClick={() => handleNodeClick(n)}
              title={episodeTitle || ""}
              type={type}
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
