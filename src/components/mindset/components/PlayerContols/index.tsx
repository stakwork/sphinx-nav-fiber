import { IconButton } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
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
  const { isPlaying, setIsPlaying, playingNode, playerRef } = usePlayerStore((s) => s)
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

  const handleRewind = () => {
    if (playerRef) {
      const newTime = playerRef.getCurrentTime() - 15

      playerRef.seekTo(newTime, 'seconds')
    }
  }

  const handleFastForward = () => {
    if (playerRef) {
      const newTime = playerRef.getCurrentTime() + 15

      playerRef.seekTo(newTime, 'seconds')
    }
  }

  const duration = playerRef?.getDuration() || 0

  return showPlayer ? (
    <Wrapper>
      <Controls>
        <RewindIconWrapper onClick={handleRewind}>
          <img alt="" src="RewindIcon.svg" />
        </RewindIconWrapper>
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
        <ForwardIconWrapper onClick={handleFastForward}>
          <img alt="" src="ForwardIcon.svg" />
        </ForwardIconWrapper>
      </Controls>

      <ProgressBar
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

const RewindIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`

const ForwardIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`
