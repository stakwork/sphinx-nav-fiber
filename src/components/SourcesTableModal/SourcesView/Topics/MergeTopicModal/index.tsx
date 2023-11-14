import { Button } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import { BaseModal } from '~/components/Modal'
import { postMergeTopics } from '~/network/fetchSourcesData'
import { useModal } from '~/stores/useModalStore'
import { useTopicsStore } from '~/stores/useTopicsStore'
import { Topic } from '~/types'
import { colors } from '~/utils/colors'
import { IS_ALIAS } from '../../constants'
import { TitleEditor } from './Title'

type Props = {
  topic: Topic
  onClose: () => void
}

export type FormData = {
  topic: string
}

export const MergeTopicModal: FC<Props> = ({ topic, onClose }) => {
  const { close } = useModal('mergeTopic')
  const [data, ids, total] = useTopicsStore((s) => [s.data, s.ids, s.total])
  const form = useForm<FormData>({ mode: 'onChange' })
  const { watch, setValue, reset } = form
  const [loading, setLoading] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null)

  useEffect(() => {
    if (topic) {
      setValue('topic', topic?.topic)
    }

    return () => {
      reset()
    }
  }, [topic, setValue, reset])

  const topicValue = watch('topic')

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
      await postMergeTopics({ from: topic.ref_id, to: selectedTopic?.ref_id })

      const { ref_id: id } = topic

      data[id] = { ...data[id], edgeList: [IS_ALIAS], edgeCount: data[id].edgeCount - 1 }

      useTopicsStore.setState({ ids: ids.filter((i) => i !== selectedTopic.ref_id), total: total - 1 })

      if (data) {
        const newData = { ...data }

        newData[topic?.ref_id].topic = topicValue.trim()

        useTopicsStore.setState({ data: newData })
      }

      closeHandler()
    } catch (error) {
      console.warn(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <BaseModal id="mergeTopic" kind="regular" onClose={closeHandler} preventOutsideClose>
      <FormProvider {...form}>
        <TitleEditor from={topic.topic} onSelect={setSelectedTopic} selectedTopic={selectedTopic} />
        <Button color="secondary" disabled={loading} onClick={handleSave} size="large" variant="contained">
          Merge topics
          {loading && <ClipLoader color={colors.BLUE_PRESS_STATE} size={10} />}
        </Button>
      </FormProvider>
    </BaseModal>
  )
}
