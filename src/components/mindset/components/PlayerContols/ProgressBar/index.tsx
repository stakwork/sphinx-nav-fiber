import { Slider } from '@mui/material'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { NodeExtended } from '~/types'
import { colors } from '~/utils'
import { Markers } from './Markers'

type Props = {
  duration: number
  markers: NodeExtended[]
  playingTIme: number
  handleProgressChange: (_: Event, value: number | number[]) => void
}

export const ProgressBar = ({ duration, markers, handleProgressChange, playingTIme }: Props) => {
  const width = (10 / duration) * 100

  return (
    <ProgressWrapper>
      <ProgressSlider max={duration} onChange={handleProgressChange} value={playingTIme} width={width} />
      <Markers duration={duration} markers={markers} />
    </ProgressWrapper>
  )
}

const ProgressWrapper = styled(Flex)`
  position: relative;
  flex: 1 1 100%;
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
