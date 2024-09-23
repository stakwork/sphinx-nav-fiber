import { Button } from '@mui/material'
import { FC } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useFormContext } from 'react-hook-form'
import { TextInput } from '~/components/common/TextInput'
import { AutoComplete, TAutocompleteOption } from '~/components/common/AutoComplete'
import { requiredRule } from '~/constants'

type Props = {
  errMessage: string
  handleClose: () => void
}

export const CreateBounty: FC<Props> = ({ errMessage, handleClose }) => {
  const { setValue, watch } = useFormContext()

  const watchBudget = watch('budget', '')
  const watchNodeType = watch('nodeType', '')

  const onSelect = (val: TAutocompleteOption | null) => {
    const selectedValue = val?.label || 'SecondBrain'

    setValue('nodeType', selectedValue, { shouldValidate: true })
  }

  const options = [{ label: 'SecondBrain', value: 'SecondBrain' }]

  const isDisable = !!(watchBudget && watchNodeType)

  return (
    <Flex>
      <Flex align="center" direction="row" justify="space-between" mb={18}>
        <StyledHeadingText>Create Bounty</StyledHeadingText>
      </Flex>

      <Flex mb={20}>
        <StyledText>Select Workspace</StyledText>
        <AutoComplete autoFocus onSelect={onSelect} options={options} />
      </Flex>

      <Flex mb={20}>
        <StyledText>Set Budget</StyledText>
        <TextInput
          id="budget"
          name="budget"
          placeholder="Enter budget"
          rules={{
            ...requiredRule,
            pattern: {
              value: /^[0-9]+$/,
              message: 'Please enter a valid number',
            },
          }}
          value={watchBudget}
        />
      </Flex>

      <Flex direction="row">
        <Flex grow={1}>
          <Button color="secondary" onClick={() => handleClose()} size="large" variant="contained">
            Cancel
          </Button>
        </Flex>
        <Flex grow={1} ml={20}>
          <Button color="secondary" disabled={!isDisable} size="large" type="submit" variant="contained">
            Confirm
          </Button>
        </Flex>
      </Flex>
      {errMessage && <StyledError>{errMessage}</StyledError>}
    </Flex>
  )
}

const StyledText = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  font-family: 'Barlow';
  margin-bottom: 6px;
`

const StyledHeadingText = styled(Text)`
  font-size: 18px;
  font-weight: 600;
  font-family: 'Barlow';
  margin-bottom: 6px;
`

const StyledError = styled(Flex)`
  font-size: 13px;
  font-family: Barlow;
  color: #ff8f80;
  line-height: 0.2px;
  margin-top: 12px;
  padding-top: 20px;
`
