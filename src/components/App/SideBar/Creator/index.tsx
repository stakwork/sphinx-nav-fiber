import { useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { useGraphData } from '~/components/DataRetriever'
import { Divider } from '~/components/common/Divider'
import { Flex } from '~/components/common/Flex'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { getSelectedNodeTimestamps } from '~/utils/getSelectedNodeTimestamps'
import { ErrorSection } from './ErrorSection'
import { Heading } from './Heading'
import { Timestamp } from './Timestamp'

const Wrapper = styled(Flex)`
  height: 70vh;
  padding-bottom: 45px;
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 1px;
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    width: 1px;
    height: 4px;
  }
`

export const Creator = () => {
  const data = useGraphData()
  const selectedNode = useSelectedNode()

  const selectedNodeTimestamps = useMemo(
    () => getSelectedNodeTimestamps(data?.nodes || [], selectedNode),
    [data?.nodes, selectedNode],
  )

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
        <Wrapper>
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
        </Wrapper>
      )}
    </>
  )
}
