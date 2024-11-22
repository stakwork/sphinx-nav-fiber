import { memo, useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'

import styled from 'styled-components'
import { Avatar } from '~/components/common/Avatar'
import { Flex } from '~/components/common/Flex'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { colors, videoTimeToSeconds } from '~/utils'

import { useSelectedNode } from '~/stores/useGraphStore'

type FullScreenProps = {
  isFullScreen: boolean
}

const MediaPlayerComponent = () => {
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
    const timestamp = '00:02:00-00:12:00'

    const startTime = timestamp?.split('-')[0] as string

    setNodeStartTime(startTime as string)
  }, [selectedNode])

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
  } = usePlayerStore((s) => s)

  const mediaUrl = 'https://www.youtube.com/watch?v=o8Y0E5sPHr4'

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
    if (isSeeking && playerRef.current) {
      playerRef.current.seekTo(playingTime, 'seconds')
      setIsSeeking(false)
    }
  }, [playingTime, isSeeking, setIsSeeking])

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
    <Wrapper ref={wrapperRef} onBlur={() => setIsFocused(false)} onFocus={() => setIsFocused(true)} tabIndex={0}>
      <Cover isFullScreen={isFullScreen}>
        <Avatar size={120} src={playingNode?.image_url || ''} type="clip" />
      </Cover>
      <PlayerWrapper isFullScreen={isFullScreen} onClick={handlePlayerClick}>
        <ReactPlayer
          ref={playerRef}
          controls={false}
          height={!isFullScreen ? '219px' : window.screen.height}
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
