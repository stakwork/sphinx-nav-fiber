/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import { BaseModal } from '~/components/Modal'
import { AutoComplete } from '~/components/common/AutoComplete'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TextInput } from '~/components/common/TextInput'
import { NODE_ADD_ERROR, requiredRule } from '~/constants'
import { api } from '~/network/api'
import { getNodeSchemaTypes } from '~/network/fetchSourcesData'
import { useModal } from '~/stores/useModalStore'
import { SubmitErrRes } from '~/types'
import { colors } from '~/utils'
import { TOption } from '../AddItemModal/SourceTypeStep/types'
import { CreateCustomNodeAttribute } from './CustomAttributesStep'
import { convertAttributes } from './utils'

type Props = {
  onSchemaCreate: (schema: { type: string }) => void
}

export type FormData = {
  type: string
  parent?: string
  attributes?: {
    [k: string]: string | boolean
  }
}

const handleSubmitForm = async (data: FieldValues): Promise<void> => {
  try {
    const { attributes, ...withoutAttributes } = data

    const requestData = {
      ...withoutAttributes,
      ...convertAttributes(attributes),
    }

    const res: SubmitErrRes = await api.post(`/${'schema'}`, JSON.stringify(requestData), {})

    if (res.error) {
      const { message } = res.error

      throw new Error(message)
    }
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

export const AddTypeModal = ({ onSchemaCreate }: Props) => {
  const { close, visible } = useModal('addType')
  const form = useForm<FormData>({ mode: 'onChange' })
  const { watch, setValue, reset } = form
  const [loading, setLoading] = useState(false)
  const [parentsLoading, setParentsLoading] = useState(false)
  const [parentOptions, setParentOptions] = useState<TOption[] | null>(null)

  useEffect(
    () => () => {
      reset()
    },
    [visible, reset],
  )

  useEffect(() => {
    const init = async () => {
      setParentsLoading(true)

      try {
        const data = await getNodeSchemaTypes()

        const schemaOptions = data.schemas.map((schema) =>
          schema?.type === 'thing'
            ? { label: 'No Parent', value: schema.type }
            : {
                label: schema.type,
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

    init()
  }, [])

  const parent = watch('parent')

  const handleClose = () => {
    close()
  }

  const onSubmit = form.handleSubmit(async (data) => {
    setLoading(false)

    try {
      await handleSubmitForm(data)
      onSchemaCreate({ type: data.type })
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
    }
  })

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
                onSelect={(e) => setValue('parent', e?.value || '')}
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
                placeholder="Enter type name"
                rules={{
                  ...requiredRule,
                }}
                value={parent}
              />
            </Flex>
          </Flex>
          <CreateCustomNodeAttribute parent={parent} />
          <Flex direction="row" justify="center" mt={20}>
            <Button
              color="secondary"
              disabled={loading}
              onClick={onSubmit}
              size="large"
              startIcon={loading ? <ClipLoader color={colors.white} size={24} /> : null}
              variant="contained"
            >
              Save
            </Button>
          </Flex>
        </form>
      </FormProvider>
    </BaseModal>
  )
}
