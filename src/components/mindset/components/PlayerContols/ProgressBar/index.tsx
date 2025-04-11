import { Slider } from '@mui/material'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { NodeExtended } from '~/types'
import { colors } from '~/utils'
import { Chapters } from './Chapters'
import { Markers } from './Markers'

type Props = {
  duration: number
  markers: NodeExtended[]
  chapters: NodeExtended[] | null
  playingTIme: number
  handleProgressChange: (_: Event, value: number | number[]) => void
}

export const ProgressBar = ({ duration, markers, handleProgressChange, playingTIme, chapters }: Props) => {
  const width = (10 / duration) * 100

  return (
    <ProgressWrapper>
      <ProgressSlider max={duration} onChange={handleProgressChange} value={playingTIme} width={width} />
      {chapters && (
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
