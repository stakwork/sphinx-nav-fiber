import { Checkbox, FormControlLabel } from '@mui/material'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { HeadingWrapper, PopoverBody, SubHeading } from '../index'

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

const CustomCheckbox = styled(Checkbox)`
  && {
    .MuiSvgIcon-root {
      border-radius: 8px;
    }
  }
`
