import { IconButton } from '@mui/material'
import { useCallback } from 'react'
import styled from 'styled-components'
import ChevronLeftIcon from '~/components/Icons/ChevronLeftIcon'
import ChevronRightIcon from '~/components/Icons/ChevronRightIcon.js'
import PauseIcon from '~/components/Icons/PauseIcon'
import PlayIcon from '~/components/Icons/PlayIcon'
import { Flex } from '~/components/common/Flex'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { NodeExtended } from '~/types'
import { colors } from '~/utils/colors'
import { ProgressBar } from './ProgressBar'

type Props = {
  markers: NodeExtended[]
}

export const PlayerControl = ({ markers }: Props) => {
  const { isPlaying, setIsPlaying, playingTime, playingNode, duration, playerRef } = usePlayerStore((s) => s)

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

  return showPlayer ? (
    <Wrapper>
      <Controls>
        <ChevronLeftIcon />
        <Action
          data-testid="play-pause-button"
          onClick={(e) => {
            setIsPlaying(!isPlaying)
            e.stopPropagation()
          }}
          size="small"
        >
          {isPlaying ? <PauseIcon data-testid="pause-icon" /> : <PlayIcon data-testid="play-icon" />}
        </Action>
        <ChevronRightIcon />
      </Controls>
      {true && (
        <ProgressBar
          duration={duration}
          handleProgressChange={handleProgressChange}
          markers={markers}
          playingTIme={playingTime}
        />
      )}
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
  margin-top: 16px;
  border-radius: 8px;
  box-sizing: border-box;
`

const Controls = styled(Flex).attrs({
  direction: 'row',
  align: 'center',
  justify: 'flex-start',
})`
  width: 142px;
  height: 54px;
  background: ${colors.BG1};
  border-radius: 40px;
  margin-right: 54px;
  color: ${colors.white};
  font-size: 20px;
  padding: 12px;
  justify-content: space-between;
  box-sizing: border-box;
`

const Action = styled(IconButton)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`
