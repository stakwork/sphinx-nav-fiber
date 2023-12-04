import { IconButton, Slider } from '@mui/material'
import { FC } from 'react'
import styled from 'styled-components'
import PauseIcon from '~/components/Icons/PauseIcon'
import PlayIcon from '~/components/Icons/PlayIcon'
import VolumeIcon from '~/components/Icons/VolumeIcon'
import { Flex } from '~/components/common/Flex'
import { colors } from '~/utils'
import { secondsToHMS } from '~/utils/secondsToMediaTime'

type Props = {
  isPlaying: boolean
  setIsPlaying: () => void
  handleProgressChange: (_: Event, value: number | number[]) => void
  handleVolumeChange: (_: Event, value: number | number[]) => void
  playingTime: number
  duration: number
  hasError: boolean
}

export const Toolbar: FC<Props> = ({
  isPlaying,
  setIsPlaying,
  playingTime,
  duration,
  handleProgressChange,
  handleVolumeChange,
  hasError,
}) => (
  <Flex>
    <ProgressSlider
      aria-label="Small"
      max={duration}
      onChange={handleProgressChange}
      size="small"
      value={playingTime}
    />
    {hasError ? (
      <Wrapper className="error-wrapper">Error happened, please try later</Wrapper>
    ) : (
      <Wrapper align="center" direction="row">
        <Action onClick={setIsPlaying} size="small">
          {!isPlaying ? <PlayIcon /> : <PauseIcon />}
        </Action>
        <TimeStamp direction="row">
          <span>{secondsToHMS(playingTime)}</span>
          <span className="separator">/</span>
          <span className="duration">{secondsToHMS(duration)}</span>
        </TimeStamp>
        <VolumeControl direction="row" px={9}>
          <Slider
            className="volume-slider"
            defaultValue={0.5}
            max={1}
            min={0}
            onChange={handleVolumeChange}
            size="small"
            step={0.1}
          />
          <VolumeIcon />
        </VolumeControl>
      </Wrapper>
    )}
  </Flex>
)

const Wrapper = styled(Flex)`
  height: 60px;
  padding: 12px 16px;

  &.error-wrapper {
    color: ${colors.primaryRed};
  }
`

const Action = styled(IconButton)`
  && {
    font-size: 36px;
    padding: 2px;
    margin-left: 8px;
  }
`

const VolumeControl = styled(Flex)`
  height: 28px;
  font-size: 26px;
  border-radius: 200px;
  color: ${colors.white};
  margin-left: auto;

  .volume-slider {
    display: none;
    color: ${colors.white};
    height: 3px;
    .MuiSlider-track {
      border: none;
    }
    .MuiSlider-thumb {
      width: 2px;
      height: 10px;
      background-color: ${colors.white};
      &:before {
        box-shadow: '0 4px 8px rgba(0,0,0,0.4)';
      }
      &:hover,
      &.Mui-focusVisible,
      &.Mui-active {
        box-shadow: none;
      }
    }
  }

  &:hover {
    background: rgba(42, 44, 55, 1);
    .volume-slider {
      width: 62px;
      margin-right: 4px;
      display: block;
    }
  }
`

const ProgressSlider = styled(Slider)`
  && {
    color: ${colors.white};
    height: 3px;
    width: calc(100% - 12px);
    margin: -12px auto;
    box-sizing: border-box;
    .MuiSlider-track {
      border: none;
    }
    .MuiSlider-thumb {
      width: 10px;
      height: 10px;
      background-color: ${colors.white};
      &:before {
        box-shadow: '0 4px 8px rgba(0,0,0,0.4)';
      }
      &:hover,
      &.Mui-focusVisible,
      &.Mui-active {
        box-shadow: none;
      }
    }
  }
`

const TimeStamp = styled(Flex)`
  color: ${colors.white};
  font-size: 13px;
  margin-left: 16px;
  font-weight: 500;

  .separator {
    color: ${colors.GRAY6};
    margin: 0 4px;
  }

  .duration {
    color: ${colors.GRAY6};
  }
`
