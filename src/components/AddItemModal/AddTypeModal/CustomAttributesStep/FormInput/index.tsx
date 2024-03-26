import { Button, Checkbox } from '@mui/material'
import { useEffect, useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { NoParent, OptionTypes } from '~/components/AddItemModal/SourceTypeStep/constants'
import { AutoComplete } from '~/components/common/AutoComplete'
import { Flex } from '~/components/common/Flex'
import { TextInput } from '~/components/common/TextInput'
import { requiredRule } from '~/constants'
import { getNodeType } from '~/network/fetchSourcesData'
import { colors } from '~/utils'
import { parseJson, parsedObjProps } from '~/utils/parseJson'

export const FormInput = ({ parentParam }: { parentParam: string }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
  const [loading, setLoading] = useState(false)
  const [parsedData, setParsedData] = useState<parsedObjProps[]>([])

  const { fields, append, replace } = useFieldArray({
    name: 'attrs',
  })

  const { setValue, watch } = useFormContext()

  useEffect(() => {
    const init = async () => {
      try {
        let parsedDataDefault: parsedObjProps[] = [{ required: false, type: 'string', key: '' }]

        if (parentParam !== NoParent.value.toLowerCase()) {
          setLoading(true)

          const data = await getNodeType(parentParam as string)

          parsedDataDefault = parseJson(data)
        }

        replace(parsedDataDefault)
        setParsedData(parsedDataDefault)
      } catch (error) {
        console.warn(error)
      } finally {
        setLoading(false)
      }
    }

    if (parsedData.length === 0) {
      init()
    }
  }, [parentParam, setValue, replace, parsedData.length])

  return (
    <>
      {loading ? (
        <Flex align="center">
          <ClipLoader color={colors.SECONDARY_BLUE} size="30" />
        </Flex>
      ) : (
        <InputsWrapper direction="column">
          {fields.map((field, index) => {
            const type = watch(`attrs[${index}].type`)

            return (
              <StyledInputWrapper key={field.id}>
                <TextInput
                  className="text-input"
                  id="cy-item-name"
                  maxLength={50}
                  name={`attrs.${index}.key` as const}
                  placeholder="Enter value"
                  rules={{
                    ...requiredRule,
                  }}
                />
                <Flex style={{ flex: 0.5 }}>
                  <AutoComplete
                    disabled={false}
                    onSelect={(val) => setValue(`attrs[${index}].type`, val?.value)}
                    options={OptionTypes}
                    selectedValue={OptionTypes.find((i) => i.value === type)}
                  />
                </Flex>
                <Checkbox
                  defaultChecked
                  disabled={false}
                  name={`attrs.${index}.required` as const}
                  size="small"
                  {...label}
                />
              </StyledInputWrapper>
            )
          })}
        </InputsWrapper>
      )}

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

const InputsWrapper = styled(Flex)`
  max-height: 260px;
  overflow: auto;
`
