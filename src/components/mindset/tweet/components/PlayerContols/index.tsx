import { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { useTweetMindsetStore } from '~/stores/useTweetMindsetStore'
import { NodeExtended } from '~/types'
import { colors } from '~/utils/colors'
import { PLAYBACK_DURATION } from '../../constant'
import { Controls } from './Controls'
import { ProgressBar } from './ProgressBar'

type Props = {
  markers: NodeExtended[]
}

export const PlayerControl = ({ markers }: Props) => {
  const tweetPlayingTime = useTweetMindsetStore((s) => s.tweetPlayingTime)
  const setTweetPlayingTime = useTweetMindsetStore((s) => s.setTweetPlayingTime)
  const setTweetIsPlaying = useTweetMindsetStore((s) => s.setTweetIsPlaying)
  const setTweetDuration = useTweetMindsetStore((s) => s.setTweetDuration)
  const duration = useTweetMindsetStore((s) => s.tweetDuration)
  const tweetIsPlaying = useTweetMindsetStore((s) => s.tweetIsPlaying)
  const [minTime, setMinTime] = useState(0)
  const [maxTime, setMaxTime] = useState(0)
  const lastPlayingTimeRef = useRef<number>(0)

  useEffect(() => {
    const timestamps = markers.map((event) => (event.start ? new Date(event.start).getTime() : 0))
    const min = Math.min(...timestamps)
    const max = Math.max(...timestamps)
    const dur = max - min

    setMinTime(min)
    setMaxTime(max)
    setTweetDuration(dur)
  }, [markers, setTweetDuration])

  // Track animation frame reference
  const animationFrameRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)

  // Handle slider change
  const handleProgressChange = useCallback(
    (_: Event, value: number | number[]) => {
      const newValue = Array.isArray(value) ? value[0] : value
      const newTimestamp = minTime + (newValue / 100) * duration

      setTweetPlayingTime(newTimestamp)
    },
    [setTweetPlayingTime, minTime, duration],
  )

  useEffect(() => {
    if (tweetIsPlaying) {
      if (tweetPlayingTime >= maxTime) {
        setTweetPlayingTime(minTime)
        lastPlayingTimeRef.current = minTime
      }

      startTimeRef.current = Date.now()

      const initialProgress = tweetPlayingTime ? (tweetPlayingTime - minTime) / duration : 0
      const adjustedStartTime = Date.now() - initialProgress * PLAYBACK_DURATION

      startTimeRef.current = adjustedStartTime

      const updateProgress = () => {
        const elapsedTime = Date.now() - (startTimeRef.current ?? Date.now())

        if (elapsedTime < PLAYBACK_DURATION) {
          const progressRatio = elapsedTime / PLAYBACK_DURATION
          const newTime = minTime + progressRatio * duration

          setTweetPlayingTime(newTime)
          lastPlayingTimeRef.current = newTime
          animationFrameRef.current = requestAnimationFrame(updateProgress)
        } else {
          setTweetPlayingTime(maxTime)
          setTweetIsPlaying(false)
          lastPlayingTimeRef.current = maxTime

          if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current)
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(updateProgress)

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
      }
    }

    lastPlayingTimeRef.current = tweetPlayingTime

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
        animationFrameRef.current = null
      }
    }
  }, [tweetIsPlaying, minTime, maxTime, setTweetPlayingTime, duration, setTweetIsPlaying, tweetPlayingTime])

  const handlePlaybackRestart = useCallback(() => {
    if (tweetPlayingTime >= maxTime) {
      setTweetPlayingTime(minTime)
      lastPlayingTimeRef.current = minTime
    }
  }, [tweetPlayingTime, maxTime, minTime, setTweetPlayingTime])

  return (
    <Wrapper>
      <Controls onPlaybackRestart={handlePlaybackRestart} />
      <ProgressBar
        duration={100}
        handleProgressChange={handleProgressChange}
        markers={markers}
        playingTime={((tweetPlayingTime - minTime) / duration) * 100}
        tweetPlayingTime={tweetPlayingTime}
      />
    </Wrapper>
  )
}

const Wrapper = styled(Flex).attrs({
  direction: 'row',
  align: 'center',
  justify: 'space-between',
})`
  padding: 20px;
  background: ${colors.BG2};
  height: 96px;
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`
