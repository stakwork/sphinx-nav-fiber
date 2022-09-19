import { ReactNode, useMemo, useRef, useState } from "react";
import { Flex } from "~/components/common/Flex";
import { Pill } from "~/components/common/Pill";
import { Text } from "~/components/common/Text";
import { useGraphData } from "~/components/DataRetriever";
import { ScrollView } from "~/components/ScrollView";
import { useDataStore } from "~/stores/useDataStore";
import { Episode } from "./Episode";

const pageSize = 80;

type Props = {
  header?: ReactNode;
};

export const Relevance = ({ header = null }: Props) => {
  const data = useGraphData();

  const scrollViewRef = useRef<HTMLDivElement | null>(null);

  const setSelectedNode = useDataStore((s) => s.setSelectedNode);

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

  return (
    <ScrollView shrink={1} ref={scrollViewRef}>
      {header}

      <Flex px={20} pb={10}>
        <Text color="gray300">
          Page {currentPage + 1} of {Math.ceil(data.nodes.length / pageSize)}
        </Text>
      </Flex>

      {currentNodes.map((n, index) => {
        const { image_url, episode_title, description, date, boost } = n || {};

        return (
          <Episode
            key={index.toString()}
            boostCount={boost || 0}
            date={date || 0}
            description={description || ""}
            imageUrl={image_url || "audio_default.svg"}
            onClick={() => setSelectedNode(n)}
            title={episode_title || ""}
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
  );
};
