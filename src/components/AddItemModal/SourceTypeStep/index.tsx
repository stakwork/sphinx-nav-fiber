import { Button } from '@mui/material'
import { FC } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { DropDown } from './Dropdown'

type Props = {
  onNextStep: () => void
  allowNextStep?: boolean
  onSelectType: (val: string) => void
  selectedType: string
}

export const SourceTypeStep: FC<Props> = ({ onNextStep, allowNextStep, onSelectType, selectedType }) => (
  <Flex>
    <Flex align="center" direction="row" justify="space-between" mb={20}>
      <Flex align="center" direction="row">
        <StyledText>Choose Type</StyledText>
      </Flex>
    </Flex>

    <Flex direction="row" mb={20}>
      <DropDown onSelect={onSelectType} selectedValue={selectedType} />
    </Flex>

    <Flex>
      <Button color="secondary" disabled={!allowNextStep} onClick={onNextStep} size="large" variant="contained">
        Next
      </Button>
    </Flex>
  </Flex>
)

const StyledText = styled(Text)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`
