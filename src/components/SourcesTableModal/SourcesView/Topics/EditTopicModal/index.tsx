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
import styled from 'styled-components'

type Props = {
  topic: Topic
  onClose: () => void
}

export type FormData = {
  name: string
}

export const EditTopicModal: FC<Props> = ({ topic, onClose }) => {
  const { close } = useModal('editTopic')
  const [data] = useTopicsStore((s) => [s.data])
  const form = useForm<FormData>({ mode: 'onChange' })
  const { watch, setValue, reset, getValues } = form
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (topic) {
      setValue('name', topic?.name)
    }

    return () => {
      reset()
    }
  }, [topic, setValue, reset])

  const nameValue = watch('name')
  const name = nameValue?.trim()

  const closeHandler = () => {
    onClose()
    close()
  }

  const handleSave = async () => {
    setLoading(true)

    try {
      await putNodeData(topic?.ref_id || '', { node_data: { name } })

      if (data) {
        const newData = { ...data }

        newData[topic?.ref_id].name = name

        useTopicsStore.setState({ data: newData })
      }

      closeHandler()
    } catch (error) {
      console.warn(error)
    } finally {
      setLoading(false)
    }
  }

  const isTopicNameChanged = getValues().name && topic?.name !== getValues().name

  return (
    <BaseModal id="editTopic" kind="regular" onClose={closeHandler} preventOutsideClose>
      <FormProvider {...form}>
        <TitleEditor />
        <Button
          color="secondary"
          disabled={loading || !name || !isTopicNameChanged}
          onClick={handleSave}
          size="large"
          variant="contained"
        >
          Save Changes
          {loading && (
            <ClipLoaderWrapper>
              <ClipLoader color={colors.lightGray} size={12} />
            </ClipLoaderWrapper>
          )}
        </Button>
      </FormProvider>
    </BaseModal>
  )
}

const ClipLoaderWrapper = styled.span`
  margin-top: 2px;
`
