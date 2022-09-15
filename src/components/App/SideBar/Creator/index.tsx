import { useEffect, useMemo } from "react";
import styled from "styled-components";
import { Flex } from "~/components/common/Flex";
import { useGraphData } from "~/components/DataRetriever";
import { ScrollView } from "~/components/ScrollView";
import { useDataStore, useSelectedNode } from "~/stores/useDataStore";
import { getSelectedNodeTimestamps } from "~/utils/getSelectedNodeTimestamps";
import { Suggestions } from "../Suggestions";
import { Heading } from "./Heading";
import { Timestamp } from "./Timestamp";

const NodePanel = styled(Flex)`
  width: 100%;
  height: 100%;
  // overflow: hidden;

  &:hover {
    opacity: 1;
  }
`;

export const Creator = () => {
  const data = useGraphData();
  const selectedNode = useSelectedNode();

  const selectedNodeTimestamps = useMemo(
    () => getSelectedNodeTimestamps(data?.nodes || [], selectedNode),
    [data?.nodes, selectedNode]
  );

  const setSelectedTimestamp = useDataStore((s) => s.setSelectedTimestamp);

  useEffect(() => {
    if (selectedNodeTimestamps?.length) {
      setSelectedTimestamp(selectedNodeTimestamps[0]);
    }
  }, [selectedNodeTimestamps, setSelectedTimestamp]);

  if (!selectedNode) {
    return null;
  }

  return (
    <div style={{ height: "100%", width: "100%", overflow: "auto" }}>
      <NodePanel align="center">
        <Heading />

        <Flex
        // style={{ height: `calc(100% - ${CREATOR_HEADING_HEIGHT}px)` }}
        >
          <ScrollView id="focused_scroller">
            <Flex pb={20}>
              {selectedNodeTimestamps?.map((timestamp, index) => {
                // let episodeImg = defaultTimestamp.image_url;

                // const isSelected =
                //   selectedTimestamps[podcastName]?.link === t.link &&
                //   selectedTimestamps[podcastName]?.timestamp ===
                //     t.timestamp;

                // const isError =
                //   selectedTimestamps[podcastName]?.link === t.link &&
                //   selectedTimestamps[podcastName]?.timestamp ===
                //     t.timestamp &&
                //   selectedTimestamps[podcastName]?.error;

                return (
                  <Timestamp
                    onClick={() => setSelectedTimestamp(timestamp)}
                    key={`${timestamp.episode_title}_${index}`}
                    timestamp={timestamp}
                  />
                );
              })}
            </Flex>
            <Flex pt={10}>
              <Suggestions />
            </Flex>
          </ScrollView>
        </Flex>
      </NodePanel>
    </div>
  );
};
