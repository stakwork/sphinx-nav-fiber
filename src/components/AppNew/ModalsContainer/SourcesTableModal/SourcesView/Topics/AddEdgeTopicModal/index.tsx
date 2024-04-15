import { Button } from '@mui/material'
import { FC, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import { BaseModal } from '~/components/Modal'
import { postEdgeType } from '~/network/fetchSourcesData'
import { useModal } from '~/stores/useModalStore'
import { useTopicsStore } from '~/stores/useTopicsStore'
import { Topic } from '~/types'
import { colors } from '~/utils/colors'
import { TitleEditor } from './Title'

type Props = {
  topic: Topic
  onClose: () => void
}

export type FormData = {
  topic: string
}

export const AddEdgeModal: FC<Props> = ({ topic, onClose }) => {
  const { close } = useModal('addEdge')
  const [data] = useTopicsStore((s) => [s.data])
  const form = useForm<FormData>({ mode: 'onChange' })
  const [loading, setLoading] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null)
  const [selectedType, setSelectedType] = useState('')

  const closeHandler = () => {
    onClose()
    close()
  }

  const handleSave = async () => {
    if (!selectedTopic || !data) {
      return
    }

    setLoading(true)

    try {
      await postEdgeType({ from: topic.ref_id, to: selectedTopic?.ref_id, relationship: selectedType })

      const { ref_id: id } = topic
      const { ref_id: selectedId } = selectedTopic

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

  const submitDisabled = loading || !selectedTopic || !selectedType

  return (
    <BaseModal id="addEdge" kind="large" onClose={closeHandler} preventOutsideClose>
      <FormProvider {...form}>
        <TitleEditor
          from={topic.name}
          onSelect={setSelectedTopic}
          selectedTopic={selectedTopic}
          selectedType={selectedType}
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
