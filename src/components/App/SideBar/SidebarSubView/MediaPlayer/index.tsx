import { FC, memo, useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { Avatar } from '~/components/common/Avatar'
import { Flex } from '~/components/common/Flex'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { colors } from '~/utils'
import { Toolbar } from './ToolBar'

type Props = {
  hidden: boolean
}

const MediaPlayerComponent: FC<Props> = ({ hidden }) => {
  const playerRef = useRef<ReactPlayer | null>(null)
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [isBuffering, setIsBuffering] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [isMouseNearBottom, setIsMouseNearBottom] = useState(false)

  const [
    isPlaying,
    playingTime,
    duration,
    setIsPlaying,
    setPlayingTime,
    setDuration,
    playingNode,
    volume,
    setVolume,
    hasError,
    setHasError,
    resetPlayer,
  ] = usePlayerStore((s) => [
    s.isPlaying,
    s.playingTime,
    s.duration,
    s.setIsPlaying,
    s.setPlayingTime,
    s.setDuration,
    s.playingNode,
    s.volume,
    s.setVolume,
    s.hasError,
    s.setHasError,
    s.resetPlayer,
  ])

  useEffect(() => () => resetPlayer(), [resetPlayer])

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

    if (playerRef.current) {
      playerRef.current.seekTo(newValue)
      setPlayingTime(newValue)
    }
  }

  const handleVolumeChange = (_: Event, value: number | number[]) => {
    const newValue = Array.isArray(value) ? value[0] : value

    setVolume(newValue)
  }

  const handleError = () => {
    setHasError(true)
  }

  const handleProgress = (progress: { playedSeconds: number }) => {
    const currentTime = progress.playedSeconds

    setPlayingTime(currentTime)
  }

  const handleReady = () => {
    if (playerRef.current) {
      setIsReady(true)

      const videoDuration = playerRef.current.getDuration()

      setDuration(videoDuration)
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
        setIsFullScreen(false)
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
        const threshold = 50 // Adjust this value as needed

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
      }
    }

    document.addEventListener('fullscreenchange', handleFullScreenChange)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange)
      document.removeEventListener('keydown', handleKeyDown)
    }
  })

  return playingNode ? (
    <Wrapper ref={wrapperRef} hidden={hidden}>
      <Cover>
        <Avatar size={120} src={playingNode?.image_url || ''} type="clip" />
      </Cover>
      <ReactPlayer
        ref={playerRef}
        controls={false}
        height={!isFullScreen ? '200px' : window.screen.height}
        onBuffer={() => setIsBuffering(true)}
        onBufferEnd={() => setIsBuffering(false)}
        onError={handleError}
        onPause={handlePause}
        onPlay={handlePlay}
        onProgress={handleProgress}
        onReady={handleReady}
        playing={isPlaying}
        url={playingNode?.link || ''}
        volume={volume}
        width="100%"
      />
      {isReady ? (
        <Toolbar
          duration={duration}
          handleProgressChange={handleProgressChange}
          handleVolumeChange={handleVolumeChange}
          hasError={hasError}
          isPlaying={isPlaying}
          onFullScreenClick={toggleFullScreen}
          playingTime={playingTime}
          setIsPlaying={togglePlay}
          showToolbar={isMouseNearBottom && isFullScreen} // New prop to conditionally show toolbar
        />
      ) : null}
      {isBuffering || !isReady ? (
        <Buffering>
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
`

const Cover = styled(Flex)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`

const Buffering = styled(Flex)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`

export const MediaPlayer = memo(MediaPlayerComponent)
