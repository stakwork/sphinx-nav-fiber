import { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { useMindsetStore } from '~/stores/useMindsetStore'
import { NodeExtended } from '~/types'
import { colors } from '~/utils/colors'
import { PLAYBACK_DURATION } from '../../constant'
import { Controls } from './Controls'
import { ProgressBar } from './ProgressBar'

type Props = {
  markers: NodeExtended[]
}

export const PlayerControl = ({ markers }: Props) => {
  const tweetPlayingTime = useMindsetStore((s) => s.tweetPlayingTime)
  const setTweetPlayingTime = useMindsetStore((s) => s.setTweetPlayingTime)
  const setTweetIsPlaying = useMindsetStore((s) => s.setTweetIsPlaying)
  const setTweetDuration = useMindsetStore((s) => s.setTweetDuration)
  const duration = useMindsetStore((s) => s.tweetDuration)
  const tweetIsPlaying = useMindsetStore((s) => s.tweetIsPlaying)
  const [minTime, setMinTime] = useState(0)
  const [maxTime, setMaxTime] = useState(0)

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

  // Update playing time over a fixed duration
  useEffect(() => {
    if (tweetIsPlaying) {
      startTimeRef.current = Date.now()

      const updateProgress = () => {
        const elapsedTime = Date.now() - (startTimeRef.current ?? Date.now())

        if (elapsedTime < PLAYBACK_DURATION) {
          const progressRatio = elapsedTime / PLAYBACK_DURATION
          const newTime = minTime + progressRatio * duration

          setTweetPlayingTime(newTime)
          animationFrameRef.current = requestAnimationFrame(updateProgress)
        } else {
          setTweetPlayingTime(maxTime) // Ensure it ends exactly at maxTime
          setTweetIsPlaying(false)
          cancelAnimationFrame(animationFrameRef.current!)
        }
      }

      animationFrameRef.current = requestAnimationFrame(updateProgress)

      return () => cancelAnimationFrame(animationFrameRef.current!)
    }

    // Stop if not playing
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
      animationFrameRef.current = null
    }

    return () => null
  }, [tweetIsPlaying, minTime, maxTime, setTweetPlayingTime, duration, setTweetIsPlaying])

  return (
    <Wrapper>
      <Controls />
      <ProgressBar
        duration={100} // Normalize progress bar scale to 100
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
