/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { NoParent } from '~/components/AddItemModal/SourceTypeStep/constants'
import { TOption } from '~/components/AddItemModal/SourceTypeStep/types'
import ClearIcon from '~/components/Icons/ClearIcon'
import { AutoComplete, TAutocompleteOption } from '~/components/common/AutoComplete'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TextInput } from '~/components/common/TextInput'
import { NODE_ADD_ERROR, requiredRule } from '~/constants'
import { api } from '~/network/api'
import { getNodeSchemaTypes, getNodeType, Schema } from '~/network/fetchSourcesData'
import { useModal } from '~/stores/useModalStore'
import { colors } from '~/utils'
import { CreateCustomNodeAttribute } from './CustomAttributesStep'
import MediaOptions from './MediaOptions'
import { convertAttributes, parsedObjProps, parseJson } from './utils'

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
  graphLoading: boolean
  onSchemaCreate: (schema: { type: string; parent: string; ref_id: string }) => void
  selectedSchema: Schema | null
  onDelete: (type: string) => void
  setSelectedSchemaId: (id: string) => void
  setIsCreateNew: (isNew: boolean) => void
  setGraphLoading: (b: boolean) => void
  onSchemaUpdate: () => void
}

type Attribute = {
  required?: boolean
  type?: string
  key: string
}

const compareAttributes = (attributees: Attribute[], parsedAttributesData: parsedObjProps[]): boolean => {
  if (attributees.length !== parsedAttributesData.length) {
    return true
  }

  return attributees.some((attr, index) => {
    const parsed = parsedAttributesData[index]

    return attr.required !== parsed.required || attr.type !== parsed.type || attr.key !== parsed.key
  })
}

