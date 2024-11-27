import { Slider } from '@mui/material'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { NodeExtended } from '~/types'
import { colors } from '~/utils'
import { Marker } from '../../Marker'

type Props = {
  duration: number
  markers: NodeExtended[]
  playingTIme: number
  handleProgressChange: (_: Event, value: number | number[]) => void
}

export const ProgressBar = ({ duration, markers, handleProgressChange, playingTIme }: Props) => (
  <ProgressWrapper>
    <ProgressSlider max={duration} onChange={handleProgressChange} value={playingTIme} />
    {markers.map((node) => {
      const position = ((node?.start || 0) / duration) * 100
      const type = node?.node_type || ''
      const name = node?.properties?.name || ''

      return <Marker key={node.ref_id} left={position} name={name} type={type} />
    })}
  </ProgressWrapper>
)

const ProgressWrapper = styled(Flex)`
  position: relative;
  flex: 1 1 100%;
`

const ProgressSlider = styled(Slider)`
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
