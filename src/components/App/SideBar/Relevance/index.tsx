import { useRef, useState } from "react";
import { Flex } from "~/components/common/Flex";
import { Pill } from "~/components/common/Pill";
import { useGraphData } from "~/components/DataRetriever";
import { ScrollView } from "~/components/ScrollView";
import { useDataStore } from "~/stores/useDataStore";
import { Episode } from "./Episode";

const pageSize = 80;

export const Relevance = ({ isSuggestions }: { isSuggestions?: boolean }) => {
  const data = useGraphData();

  const scrollViewRef = useRef<HTMLDivElement | null>(null);

  const setSelectedNode = useDataStore((s) => s.setSelectedNode);

  const [renderPage, setRenderPage] = useState(0);

  const startSlice = renderPage * pageSize;
  const endSlice = startSlice + pageSize;

  const isMore = data.nodes.length - 1 > endSlice;
  const isLess = startSlice > 0;

  const episodeOnclickHandler = async (node: Node) => {
    setSelectedNode(node);
    await saveConsumedContent(node);
  };

  return (
    <ScrollView ref={scrollViewRef} id="top-ranked-scroll-view">
      {data.nodes
        .slice(startSlice, endSlice)
        .filter((f) => f.node_type === "clip")
        .map((n, index) => {
          const { image_url, episode_title, description, date, boost } =
            n || {};

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

      {!isSuggestions && (
        <Flex direction="row" justify="space-between" p={20}>
          <Pill
            onClick={() => {
              if (isLess) {
                setRenderPage(renderPage - 1);
                scrollViewRef.current?.scrollTo(0, 0);
              }
            }}
          >
            Previous
          </Pill>
          <Pill
            onClick={() => {
              if (isMore) {
                setRenderPage(renderPage + 1);
                scrollViewRef.current?.scrollTo(0, 0);
              }
            }}
          >
            Next
          </Pill>
        </Flex>
      )}
    </ScrollView>
  );
};
