import { Button, Checkbox } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { AutoComplete, TAutocompleteOption } from '~/components/common/AutoComplete'
import { Flex } from '~/components/common/Flex'
import { TextInput } from '~/components/common/TextInput'
import { getNodeType } from '~/network/fetchSourcesData'
import { parseJson, parsedObjProps } from '~/utils/parseJson'
import { AddItemModalStepID } from '..'
import { Text } from '~/components/common/Text'
import { requiredRule } from '~/constants'
import { OptionTypes } from '../SourceTypeStep/constants'
import { ClipLoader } from 'react-spinners'
import { colors } from '~/utils'

interface Props {
  skipToStep: (step: AddItemModalStepID) => void
  onSelectType: (val: string) => void
  parent?: string
}

export const CreateCustomNodeAttribute: FC<Props> = ({ skipToStep, parent, onSelectType }) => {
  const [schemaData, setSchemaData] = useState<parsedObjProps[]>()
  const defaultSchemaOptions = { required: false, type: '', key: '' }
  const [loading, setLoading] = useState(true)

  const addAttributes = () => {
    setSchemaData((prev) => [...(prev ?? []), defaultSchemaOptions])
  }

  const parentParam = parent?.toLowerCase()

  useEffect(() => {
    const init = async () => {
      const data = await getNodeType(parentParam as string)

      const parsedData = parseJson(data)

      setSchemaData(parsedData)
      setLoading(false)
    }

    init()
  }, [parentParam])

  return (
    <Flex>
      <Flex mb={20}>
        <StyledText>Set Attributes</StyledText>
      </Flex>
      {loading ? (
        <ClipLoader color={colors.SECONDARY_BLUE} size="30" />
      ) : (
        <>
          <Flex direction="row" mb={10}>
            <StyledTableHeader style={{ marginRight: 180, marginLeft: 20 }}>Attributes</StyledTableHeader>
            <StyledTableHeader style={{ marginRight: 130 }}>Type</StyledTableHeader>
            <StyledTableHeader>Required</StyledTableHeader>
          </Flex>
          <Flex direction="column" style={{ maxHeight: '280px', overflow: 'auto' }}>
            {schemaData?.map((k) => (
              <FormInput
                key={k.key}
                name={k.key}
                onSelectType={onSelectType}
                placeholder={k.key}
                required={k.required}
                selectedValue={{ label: k.type, value: k.type }}
                type={OptionTypes}
              />
            ))}
          </Flex>
          <Flex direction="row" grow={1} mt={20}>
            <Button color="secondary" onClick={addAttributes} size="large" variant="contained">
              Add Attributes
            </Button>
          </Flex>
        </>
      )}
      <Flex direction="row" mt={20}>
        <Flex grow={1}>
          <Button color="secondary" onClick={() => skipToStep('selectParent')} size="large" variant="contained">
            Prev
          </Button>
        </Flex>
        <Flex grow={1} ml={20}>
          <Button color="secondary" onClick={() => skipToStep('createConfirmation')} size="large" variant="contained">
            Next
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

interface formFields {
  name: string
  placeholder: string
  type: TAutocompleteOption[]
  required: boolean
  key: string
  selectedValue: TAutocompleteOption
  onSelectType: (val: string) => void
}

const FormInput = ({ placeholder, type, required, selectedValue, onSelectType, name }: formFields) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const onSelect = (val: TAutocompleteOption | null) => {
    onSelectType(val?.label || '')
  }

  return (
    <StyledInputWrapper>
      <TextInput
        className="text-input"
        disabled={required}
        id="cy-item-name"
        maxLength={50}
        name={name}
        placeholder={placeholder}
        rules={{
          ...requiredRule,
        }}
      />
      <Flex style={{ flex: 0.5 }}>
        <AutoComplete disabled={required} onSelect={onSelect} options={type} selectedValue={selectedValue} />
      </Flex>
      <Checkbox defaultChecked disabled={required} size="small" {...label} />
    </StyledInputWrapper>
  )
}

const StyledText = styled(Text)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`

const StyledTableHeader = styled(Text)`
  font-size: 15px;
  color: gray;
`

const StyledInputWrapper = styled(Flex)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 0.25rem;
  margin-bottom: 12px;
`
