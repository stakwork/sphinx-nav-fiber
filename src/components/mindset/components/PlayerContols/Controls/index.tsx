import { IconButton } from '@mui/material'
import { memo, useState } from 'react'
import styled from 'styled-components'
import MuteVolumeIcon from '~/components/Icons/MuteVolumeIcon'
import PauseIcon from '~/components/Icons/PauseIcon'
import PlayIcon from '~/components/Icons/PlayIcon'
import VolumeIcon from '~/components/Icons/VolumeIcon'
import { Flex } from '~/components/common/Flex'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { colors } from '~/utils/colors'

export const Controls = memo(() => {
  const isPlaying = usePlayerStore((s) => s.isPlaying)
  const setIsPlaying = usePlayerStore((s) => s.setIsPlaying)
  const setVolume = usePlayerStore((s) => s.setVolume)
  const setPlaybackSpeed = usePlayerStore((s) => s.setPlaybackSpeed)
  const playbackSpeed = usePlayerStore((s) => s.playbackSpeed)
  const playerRef = usePlayerStore((s) => s.playerRef)
  const [isMuted, setIsMuted] = useState(false)
  const speedOptions = [0.5, 1, 1.5, 2]

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

  const toggleMute = () => {
    setIsMuted(!isMuted)
    setVolume(isMuted ? 1 : 0)
  }

  const cycleSpeed = () => {
    const currentIndex = speedOptions.indexOf(playbackSpeed)
    const nextIndex = (currentIndex + 1) % speedOptions.length
    const newSpeed = speedOptions[nextIndex]

    setPlaybackSpeed(newSpeed)

    if (playerRef) {
      const internalPlayer = playerRef.getInternalPlayer() as HTMLMediaElement

      if (internalPlayer && typeof internalPlayer.playbackRate !== 'undefined') {
        internalPlayer.playbackRate = newSpeed
      }
    }
  }

  return (
    <Wrapper>
      <MuteWrapper onClick={toggleMute}>{isMuted ? <MuteVolumeIcon /> : <VolumeIcon />}</MuteWrapper>
      <RewindIconWrapper onClick={handleRewind}>
        <img alt="" src="/RewindIcon.svg" />
      </RewindIconWrapper>
      <Action data-testid="play-pause-button" onClick={togglePlay} size="small">
        {isPlaying ? <PauseIcon data-testid="pause-icon" /> : <PlayIcon data-testid="play-icon" />}
      </Action>
      <ForwardIconWrapper onClick={handleFastForward}>
        <img alt="" src="/ForwardIcon.svg" />
      </ForwardIconWrapper>
      <SpeedButton onClick={cycleSpeed}>{playbackSpeed}x</SpeedButton>
    </Wrapper>
  )
})

Controls.displayName = 'Controls'

const Wrapper = styled(Flex).attrs({
  direction: 'row',
  align: 'center',
  justify: 'flex-start',
})`
  width: 200px;
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

const MuteWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  color: ${colors.GRAY6};

  svg {
    margin-top: 3px;
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${colors.DROPDOWN_BG};
  }
`

const SpeedButton = styled.button`
  margin-top: 4px;
  background: ${colors.BG1};
  color: ${colors.GRAY6};
  border: none;
  width: 8px;
  border-radius: 20px;
  padding: 8px 20px 8px 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`
