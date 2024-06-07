import { IconButton, LinearProgress } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import ClearIcon from '~/components/Icons/ClearIcon'
import PauseIcon from '~/components/Icons/PauseIcon'
import PlayIcon from '~/components/Icons/PlayIcon'
import { Avatar } from '~/components/common/Avatar'
import { Flex } from '~/components/common/Flex'
import { useAppStore } from '~/stores/useAppStore'
import { useGraphStore, useSelectedNode } from '~/stores/useGraphStore'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { videoTimeToSeconds } from '~/utils'
import { colors } from '~/utils/colors'

export const PlayerControl = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollWidth, setScrollWidth] = useState(0)
  const selectedNode = useSelectedNode()
  const setSelectedNode = useGraphStore((s) => s.setSelectedNode)
  const [sidebarIsOpen, setSidebarOpen] = useAppStore((s) => [s.sidebarIsOpen, s.setSidebarOpen])

  const [isPlaying, setIsPlaying, playingTime, playingNode, miniPlayerIsVisible, setMiniPlayerIsVisible] =
    usePlayerStore((s) => [
      s.isPlaying,
      s.setIsPlaying,
      s.playingTime,
      s.playingNode,
      s.miniPlayerIsVisible,
      s.setMiniPlayerIsVisible,
    ])

  const [start, end] = playingNode?.timestamp
    ? playingNode.timestamp.split('-').map((time) => videoTimeToSeconds(time))
    : [0, 0]

  const startTime = ((playingTime - start) / (end - start)) * 100

  useEffect(() => {
    const containerWidth = containerRef.current?.offsetWidth || 0
    const textWidth = containerRef.current?.scrollWidth || 0

    setScrollWidth(textWidth - containerWidth)
  }, [])

  const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setMiniPlayerIsVisible(false)
    e.stopPropagation()
  }

  const openNodeDetails = () => {
    setSelectedNode(playingNode)
    setSidebarOpen(true)
  }

  const showPlayer = (sidebarIsOpen && selectedNode?.ref_id !== playingNode?.ref_id) || (playingNode && !sidebarIsOpen)

  return miniPlayerIsVisible && playingNode && showPlayer ? (
    <Wrapper onClick={openNodeDetails}>
      <Controls>
        <Avatar src={playingNode.image_url || ''} type={playingNode.node_type} />
        <Info>
          <Container ref={containerRef}>
            <ScrollText className="title" scrollValue={scrollWidth}>
              {playingNode.episode_title}
            </ScrollText>
            <div className="subtitle">{playingNode.show_title}</div>
          </Container>

          <Action
            data-testid="play-pause-button"
            onClick={(e) => {
              setIsPlaying(!isPlaying)
              e.stopPropagation()
            }}
            size="small"
          >
            {isPlaying ? <PauseIcon data-testid="pause-icon" /> : <PlayIcon data-testid="play-icon" />}
          </Action>
        </Info>
        <Close onClick={(e) => onClose(e)}>
          <ClearIcon />
        </Close>
      </Controls>
      <Progress value={startTime} variant="determinate" />
    </Wrapper>
  ) : null
}

const Wrapper = styled(Flex).attrs({
  direction: 'column',
  align: 'stretch',
  justify: 'space-between',
})`
  padding: 8px;
  background: ${colors.BG1};
  border-radius: 6px;
  width: 320px;
  height: 72px;
  margin-top: 16px;
  cursor: pointer;
  z-index: 0;
`

const Controls = styled(Flex).attrs({
  direction: 'row',
  align: 'center',
  justify: 'flex-start',
})``

const Info = styled(Flex).attrs({
  direction: 'row',
  align: 'center',
  justify: 'space-between',
})`
  flex: 1;
  color: ${colors.white};
  margin-left: 11px;

  .title {
    font-size: 13px;
    margin-bottom: 2px;
    font-weight: 500;
  }

  .subtitle {
    font-size: 11px;
    color: ${colors.GRAY6};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

const Close = styled(IconButton)`
  padding: 8px;
  color: ${colors.GRAY6};
  z-index: 100000;
`

const Action = styled(IconButton)`
  && {
    font-size: 36px;
    padding: 2px;
    margin-left: 8px;
    overflow: hidden;
    z-index: 100000;
  }
`

const Progress = styled(LinearProgress)`
  && {
    flex-shrink: 0;
    height: 2px;
    background-color: ${colors.white};
    color: blue;

    .MuiLinearProgress-bar {
      background: rgb(65, 90, 127);
    }
  }
`

const ScrollText = styled.div<{ scrollValue: number }>`
  white-space: nowrap;
  overflow: hidden;
  width: max-content;
  animation: scrollText 12s linear infinite;

  @keyframes scrollText {
    0%,
    15% {
      transform: translateX(0);
    }

    60%,
    75% {
      transform: translateX(${(props) => -props.scrollValue}px);
    }

    100% {
      transform: translateX(0);
    }
  }
  color: #fff;
`

const Container = styled(Flex)`
  overflow: hidden;
  flex: 1;
`
