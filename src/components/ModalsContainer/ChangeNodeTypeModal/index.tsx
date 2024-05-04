import { JSX, useEffect, useState } from 'react'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import * as sphinx from 'sphinx-bridge'
import { BaseModal, ModalKind } from '~/components/Modal'
import { NODE_ADD_ERROR } from '~/constants'
import { api } from '~/network/api'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { useModal } from '~/stores/useModalStore'
import { useUserStore } from '~/stores/useUserStore'
import { NodeExtended, SubmitErrRes } from '~/types'
import { executeIfProd, getLSat } from '~/utils'
import { CreateConfirmation } from './CreateConfirmationStep'
import { MapPropertiesStep } from './MapPropertiesStep'
import { SourceStep } from './SourceStep'
import { SourceTypeStep } from './SourceTypeStep'

export type FormData = {
  typeName: string
  nodeType: string
  sourceLink?: string
  type?: string
} & Partial<{ [k: string]: string }>

export type MapNodeTypeModalStepID = 'sourceType' | 'source' | 'createConfirmation' | 'mapProperties'

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

export const ChangeNodeTypeModal = () => {
  const [stepId, setStepId] = useState<MapNodeTypeModalStepID>('sourceType')
  const { close, visible } = useModal('changeNodeType')
  const { open: openEditNodeNameModal } = useModal('editNodeName')
  const { open: openTypeModal } = useModal('addType')
  const [setBudget] = useUserStore((s) => [s.setBudget])
  const form = useForm<FormData>({ mode: 'onChange' })
  const { watch, setValue, reset } = form
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

  const selectedNode = useSelectedNode()

  const selectedNodeType = selectedNode?.node_type
    ? selectedNode.node_type.charAt(0).toUpperCase() + selectedNode.node_type.slice(1)
    : ''

  const nodeType = watch('nodeType')
  const name = watch('typeName')
  const sourceLink = watch('sourceLink')
  const type = watch('type')

  watch('title')

  const handleClose = () => {
    close()
  }

  const skipToStep = (step: MapNodeTypeModalStepID) => {
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
    try {
      await handleSubmitForm(data, setBudget, onAddNewNode)
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
    }
  })

  const handleSelectType = (val: string) => {
    if (val === 'Create custom type') {
      openTypeModal()
    } else {
      setValue('nodeType', val)
    }
  }

  const AddItemModalStepMapper: Record<MapNodeTypeModalStepID, JSX.Element> = {
    sourceType: (
      <SourceTypeStep
        allowNextStep={!!nodeType}
        onSelectType={handleSelectType}
        selectedType={nodeType}
        skipToStep={skipToStep}
      />
    ),
    source: <SourceStep name={name} skipToStep={skipToStep} sourceLink={sourceLink || ''} type={nodeType} />,
    createConfirmation: <CreateConfirmation onclose={handleClose} type={type} />,
    mapProperties: (
      <MapPropertiesStep
        handleSelectType={handleSelectType}
        nodeType={nodeType}
        selectedNodeType={selectedNodeType}
        skipToStep={skipToStep}
      />
    ),
  }

  const modalKind: ModalKind = stepId === 'mapProperties' ? 'regular' : 'small'

  const handleCloseModal = () => {
    close()
    openEditNodeNameModal()
  }

  return (
    <BaseModal id="changeNodeType" kind={modalKind} onClose={handleCloseModal} preventOutsideClose>
      <FormProvider {...form}>
        <form id="add-node-form" onSubmit={onSubmit}>
          {AddItemModalStepMapper[stepId]}
        </form>
      </FormProvider>
    </BaseModal>
  )
}
