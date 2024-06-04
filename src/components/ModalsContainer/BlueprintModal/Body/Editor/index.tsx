/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { TOption } from '~/components/AddItemModal/SourceTypeStep/types'
import ClearIcon from '~/components/Icons/ClearIcon'
import { AutoComplete } from '~/components/common/AutoComplete'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TextInput } from '~/components/common/TextInput'
import { NODE_ADD_ERROR, requiredRule } from '~/constants'
import { api } from '~/network/api'
import { Schema, getNodeSchemaTypes } from '~/network/fetchSourcesData'
import { useModal } from '~/stores/useModalStore'
import { colors } from '~/utils'
import { CreateCustomNodeAttribute } from './CustomAttributesStep'
import { convertAttributes } from './utils'

const defaultValues = {
  type: '',
  parent: '',
}

export type FormData = {
  type: string
  parent?: string
  node_key: string
  attributes?: {
    [k: string]: string | boolean
  }
}

type Props = {
  onSchemaCreate: (schema: { type: string; parent: string; ref_id: string }) => void
  selectedSchema: Schema | null
  onDelete: (type: string) => void
  setSelectedSchemaId: (id: string) => void
  setIsCreateNew: (isNew: boolean) => void
  setGraphLoading: (b: boolean) => void
  onSchemaUpdate: () => void
}

const handleSubmitForm = async (data: FieldValues, isUpdate = false): Promise<string | undefined> => {
  try {
    const { attributes, ...withoutAttributes } = data

    const requestData = {
      ...withoutAttributes,
      attributes: convertAttributes(attributes),
    }

    let res: { status: string; ref_id: string }

    if (isUpdate) {
      res = await api.put(`/schema`, JSON.stringify(requestData), {})
    } else {
      res = await api.post(`/schema`, JSON.stringify({ ...requestData, node_key: 'name' }), {})
    }

    if (res.status !== 'success') {
      throw new Error('error')
    }

    return res?.ref_id

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    let errorMessage = NODE_ADD_ERROR

    if (err.status === 400) {
      const error = await err.json()

      errorMessage = error.errorCode || error?.status || NODE_ADD_ERROR
    } else if (err instanceof Error) {
      errorMessage = err.message
    }

    throw new Error(errorMessage)
  }
}

