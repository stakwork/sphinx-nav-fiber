import { JSX, useEffect, useState } from 'react'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import { BaseModal, ModalKind } from '~/components/Modal'
import { RequiredPropertiesStep } from '~/components/ModalsContainer/ChangeNodeTypeModal/RequiredPropertiesStep'
import { NODE_ADD_ERROR } from '~/constants'
import { changeNodeType, getTopicsData } from '~/network/fetchSourcesData'
import { useSelectedNode } from '~/stores/useDataStore'
import { useModal } from '~/stores/useModalStore'
import { NodeExtended, Topic } from '~/types'
import { CreateConfirmation } from './CreateConfirmationStep'
import { MapPropertiesStep } from './MapPropertiesStep'
import { SourceTypeStep } from './SourceTypeStep'

export type FormData = {
  typeName: string
  nodeType: string
  sourceLink?: string
  type?: string
} & Partial<{ [k: string]: string }>

export type MapNodeTypeModalStepID = 'sourceType' | 'requiredProperties' | 'createConfirmation' | 'mapProperties'
export type SelectedValues = { [key: string]: string }

const handleSubmitForm = async (
  requiredFieldsData: FieldValues,
  nodeType: string,
  selectedValues: SelectedValues,
  selectedNode: NodeExtended | null,
): Promise<void> => {
  const swappedValues: SelectedValues = {}

  const propertiesToBeDeleted: string[] = []

  Object.entries(selectedValues).forEach(([key, value]) => {
    if (value !== 'none') {
      swappedValues[value] = key
    }

    if (key !== value) {
      propertiesToBeDeleted.push(key)
    }
  })

  const properties: { [key: string]: unknown } = {}

  Object.keys(selectedNode || {}).forEach((selectedNodeKey) => {
    const selectedNodeValue = selectedNode?.[selectedNodeKey as keyof NodeExtended]

    Object.entries(swappedValues).forEach(([key, value]) => {
      if (value === selectedNodeKey) {
        properties[swappedValues[key]] = selectedNodeValue as string
      }
    })
  })

  Object.keys(requiredFieldsData).forEach((key) => {
    if (key !== 'nodeType') {
      properties[key] = requiredFieldsData[key]
    }
  })

  const body: { [index: string]: unknown } = {
    node_type: nodeType,
    properties,
    properties_to_be_deleted: propertiesToBeDeleted,
  }

  try {
    let Id = selectedNode?.ref_id

    console.log(selectedNode)

    if (selectedNode?.type === 'topic') {
      const { data } = await getTopicsData({ search: selectedNode?.name })

      const node = data.find((i: Topic) => i.name === selectedNode.name)

      Id = node?.ref_id as string
    }

    const refId = Id ?? selectedNode?.ref_id

    console.log(refId, body)

    await changeNodeType(refId, body)

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.log(err)

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

export const ChangeNodeTypeModal = () => {
  const [stepId, setStepId] = useState<MapNodeTypeModalStepID>('sourceType')
  const { close, visible } = useModal('changeNodeType')
  const { open: openEditNodeNameModal } = useModal('editNodeName')
  const { open: openTypeModal } = useModal('addType')
  const form = useForm<FormData>({ mode: 'onChange' })
  const { watch, setValue, reset } = form
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<string>('')

  const [selectedValues, setSelectedValues] = useState<SelectedValues>({})

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

  watch('title')

  const handleClose = () => {
    close()
  }

  const skipToStep = (step: MapNodeTypeModalStepID) => {
    setStepId(step)
  }

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      await handleSubmitForm(data, nodeType, selectedValues, selectedNode)
      handleClose()
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    } catch (err: any) {
      let errorMessage = NODE_ADD_ERROR

      handleClose()

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
    requiredProperties: (
      <RequiredPropertiesStep
        handleSelectType={handleSelectType}
        nodeType={nodeType}
        selectedValues={selectedValues}
        skipToStep={skipToStep}
      />
    ),
    createConfirmation: (
      <CreateConfirmation nodeType={nodeType} onclose={handleClose} selectedNodeType={selectedNodeType} />
    ),
    mapProperties: (
      <MapPropertiesStep
        handleSelectType={handleSelectType}
        nodeType={nodeType}
        selectedNodeType={selectedNodeType}
        selectedValues={selectedValues}
        setSelectedValues={setSelectedValues}
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
