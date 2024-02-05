import { Button } from '@mui/material'
import { FC } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { colors } from '~/utils'
import { DropDown } from './Component/dropdown'

type Props = {
  onNextStep: () => void
  onPrevStep: () => void
}

export const SourceTypeStep: FC<Props> = ({ onNextStep, onPrevStep }) => (
  <Flex>
    <Flex align="center" direction="row" justify="space-between" mb={20}>
      <Flex align="center" direction="row">
        <StyledText>Choose Type</StyledText>
      </Flex>
    </Flex>

    <Flex direction="row" mb={20}>
      <DropDown />
    </Flex>

    <Flex direction="row">
      <Flex grow={1}>
        <StyledButton color="secondary" onClick={() => onPrevStep()} size="large" variant="contained">
          Back
        </StyledButton>
      </Flex>
      <Flex grow={1} ml={20}>
        <Button color="secondary" onClick={() => onNextStep()} size="large" variant="contained">
          Next
        </Button>
      </Flex>
    </Flex>
  </Flex>
)

const StyledText = styled(Text)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`

const StyledButton = styled(Button)`
  && {
    background: ${colors.white};
    color: ${colors.BG2};

    &:active,
    &:hover,
    &:focus {
      background: ${colors.white};
      color: ${colors.BG2};
    }
  }
`
