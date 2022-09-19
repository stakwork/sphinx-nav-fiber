import { useEffect, useMemo } from "react";
import { Divider } from "~/components/common/Divider";
import { Flex } from "~/components/common/Flex";
import { Text } from "~/components/common/Text";
import { useGraphData } from "~/components/DataRetriever";
import { useDataStore, useSelectedNode } from "~/stores/useDataStore";
import { getSelectedNodeTimestamps } from "~/utils/getSelectedNodeTimestamps";
import { Relevance } from "../Relevance";
import { Heading } from "./Heading";
import { Timestamp } from "./Timestamp";

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
    <>
      <Heading />

      <Flex pb={20}>
        {selectedNodeTimestamps?.map((timestamp, index) => (
          <Timestamp
            onClick={() => setSelectedTimestamp(timestamp)}
            key={`${timestamp.episode_title}_${index}`}
            timestamp={timestamp}
          />
        ))}
      </Flex>

      <Divider />

      <Relevance
        header={
          <Flex px={20} py={16}>
            <Text kind="medium">More like this...</Text>
          </Flex>
        }
      />
    </>
  );
};
