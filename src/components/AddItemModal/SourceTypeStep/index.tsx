import { Button } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { AutoComplete, TAutocompleteOption } from '~/components/common/AutoComplete'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { OPTIONS, initialValue } from './constants'
import { Props, TOption } from './types'

export const SourceTypeStep: FC<Props> = ({ onNextStep, allowNextStep, onSelectType, selectedType }) => {
  const [selectedOption, setSelectedOption] = useState<TOption>(initialValue)

  useEffect(() => {
    setSelectedOption((prevState: TOption) =>
      prevState.value === selectedType ? prevState : OPTIONS.find((i) => i.value === selectedType) || initialValue,
    )
  }, [selectedType])

  const onSelect = (val: TAutocompleteOption | null) => {
    onSelectType(val?.label || '')
  }

  return (
    <Flex>
      <Flex align="center" direction="row" justify="space-between" mb={20}>
        <Flex align="center" direction="row">
          <StyledText>Select Type</StyledText>
        </Flex>
      </Flex>

      <Flex direction="row" mb={20}>
        <AutoComplete onSelect={onSelect} options={OPTIONS} selectedValue={selectedOption} />
      </Flex>

      <Flex>
        <Button
          color="secondary"
          disabled={!allowNextStep}
          onClick={onNextStep}
          size="large"
          type="button"
          variant="contained"
        >
          Next
        </Button>
      </Flex>
    </Flex>
  )
}

const StyledText = styled(Text)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`
