/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Grid } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { NoParent } from '~/components/AddItemModal/SourceTypeStep/constants'
import { TOption } from '~/components/AddItemModal/SourceTypeStep/types'
import { Icons } from '~/components/Icons'
import ClearIcon from '~/components/Icons/ClearIcon'
import { AutoComplete, TAutocompleteOption } from '~/components/common/AutoComplete'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TextInput } from '~/components/common/TextInput'
import { NODE_ADD_ERROR, requiredRule } from '~/constants'
import { api } from '~/network/api'
import { Schema, editNodeSchemaUpdate, getNodeSchemaTypes, getNodeType } from '~/network/fetchSourcesData'
import { useAppStore } from '~/stores/useAppStore'
import { useModal } from '~/stores/useModalStore'
import { colors } from '~/utils'
import { ColorPickerPopover } from './ColorPickerPopover'
import { CreateCustomNodeAttribute } from './CustomAttributesStep'
import MediaOptions from './MediaOptions'
import { convertAttributes, parseJson, parsedObjProps } from './utils'

const defaultValues = {
  type: '',
  parent: '',
}

export type FormData = {
  type: string
  parent?: string
  node_key: string
  type_description?: string
  attributes?: {
    [k: string]: string | boolean
  }
  selectedIndex?: string
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
  selectedColor: string,
  selectedIcon: string,
  mediaOptions: { videoAudio: boolean; image: boolean; sourceLink: boolean },
  initialMediaOptions: { videoAudio: boolean; image: boolean; sourceLink: boolean },
  nodeKeys: string[],
): Promise<string | undefined> => {
  try {
    // eslint-disable-next-line camelcase
    const { attributes, selectedIndex, ref_id, ...withoutAttributes } = data

    const updatedAttributes = {
      ...convertAttributes(attributes),
      ...deletedAttributes.reduce<{ [key: string]: string }>((acc, key) => ({ ...acc, [key]: 'delete' }), {}),
    }

    const requestData: {
      attributes: { [key: string]: string }
      index?: string
      primary_color?: string
      icon?: string
      node_key: string
    } = {
      ...withoutAttributes,
      attributes: updatedAttributes,
      index: selectedIndex,
      node_key: nodeKeys.join('-') || 'name',
    }

    if (selectedColor) {
      requestData.primary_color = selectedColor
    }

    if (selectedIcon) {
      requestData.icon = selectedIcon
    }

    if (mediaOptions.videoAudio) {
      requestData.attributes.media_url = '?string'
    }

    if (mediaOptions.image) {
      requestData.attributes.image_url = '?string'
    }

    if (mediaOptions.sourceLink) {
      requestData.attributes.source_link = '?string'
    }

    let res: { status: string; ref_id: string }

    if (isUpdate) {
      res = await api.put(`/schema/${data.ref_id}`, JSON.stringify(requestData), {})
    } else {
      res = await api.post(`/schema`, JSON.stringify(requestData), {})
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

    const options = filteredSchemas
      .map((schema) =>
        schema.type === 'thing'
          ? { label: 'No Parent', value: schema.type }
          : { label: capitalizeFirstLetter(schema.type), value: schema.type },
      )
      .filter((option, index, self) => index === self.findIndex((o) => o.value === option.value))

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
          type_description: selectedSchema.type_description,
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
  const [selectedNodeKeys, setSelectedNodeKeys] = useState<string[]>(['name'])

  const [mediaOptions, setMediaOptions] = useState({
    videoAudio: false,
    image: false,
    sourceLink: false,
  })

  const { selectedColor, selectedIcon } = useAppStore((s) => s)
  const [isPopoverOpen, setPopoverOpen] = useState(false)

  const handleColorPickerPopover = () => setPopoverOpen(!isPopoverOpen)

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
    const resetForm = () => {
      reset(defaultValues)
      setParsedData([{ required: false, type: 'string', key: '' }])
      setDeletedAttributes([])

      setMediaOptions({
        videoAudio: false,
        image: false,
        sourceLink: false,
      })
    }

    resetForm()

    if (selectedSchema) {
      setValue('type', selectedSchema.type as string)
      setValue('parent', selectedSchema.parent)

      if (selectedSchema.index) {
        setValue('selectedIndex', selectedSchema.index)
      }

      setMediaOptions({
        videoAudio: !!selectedSchema.media_url,
        image: !!selectedSchema.image_url,
        sourceLink: !!selectedSchema.source_link,
      })

      if (selectedSchema.type !== NoParent.value.toLowerCase()) {
        getNodeType(selectedSchema.type as string).then((data) => {
          const parsedDataDefault = data ? parseJson(data) : [{ required: false, type: 'string', key: '' }]
          const filteredData = parsedDataDefault.filter((x) => x.key !== 'node_key')

          setParsedData(filteredData)
        })
      }

      fetchAndSetOptions(setSelectedNodeParentOptions, (schema) => schema.type !== selectedSchema.type)
    }
  }, [selectedSchema, setValue, reset])

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

  const handleNodeKeySelect = (val: TAutocompleteOption | null) => {
    if (val) {
      const newValue = val.value

      const updatedKeys = selectedNodeKeys.includes(newValue)
        ? selectedNodeKeys.filter((key) => key !== newValue)
        : [...selectedNodeKeys, newValue]

      setSelectedNodeKeys(updatedKeys)
      setValue('node_key', updatedKeys.join('-'))
    }
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
        const { selectedIndex } = getValues()

        setGraphLoading(true)

        const toggleMedia: { image_url?: string; source_link?: string; media_url?: string } = {}

        if (mediaOptions.image) {
          toggleMedia.image_url = '?string'
        }

        if (mediaOptions.sourceLink) {
          toggleMedia.source_link = '?string'
        }

        if (mediaOptions.videoAudio) {
          toggleMedia.media_url = '?string'
        }

        await editNodeSchemaUpdate(selectedSchema?.ref_id as string, {
          type: data.type,
          parent: newParent as string,
          primary_color: selectedColor,
          icon: selectedIcon,
          attributes: {
            ...toggleMedia,
            index: selectedIndex as string,
          },
        })

        await onSchemaUpdate()
      }

      const res = await handleSubmitForm(
        { ...data, ...(selectedSchema ? { ref_id: selectedSchema?.ref_id } : {}) },
        !!selectedSchema,
        deletedAttributes,
        selectedColor,
        selectedIcon,
        mediaOptions,
        {
          videoAudio: !!selectedSchema?.media_url,
          image: !!selectedSchema?.image_url,
          sourceLink: !!selectedSchema?.source_link,
        },
        selectedNodeKeys,
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
    if (selectedColor !== selectedSchema?.primary_color) {
      setSubmitDisabled(false)
    }

    const subscription = form.watch((values) => {
      const isMatch = compareAttributes(attributes, parsedData)

      const isChanged =
        values.type?.trim() !== selectedSchema?.type?.trim() ||
        values.parent?.trim() !== selectedSchema?.parent?.trim() ||
        isMatch

      const isValidType = !!values.type?.trim()
      const isValidParent = !!values.parent?.trim()

      setSubmitDisabled(
        selectedSchema
          ? loading || !isChanged || !isValidType || displayParentError
          : loading || displayParentError || !isValidType || !isValidParent,
      )
    })

    return () => subscription.unsubscribe()
  }, [form, attributes, parsedData, selectedSchema, loading, displayParentError, selectedColor])

  const resolvedParentValue = () => parentOptions?.find((i) => i.value === parent)

  const resolvedSelectedParentValue = useMemo((): TAutocompleteOption | undefined => {
    if (parent) {
      const option = selectedNodeParentOptions?.find((i) => i.value === parent)

      if (option) {
        return option
      }

      return { label: parent, value: parent }
    }

    if (selectedSchema?.parent) {
      const option = selectedNodeParentOptions?.find((i) => i.value === selectedSchema.parent)

      if (option) {
        return option
      }

      return { label: selectedSchema.parent, value: selectedSchema.parent }
    }

    return undefined
  }, [parent, selectedSchema, selectedNodeParentOptions])

  const selectedIndex = watch('selectedIndex')

  const resolvedSelectedIndexValue = useMemo((): TAutocompleteOption | undefined => {
    if (selectedIndex) {
      return { label: selectedIndex, value: selectedIndex }
    }

    if (selectedSchema) {
      const option = attributes.find((attr) => attr.key === selectedSchema.index)

      if (option) {
        return { label: option.key, value: option.key }
      }

      if (selectedSchema.index) {
        return { label: selectedSchema.index, value: selectedSchema.index }
      }
    }

    return undefined
  }, [selectedSchema, attributes, selectedIndex])

  const IconComponent = Icons[selectedIcon as keyof typeof Icons]

  const parentType = selectedSchema ? selectedSchema.type : parent

  return (
    <Flex>
      <HeaderRow>
        <HeaderText>{selectedSchema ? 'Edit Type' : 'Create Type'}</HeaderText>
        <CloseButton data-testid="close-sidebar-sub-view" onClick={onCancel}>
          <ClearIcon />
        </CloseButton>
      </HeaderRow>
      <LineBarWrapper />
      <Flex>
        <FormProvider {...form}>
          <form id="add-type-form" onSubmit={onSubmit}>
            <Flex>
              {!selectedSchema ? (
                <>
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
                      options={parentOptions}
                      selectedValue={resolvedParentValue()}
                    />

                    {displayParentError && <StyledError>A parent type must be selected</StyledError>}
                  </Flex>

                  <Flex>
                    <Flex mb={12}>
                      <Text>Name</Text>
                    </Flex>
                    <Flex mb={12}>
                      <InputIconWrapper>
                        <InputWrapper>
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
                        </InputWrapper>
                        <ColorPickerIconWrapper onClick={handleColorPickerPopover} selectedColor={selectedColor}>
                          {IconComponent && <IconComponent />}
                        </ColorPickerIconWrapper>
                      </InputIconWrapper>
                    </Flex>
                  </Flex>
                </>
              ) : (
                <>
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
                      selectedValue={resolvedSelectedParentValue}
                    />
                    {errMessage && <StyledError>{errMessage}</StyledError>}
                  </Flex>
                  <Flex mb={12}>
                    <Flex mb={12}>
                      <Text>Name</Text>
                    </Flex>
                    <Flex mb={12}>
                      <InputIconWrapper>
                        <InputWrapper>
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
                        </InputWrapper>
                        <ColorPickerIconWrapper onClick={handleColorPickerPopover} selectedColor={selectedColor}>
                          <IconComponent />
                        </ColorPickerIconWrapper>
                      </InputIconWrapper>
                    </Flex>
                  </Flex>
                </>
              )}
            </Flex>

            <Flex mb={12}>
              <Flex mb={12}>
                <Text>Description</Text>
              </Flex>
              <Flex mb={12}>
                <InputWrapper>
                  <TextInput
                    dataTestId="cy-item-description"
                    defaultValue={selectedSchema?.type_description}
                    id="cy-item-description"
                    maxLength={500}
                    name="type_description"
                    placeholder="Enter type description"
                  />
                </InputWrapper>
              </Flex>
            </Flex>

            {parentType && (
              <CreateCustomNodeAttribute
                onDelete={handleDeleteAttribute}
                parent={selectedSchema ? selectedSchema.type : parent}
              />
            )}
            <MediaOptions
              initialOptions={mediaOptions}
              setMediaOptions={setMediaOptions}
              setSubmitDisabled={setSubmitDisabled}
            />

            {parentType && (
              <Flex>
                <LineBar />
                <Flex mb={12} mt={12}>
                  <Text>Node Keys</Text>
                </Flex>
                <Grid item mb={2} width="70%">
                  <AutoComplete
                    onSelect={handleNodeKeySelect}
                    options={[
                      { label: 'name', value: 'name' },
                      ...attributes
                        .filter((attr) => attr.key && attr.key !== 'name' && !attr.type?.includes('?'))
                        .map((attr) => ({ label: attr.key, value: attr.key })),
                    ]}
                    selectedValue={
                      selectedNodeKeys.length > 0
                        ? {
                            label: selectedNodeKeys.join(' - '),
                            value: selectedNodeKeys.join('-'),
                          }
                        : { label: 'name', value: 'name' }
                    }
                  />
                </Grid>
                <LineBar />
              </Flex>
            )}

            {parentType && (
              <Flex>
                <LineBar />
                <Flex mb={12} mt={12}>
                  <Text>Indexes</Text>
                </Flex>
                <Grid item mb={2} width="70%">
                  <AutoComplete
                    onSelect={(val) => setValue('selectedIndex', val?.value || '')}
                    options={attributes
                      .filter((attr) => attr.key)
                      .map((attr) => ({ label: attr.key, value: attr.key }))}
                    selectedValue={resolvedSelectedIndexValue}
                  />
                </Grid>
                <LineBar />
              </Flex>
            )}

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
        <ColorPickerPopover isOpen={isPopoverOpen} onClose={handleColorPickerPopover} />
      </Flex>
    </Flex>
  )
}

