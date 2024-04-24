import { Button } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import { BaseModal } from '~/components/Modal'
import { postMergeTopics } from '~/network/fetchSourcesData'
import { useModal } from '~/stores/useModalStore'
import { useTopicsStore } from '~/stores/useTopicsStore'
import { TEdge, Topic } from '~/types'
import { colors } from '~/utils/colors'
import { IS_ALIAS } from '../../constants'
import { TitleEditor } from './Title'

type Props = {
  topic: Topic
  onClose: () => void
}

export type FormData = {
  name: string
}

export const MergeTopicModal: FC<Props> = ({ topic, onClose }) => {
  const { close } = useModal('mergeTopic')
  const [data, ids, total] = useTopicsStore((s) => [s.data, s.ids, s.total])
  const form = useForm<FormData>({ mode: 'onChange' })
  const { watch, setValue, reset } = form
  const [loading, setLoading] = useState(false)
  const [isSwapped, setIsSwapped] = useState(false)
  const [selectedToNode, setSelectedToNode] = useState<TEdge | null>(null)

  useEffect(() => {
    if (topic) {
      setValue('name', topic?.name)
    }

    return () => {
      reset()
    }
  }, [topic, setValue, reset])

  const topicValue = watch('name')

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
      await postMergeTopics({ from: topic.ref_id, to: selectedToNode?.ref_id })

      const { ref_id: id } = topic

      data[id] = { ...data[id], edgeList: [IS_ALIAS], edgeCount: data[id].edgeCount - 1 }

      useTopicsStore.setState({ ids: ids.filter((i) => i !== selectedToNode.ref_id), total: total - 1 })

      if (data) {
        const newData = { ...data }

        newData[topic?.ref_id].name = topicValue.trim()

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
    <BaseModal id="mergeTopic" kind="small" onClose={closeHandler} preventOutsideClose>
      <FormProvider {...form}>
        <TitleEditor
          from={topic.name}
          isSwapped={isSwapped}
          onSelect={setSelectedToNode}
          selectedToNode={selectedToNode}
          setIsSwapped={() => setIsSwapped(!isSwapped)}
        />
        <Button color="secondary" disabled={loading} onClick={handleSave} size="large" variant="contained">
          Merge topics
          {loading && <ClipLoader color={colors.BLUE_PRESS_STATE} size={10} />}
        </Button>
      </FormProvider>
    </BaseModal>
  )
}
