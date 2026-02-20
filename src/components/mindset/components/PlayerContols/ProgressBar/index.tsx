import { Slider } from '@mui/material'
import { useCallback, useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { NodeExtended } from '~/types'
import { colors } from '~/utils'
import { secondsToMediaTime } from '~/utils/secondsToMediaTime'
import { Chapters } from './Chapters'
import { Markers } from './Markers'

type Props = {
  duration: number
  markers: NodeExtended[]
  chapters: NodeExtended[] | null
  playingTime: number
  handleProgressChange: (_: Event, value: number | number[]) => void
}

export const ProgressBar = ({ duration, markers, handleProgressChange, playingTime, chapters }: Props) => {
  const width = (10 / duration) * 100

  const [showTooltip, setShowTooltip] = useState(false)
  const [tooltipTime, setTooltipTime] = useState(0)
  const [tooltipPosition, setTooltipPosition] = useState(0)
  const [pendingTime, setPendingTime] = useState<number | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  const displayTime = pendingTime !== null ? pendingTime : playingTime

  useEffect(() => {
    setPendingTime(null)
  }, [playingTime])

  const getSliderElement = useCallback(() => {
    if (!sliderRef.current) {
      return null
    }

    return sliderRef.current.querySelector('.MuiSlider-root') as HTMLElement
  }, [])

  const getTimeFromPosition = useCallback(
    (clientX: number, rect: DOMRect) => {
      const x = clientX - rect.left
      const percentage = Math.max(0, Math.min(1, x / rect.width))

      return percentage * duration
    },
    [duration],
  )

  const handleMouseMove = useCallback(
    (event: React.MouseEvent) => {
      if (duration <= 0) {
        return
      }

      const sliderElement = getSliderElement()

      if (!sliderElement) {
        return
      }

      const rect = sliderElement.getBoundingClientRect()
      const x = event.clientX - rect.left
      const time = getTimeFromPosition(event.clientX, rect)

      setTooltipTime(time)
      setTooltipPosition(x)
      setShowTooltip(true)
    },
    [duration, getTimeFromPosition, getSliderElement],
  )

  const handleSliderClick = useCallback(
    (event: React.MouseEvent) => {
      if (duration <= 0) {
        return
      }

      const sliderElement = getSliderElement()

      if (!sliderElement) {
        return
      }

      const rect = sliderElement.getBoundingClientRect()
      const time = getTimeFromPosition(event.clientX, rect)
      const fakeEvent = new Event('change')

      setPendingTime(time)
      handleProgressChange(fakeEvent, time)
    },
    [duration, getTimeFromPosition, handleProgressChange, getSliderElement],
  )

  const handleMouseEnter = () => {
    setShowTooltip(true)
  }

  const handleMouseLeave = () => {
    setShowTooltip(false)
  }

  return (
    <ProgressWrapper>
      <SliderWrapper
        ref={sliderRef}
        onClick={handleSliderClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <ProgressSlider
          max={duration}
          onChange={handleProgressChange}
          onMouseDown={(e) => e.preventDefault()}
          value={displayTime}
          width={width}
        />

        {showTooltip && duration > 0 && (
          <TimeTooltip style={{ left: tooltipPosition }}>{secondsToMediaTime(tooltipTime)}</TimeTooltip>
        )}
      </SliderWrapper>

      {chapters && chapters.length > 0 && (
        <ChaptersWrapper>
          <Chapters chapters={chapters} duration={duration} />
        </ChaptersWrapper>
      )}

      <MarkersWrapper>
        <Markers duration={duration} markers={markers} />
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

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    ${ChaptersWrapper} {
      display: block;
    }
  }
`

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
  z-index: 25;
`

const MarkersWrapper = styled(Flex)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
`

const TimeTooltip = styled.div`
  position: absolute;
  bottom: 100%;
  transform: translateX(-50%);
  background: ${colors.BG4};
  color: ${colors.white};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  white-space: nowrap;
  margin-bottom: 8px;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid ${colors.BG4};
  }

  animation: fadeIn 0.15s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(4px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
`

const ProgressSlider = styled(Slider)<{ width: number }>`
  && {
    z-index: 20;
    color: ${colors.white};
    height: 3px;
    width: calc(100% - 12px);
    box-sizing: border-box;
    pointer-events: none;

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
