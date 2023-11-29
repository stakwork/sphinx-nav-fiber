import { IconButton, LinearProgress } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import ClearIcon from '~/components/Icons/ClearIcon'
import PlayIcon from '~/components/Icons/PlayIcon'
import { Avatar } from '~/components/common/Avatar'
import { Flex } from '~/components/common/Flex'
import { useAppStore } from '~/stores/useAppStore'
import { useSelectedNode } from '~/stores/useDataStore'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { videoTimetoSeconds } from '~/utils'
import { colors } from '~/utils/colors'
import { Equalizer } from './Equalizer'

export const PlayerControl = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldScroll, setShouldScroll] = useState(0)
  const selectedNode = useSelectedNode()

  const sidebarIsOpen = useAppStore((s) => s.sidebarIsOpen)

  console.log(sidebarIsOpen, selectedNode)

  const [isPlaying, setIsPlaying, playingTime, playingNode, setPlayingNode] = usePlayerStore((s) => [
    s.isPlaying,
    s.setIsPlaying,
    s.playingTime,
    s.playingNode,
    s.setPlayingNode,
  ])

  // const selectedNode = useSelectedNode()

  const [start, end] = playingNode?.timestamp
    ? playingNode.timestamp.split('-').map((time) => videoTimetoSeconds(time))
    : [0, 0]

  const startTime = ((playingTime - start) / (end - start)) * 100

  useEffect(() => {
    const containerWidth = containerRef.current?.offsetWidth || 0
    const textWidth = containerRef.current?.scrollWidth || 0

    setShouldScroll(textWidth - containerWidth)
  }, [])

  const showPlayer = (sidebarIsOpen && selectedNode?.ref_id !== playingNode?.ref_id) || (playingNode && !sidebarIsOpen)

  return showPlayer ? (
    <Wrapper>
      <Controls>
        <Avatar src={playingNode.image_url || ''} type={playingNode.node_type} />
        <Info>
          <Container ref={containerRef}>
            <ScrollText className="title" scrollValue={shouldScroll}>
              {playingNode.episode_title}
            </ScrollText>
            <div className="subtitle">{playingNode.show_title}</div>
          </Container>

          <Action onClick={() => setIsPlaying(!isPlaying)} size="small">
            {!isPlaying ? <PlayIcon /> : <Equalizer />}
          </Action>
        </Info>
        <Close onClick={() => setPlayingNode(null)}>
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
  }
`

const Close = styled(IconButton)`
  padding: 8px;
  color: ${colors.GRAY6};
`

const Action = styled(IconButton)`
  && {
    font-size: 36px;
    padding: 2px;
    margin-left: 8px;
  }
`

const Progress = styled(LinearProgress)`
  && {
    flex-shrink: 0;
    height: 2px;
    background: rgba(255, 255, 255, 0.1);

    .MuiLinearProgress-bar {
      background-color: ${colors.white};
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