const handleSubmitForm = async (
  data: FieldValues,
  isUpdate = false,
  deletedAttributes: string[],
  mediaOptions: { videoAudio: boolean; image: boolean; sourceLink: boolean },
): Promise<string | undefined> => {
  try {
    const { attributes, ...withoutAttributes } = data

    const updatedAttributes = {
      ...convertAttributes(attributes),
      ...deletedAttributes.reduce<{ [key: string]: string }>((acc, key) => ({ ...acc, [key]: 'delete' }), {}),
    }

    const requestData: {
      attributes: { [key: string]: string }
      media_url?: string
      image_url?: string
      source_link?: string
    } = {
      ...withoutAttributes,
      attributes: updatedAttributes,
    }

    if (mediaOptions.videoAudio) {
      requestData.media_url = ''
    }

    if (mediaOptions.image) {
      requestData.image_url = ''
    }

    if (mediaOptions.sourceLink) {
      requestData.source_link = ''
    }

    let res: { status: string; ref_id: string }

    if (isUpdate) {
      res = await api.put(`/schema/${data.ref_id}`, JSON.stringify(requestData), {})
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

const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1)

const fetchAndSetOptions = async (
  setOptions: (options: TOption[] | null) => void,
  filterFunc?: (schema: Schema) => boolean,
) => {
  try {
    const data = await getNodeSchemaTypes()
    const schemas = data.schemas || []

    const filteredSchemas = schemas.filter(
      (schema) => !schema.is_deleted && schema.type && (!filterFunc || filterFunc(schema)),
    )

    const options = filteredSchemas.map((schema) =>
      schema.type === 'thing'
        ? { label: 'No Parent', value: schema.type }
        : { label: capitalizeFirstLetter(schema.type), value: schema.type },
    )

    setOptions(options)
  } catch (error) {
    console.warn(error)
  }
}

export const Editor = ({
  graphLoading,
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

  const { watch, setValue, reset, getValues } = form

  const [loading, setLoading] = useState(false)
  const [onDeleteLoading, setOnDeleteLoading] = useState(false)

  const [parentsLoading, setParentsLoading] = useState(false)
  const [parentOptions, setParentOptions] = useState<TOption[] | null>(null)
  const [displayParentError, setDisplayParentError] = useState(false)
  const [selectedNodeParentOptions, setSelectedNodeParentOptions] = useState<TOption[] | null>(null)
  const [errMessage, setErrMessage] = useState<string>('')
  const [deleteError, setDeleteError] = useState<string | null>(null)
  const [deletedAttributes, setDeletedAttributes] = useState<string[]>([])
  const [parsedData, setParsedData] = useState<parsedObjProps[]>([])
  const [submitDisabled, setSubmitDisabled] = useState(true)

  const [mediaOptions, setMediaOptions] = useState({
    videoAudio: false,
    image: false,
    sourceLink: false,
  })

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

  useEffect(() => {
    if (!selectedSchema) {
      setParentsLoading(true)
      fetchAndSetOptions(setParentOptions).finally(() => setParentsLoading(false))
    }
  }, [selectedSchema])

  useEffect(() => {
    const init = async () => {
      if (selectedSchema) {
        setValue('type', selectedSchema?.type as string)
        setValue('parent', selectedSchema.parent)

        let parsedDataDefault: parsedObjProps[] = [{ required: false, type: 'string', key: '' }]

        if (selectedSchema.type !== NoParent.value.toLowerCase()) {
          const data = await getNodeType(selectedSchema.type as string)

          parsedDataDefault = data ? parseJson(data) : parsedDataDefault
        }

        parsedDataDefault = parsedDataDefault.filter((x) => x.key !== 'node_key')

        setParsedData(parsedDataDefault)

        await fetchAndSetOptions(setSelectedNodeParentOptions, (schema) => schema.type !== selectedSchema.type)
      }
    }

    init()
  }, [selectedSchema, setValue])

  const parent = watch('parent')

  const type = watch('type')

  const isAttributeArray = (value: unknown): value is Attribute[] =>
    Array.isArray(value) && value.every((item) => typeof item === 'object' && 'key' in item)

  const attributesValue = watch('attributes')

  const attributes: Attribute[] = useMemo(
    () => (isAttributeArray(attributesValue) ? attributesValue : []),
    [attributesValue],
  )

  const handleClose = () => {
    close()
  }

  const handleDeleteAttribute = (attributeKey: string) => {
    setDeletedAttributes((prev) => [...prev, attributeKey])
  }

  const handleDelete = async () => {
    if (!selectedSchema?.type) {
      return
    }

    setOnDeleteLoading(true)
    setGraphLoading(true)

    try {
      await api.delete(`/schema/${selectedSchema.ref_id}`)
      onDelete(selectedSchema.type)
      close()
    } catch (error) {
      let errorMessage = NODE_ADD_ERROR

      if ((error as Response)?.status === 400) {
        const errorRes = await (error as Response).json()

        errorMessage = errorRes.errorCode || errorRes?.status || NODE_ADD_ERROR
      } else if (error instanceof Error) {
        errorMessage = error.message
      }

      setDeleteError(errorMessage)
    } finally {
      setOnDeleteLoading(false)
      setGraphLoading(false)
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
      if (
        (selectedSchema && data.type !== selectedSchema?.type) ||
        (selectedSchema && getValues().parent !== selectedSchema?.parent)
      ) {
        const newParent = getValues().parent ?? selectedSchema?.parent

        setGraphLoading(true)

        await api.put(`/schema/${selectedSchema?.ref_id}`, JSON.stringify({ type: data.type, parent: newParent }))

        await onSchemaUpdate()
      }

      const res = await handleSubmitForm(
        { ...data, ...(selectedSchema ? { ref_id: selectedSchema?.ref_id } : {}) },
        !!selectedSchema,
        deletedAttributes,
        mediaOptions,
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

      setErrMessage(errorMessage)
    } finally {
      setLoading(false)
      setGraphLoading(false)
      setIsCreateNew(false)
    }
  })

  useEffect(() => {
    const subscription = form.watch((values) => {
      const isMatch = compareAttributes(attributes, parsedData)

      const isChanged =
        values.type?.trim() !== selectedSchema?.type?.trim() ||
        values.parent?.trim() !== selectedSchema?.parent?.trim() ||
        isMatch

      const isValidType = !!values.type?.trim()

      setSubmitDisabled(
        selectedSchema
          ? loading || !isChanged || !isValidType || displayParentError
          : loading || displayParentError || !isValidType,
      )
    })

    return () => subscription.unsubscribe()
  }, [form, attributes, parsedData, selectedSchema, loading, displayParentError])

  const resolvedParentValue = () => parentOptions?.find((i) => i.value === parent)

  const resolvedSelectedParentValue = (): TAutocompleteOption | undefined => {
    const option = selectedNodeParentOptions?.find((i) => i.value === parent)

    if (option) {
      return option
    }

    if (parent) {
      return { label: parent, value: parent }
    }

    return undefined
  }

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
                        dataTestId="cy-item-name"
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
                      isLoading={parentsLoading || graphLoading}
                      onSelect={(e) => {
                        setValue('parent', e?.value || '')
                        setDisplayParentError(false)
                      }}
                      options={selectedNodeParentOptions || []}
                      selectedValue={resolvedSelectedParentValue()}
                    />
                    {errMessage && <StyledError>{errMessage}</StyledError>}
                  </Flex>
                </>
              )}
            </Flex>
            <CreateCustomNodeAttribute
              onDelete={handleDeleteAttribute}
              parent={selectedSchema ? selectedSchema.type : parent}
            />
            <MediaOptions setMediaOptions={setMediaOptions} />
            <Flex direction="row" justify="space-between" mt={20}>
              {selectedSchema && (
                <Flex direction="column">
                  <DeleteButton
                    color="secondary"
                    disabled={onDeleteLoading}
                    onClick={handleDelete}
                    size="large"
                    style={{ marginRight: 20 }}
                    variant="contained"
                  >
                    Delete
                    {onDeleteLoading && (
                      <ClipLoaderWrapper>
                        <ClipLoader color={colors.lightGray} size={12} />{' '}
                      </ClipLoaderWrapper>
                    )}
                  </DeleteButton>
                  {deleteError && <StyledError>{deleteError}</StyledError>}
                </Flex>
              )}

              <CustomButton
                color="secondary"
                disabled={submitDisabled}
                onClick={onSubmit}
                size="large"
                variant="contained"
              >
                Confirm
                {loading && (
                  <ClipLoaderWrapper>
                    <ClipLoader color={colors.lightGray} size={12} />{' '}
                  </ClipLoaderWrapper>
                )}
              </CustomButton>
            </Flex>
          </form>
        </FormProvider>
      </Flex>
    </Flex>
  )
}

const CustomButton = styled(Button)`
  width: 100% !important;
  margin: 0 auto !important;
`

const ClipLoaderWrapper = styled.span`
  margin-top: 2px;
`

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
  padding-top: 20px;
`
