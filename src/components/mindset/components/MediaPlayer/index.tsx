import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import { Avatar } from '~/components/common/Avatar'
import { Flex } from '~/components/common/Flex'
import ExitFullScreen from '~/components/Icons/ExitFullScreen'
import FullScreenIcon from '~/components/Icons/FullScreenIcon'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore } from '~/stores/useGraphStore'
import { useMindsetStore } from '~/stores/useMindsetStore'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { Link } from '~/types'
import { colors } from '~/utils'

const isVideoFile = (url: string) => /\.(mp4|webm|mov|mkv|avi)(\?.*)?$/i.test(url)

const findCurrentEdge = (sortedEdges: Link[], playerProgress: number): Link | null => {
  let low = 0
  let high = sortedEdges.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const edge = sortedEdges[mid]
    const { start, end } = edge.properties as { start: number; end: number }

    if (playerProgress >= start && playerProgress <= end) {
      return edge
    }

    if (playerProgress < start) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return null
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
  const [hasSeekedFromURL, setHasSeekedFromURL] = useState(false)
  const setIsFullScreen = useMindsetStore((s) => s.setIsFullScreen)
  const isFullScreen = useMindsetStore((s) => s.isFullScreen)

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

    return edgesFiltered.slice().sort((a, b) => (a?.properties?.start as number) - (b?.properties?.start as number))
  }, [dataInitial])

  const handleProgress = (progress: { playedSeconds: number }) => {
    if (!isSeeking) {
      const currentTime = progress.playedSeconds
      const edge = findCurrentEdge(edges, currentTime)

      setActiveEdge(edge || null)
    }
  }

  const urlStartTime = useMemo(() => {
    const url = new URL(window.location.href)
    const startParam = url.searchParams.get('start')

    return startParam ? parseFloat(startParam) : null
  }, [])

  const handleReady = () => {
    setStatus('ready')

    if (playerRef && urlStartTime !== null && !hasSeekedFromURL) {
      playerRef.seekTo(urlStartTime, 'seconds')
      setHasSeekedFromURL(true)
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

  const playerRefCallback = useCallback(
    (player: ReactPlayer) => {
      if (!playerRef && player) {
        setPlayerRef(player)
      }
    },
    [setPlayerRef, playerRef],
  )

  return mediaUrl ? (
    <Wrapper ref={wrapperRef} tabIndex={0}>
      <Cover isFullScreen={false}>
        <Avatar size={200} src={playingNode?.properties?.image_url || ''} type="clip" />
      </Cover>
      <PlayerWrapper isFullScreen={isFullScreen}>
        <ReactPlayer
          ref={playerRefCallback}
          height="100%"
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
      {isVideoFile(mediaUrl) && (
        <ExpandButton onClick={() => setIsFullScreen(!isFullScreen)}>
          {!isFullScreen ? <FullScreenIcon /> : <ExitFullScreen />}
        </ExpandButton>
      )}
      {status === 'error' && <ErrorWrapper className="error-wrapper">Error happened, please try later</ErrorWrapper>}
    </Wrapper>
  ) : null
}

const Wrapper = styled(Flex)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: auto;
  min-height: 190px;
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
  margin: ${(props) => (props.isFullScreen ? '0' : '0')};
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ExpandButton = styled(Flex)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  color: ${colors.white};
  font-size: 32px;
  cursor: pointer;
`

export const MediaPlayer = memo(MediaPlayerComponent)
