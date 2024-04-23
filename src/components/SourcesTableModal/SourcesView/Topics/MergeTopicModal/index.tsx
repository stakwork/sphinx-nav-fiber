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
  topic?: Topic
  onClose: () => void
  multiTopics?: Topic[]
}

export type FormData = {
  name: string
}

export const MergeTopicModal: FC<Props> = ({ topic, onClose, multiTopics }) => {
  const { close } = useModal('mergeTopic')
  const [data, ids, total] = useTopicsStore((s) => [s.data, s.ids, s.total])
  const form = useForm<FormData>({ mode: 'onChange' })
  const { watch, setValue, reset } = form
  const [loading, setLoading] = useState(false)
  const [isSwapped, setIsSwapped] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null)

  useEffect(() => {
    if (multiTopics && multiTopics.length > 0) {
      const topicNames = multiTopics.map((t) => t.name).join(', ')

      setValue('name', topicNames.length > 1 ? topicNames : '')
    } else if (topic) {
      setValue('name', topic.name)
    }

    return () => {
      reset()
    }
  }, [topic, multiTopics, setValue, reset])

  const topicValue = watch('name')

  const closeHandler = () => {
    onClose()
    close()
  }

  const handleSave = async () => {
    if (!selectedTopic || !data) {
      return
    }

    setLoading(true)

    const fromIds =
      multiTopics?.map((t) => t.ref_id).filter((id): id is string => !!id) ||
      [topic?.ref_id].filter((id): id is string => !!id)

    const multiFromIds = fromIds.slice(0, -1)
    const multiLastId = fromIds.slice(-1)[0]

    try {
      if (multiTopics && multiTopics.length > 1) {
        await postMergeTopics({ from: multiFromIds, to: multiLastId })
      } else {
        await postMergeTopics({ from: fromIds, to: selectedTopic.ref_id })
      }

      fromIds.forEach((id) => {
        if (data[id]) {
          data[id] = { ...data[id], edgeList: [IS_ALIAS], edgeCount: data[id].edgeCount - 1 }
        }
      })

      useTopicsStore.setState({ ids: ids.filter((i) => !fromIds.includes(i)), total: total - fromIds.length })

      if (data && topic) {
        const newData = { ...data, [topic.ref_id]: { ...data[topic.ref_id], name: topicValue.trim() } }

        useTopicsStore.setState({ data: newData })
      }

      closeHandler()
    } catch (error) {
      console.warn(error)
    } finally {
      setLoading(false)
    }
  }

  const topicNames = multiTopics?.map((t) => t.name).join(', ')
  const fromTopicNames = topicNames && topicNames?.length > 1 ? `${topicNames?.substring(0, 25)} ...` : topic?.name

  return (
    <BaseModal id="mergeTopic" kind="small" onClose={closeHandler} preventOutsideClose>
      <FormProvider {...form}>
        <TitleEditor
          from={fromTopicNames}
          isSwapped={isSwapped}
          multiTopics={multiTopics}
          onSelect={setSelectedTopic}
          selectedTopic={selectedTopic}
          setIsSwapped={() => setIsSwapped(!isSwapped)}
        />
        <Button color="secondary" disabled={loading || isSwapped} onClick={handleSave} size="large" variant="contained">
          Merge topics
          {loading && <ClipLoader color={colors.BLUE_PRESS_STATE} size={10} />}
        </Button>
      </FormProvider>
    </BaseModal>
  )
}
