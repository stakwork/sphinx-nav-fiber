import { Checkbox, FormControlLabel } from '@mui/material'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { HeadingWrapper, PopoverBody, SubHeading } from '../index'
import { colors } from '~/utils'

type HopsProps = {
  hops: number
  setHops: (value: number) => void
}

export const Hops = ({ hops, setHops }: HopsProps) => (
  <>
    <HeadingWrapper>
      <div>Hops</div>
      <SubHeading>Distance away from source nodes</SubHeading>
    </HeadingWrapper>
    <PopoverBody>
      <HopsWrapper>
        <FormControlLabel
          control={<CustomCheckbox checked={hops === 1} onChange={() => setHops(1)} />}
          label="Direct relationship"
        />
        <FormControlLabel
          control={<CustomCheckbox checked={hops === 2} onChange={() => setHops(2)} />}
          label="2 hops away"
        />
      </HopsWrapper>
    </PopoverBody>
  </>
)

const HopsWrapper = styled(Flex).attrs({
  direction: 'column',
  align: 'flex-start',
})`
  gap: 10px;
`

const UncheckedIcon = styled('span')`
  width: 20px;
  height: 20px;
  display: inline-block;
  border-radius: 4px;
  border: 1px solid gray;
`

const CheckedIcon = styled(UncheckedIcon)`
  background-color: ${colors.primaryBlue};

  &::before {
    content: '';
    display: block;
    width: 15px;
    height: 25px;
    margin: auto;
    position: relative;
    top: 4px;
    left: 1px;
    background-color: white;
    mask-image: url('/svg-icons/CheckIcon.svg');
    mask-size: contain;
    mask-repeat: no-repeat;
  }
`

const CustomCheckbox = styled((props) => (
  <Checkbox {...props} checkedIcon={<CheckedIcon />} icon={<UncheckedIcon />} />
))`
  && {
    padding: 15px;
  }
`
