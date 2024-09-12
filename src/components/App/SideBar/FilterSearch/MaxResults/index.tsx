import { Slider } from '@mui/material'
import { HeadingWrapper, PopoverBody, SourceNodesStepWrapper, SubHeading, VolumeControl } from '../index'

type MaxResultsProps = {
  maxResults: number
  setMaxResults: (value: number) => void
}

export const MaxResults = ({ maxResults, setMaxResults }: MaxResultsProps) => {
  const MaxResultsChangeHandler = (event: Event, value: number | number[]) => {
    const newValue = Array.isArray(value) ? value[0] : value

    setMaxResults(newValue)
  }

  return (
    <>
      <HeadingWrapper>
        <div>Max results</div>
        <SubHeading>Total number of relationships</SubHeading>
      </HeadingWrapper>
      <PopoverBody>
        <SourceNodesStepWrapper>
          <span>1</span>
          <span>{maxResults}</span>
        </SourceNodesStepWrapper>
        <VolumeControl direction="row">
          <Slider
            className="volume-slider"
            data-testid="max-results-slider"
            max={300}
            min={1}
            onChange={MaxResultsChangeHandler}
            size="medium"
            step={1}
            value={maxResults}
          />
        </VolumeControl>
      </PopoverBody>
    </>
  )
}
