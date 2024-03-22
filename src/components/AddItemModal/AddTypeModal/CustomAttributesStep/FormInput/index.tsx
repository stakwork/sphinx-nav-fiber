import { Checkbox } from '@mui/material'
import styled from 'styled-components'
import { OptionTypes } from '~/components/AddItemModal/SourceTypeStep/constants'
import { AutoComplete, TAutocompleteOption } from '~/components/common/AutoComplete'
import { Flex } from '~/components/common/Flex'
import { TextInput } from '~/components/common/TextInput'
import { requiredRule } from '~/constants'
import { parsedObjProps } from '~/utils/parseJson'

interface formFields {
  values: parsedObjProps
  id: number
  onUpdate: (val: { key: string; required: boolean; type: string }) => void
}

export const FormInput = ({ onUpdate, values, id }: formFields) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const onUpdateType = (val: TAutocompleteOption | null) => {
    if (!val) {
      return
    }

    onUpdate({ ...values, type: val.value })
  }

  return (
    <StyledInputWrapper>
      <TextInput
        className="text-input"
        id="cy-item-name"
        maxLength={50}
        name={`name_${id}`}
        onChange={(key) => onUpdate({ ...values, key })}
        placeholder="Enter value"
        rules={{
          ...requiredRule,
        }}
        value={values.key}
      />
      <Flex style={{ flex: 0.5 }}>
        <AutoComplete
          disabled={values.required}
          onSelect={onUpdateType}
          options={OptionTypes}
          selectedValue={OptionTypes.find((i) => i.value === values.type)}
        />
      </Flex>
      <Checkbox
        defaultChecked
        disabled={values.required}
        onChange={() => onUpdate({ ...values, required: !values.required })}
        size="small"
        {...label}
      />
    </StyledInputWrapper>
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
