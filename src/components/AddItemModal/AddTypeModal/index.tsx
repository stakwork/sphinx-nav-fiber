/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import { BaseModal } from '~/components/Modal'
import { AutoComplete } from '~/components/common/AutoComplete'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TextInput } from '~/components/common/TextInput'
import { notify } from '~/components/common/Toast/toastMessage'
import { NODE_ADD_ERROR, NODE_ADD_SUCCESS, requiredRule } from '~/constants'
import { api } from '~/network/api'
import { getNodeSchemaTypes } from '~/network/fetchSourcesData'
import { useModal } from '~/stores/useModalStore'
import { useUserStore } from '~/stores/useUserStore'
import { SubmitErrRes } from '~/types'
import { capitalizeString } from '~/utils/capitalize'
import { NoParent } from '../SourceTypeStep/constants'
import { TOption } from '../SourceTypeStep/types'
import { CreateCustomNodeAttribute } from './CustomAttributesStep'

export type FormData = {
  name: string
  nodeType: string
  sourceLink?: string
  type?: string
} & Partial<{ [k: string]: string }>

export type AddItemModalStepID =
  | 'sourceType'
  | 'source'
  | 'selectParent'
  | 'createType'
  | 'setBudget'
  | 'createNodeType'
  | 'createConfirmation'

const handleSubmitForm = async (data: FieldValues, setBudget: (value: number | null) => void): Promise<void> => {
  const body: { [index: string]: unknown } = {}

  body.type = data.type

  try {
    const res: SubmitErrRes = await api.post(`/${'schema'}`, JSON.stringify(data), {})

    if (res.error) {
      const { message } = res.error

      throw new Error(message)
    }

    notify(NODE_ADD_SUCCESS)
    // eslint-disable-next-line no-restricted-globals
    close()

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
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

export const AddTypeModal = () => {
  const [stepId, setStepId] = useState<AddItemModalStepID>('sourceType')
  const { close, visible } = useModal('addType')
  const [setBudget] = useUserStore((s) => [s.setBudget])
  const form = useForm<FormData>({ mode: 'onChange' })
  const { watch, setValue, reset } = form
  const [parentsLoading, setParentsLoading] = useState(false)
  const [parentOptions, setParentOptions] = useState<TOption[] | null>(null)
  const [selectedParent, setSelectedParent] = useState('')
  const [typeName, setTypeName] = useState('')

  useEffect(
    () => () => {
      setStepId('sourceType')
      reset()
    },
    [visible, reset],
  )

  useEffect(() => {
    const init = async () => {
      setParentsLoading(true)

      try {
        const data = await getNodeSchemaTypes()

        const schemaOptions = data.schemas.map((schema) => ({
          label: capitalizeString(schema.type),
          value: schema.type,
        }))

        setParentOptions([...schemaOptions, NoParent])
      } catch (error) {
        console.warn(error)
      } finally {
        setParentsLoading(false)
      }
    }

    init()
  }, [])

  const nodeType = watch('nodeType')
  const name = watch('name')
  const sourceLink = watch('sourceLink')
  const type = watch('type')

  watch('title')

  const handleClose = () => {
    close()
  }

  const skipToStep = (step: AddItemModalStepID) => {
    setStepId(step)
  }

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      await handleSubmitForm(data, setBudget)
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
      //   setLoading(false)
    }
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const handleSelectType = (val: string) => setValue('nodeType', val)

  return (
    <BaseModal id="addType" kind="regular" onClose={close} preventOutsideClose>
      <FormProvider {...form}>
        <form id="add-type-form" onSubmit={onSubmit}>
          <Flex>
            <Flex align="center" direction="row" justify="space-between" mb={18}>
              <Flex align="center" direction="row">
                <Text>Enter details</Text>
              </Flex>
            </Flex>
            <Flex mb={20}>
              <Text>Select Parent</Text>
            </Flex>
            <Flex direction="row" mb={20}>
              <AutoComplete
                autoFocus
                isLoading={parentsLoading}
                onSelect={(e) => setSelectedParent(e?.value || '')}
                options={parentOptions}
              />
            </Flex>

            <Flex mb={4}>
              <Text>Type name</Text>
            </Flex>
            <Flex mb={12}>
              <TextInput
                id="cy-item-name"
                maxLength={250}
                name="type"
                onChange={setTypeName}
                placeholder="Enter type name"
                rules={{
                  ...requiredRule,
                }}
                value={selectedParent}
              />
            </Flex>
          </Flex>
          <CreateCustomNodeAttribute parent={selectedParent} typeName="handleSelectType" />
        </form>
      </FormProvider>
    </BaseModal>
  )
}
