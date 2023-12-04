import { memo, useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { useDataStore } from '~/stores/useDataStore'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { videoTimeToSeconds } from '~/utils'

const PlayerComponent = () => {
  const playerRef = useRef<ReactPlayer | null>(null)
  const [isReady, setIsReady] = useState<boolean>(false)

  const [isPlaying, setIsPlaying, setPlayingTime, setPlayingNode, playingNode] = usePlayerStore((s) => [
    s.isPlaying,
    s.setIsPlaying,
    s.setPlayingTime,
    s.setPlayingNode,
    s.playingNode,
  ])

  const selectedNode = useDataStore((s) => s.selectedNode)

  const { link, timestamp } = playingNode || {}

  const secs = timestamp ? videoTimeToSeconds(timestamp) : 0

  const isPlayable =
    selectedNode?.node_type === 'youtube' || (selectedNode?.node_type === 'clip' && selectedNode?.type === 'youtube')

  useEffect(() => {
    if (!isPlayable) {
      return
    }

    const player = playerRef.current

    setPlayingNode(selectedNode)

    if (isReady) {
      player?.seekTo(secs)
      setIsPlaying(true)
    }
  }, [setIsPlaying, setPlayingNode, selectedNode, isReady, secs, isPlayable])

  const handleProgress = (progress: { playedSeconds: number }) => {
    const currentTime = progress.playedSeconds

    setPlayingTime(currentTime)
  }

  return (
    <PlayerWrapper>
      <Flex direction="row">
        <ReactPlayer
          ref={playerRef}
          controls={false}
          height={isPlayable ? '200px' : '0px'}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          onProgress={handleProgress}
          onReady={() => setIsReady(true)}
          playing={isPlaying}
          url={link}
          width={isPlayable ? '100%' : '0%'}
        />
      </Flex>
    </PlayerWrapper>
  )
}

export const Player = memo(PlayerComponent)

const PlayerWrapper = styled(Flex)`
  padding: 30px 18px 0;
`
