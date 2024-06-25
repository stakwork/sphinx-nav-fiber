import { Button, Grid, IconButton, Switch } from '@mui/material'
import { Fragment, useEffect, useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { NoParent, OptionTypes } from '~/components/AddItemModal/SourceTypeStep/constants'
import DeleteIcon from '~/components/Icons/DeleteIcon'
import PlusIcon from '~/components/Icons/PlusIcon'
import { AutoComplete } from '~/components/common/AutoComplete'
import { Flex } from '~/components/common/Flex'
import { TextInput } from '~/components/common/TextInput'
import { requiredRule } from '~/constants'
import { getNodeType } from '~/network/fetchSourcesData'
import { colors } from '~/utils'
import { parseJson, parsedObjProps } from '../../utils'

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

          parsedDataDefault = parseJson(data)
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
                      disabled={!isEditable}
                      id="cy-item-name"
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
                    <AutoComplete
                      disabled={requiredKey}
                      onSelect={(val) => setValue(`attributes[${index}].type`, val?.value)}
                      options={OptionTypes}
                      selectedValue={OptionTypes.find((i) => i.value === type)}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Switch
                      checked={checked}
                      disabled={requiredKey}
                      name={`attributes.${index}.required` as const}
                      onChange={(e) => setValue(`attributes[${index}].required`, e.target.checked)}
                      size="small"
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
                  </Grid>
                </Fragment>
              )
            })}
          </Grid>
        </InputsWrapper>
      )}
      <Flex align="flex-start" py={12}>
        <Button
          onClick={() => append({ key: '', type: 'string', required: true, isNew: true })}
          size="medium"
          startIcon={<PlusIcon />}
          variant="contained"
        >
          Add Attribute
        </Button>
      </Flex>
    </>
  )
}

const InputsWrapper = styled(Flex)`
  overflow-y: auto;
  width: calc(100% + 20px);
  max-height: calc(80vh - 300px);
`
