import { Button, Checkbox } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { AutoComplete, TAutocompleteOption } from '~/components/common/AutoComplete'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TextInput } from '~/components/common/TextInput'
import { requiredRule } from '~/constants'
import { getNodeSchemaTypes, getNodeType, postCustomType } from '~/network/fetchSourcesData'
import { capitalizeString } from '~/utils/capitalize'
import { AddItemModalStepID } from '..'
import { NoParent, OptionTypes } from '../SourceTypeStep/constants'
import { TOption } from '../SourceTypeStep/types'
import { parseJson } from '~/utils'
import { parsedObjProps } from '~/utils/parseJson'

type Props = {
  skipToStep: (step: AddItemModalStepID) => void
  // eslint-disable-next-line react/no-unused-prop-types
  onSelectType: (val: string) => void
  // eslint-disable-next-line react/no-unused-prop-types
  parent?: string
  // eslint-disable-next-line react/no-unused-prop-types
  name?: string
  // eslint-disable-next-line react/no-unused-prop-types
  sourceLink?: string
  // eslint-disable-next-line react/no-unused-prop-types
  type?: string
}

export const SelectCustomNodeParent: FC<Props> = ({ onSelectType, skipToStep }) => {
  const [option, setOption] = useState<TOption[] | null>(null)

  const onSelect = (val: TAutocompleteOption | null) => {
    onSelectType(val?.label || '')
  }

  useEffect(() => {
    const init = async () => {
      const data = await getNodeSchemaTypes()

      const schemaOptions = data.schemas.map((schema) => ({
        label: capitalizeString(schema.type),
        value: schema.type,
      }))

      setOption([...schemaOptions, NoParent])
    }

    init()
  }, [])

  return (
    <Flex>
      <Flex mb={20}>
        <StyledText>Select Parent</StyledText>
      </Flex>
      <Flex direction="row" mb={20}>
        <AutoComplete autoFocus onSelect={onSelect} options={option} />
      </Flex>
      <Flex direction="row">
        <Flex grow={1}>
          <Button color="secondary" onClick={() => skipToStep('sourceType')} size="large" variant="contained">
            Prev
          </Button>
        </Flex>
        <Flex grow={1} ml={20}>
          <Button color="secondary" onClick={() => skipToStep('createType')} size="large" variant="contained">
            Next
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export const CreateCustomTypeStep: FC<Props> = ({ type, skipToStep, name, sourceLink }) => {
  const allowNextStep = type === 'Image' ? name && sourceLink : name

  return (
    <Flex>
      <Flex align="center" direction="row" justify="space-between" mb={18}>
        <Flex align="center" direction="row">
          <StyledText>Enter details</StyledText>
        </Flex>
      </Flex>

      <Flex mb={4}>
        <Text>{type} name</Text>
      </Flex>
      <Flex mb={12}>
        <TextInput
          id="cy-item-name"
          maxLength={250}
          name="name"
          placeholder="Paste name here..."
          rules={{
            ...requiredRule,
          }}
        />
      </Flex>
      {type === 'Image' ? (
        <>
          <Flex mb={4}>
            <Text>Link</Text>
          </Flex>

          <Flex mb={12}>
            <TextInput
              id="cy-item-link"
              maxLength={250}
              name="sourceLink"
              placeholder="Paste link here..."
              rules={{
                ...requiredRule,
              }}
            />
          </Flex>
        </>
      ) : null}
      <Flex direction="row">
        <Flex grow={1}>
          <Button color="secondary" onClick={() => skipToStep('selectParent')} size="large" variant="contained">
            Prev
          </Button>
        </Flex>
        <Flex grow={1} ml={20}>
          <Button
            color="secondary"
            disabled={!allowNextStep}
            onClick={() => skipToStep('createNodeType')}
            size="large"
            variant="contained"
          >
            Next
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export const CreateCustomNodeAttribute: FC<Props> = ({ skipToStep, parent }) => {
  const [schemaData, setSchemaData] = useState<parsedObjProps[]>()
  const defaultSchemaOptions = { required: false, type: '', key: '' }

  const addAttributes = () => {
    setSchemaData((prev) => [...(prev ?? []), defaultSchemaOptions])
  }

  const parentParam = parent?.toLowerCase()

  useEffect(() => {
    const init = async () => {
      const data = await getNodeType(parentParam as string)

      const parsedData = parseJson(data)

      setSchemaData(parsedData)
    }

    init()
  }, [parentParam])

  return (
    <Flex>
      <Flex mb={20}>
        <StyledText>Set Attributes</StyledText>
      </Flex>
      <Flex direction='row' mb={10}>
        <StyledTableHeader style={{marginRight: 180, marginLeft: 20}}>Attributes</StyledTableHeader>
        <StyledTableHeader style={{marginRight: 130}}>Type</StyledTableHeader>
        <StyledTableHeader>Required</StyledTableHeader>
      </Flex>
      <Flex direction="column" style={{ maxHeight: '280px', overflow: 'auto' }}>
        {schemaData?.map((k) => (
          <FormInput
            key={k.type}
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

export const CreateConfirmation: FC<Props> = ({ skipToStep, name }) => {

  const handleSubmit = async () => {
    const res = await postCustomType({type: 'video', parent: 'thing', name: "big", age: 2})

    console.log(res)
  }

  return (
    <Flex>
    <Flex mb={20}>
      <StyledText>Comfirm New Type</StyledText>
    </Flex>
    <Flex mb={25}>
      <StyledText>Type: {name}</StyledText>
    </Flex>
    <Flex direction="row">
      <Flex grow={1}>
        <Button color="secondary" onClick={() => skipToStep('selectParent')} size="large" variant="contained">
          Cancel
        </Button>
      </Flex>
      <Flex grow={1} ml={20}>
        <Button color="secondary" onClick={handleSubmit} size="large" variant="contained">
          Comfirm
        </Button>
      </Flex>
    </Flex>
  </Flex>
  )
}

interface formFields {
  placeholder: string
  type: TAutocompleteOption[]
  required: boolean
  key: string
  selectedValue: TAutocompleteOption
}

const FormInput = ({ placeholder, type, required, selectedValue }: formFields) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  return (
    <StyledInputWrapper>
      <TextInput
        className="text-input"
        disabled={required}
        id="cy-item-name"
        maxLength={50}
        name={`attribute-${placeholder.charAt(0).toUpperCase() + placeholder.slice(1)}`}
        placeholder={placeholder}
        rules={{
          ...requiredRule,
        }}
      />
      <Flex style={{ flex: 0.5 }}>
        <AutoComplete onSelect={() => null} options={type} selectedValue={selectedValue} />
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

const StyledInputWrapper = styled(Flex)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 0.25rem;
  margin-bottom: 12px;
`

const StyledTableHeader = styled(Text)`
    font-size: 15px;
    color: gray
`