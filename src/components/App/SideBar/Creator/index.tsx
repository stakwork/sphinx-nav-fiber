import { useEffect, useMemo } from "react";
import { Divider } from "~/components/common/Divider";
import { Flex } from "~/components/common/Flex";
import { Text } from "~/components/common/Text";
import { useGraphData } from "~/components/DataRetriever";
import { useDataStore, useSelectedNode } from "~/stores/useDataStore";
import { getSelectedNodeTimestamps } from "~/utils/getSelectedNodeTimestamps";
import { useAppStore } from "~/stores/useAppStore";
import { Relevance } from "../Relevance";
import { Heading } from "./Heading";
import { Timestamp } from "./Timestamp";
import { ErrorSection } from "./ErrorSection";

export const Creator = () => {
  const data = useGraphData();
  const selectedNode = useSelectedNode();

  const selectedNodeTimestamps = useMemo(
    () => getSelectedNodeTimestamps(data?.nodes || [], selectedNode),
    [data?.nodes, selectedNode]
  );

  const setSelectedTimestamp = useDataStore((s) => s.setSelectedTimestamp);
  const flagErrorIsOpen = useAppStore((s) => s.flagErrorIsOpen);

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

      {flagErrorIsOpen && <ErrorSection />}

      {!!selectedNodeTimestamps?.length && (
        <>
          <Flex pb={20}>
            {selectedNodeTimestamps?.map((timestamp, index) => (
              <Timestamp
                // eslint-disable-next-line react/no-array-index-key
                key={`${timestamp.episode_title}_${index}`}
                onClick={() => setSelectedTimestamp(timestamp)}
                timestamp={timestamp}
              />
            ))}
          </Flex>

          <Divider />
        </>
      )}

    </>
  );
};
