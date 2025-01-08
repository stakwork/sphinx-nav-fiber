import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ReactPlayer from 'react-player'

import styled from 'styled-components'
import { Avatar } from '~/components/common/Avatar'
import { Flex } from '~/components/common/Flex'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { colors } from '~/utils'

import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore } from '~/stores/useGraphStore'
import { Link } from '~/types'

const findCurrentEdge = (sortedEdges: Link[], playerProgress: number): Link | null => {
  // Sort edges by start (preprocessing step)

  let low = 0
  let high = sortedEdges.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const edge = sortedEdges[mid]
    const { start, end } = edge.properties as { start: number; end: number }

    if (playerProgress >= start && playerProgress <= end) {
      return edge // Found the corresponding edge
    }

    if (playerProgress < start) {
      high = mid - 1 // Search in the left half
    } else {
      low = mid + 1 // Search in the right half
    }
  }

  return null // No matching edge found
}

type FullScreenProps = {
  isFullScreen: boolean
}

type Props = {
  mediaUrl: string
}

const MediaPlayerComponent = ({ mediaUrl }: Props) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const [status, setStatus] = useState<'buffering' | 'error' | 'ready'>('ready')
  const [isReady, setIsReady] = useState(false)
  const { setActiveEdge } = useGraphStore((s) => s)

  const { dataInitial } = useDataStore((s) => s)

  const {
    isPlaying,
    playingTime,
    setIsPlaying,
    setPlayingTime,
    setDuration,
    playingNode,
    volume,
    setHasError,
    resetPlayer,
    isSeeking,
    setIsSeeking,
    setPlayerRef,
    playerRef,
    playbackSpeed,
  } = usePlayerStore((s) => s)

  useEffect(() => () => resetPlayer(), [resetPlayer])

  useEffect(() => {
    if (playingNode && !isReady) {
      setPlayingTime(0)
      setDuration(0)
      setIsReady(false)
    }
  }, [playingNode, setPlayingTime, setDuration, setIsReady, isReady])

  useEffect(() => {
    if (isSeeking && playerRef) {
      playerRef.seekTo(playingTime, 'seconds')
      setIsSeeking(false)
    }
  }, [playingTime, isSeeking, setIsSeeking, playerRef])

  const togglePlay = useCallback(() => {
    setIsPlaying(!isPlaying)
  }, [isPlaying, setIsPlaying])

  const handleError = () => {
    setHasError(true)
    setStatus('error')
  }

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === 'Space' && false) {
        event.preventDefault()
        togglePlay()
      }
    },
    [togglePlay],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  const edges = useMemo(() => {
    const edgesFiltered = dataInitial?.links.filter((link) => link?.properties?.start) || []

    const sortedEdges = edgesFiltered
      .slice()
      .sort((a, b) => (a?.properties?.start as number) - (b?.properties?.start as number))

    return sortedEdges
  }, [dataInitial])

  const handleProgress = (progress: { playedSeconds: number }) => {
    if (!isSeeking) {
      const currentTime = progress.playedSeconds

      const edge = findCurrentEdge(edges, currentTime)

      if (edge) {
        setActiveEdge(edge)
      } else {
        setActiveEdge(null)
      }
    }
  }

  const handleReady = () => {
    if (playerRef) {
      setStatus('ready')
    }
  }

  const handlePlay = useCallback(() => {
    if (!isPlaying) {
      setIsPlaying(true)
    }
  }, [setIsPlaying, isPlaying])

  const handlePause = useCallback(() => {
    if (isPlaying) {
      setIsPlaying(false)
    }
  }, [setIsPlaying, isPlaying])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePlayerClick = (e: any) => {
    e.stopPropagation() // Prevent click from propagating to the player
  }

  const playerRefCallback = useCallback(
    (player: ReactPlayer) => {
      if (!playerRef && player) {
        setPlayerRef(player) // Update the store with the player instance
      }
    },
    [setPlayerRef, playerRef],
  )

  return mediaUrl ? (
    <Wrapper ref={wrapperRef} tabIndex={0}>
      <Cover isFullScreen={false}>
        <Avatar size={120} src={playingNode?.image_url || ''} type="clip" />
      </Cover>
      <PlayerWrapper isFullScreen={false} onClick={handlePlayerClick}>
        <ReactPlayer
          ref={playerRefCallback}
          height="219px"
          onBuffer={() => setStatus('buffering')}
          onBufferEnd={() => setStatus('ready')}
          onError={handleError}
          onPause={handlePause}
          onPlay={handlePlay}
          onProgress={handleProgress}
          onReady={handleReady}
          playbackRate={playbackSpeed}
          playing={isPlaying}
          url={mediaUrl || ''}
          volume={volume}
          width="100%"
        />
      </PlayerWrapper>
      {status === 'error' ? (
        <ErrorWrapper className="error-wrapper">Error happened, please try later</ErrorWrapper>
      ) : null}
    </Wrapper>
  ) : null
}

const Wrapper = styled(Flex)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  &:focus {
    outline: none;
  }
`

const Cover = styled(Flex)<FullScreenProps>`
  position: absolute;
  top: ${(props) => (props.isFullScreen ? '38%' : '18%')};
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`

const ErrorWrapper = styled(Flex)`
  height: 60px;
  padding: 12px 16px;
  color: ${colors.primaryRed};
`

const PlayerWrapper = styled.div<{ isFullScreen: boolean }>`
  margin: ${(props) => (props.isFullScreen ? '80px auto' : '0')};
  width: 100%;
  cursor: pointer;
`

export const MediaPlayer = memo(MediaPlayerComponent)
