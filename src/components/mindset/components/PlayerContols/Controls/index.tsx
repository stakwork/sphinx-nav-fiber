import { IconButton } from '@mui/material'
import { memo } from 'react'
import styled from 'styled-components'
import PauseIcon from '~/components/Icons/PauseIcon'
import PlayIcon from '~/components/Icons/PlayIcon'
import { Flex } from '~/components/common/Flex'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { colors } from '~/utils/colors'

export const Controls = memo(() => {
  const isPlaying = usePlayerStore((s) => s.isPlaying)
  const setIsPlaying = usePlayerStore((s) => s.setIsPlaying)
  const playerRef = usePlayerStore((s) => s.playerRef)

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

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <Wrapper>
      <RewindIconWrapper onClick={handleRewind}>
        <img alt="" src="RewindIcon.svg" />
      </RewindIconWrapper>
      <Action data-testid="play-pause-button" onClick={togglePlay} size="small">
        {isPlaying ? <PauseIcon data-testid="pause-icon" /> : <PlayIcon data-testid="play-icon" />}
      </Action>
      <ForwardIconWrapper onClick={handleFastForward}>
        <img alt="" src="ForwardIcon.svg" />
      </ForwardIconWrapper>
    </Wrapper>
  )
})

Controls.displayName = 'Controls'

const Wrapper = styled(Flex).attrs({
  direction: 'row',
  align: 'center',
  justify: 'flex-start',
})`
  width: 142px;
  height: 54px;
  background: ${colors.BG1};
  border-radius: 40px;
  margin-right: 30px;
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
