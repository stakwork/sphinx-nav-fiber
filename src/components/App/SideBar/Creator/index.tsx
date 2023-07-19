import { useEffect, useMemo } from 'react'
import { useGraphData } from '~/components/DataRetriever'
import { Divider } from '~/components/common/Divider'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { getSelectedNodeTimestamps } from '~/utils/getSelectedNodeTimestamps'
import { DateComponent } from './DateComponent'
import { ErrorSection } from './ErrorSection'
import { Heading } from './Heading'
import { Timestamp } from './Timestamp'

export const Creator = () => {
  const data = useGraphData()
  const selectedNode = useSelectedNode()

  const selectedNodeTimestamps = useMemo(
    () => getSelectedNodeTimestamps(data?.nodes || [], selectedNode),
    [data?.nodes, selectedNode],
  )

  const setSelectedNode = useDataStore((s) => s.setSelectedNode)
  const setSelectedTimestamp = useDataStore((s) => s.setSelectedTimestamp)
  const flagErrorIsOpen = useAppStore((s) => s.flagErrorIsOpen)

  useEffect(() => {
    if (selectedNodeTimestamps?.length) {
      setSelectedTimestamp(selectedNodeTimestamps[0])
    }
  }, [selectedNodeTimestamps, setSelectedTimestamp])

  if (!selectedNode) {
    return null
  }

  return (
    <>
      <Heading />

      {flagErrorIsOpen && <ErrorSection />}

      {!!selectedNodeTimestamps?.length && (
        <>
          <Flex p={20}>
            <Flex align="flex-start" direction="row" justify="space-between" pb={10}>
              <Text color="secondaryText4" kind="mediumBold">
                Related Clips
              </Text>
              <DateComponent date={selectedNodeTimestamps[0]?.date} />
            </Flex>
            {selectedNodeTimestamps?.map((timestamp, index) => (
              <Timestamp
                // eslint-disable-next-line react/no-array-index-key
                key={`${timestamp.episode_title}_${index}`}
                onClick={() => {
                  setSelectedTimestamp(timestamp)

                  const thisNode = data.nodes.find((f) => f.ref_id === timestamp?.ref_id)

                  if (thisNode) {
                    setSelectedNode(thisNode)
                  }
                }}
                timestamp={timestamp}
              />
            ))}
          </Flex>

          <Divider />
        </>
      )}
    </>
  )
}
