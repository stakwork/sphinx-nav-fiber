import { FC, memo, useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { Avatar } from '~/components/common/Avatar'
import { Flex } from '~/components/common/Flex'
import { useSelectedNode } from '~/stores/useGraphStore'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { colors, videoTimeToSeconds } from '~/utils'
import { Toolbar } from './ToolBar'

type Props = {
  hidden: boolean
}

type FullScreenProps = {
  isFullScreen: boolean
}

const MediaPlayerComponent: FC<Props> = ({ hidden }) => {
  const playerRef = useRef<ReactPlayer | null>(null)
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [isMouseNearBottom, setIsMouseNearBottom] = useState(false)
  const [status, setStatus] = useState<'buffering' | 'error' | 'ready'>('ready')
  const [isReady, setIsReady] = useState(false)
  const [NodeStartTime, setNodeStartTime] = useState<string>('')
  const [hasSeekedToStart, setHasSeekedToStart] = useState(false)
  const selectedNode = useSelectedNode()

  useEffect(() => {
    const customKeys = selectedNode?.properties || {}

    const timestampEntry = Object.entries(customKeys).find(([key]) => key === 'timestamp')

    const timestamp = timestampEntry ? timestampEntry[1] : ('' as string)
    const startTime = timestamp?.split('-')[0] as string

    setNodeStartTime(startTime)
  }, [selectedNode])

  const {
    isPlaying,
    playingTime,
    duration,
    setIsPlaying,
    setPlayingTime,
    setDuration,
    playingNode,
    volume,
    setVolume,
    setHasError,
    resetPlayer,
    isSeeking,
    setIsSeeking,
  } = usePlayerStore((s) => s)

  const mediaUrl =
    playingNode?.media_url || playingNode?.link || playingNode?.properties?.link || playingNode?.properties?.media_url

  const isYouTubeVideo = mediaUrl?.includes('youtube') || mediaUrl?.includes('youtu.be')

  useEffect(() => () => resetPlayer(), [resetPlayer])

  useEffect(() => {
    if (playingNode && !isReady) {
      setPlayingTime(0)
      setDuration(0)
      setIsReady(false)
      setHasSeekedToStart(false)
    }
  }, [playingNode, setPlayingTime, setDuration, setIsReady, isReady])

  useEffect(() => {
    if (isSeeking && playerRef.current && isReady) {
      playerRef.current.seekTo(playingTime, 'seconds')
      setIsSeeking(false)
    }
  }, [playingTime, isSeeking, setIsSeeking, isReady])

  useEffect(() => {
    if (isReady && NodeStartTime && playerRef.current && !hasSeekedToStart) {
      const startTimeInSeconds = videoTimeToSeconds(NodeStartTime)

      playerRef.current.seekTo(startTimeInSeconds, 'seconds')
      setPlayingTime(startTimeInSeconds)
      setHasSeekedToStart(true)
    }
  }, [isReady, NodeStartTime, setPlayingTime, hasSeekedToStart])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const handlePlay = () => {
    setIsPlaying(true)
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  const handleProgressChange = (_: Event, value: number | number[]) => {
    const newValue = Array.isArray(value) ? value[0] : value

    setPlayingTime(newValue)

    if (playerRef.current && !isSeeking) {
      playerRef.current.seekTo(newValue, 'seconds')
    }
  }

  const handleVolumeChange = (_: Event, value: number | number[]) => {
    const newValue = Array.isArray(value) ? value[0] : value

    setVolume(newValue)
  }

  const handleError = () => {
    setHasError(true)
    setStatus('error')
  }

  const handleProgress = (progress: { playedSeconds: number }) => {
    if (!isSeeking) {
      const currentTime = progress.playedSeconds

      setPlayingTime(currentTime)
    }
  }

  const handleReady = () => {
    if (playerRef.current) {
      setStatus('ready')
      setIsReady(true)

      const videoDuration = playerRef.current.getDuration()

      setDuration(videoDuration)

      if (NodeStartTime && !hasSeekedToStart) {
        const startTimeInSeconds = videoTimeToSeconds(NodeStartTime)

        playerRef.current.seekTo(startTimeInSeconds, 'seconds')
        setPlayingTime(startTimeInSeconds)
        setHasSeekedToStart(true)
      }
    }
  }

  const toggleFullScreen = () => {
    if (wrapperRef.current) {
      if (!document.fullscreenElement) {
        wrapperRef.current.requestFullscreen().then(() => {
          document.addEventListener('fullscreenchange', handleFullScreenChange)
        })
      } else {
        document.exitFullscreen()
        setTimeout(() => setIsFullScreen(false), 300)
      }
    }
  }

  const handleFullScreenChange = () => {
    setIsFullScreen(!!document.fullscreenElement)
    document.removeEventListener('fullscreenchange', handleFullScreenChange)
  }

  useEffect(() => () => {
    document.removeEventListener('fullscreenchange', handleFullScreenChange)
  })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isFullScreen) {
        const windowHeight = window.screen.height
        const mousePositionY = event.clientY
        const distanceFromBottom = windowHeight - mousePositionY
        const threshold = 50

        setIsMouseNearBottom(distanceFromBottom <= threshold)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isFullScreen, isMouseNearBottom])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isFullScreen && event.key === 'Escape') {
        event.preventDefault()
        event.stopPropagation()
      } else if (isFocused && event.key === ' ') {
        event.preventDefault()
        togglePlay()
      }
    }

    document.addEventListener('fullscreenchange', handleFullScreenChange)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange)
      document.removeEventListener('keydown', handleKeyDown)
    }
  })

  const handlePlayerClick = () => {
    togglePlay()
  }

  return mediaUrl ? (
    <Wrapper
      ref={wrapperRef}
      hidden={hidden}
      onBlur={() => setIsFocused(false)}
      onFocus={() => setIsFocused(true)}
      tabIndex={0}
    >
      <Cover isFullScreen={isFullScreen}>
        <Avatar size={120} src={playingNode?.image_url || ''} type="clip" />
      </Cover>
      <PlayerWrapper isFullScreen={isFullScreen} onClick={handlePlayerClick}>
        <ReactPlayer
          ref={playerRef}
          controls={false}
          height={!isFullScreen ? '200px' : window.screen.height}
          onBuffer={() => setStatus('buffering')}
          onBufferEnd={() => setStatus('ready')}
          onError={handleError}
          onPause={handlePause}
          onPlay={handlePlay}
          onProgress={handleProgress}
          onReady={handleReady}
          playing={isPlaying}
          url={mediaUrl || ''}
          volume={volume}
          width="100%"
        />
      </PlayerWrapper>
      {status === 'error' ? (
        <ErrorWrapper className="error-wrapper">Error happened, please try later</ErrorWrapper>
      ) : null}
      {status === 'ready' ? (
        <Toolbar
          duration={duration}
          handleProgressChange={handleProgressChange}
          handleVolumeChange={handleVolumeChange}
          isFullScreen={isFullScreen}
          isPlaying={isPlaying}
          onFullScreenClick={toggleFullScreen}
          playingTime={playingTime}
          setIsPlaying={togglePlay}
          showToolbar={isMouseNearBottom && isFullScreen}
        />
      ) : null}
      {status === 'buffering' && !isYouTubeVideo ? (
        <Buffering isFullScreen={isFullScreen}>
          <ClipLoader color={colors.lightGray} />
        </Buffering>
      ) : null}
    </Wrapper>
  ) : null
}

const Wrapper = styled(Flex)<Props>`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  overflow: hidden;
  height: ${(props) => (props.hidden ? '0px' : 'auto')};
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

const Buffering = styled(Flex)<FullScreenProps>`
  position: absolute;
  top: ${(props) => (props.isFullScreen ? '43%' : '39%')};
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
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
