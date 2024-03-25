import { Button, Checkbox } from '@mui/material'
import { useFieldArray, useFormContext } from 'react-hook-form'
import styled from 'styled-components'
import { OptionTypes } from '~/components/AddItemModal/SourceTypeStep/constants'
import { AutoComplete, TAutocompleteOption } from '~/components/common/AutoComplete'
import { Flex } from '~/components/common/Flex'
import { TextInput } from '~/components/common/TextInput'
import { requiredRule } from '~/constants'

export const FormInput = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const methods = useFormContext()

  console.log(methods.getValues())

  const { fields, append } = useFieldArray({
    name: 'attrs',
  })

  const onUpdateType = (val: TAutocompleteOption | null) => {
    if (!val) {
      return
    }

    console.log(val)
  }

  console.log(fields)

  return (
    <>
      {fields.map((field, index) => (
        <StyledInputWrapper key={field.id}>
          <TextInput
            className="text-input"
            id="cy-item-name"
            maxLength={50}
            name={`attrs.${index}.name` as const}
            placeholder="Enter value"
            rules={{
              ...requiredRule,
            }}
          />
          <Flex style={{ flex: 0.5 }}>
            <AutoComplete disabled={false} onSelect={onUpdateType} options={OptionTypes} selectedValue={null} />
          </Flex>
          <Checkbox
            defaultChecked
            disabled={false}
            name={`attrs.${index}.required` as const}
            onChange={() => console.log(12)}
            size="small"
            {...label}
          />
        </StyledInputWrapper>
      ))}
      <Button color="secondary" onClick={append} size="large" variant="contained">
        Add Attributesss
      </Button>
    </>
  )
}

const StyledInputWrapper = styled(Flex)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 0.25rem;
  margin-bottom: 12px;
`
