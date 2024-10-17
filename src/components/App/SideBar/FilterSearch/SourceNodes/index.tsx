import { Slider } from '@mui/material'
import styled from 'styled-components'
import { colors } from '~/utils/colors'
import { HeadingWrapper, PopoverBody, SourceNodesStepWrapper, SubHeading, VolumeControl } from '../index'

type SourceNodesProps = {
  sourceNodes: number
  setSourceNodes: (value: number) => void
}

export const SourceNodes = ({ sourceNodes, setSourceNodes }: SourceNodesProps) => {
  const SourceNodesChangeHandler = (event: Event, value: number | number[]) => {
    const newValue = Array.isArray(value) ? value[0] : value

    setSourceNodes(newValue)
  }

  return (
    <>
      <HeadingWrapper>
        <div>Source Nodes</div>
        <SubHeading>Core set of nodes based on search term</SubHeading>
      </HeadingWrapper>
      <PopoverBody>
        <SourceNodesStepWrapper>
          <span>0</span>
          <span>100</span>
        </SourceNodesStepWrapper>
        <VolumeControl direction="row">
          <CustomSlider
            className="volume-slider"
            data-testid="source-nodes-slider"
            max={100}
            min={0}
            onChange={SourceNodesChangeHandler}
            size="medium"
            step={1}
            value={sourceNodes}
            valueLabelDisplay="on"
          />
        </VolumeControl>
      </PopoverBody>
    </>
  )
}

const CustomSlider = styled(Slider)({
  '& .MuiSlider-valueLabel': {
    backgroundColor: `${colors.primaryBlue}`,
  },
})
