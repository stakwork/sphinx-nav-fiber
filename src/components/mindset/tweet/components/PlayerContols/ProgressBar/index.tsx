import { Slider } from '@mui/material'
import moment from 'moment'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { NodeExtended } from '~/types'
import { colors } from '~/utils'
import { Markers } from './Markers'

type Props = {
  duration: number
  markers: NodeExtended[]
  playingTime: number
  tweetPlayingTime: number
  handleProgressChange: (_: Event, value: number | number[]) => void
}

export const ProgressBar = ({ duration, markers, handleProgressChange, playingTime, tweetPlayingTime }: Props) => {
  const width = 1
  const formattedTime = moment(tweetPlayingTime).format('MMM D - h:mma')

  return (
    <ProgressWrapper>
      <TimeBubble style={{ left: `${playingTime}%` }}>{formattedTime}</TimeBubble>
      <ProgressSlider max={duration} onChange={handleProgressChange} value={playingTime} width={width} />
      <MarkersWrapper>
        <Markers markers={markers} />
      </MarkersWrapper>
    </ProgressWrapper>
  )
}

const ChaptersWrapper = styled(Flex)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 96px;
  transform: translateY(-50%);
`

const ProgressWrapper = styled(Flex)`
  position: relative;
  flex: 1 1 100%;

  &:hover {
    ${ChaptersWrapper} {
      display: block;
    }
  }
`

const MarkersWrapper = styled(Flex)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
`

const TimeBubble = styled.div`
  position: absolute;
  top: -35px;
  transform: translateX(-50%);
  background: rgba(230, 230, 230, 255);
  color: ${colors.black};
  padding: 6px 12px;
  border-radius: 6px;
  font-family: 'Barlow';
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  z-index: 30;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  letter-spacing: 0.2px;
`

const ProgressSlider = styled(Slider)<{ width: number }>`
  && {
    z-index: 20;
    color: ${colors.white};
    height: 3px;
    width: calc(100% - 12px);
    box-sizing: border-box;
    .MuiSlider-track {
      border: none;
    }
    .MuiSlider-thumb {
      width: ${({ width }) => `${width}%`};
      height: 54px;
      border-radius: 8px;
      background-color: ${colors.primaryBlue};
      opacity: 0.2;
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
