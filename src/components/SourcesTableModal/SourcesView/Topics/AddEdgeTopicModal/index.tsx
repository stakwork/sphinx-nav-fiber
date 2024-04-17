import { Button } from '@mui/material'
import { FC, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import { BaseModal } from '~/components/Modal'
import { postEdgeType } from '~/network/fetchSourcesData'
import { useModal } from '~/stores/useModalStore'
import { useTopicsStore } from '~/stores/useTopicsStore'
import { TEdge, Topic } from '~/types'
import { colors } from '~/utils/colors'
import { TitleEditor } from './Title'

type Props = {
  topic: Topic
  onClose: () => void
}

export type FormData = {
  name: string
}

export const AddEdgeModal: FC<Props> = ({ topic, onClose }) => {
  const { close } = useModal('addEdge')
  const [data] = useTopicsStore((s) => [s.data])
  const form = useForm<FormData>({ mode: 'onChange' })
  const [isSwapped, setIsSwapped] = useState(false)
  const [loading, setLoading] = useState(false)
  const [selectedType, setSelectedType] = useState('')
  const [selectedToNode, setSelectedToNode] = useState<TEdge | null>(null)

  const closeHandler = () => {
    onClose()
    close()
  }

  const handleSave = async () => {
    if (!selectedToNode || !data) {
      return
    }

    setLoading(true)

    try {
      await postEdgeType({ from: topic.ref_id, to: selectedToNode?.ref_id, relationship: selectedType })

      const { ref_id: id } = topic
      const { ref_id: selectedId } = selectedToNode

      if (data) {
        const newData = { ...data }

        newData[id] = { ...newData[id], edgeList: [...newData[id].edgeList, selectedType] }

        if (newData[selectedId]) {
          newData[selectedId] = { ...newData[selectedId], edgeList: [...newData[selectedId].edgeList, selectedType] }
        }

        useTopicsStore.setState({ data: newData })
      }

      closeHandler()
    } catch (error) {
      console.warn(error)
    } finally {
      setLoading(false)
    }
  }

  const submitDisabled = loading || !selectedToNode || !selectedType

  return (
    <BaseModal id="addEdge" kind="small" onClose={closeHandler} preventOutsideClose>
      <FormProvider {...form}>
        <TitleEditor
          from={topic.name}
          isSwapped={isSwapped}
          onSelect={setSelectedToNode}
          selectedToNode={selectedToNode}
          selectedType={selectedType}
          setIsSwapped={() => setIsSwapped(!isSwapped)}
          setSelectedType={setSelectedType}
        />
        <Button color="secondary" disabled={submitDisabled} onClick={handleSave} size="large" variant="contained">
          Confirm
          {loading && <ClipLoader color={colors.BLUE_PRESS_STATE} size={10} />}
        </Button>
      </FormProvider>
    </BaseModal>
  )
}