const CustomButton = styled(Button)`
  width: 400px !important;
  margin: 0 auto !important;
`

const LineBarWrapper = styled.div`
  border-bottom: 1px solid ${colors.black};
  width: calc(100% + 32px);
  margin: 0 -16px 16px;
  opacity: 0.3;
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

  svg {
    color: ${colors.GRAY6};
  }

  &:hover {
    svg {
      color: ${colors.white};
    }
  }
`

const StyledError = styled(Flex)`
  font-size: 13px;
  font-family: Barlow;
  color: #ff8f80;
  line-height: 0.2px;
  margin-top: 12px;
  padding-top: 20px;
`

const LineBar = styled.div`
  border: 1px solid ${colors.BG2};
  width: calc(100% + 32px);
  opacity: 0.5;
  margin-left: -16px;
`

const HeaderRow = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`

const HeaderText = styled(Text)`
  font-family: Barlow;
  font-size: 22px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-align: left;
  color: ${colors.white};
`

const ColorPickerIconWrapper = styled.span<{ selectedColor?: string }>`
  width: 36px;
  height: 36px;
  border-radius: 6px;
  margin-left: 12px;
  margin-block-start: 3px;
  background: ${(props) => props.selectedColor ?? colors.THING};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  svg {
    width: 22px;
    height: 22px;
    object-fit: contain;
    color: white;

    rect {
      width: 1.5em;
      height: 1.5em;
    }
  }
`

const InputIconWrapper = styled(Flex)`
  justify-content: space-between;
  flex-direction: row;
  position: relative;
  display: flex;
`

const InputWrapper = styled(Flex)`
  width: 320px;
`