export const Editor = ({
  onSchemaCreate,
  selectedSchema,
  onDelete,
  setSelectedSchemaId,
  setGraphLoading,
  setIsCreateNew,
  onSchemaUpdate,
}: Props) => {
  const { close, visible } = useModal('addType')

  const form = useForm<FormData>({
    mode: 'onChange',
    defaultValues: selectedSchema
      ? {
          type: selectedSchema.type,
          parent: selectedSchema.parent,
        }
      : defaultValues,
  })

  const { watch, setValue, reset } = form

  const [loading, setLoading] = useState(false)
  const [parentsLoading, setParentsLoading] = useState(false)
  const [parentOptions, setParentOptions] = useState<TOption[] | null>(null)
  const [displayParentError, setDisplayParentError] = useState(false)
  const [selectedNodeParent, setSelectedNodeParent] = useState<TOption[] | null>(null)

  useEffect(
    () => () => {
      reset()
    },
    [visible, reset],
  )

  const onCancel = () => {
    setIsCreateNew(false)
    setSelectedSchemaId('')
  }

  const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1)

  useEffect(() => {
    const init = async () => {
      setParentsLoading(true)

      try {
        const data = await getNodeSchemaTypes()

        const schemaOptions = data.schemas
          .filter((schema) => !schema.is_deleted && schema.type)
          .map((schema) =>
            schema?.type === 'thing'
              ? { label: 'No Parent', value: schema.type }
              : {
                  label: capitalizeFirstLetter(schema.type),
                  value: schema.type,
                },
          )

        setParentOptions(schemaOptions)
      } catch (error) {
        console.warn(error)
      } finally {
        setParentsLoading(false)
      }
    }

    if (!selectedSchema) {
      init()
    }
  }, [selectedSchema])

  useEffect(() => {
    if (selectedSchema) {
      setValue('type', selectedSchema?.type as string)
      setValue('parent', selectedSchema.parent)

      const parentNode: TOption[] = [
        {
          label: selectedSchema.parent ? capitalizeFirstLetter(selectedSchema.parent) : 'No Parent',
          value: selectedSchema.parent as string,
        },
      ]

      setSelectedNodeParent(parentNode)
    } else {
      reset(defaultValues)
    }
  }, [selectedSchema, setValue, reset])

  const parent = watch('parent')

  const handleClose = () => {
    close()
  }

  const handleDelete = async () => {
    if (!selectedSchema?.type) {
      return
    }

    try {
      await api.delete(`/schema/${selectedSchema.ref_id}`)
      onDelete(selectedSchema.type)
      close()
    } catch (error) {
      console.warn(error)
    } finally {
      setIsCreateNew(false)
    }
  }

  const onSubmit = form.handleSubmit(async (data) => {
    if (!parent) {
      setDisplayParentError(true)

      return
    }

    setLoading(true)

    try {
      if (data.type !== selectedSchema?.type) {
        setGraphLoading(true)

        await api.put(`/schema/${selectedSchema?.ref_id}`, JSON.stringify({ type: data.type }))

        await onSchemaUpdate()

        setGraphLoading(false)
      }

      const res = await handleSubmitForm(
        { ...data, ...(selectedSchema ? { ref_id: selectedSchema?.ref_id } : {}) },
        !!selectedSchema,
      )

      onSchemaCreate({ type: data.type, parent: parent || '', ref_id: selectedSchema?.ref_id || res || 'new' })
      handleClose()
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    } catch (err: any) {
      let errorMessage = NODE_ADD_ERROR

      if (err?.status === 400) {
        const errorRes = await err.json()

        errorMessage = errorRes.errorCode || errorRes?.status || NODE_ADD_ERROR
      } else if (err instanceof Error) {
        errorMessage = err.message
      }
    } finally {
      setLoading(false)
      setIsCreateNew(false)
    }
  })

  const resolvedParentValue = () => parentOptions?.find((i) => i.value === parent)

  return (
    <Flex>
      <Flex direction="row" justify="flex-end">
        <CloseButton data-testid="close-sidebar-sub-view" onClick={onCancel}>
          <ClearIcon />
        </CloseButton>
      </Flex>
      <Flex>
        <FormProvider {...form}>
          <form id="add-type-form" onSubmit={onSubmit}>
            <Flex>
              {!selectedSchema ? (
                <>
                  <Flex mb={12}>
                    <Flex mb={12}>
                      <Text>Select Parent</Text>
                    </Flex>

                    <AutoComplete
                      isLoading={parentsLoading}
                      onSelect={(e) => {
                        setValue('parent', e?.value || '')
                        setDisplayParentError(false)
                      }}
                      options={parentOptions}
                      selectedValue={resolvedParentValue()}
                    />
                    {displayParentError && <StyledError>A parent type must be selected</StyledError>}
                  </Flex>
                  <Flex>
                    <Flex mb={12}>
                      <Text>Type name</Text>
                    </Flex>
                    <Flex mb={12}>
                      <TextInput
                        id="cy-item-name"
                        maxLength={250}
                        name="type"
                        placeholder="Enter type name"
                        rules={{
                          ...requiredRule,
                        }}
                        value={parent}
                      />
                    </Flex>
                  </Flex>
                </>
              ) : (
                <>
                  <Flex mb={12}>
                    <Flex mb={12}>
                      <Text>Name</Text>
                    </Flex>
                    <Flex mb={12}>
                      <TextInput
                        defaultValue={selectedSchema?.type}
                        id="cy-item-name"
                        maxLength={250}
                        name="type"
                        placeholder="Enter type name"
                        rules={{
                          ...requiredRule,
                        }}
                        value={parent}
                      />
                    </Flex>
                  </Flex>
                  <Flex mb={12}>
                    <Flex mb={12}>
                      <Text>Parent</Text>
                    </Flex>

                    <AutoComplete
                      isLoading={parentsLoading}
                      onSelect={(e) => {
                        setValue('parent', e?.value || '')
                        setDisplayParentError(false)
                      }}
                      options={selectedNodeParent || []}
                      selectedValue={parentOptions?.find((option) => option.label === selectedSchema?.parent)}
                    />
                    {displayParentError && <StyledError>A parent type must be selected</StyledError>}
                  </Flex>
                </>
              )}
            </Flex>
            <CreateCustomNodeAttribute parent={selectedSchema ? selectedSchema.type : parent} />
            <Flex direction="row" justify="space-between" mt={20}>
              {selectedSchema ? (
                <DeleteButton
                  color="secondary"
                  onClick={handleDelete}
                  size="large"
                  style={{ marginRight: 20 }}
                  variant="contained"
                >
                  Delete
                </DeleteButton>
              ) : null}

              <Button
                color="secondary"
                disabled={loading || displayParentError}
                onClick={onSubmit}
                size="large"
                startIcon={loading ? <ClipLoader color={colors.white} size={10} /> : null}
                variant="contained"
              >
                Save
              </Button>
            </Flex>
          </form>
        </FormProvider>
      </Flex>
    </Flex>
  )
}

const DeleteButton = styled(Button)`
  && {
    color: ${colors.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);

    &:hover,
    &:active,
    &:focus {
      color: ${colors.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`

const CloseButton = styled(Flex)`
  font-size: 32px;
  color: ${colors.white};
  cursor: pointer;
`

const StyledError = styled(Flex)`
  font-size: 13px;
  font-family: Barlow;
  color: #ff8f80;
  line-height: 0.2px;
  margin-top: 12px;
`
