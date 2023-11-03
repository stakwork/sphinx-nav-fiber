import { Button } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import { BaseModal } from '~/components/Modal'
import { putNodeData } from '~/network/fetchSourcesData'
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

export const EditTopicModal: FC<Props> = ({ topic, onClose }) => {
  const { close } = useModal('editTopic')
  const [data] = useTopicsStore((s) => [s.data])
  const form = useForm<FormData>({ mode: 'onChange' })
  const { watch, setValue, reset } = form
  const [loading, setLoading] = useState(false)

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
    setLoading(true)

    try {
      await putNodeData({ ref_id: topic?.ref_id || '', node_name: 'topic', node_value: topicValue.trim() })

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
    <BaseModal id="editTopic" kind="regular" onClose={closeHandler} preventOutsideClose>
      <FormProvider {...form}>
        <TitleEditor />
        <Button color="secondary" disabled={loading} onClick={handleSave} size="large" variant="contained">
          Save
          {loading && <ClipLoader color={colors.BLUE_PRESS_STATE} size={10} />}
        </Button>
      </FormProvider>
    </BaseModal>
  )
}
