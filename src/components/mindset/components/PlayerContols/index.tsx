import { useCallback } from 'react'
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
  const { playingNode, playerRef, playingTime, duration, setPlayingTime, setIsSeeking } = usePlayerStore((s) => s)

  const showPlayer = playingNode

  const handleProgressChange = useCallback(
    (_: Event, value: number | number[]) => {
      const newValue = Array.isArray(value) ? value[0] : value

      // Update UI immediately (Chrome may not reflect getCurrentTime() while paused).
      setPlayingTime(newValue)
      setIsSeeking(true)

      if (playerRef) {
        playerRef.seekTo(newValue, 'seconds')
      }
    },
    [playerRef, setIsSeeking, setPlayingTime],
  )

  return showPlayer ? (
    <Wrapper>
      <Controls />
      <ProgressBar
        chapters={chapters}
        duration={duration}
        handleProgressChange={handleProgressChange}
        markers={markers}
        playingTime={playingTime}
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
  border-radius: 8px;
  box-sizing: border-box;
  margin-right: 4px;
`
