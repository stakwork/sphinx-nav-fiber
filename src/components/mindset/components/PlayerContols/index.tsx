import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { NodeExtended } from '~/types'
import { colors } from '~/utils/colors'
import { Controls } from './Controls'
import { ProgressBar } from './ProgressBar'

type Props = {
  markers: NodeExtended[]
  chapters: NodeExtended[] | null
}

export const PlayerControl = ({ markers, chapters }: Props) => {
  const { playingNode, playerRef } = usePlayerStore((s) => s)
  const [currentTime, setCurrentTime] = useState(0)

  const showPlayer = playingNode

  const handleProgressChange = useCallback(
    (_: Event, value: number | number[]) => {
      const newValue = Array.isArray(value) ? value[0] : value

      if (playerRef) {
        playerRef.seekTo(newValue, 'seconds')
      }
    },
    [playerRef],
  )

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef && setCurrentTime) {
        const time = playerRef.getCurrentTime()

        setCurrentTime(time)
      }
    }, 500)

    return () => clearInterval(interval)
  }, [playerRef, setCurrentTime])

  const duration = playerRef?.getDuration() || 0

  return showPlayer ? (
    <Wrapper>
      <Controls />
      <ProgressBar
        chapters={chapters}
        duration={duration}
        handleProgressChange={handleProgressChange}
        markers={markers}
        playingTIme={currentTime}
      />
    </Wrapper>
  ) : null
}

const Wrapper = styled(Flex).attrs({
  direction: 'row',
  align: 'center',
  justify: 'space-between',
})`
  padding: 20px;
  background: ${colors.BG2};
  height: 96px;
  /* margin-top: 16px; */
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`
