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
  onClose: () => void
  multiTopics: Topic[]
}

export type FormData = {
  name: string
}

export const MergeTopicModal: FC<Props> = ({ onClose, multiTopics }) => {
  const { close } = useModal('mergeTopic')
  const [data, ids, total] = useTopicsStore((s) => [s.data, s.ids, s.total])
  const form = useForm<FormData>({ mode: 'onChange' })
  const { setValue, reset } = form
  const [loading, setLoading] = useState(false)
  const [isSwapped, setIsSwapped] = useState(false)
  const [selectedToNode, setSelectedToNode] = useState<TEdge | null>(null)

  useEffect(() => {
    if (multiTopics && multiTopics.length > 0) {
      const topicNames = multiTopics.map((t) => t.name).join(', ')

      setValue('name', topicNames)
    }

    return () => {
      reset()
    }
  }, [multiTopics, setValue, reset])

  const closeHandler = () => {
    onClose()
    close()
  }

  const handleSave = async () => {
    setLoading(true)

    const fromIds = multiTopics?.map((t) => t.ref_id).filter((id): id is string => !!id)

    const multiFromIds = fromIds?.slice(0, -1)
    const multiLastId = fromIds?.slice(-1)[0]

    try {
      if (multiTopics && multiTopics.length > 1) {
        if (!(multiTopics?.length !== 1) || !data) {
          return
        }

        await postMergeTopics({ from: multiFromIds, to: multiLastId })
      } else {
        if (!selectedToNode || !data) {
          return
        }

        await postMergeTopics({ from: fromIds, to: selectedToNode.ref_id })
      }

      fromIds?.forEach((id) => {
        if (data[id]) {
          data[id] = { ...data[id], edgeList: [IS_ALIAS], edgeCount: data[id].edgeCount - 1 }
        }
      })

      useTopicsStore.setState({
        ids: ids.filter((i) => !fromIds?.includes(i)),
        total: total - (fromIds ? fromIds.length : 0),
      })

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
          from={multiTopics}
          isSwapped={isSwapped}
          onSelect={setSelectedToNode}
          selectedToNode={selectedToNode}
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
