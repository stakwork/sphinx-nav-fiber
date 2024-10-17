import { Slider } from '@mui/material'
import { HeadingWrapper, PopoverBody, SourceNodesStepWrapper, SubHeading, VolumeControl } from '../index'
import styled from 'styled-components'
import { colors } from '~/utils'

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
          <span>0</span>
          <span>300</span>
        </SourceNodesStepWrapper>
        <VolumeControl direction="row">
          <CustomSlider
            className="volume-slider"
            data-testid="max-results-slider"
            max={300}
            min={0}
            onChange={MaxResultsChangeHandler}
            size="medium"
            step={1}
            value={maxResults}
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
