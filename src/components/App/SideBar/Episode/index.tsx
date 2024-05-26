import { Slide } from '@mui/material'
import { useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { useGraphData } from '~/components/DataRetriever'
import ChevronDownIcon from '~/components/Icons/ChevronDownIcon'
import { Flex } from '~/components/common/Flex'
import { useSelectedNode } from '~/stores/useDataStore'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { NodeExtended } from '~/types'
import { colors, videoTimeToSeconds } from '~/utils'
import { getSelectedNodeTimestamps } from '~/utils/getSelectedNodeTimestamps'
import { Media } from '../Media'
import { Heading } from './Heading'
import { Timestamp } from './Timestamp'

const ClipsWrapper = styled(Flex)`
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

  const [openClip, setOpenClip] = useState<NodeExtended | null>(null)

  const [selectedTimestamp, setSelectedTimestamp] = useState<NodeExtended | null>(null)

  const [playingNode, setPlayingNodeLink, setPlayingTime, setIsSeeking, playingTime] = usePlayerStore((s) => [
    s.playingNode,
    s.setPlayingNodeLink,
    s.setPlayingTime,
    s.setIsSeeking,
    s.playingTime,
  ])

  const selectedNodeTimestamps = useMemo(
    () => getSelectedNodeTimestamps(data?.nodes || [], selectedNode),
    [data?.nodes, selectedNode],
  )

  const selectedNodeShow: NodeExtended | undefined = useMemo(
    () => data?.nodes.find((i) => i.node_type === 'show' && i.show_title === selectedNode?.show_title),
    [data?.nodes, selectedNode],
  )

  const updateActiveTimestamp = useCallback(
    (timestamp: NodeExtended) => {
      const newTime = videoTimeToSeconds(timestamp?.timestamp?.split('-')[0] || '00:00:01')

      if (playingNode && timestamp.link && playingNode?.link !== timestamp.link) {
        setPlayingNodeLink(timestamp.link)
        setPlayingTime(0)
        setIsSeeking(true)
      } else if (!playingNode || playingNode?.link !== timestamp.link) {
        if (timestamp.link !== undefined) {
          setPlayingNodeLink(timestamp.link)
          setPlayingTime(0)
          setIsSeeking(true)
        }
      }

      setPlayingTime(newTime)
      setIsSeeking(true)
      setSelectedTimestamp(timestamp)
    },
    [playingNode, setPlayingNodeLink, setIsSeeking, setSelectedTimestamp, setPlayingTime],
  )

  useEffect(() => {
    if (selectedNodeTimestamps?.length && !selectedNodeTimestamps.some((i) => i.ref_id === selectedTimestamp?.ref_id)) {
      updateActiveTimestamp(selectedNodeTimestamps[0])
    }
  }, [selectedNodeTimestamps, selectedTimestamp, updateActiveTimestamp])

  useEffect(() => {
    if (selectedNodeTimestamps?.length) {
      const currentTimestamp = selectedNodeTimestamps.find((timestamp) => {
        if (!timestamp.timestamp) {
          return false
        }

        const timestampSeconds = videoTimeToSeconds(timestamp.timestamp.split('-')[0])

        return Math.abs(timestampSeconds - playingTime) < 1
      })

      if (currentTimestamp && currentTimestamp.ref_id !== selectedTimestamp?.ref_id) {
        setSelectedTimestamp(currentTimestamp)
      }
    }
  }, [playingTime, selectedNodeTimestamps, selectedTimestamp])

  if (!selectedNode) {
    return null
  }

  return (
    <div style={{ overflow: 'auto', flex: 1, width: '100%' }}>
      <Wrapper>
        {openClip && (
          <StyledSlide className="slide-me" direction="up" in={!!openClip}>
            <InfoWrapper>
              <Flex className="close-info" onClick={() => setOpenClip(null)}>
                <ChevronDownIcon />
              </Flex>
              {openClip && <Media node={openClip} />}
            </InfoWrapper>
          </StyledSlide>
        )}
        <Heading selectedNodeShow={selectedNodeShow} />

        {!!selectedNodeTimestamps?.length && (
          <ClipsWrapper>
            <Flex pb={20}>
              {selectedNodeTimestamps?.map((timestamp, index) => (
                <Timestamp
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${timestamp.episode_title}_${index}`}
                  isSelected={selectedTimestamp?.ref_id === timestamp.ref_id}
                  onClick={() => updateActiveTimestamp(timestamp)}
                  setOpenClip={setOpenClip}
                  timestamp={timestamp}
                />
              ))}
            </Flex>
          </ClipsWrapper>
        )}
      </Wrapper>
    </div>
  )
}

const InfoWrapper = styled(Flex)`
  border-radius: 20px;
  overflow: hidden;
  height: 100%;

  .close-info {
    position: absolute;
    color: ${colors.white};
    top: 20px;
    right: 20px;
    font-size: 20px;
    cursor: pointer;
  }
`

const Wrapper = styled(Flex)`
  position: relative;
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
`

const StyledSlide = styled(Slide)`
  && {
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    border-radius: 16px;
    overflow: hidden;
    background: ${colors.BG1};
    z-index: 1;
  }
`
