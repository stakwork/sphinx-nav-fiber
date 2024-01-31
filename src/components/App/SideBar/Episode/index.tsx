import { useCallback, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { useGraphData } from '~/components/DataRetriever'
import { Divider } from '~/components/common/Divider'
import { Flex } from '~/components/common/Flex'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { NodeExtended } from '~/types'
import { videoTimeToSeconds } from '~/utils'
import { getSelectedNodeTimestamps } from '~/utils/getSelectedNodeTimestamps'
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

export const Episode = () => {
  const selectedNode = useSelectedNode()
  const data = useGraphData()

  const [playingNode, setPlayingNodeLink, setPlayingTime] = usePlayerStore((s) => [
    s.playingNode,
    s.setPlayingNodeLink,
    s.setPlayingTime,
  ])

  const selectedNodeTimestamps = useMemo(
    () => getSelectedNodeTimestamps(data?.nodes || [], selectedNode),
    [data?.nodes, selectedNode],
  )

  const selectedNodeShow: NodeExtended | undefined = useMemo(
    () => data?.nodes.find((i) => i.node_type === 'show' && i.show_title === selectedNode?.show_title),
    [data?.nodes, selectedNode],
  )

  const [selectedTimestamp, setSelectedTimestamp] = useDataStore((s) => [s.selectedTimestamp, s.setSelectedTimestamp])

  const updateActiveTimestamp = useCallback(
    (timestamp: NodeExtended) => {
      if (playingNode && timestamp.link && playingNode?.link !== timestamp.link) {
        setPlayingNodeLink(timestamp.link)
      }

      setPlayingTime(videoTimeToSeconds(timestamp?.timestamp?.split('-')[0] || '00:00:01'))
      setSelectedTimestamp(timestamp)
    },
    [playingNode, setPlayingNodeLink, setSelectedTimestamp, setPlayingTime],
  )

  useEffect(
    () => () => {
      setSelectedTimestamp(null)
    },
    [setSelectedTimestamp],
  )

  useEffect(() => {
    if (selectedNodeTimestamps?.length && !selectedNodeTimestamps.some((i) => i.ref_id === selectedTimestamp?.ref_id)) {
      updateActiveTimestamp(selectedNodeTimestamps[0])
    }
  }, [selectedNodeTimestamps, selectedTimestamp, updateActiveTimestamp])

  if (!selectedNode) {
    return null
  }

  return (
    <div>
      <Heading selectedNodeShow={selectedNodeShow} />

      {!!selectedNodeTimestamps?.length && (
        <Wrapper>
          <Flex pb={20}>
            {selectedNodeTimestamps?.map((timestamp, index) => (
              <Timestamp
                // eslint-disable-next-line react/no-array-index-key
                key={`${timestamp.episode_title}_${index}`}
                onClick={() => updateActiveTimestamp(timestamp)}
                timestamp={timestamp}
              />
            ))}
          </Flex>

          <Divider />
        </Wrapper>
      )}
    </div>
  )
}
