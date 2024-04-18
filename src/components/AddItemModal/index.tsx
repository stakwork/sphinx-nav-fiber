import { JSX, useEffect, useState } from 'react'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import * as sphinx from 'sphinx-bridge'
import { BaseModal, ModalKind } from '~/components/Modal'
import { NODE_ADD_ERROR } from '~/constants'
import { api } from '~/network/api'
import { useDataStore } from '~/stores/useDataStore'
import { useModal } from '~/stores/useModalStore'
import { useUserStore } from '~/stores/useUserStore'
import { NodeExtended, SubmitErrRes } from '~/types'
import { executeIfProd, getLSat } from '~/utils'
import { SuccessNotify } from '../common/SuccessToast'
import { BudgetStep } from './BudgetStep'
import { CreateConfirmation } from './CreateConfirmationStep'
import { SetAttributesStep } from './SetAttributesStep'
import { SourceStep } from './SourceStep'
import { SourceTypeStep } from './SourceTypeStep'

export type FormData = {
  typeName: string
  nodeType: string
  sourceLink?: string
  type?: string
} & Partial<{ [k: string]: string }>

export type AddItemModalStepID = 'sourceType' | 'source' | 'setBudget' | 'createConfirmation' | 'setAttribues'

const handleSubmitForm = async (
  data: FieldValues,
  setBudget: (value: number | null) => void,
  onAddNewData: (value: FieldValues, id: string) => void,
): Promise<void> => {
  if (data.nodeType === 'Create custom type') {
    const body: { [index: string]: unknown } = {}

    body.type = data.type

    try {
      const res: SubmitErrRes = await api.post(`/${'schema'}`, JSON.stringify(data), {})

      if (res.error) {
        const { message } = res.error

        throw new Error(message)
      }

      onAddNewData(data, res?.data?.ref_id)
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
  } else {
    const endPoint = 'node'

    const { nodeType, typeName, ...nodeData } = data

    const body: { [index: string]: unknown } = {
      node_data: { ...nodeData },
      node_type: nodeType,
      name: typeName,
    }

    if (data.nodeType === 'Image') {
      body.node_data = {
        ...data.node_data,
        source_link: data.sourceLink,
      }
    }

    let lsatToken = ''

    // skipping this for end to end test because it requires a sphinx-relay to be connected
    await executeIfProd(async () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const enable = await sphinx.enable()

      body.pubkey = enable?.pubkey

      lsatToken = await getLSat()
    })

    try {
      const res: SubmitErrRes = await api.post(`/${endPoint}`, JSON.stringify(body), {
        Authorization: lsatToken,
      })

      if (res.error) {
        const { message } = res.error

        throw new Error(message)
      }

      onAddNewData(data, res?.data?.ref_id)

      // eslint-disable-next-line no-restricted-globals
      close()

      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    } catch (err: any) {
      let errorMessage = NODE_ADD_ERROR

      if (err.status === 400) {
        try {
          const errorRes = await err.json()

          errorMessage = errorRes.message || errorRes.errorCode || errorRes?.status || NODE_ADD_ERROR
        } catch (parseError) {
          errorMessage = NODE_ADD_ERROR
        }
      } else if (err instanceof Error) {
        errorMessage = err.message
      }

      throw new Error(errorMessage)
    }
  }
}

export const AddItemModal = () => {
  const [stepId, setStepId] = useState<AddItemModalStepID>('sourceType')
  const { close, visible } = useModal('addItem')
  const { open: openTypeModal } = useModal('addType')
  const [setBudget] = useUserStore((s) => [s.setBudget])
  const form = useForm<FormData>({ mode: 'onChange' })
  const { watch, setValue, reset } = form
  const [loading, setLoading] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<string>('')

  const [addNewNode, setSelectedNode] = useDataStore((s) => [s.addNewNode, s.setSelectedNode])

  useEffect(
    () => () => {
      setStepId('sourceType')
      reset()
    },
    [visible, reset],
  )

  const nodeType = watch('nodeType')
  const name = watch('typeName')
  const sourceLink = watch('sourceLink')
  const type = watch('type')

  watch('title')

  const handleClose = () => {
    close()
  }

  const skipToStep = (step: AddItemModalStepID) => {
    setStepId(step)
  }

  const onAddNewNode = (data: FieldValues, id: string) => {
    const newId = id || `new-id-${Math.random()}`
    const newType = data.nodeType.toLocaleLowerCase()

    const node: NodeExtended = {
      name: data.typeName,
      type: newType,
      label: data.typeName,
      node_type: newType,
      id: newId,
      ref_id: newId,
      x: Math.random(),
      y: Math.random(),
      z: Math.random(),
      date: parseInt((new Date().getTime() / 1000).toFixed(0), 10),
      weight: 4,
      ...(data.sourceLink ? { source_link: data.sourceLink } : {}),
    }

    addNewNode(node)

    setSelectedNode(node)
  }

  const onSubmit = form.handleSubmit(async (data) => {
    setLoading(true)

    try {
      await handleSubmitForm(data, setBudget, onAddNewNode)
      SuccessNotify('Item Added')
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

      setError(String(errorMessage))
    } finally {
      setLoading(false)
    }
  })

  const handleSelectType = (val: string) => {
    if (val === 'Create custom type') {
      openTypeModal()
    } else {
      setValue('nodeType', val)
    }
  }

  const AddItemModalStepMapper: Record<AddItemModalStepID, JSX.Element> = {
    sourceType: (
      <SourceTypeStep
        allowNextStep={!!nodeType}
        onSelectType={handleSelectType}
        selectedType={nodeType}
        skipToStep={skipToStep}
      />
    ),
    source: <SourceStep name={name} skipToStep={skipToStep} sourceLink={sourceLink || ''} type={nodeType} />,
    setBudget: <BudgetStep loading={loading} onClick={() => null} />,
    createConfirmation: <CreateConfirmation onclose={handleClose} type={type} />,
    setAttribues: <SetAttributesStep handleSelectType={handleSelectType} nodeType={nodeType} skipToStep={skipToStep} />,
  }

  const modalKind: ModalKind = 'small'

  return (
    <BaseModal id="addItem" kind={modalKind} onClose={close} preventOutsideClose>
      <FormProvider {...form}>
        <form id="add-node-form" onSubmit={onSubmit}>
          {AddItemModalStepMapper[stepId]}
        </form>
      </FormProvider>
    </BaseModal>
  )
}
