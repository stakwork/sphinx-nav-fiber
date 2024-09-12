import { Slider } from '@mui/material'
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
          <span>1</span>
          <span>{sourceNodes}</span>
        </SourceNodesStepWrapper>
        <VolumeControl direction="row">
          <Slider
            className="volume-slider"
            data-testid="source-nodes-slider"
            max={100}
            min={1}
            onChange={SourceNodesChangeHandler}
            size="medium"
            step={1}
            value={sourceNodes}
          />
        </VolumeControl>
      </PopoverBody>
    </>
  )
}
