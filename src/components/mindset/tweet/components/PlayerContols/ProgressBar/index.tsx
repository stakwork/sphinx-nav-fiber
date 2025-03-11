import { Slider } from '@mui/material'
import moment from 'moment'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { NodeExtended } from '~/types'
import { colors } from '~/utils'
import { Markers } from './Markers'
import { ProgressChart } from './ProgressChart'

type Props = {
  duration: number
  markers: NodeExtended[]
  playingTime: number
  tweetPlayingTime: number
  handleProgressChange: (_: Event, value: number | number[]) => void
}

export const ProgressBar = ({ duration, markers, handleProgressChange, playingTime, tweetPlayingTime }: Props) => {
  const dateStr = moment(tweetPlayingTime).format('MMM D')
  const timeStr = moment(tweetPlayingTime).format('h:mma')

  const boundedPlayingTime = Math.min(Math.max(playingTime, 0), 100)

  return (
    <ProgressWrapper>
      {boundedPlayingTime ? (
        <TimeBubble $progress={boundedPlayingTime}>
          <DatePart>{dateStr}</DatePart>
          <Separator> - </Separator>
          <TimePart>{timeStr}</TimePart>
        </TimeBubble>
      ) : null}
      <ProgressSlider max={duration} onChange={handleProgressChange} value={boundedPlayingTime} width={12} />
      <MarkersWrapper>
        <Markers markers={markers} />
      </MarkersWrapper>
      <ChartWrapper>
        <ProgressChart markers={markers} />
      </ChartWrapper>
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
  padding: 0;
  height: 100%;
  box-sizing: border-box;
  margin-right: 12px;

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

const ChartWrapper = styled(Flex)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 23px;
`

const TimeBubble = styled.div<{ $progress?: number }>`
  position: absolute;
  top: -40px;
  transform: translateX(-50%);
  background: rgba(230, 230, 230, 255);
  color: ${colors.black};
  padding: 6px 6px 6px 12px;
  border-radius: 6px;
  font-family: 'Barlow';
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  z-index: 30;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  letter-spacing: 0.2px;
  margin-bottom: 4px;
  min-width: 100px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  left: ${(props) => `${props.$progress}%`};

  transition: transform 0.1s ease-out;

  transform: ${(props) => {
    const progress = props.$progress || 0

    if (progress >= 95) {
      const adjustment = Math.min((progress - 95) * 5, 50)

      return `translateX(calc(-50% - ${adjustment}%))`
    }

    return 'translateX(-50%)'
  }};
`

const DatePart = styled.span`
  display: inline-block;
  width: 45px;
  text-align: right;
`

const Separator = styled.span`
  margin: 0 4px;
`

const TimePart = styled.span`
  display: inline-block;
  width: 55px;
  text-align: left;
  font-variant-numeric: tabular-nums;
`

const ProgressSlider = styled(Slider)<{ width: number }>`
  && {
    z-index: 20;
    color: ${colors.white};
    height: 3px;
    width: 100%;
    top: 50%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    position: relative;

    .MuiSlider-rail {
      opacity: 1;
      width: 100%;
    }

    .MuiSlider-track {
      border: none;
      width: 100%;
    }

    .MuiSlider-thumb {
      width: 12px;
      height: 54px;
      border-radius: 8px;
      background-color: ${colors.primaryBlue};
      opacity: 0.2;
      margin: 0;
      transform: translate(-50%, -50%);
      position: absolute;
      top: 50%;

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
