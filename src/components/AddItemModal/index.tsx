import { JSX, useEffect, useState } from 'react'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import * as sphinx from 'sphinx-bridge'
import { BaseModal } from '~/components/Modal'
import { notify } from '~/components/common/Toast/toastMessage'
import { NODE_ADD_ERROR, NODE_ADD_SUCCESS } from '~/constants'
import { api } from '~/network/api'
import { useDataStore } from '~/stores/useDataStore'
import { useModal } from '~/stores/useModalStore'
import { useUserStore } from '~/stores/useUserStore'
import { NodeExtended, SubmitErrRes } from '~/types'
import { executeIfProd, getLSat } from '~/utils'
import { BudgetStep } from './BudgetStep'
import { CreateCustomTypeStep, SelectCustomNodeParent } from './CreateCustomTypeStep'
import { SourceStep } from './SourceStep'
import { SourceTypeStep } from './SourceTypeStep'

export type FormData = {
  name: string
  nodeType: string
  sourceLink?: string
}

export type AddItemModalStepID = 'sourceType' | 'source' | 'selectParent' | 'createType' | 'setBudget'

const handleSubmitForm = async (
  data: FieldValues,
  close: () => void,
  setBudget: (value: number | null) => void,
  onAddNewData: (value: FieldValues, id: string) => void,
): Promise<void> => {
  const endPoint = 'node'

  const body: { [index: string]: unknown } = {}

  body.node_type = data.nodeType
  body.name = data.name

  if (data.nodeType === 'Image') {
    body.node_data = {
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

    notify(NODE_ADD_SUCCESS)
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

export const AddItemModal = () => {
  const [stepId, setStepId] = useState<AddItemModalStepID>('sourceType')
  const { close, visible } = useModal('addItem')
  const [setBudget] = useUserStore((s) => [s.setBudget])
  const form = useForm<FormData>({ mode: 'onChange' })
  const { watch, setValue, reset } = form
  const [loading, setLoading] = useState(false)
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
  const name = watch('name')
  const sourceLink = watch('sourceLink')

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
      name: data.name,
      type: newType,
      label: data.name,
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
      await handleSubmitForm(data, handleClose, setBudget, onAddNewNode)
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message)
      }

      setError(String(e))
    } finally {
      setLoading(false)
    }
  })

  const handleSelectType = (val: string) => setValue('nodeType', val)

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
    selectParent: <SelectCustomNodeParent onSelectType={handleSelectType} skipToStep={skipToStep} />,
    createType: <CreateCustomTypeStep onSelectType={handleSelectType} skipToStep={skipToStep} />,
    setBudget: <BudgetStep loading={loading} onClick={() => null} />,
  }

  return (
    <BaseModal id="addItem" kind="small" onClose={close} preventOutsideClose>
      <FormProvider {...form}>
        <form id="add-node-form" onSubmit={onSubmit}>
          {AddItemModalStepMapper[stepId]}
        </form>
      </FormProvider>
    </BaseModal>
  )
}
