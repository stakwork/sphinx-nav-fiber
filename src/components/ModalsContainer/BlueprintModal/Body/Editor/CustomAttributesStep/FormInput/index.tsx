import { Grid, IconButton, Switch, SwitchProps } from '@mui/material'
import { Fragment, useEffect, useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { NoParent, OptionTypes } from '~/components/AddItemModal/SourceTypeStep/constants'
import { AutoComplete } from '~/components/common/AutoComplete'
import { Flex } from '~/components/common/Flex'
import { TextInput } from '~/components/common/TextInput'
import DeleteIcon from '~/components/Icons/DeleteIcon'
import PlusIcon from '~/components/Icons/PlusIcon'
import { requiredRule } from '~/constants'
import { getNodeType } from '~/network/fetchSourcesData'
import { colors } from '~/utils'
import { parsedObjProps, parseJson } from '../../utils'

const noSpacePattern = /^[a-z0-9_]+$/

interface CustomField extends Record<'id', string> {
  isNew?: boolean
  onDelete?: (attributeKey: string) => void
  key?: string
}

export const FormInput = ({
  parentParam,
  onDelete,
}: {
  parentParam: string
  onDelete: (attributeKey: string) => void
}) => {
  const [loading, setLoading] = useState(false)
  const [parsedData, setParsedData] = useState<parsedObjProps[]>([])

  const { fields, append, replace, remove } = useFieldArray({
    name: 'attributes',
  })

  const { setValue, watch } = useFormContext()

  useEffect(() => {
    const init = async () => {
      try {
        let parsedDataDefault: parsedObjProps[] = [{ required: false, type: 'string', key: '' }]

        if (parentParam !== NoParent.value.toLowerCase()) {
          setLoading(true)

          const data = await getNodeType(parentParam as string)

          if (data.attributes && typeof data.attributes === 'object') {
            parsedDataDefault = parseJson(data.attributes)
          } else {
            parsedDataDefault = parseJson(data)
          }
        }

        parsedDataDefault = parsedDataDefault.filter((x) => x.key !== 'node_key')

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
        <InputsWrapper py={8}>
          <Grid container spacing={2}>
            {fields.map((field: CustomField, index) => {
              const type = watch(`attributes[${index}].type`)
              const checked = watch(`attributes[${index}].required`)
              const isEditable = field.isNew || false
              const requiredKey = ['name'].includes(watch(`attributes[${index}].key`))

              return (
                <Fragment key={field.id}>
                  <Grid item xs={5}>
                    <TextInput
                      autoComplete="off"
                      className="text-input"
                      dataTestId={`cy-item-name-${index}`}
                      disabled={!isEditable}
                      id={`cy-item-name-${index}`}
                      maxLength={50}
                      name={`attributes.${index}.key` as const}
                      placeholder="Enter value"
                      rules={{
                        ...requiredRule,
                        pattern: {
                          message: 'Please avoid special characters, spaces and uppercase',
                          value: noSpacePattern,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <StyledAutoComplete
                      dataTestId={`cy-item-select-${index}`}
                      disabled={requiredKey}
                      onSelect={(val) => setValue(`attributes[${index}].type`, val?.value)}
                      options={OptionTypes}
                      selectedValue={OptionTypes.find((i) => i.value === type)}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <FlexContainer>
                      <CustomSwitch
                        checked={checked}
                        data-testid={`cy-item-${index}`}
                        disabled={requiredKey}
                        name={`attributes.${index}.required` as const}
                        onChange={(e) => setValue(`attributes[${index}].required`, e.target.checked)}
                      />

                      {!requiredKey && (
                        <IconButton
                          onClick={() => {
                            remove(index)

                            if (field.key !== undefined && onDelete) {
                              onDelete(field.key)
                            }
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      )}
                    </FlexContainer>
                  </Grid>
                </Fragment>
              )
            })}
          </Grid>
        </InputsWrapper>
      )}
      <Flex align="flex-start" py={12}>
        <ViewMoreButton
          data-testid="add-attribute-btn"
          onClick={() => append({ key: '', type: 'string', required: true, isNew: true })}
        >
          <PlusIconWrapper>
            <PlusIcon /> Add Attribute
          </PlusIconWrapper>
        </ViewMoreButton>
      </Flex>
    </>
  )
}

const InputsWrapper = styled(Flex)`
  overflow-y: auto;
  width: calc(100% + 20px);
  max-height: calc(80vh - 300px);
`

const CustomSwitch = styled((props: SwitchProps) => <Switch {...props} />)`
  &.MuiSwitch-root {
    width: 51px;
    height: 38px;
  }
  & .MuiSwitch-switchBase {
    margin-top: 4px;
    &.Mui-checked {
      color: ${colors.white};
      & + .MuiSwitch-track {
        background-color: ${colors.primaryBlueBorder};
        opacity: 1;
      }
    }
  }
  & .MuiSwitch-thumb {
    width: 12px;
    height: 12px;
  }
  & .MuiSwitch-track {
    border-radius: 10px;
    background-color: ${colors.BG2};
    opacity: 1;
  }
`

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const ViewMoreButton = styled.button`
  background: transparent;
  width: 149px;
  height: 32px;
  color: ${colors.white};
  border: 1px solid ${colors.addAttributeBtn};
  padding: 2px 18px 12px 12px;
  margin-top: 2px;
  cursor: pointer;
  border-radius: 6px;
  font-family: Barlow;
  font-size: 14px;
  font-weight: 400;

  &:hover {
    background: ${colors.BUTTON1_HOVER};
  }

  &:active {
    background: ${colors.BUTTON1_PRESS};
  }
`

const PlusIconWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;

  svg {
    width: 23px;
    height: 23px;
    fill: none;
    margin-top: 2px;
  }
`

const StyledAutoComplete = styled(AutoComplete)`
  & .MuiInput-input.MuiInputBase-input {
    padding: 8px 2px !important;
  }
`
