import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import { BaseModal } from '~/components/Modal'
import { getTopicsData, postMergeTopics } from '~/network/fetchSourcesData'
import { useModal } from '~/stores/useModalStore'
import { useTopicsStore } from '~/stores/useTopicsStore'
import { TEdge, Topic } from '~/types'
import { colors } from '~/utils/colors'
import { IS_ALIAS } from '../../SourcesTableModal/SourcesView/constants'
import { TitleEditor } from './Title'
import { useSelectedNode } from '~/stores/useDataStore'
import { Flex } from '~/components/common/Flex'

export type FormData = {
  name: string
}

export const MergeNodeModal = () => {
  const { close } = useModal('mergeTopic')
  const [data, ids, total] = useTopicsStore((s) => [s.data, s.ids, s.total])
  const form = useForm<FormData>({ mode: 'onChange' })
  const [loading, setLoading] = useState(false)
  const [isSwapped, setIsSwapped] = useState(false)
  const [selectedToNode, setSelectedToNode] = useState<TEdge | null>(null)
  const [topicIsLoading, setTopicIsLoading] = useState(false)

  const [topic, setTopic] = useState<Topic>()

  const selectedNode = useSelectedNode()

  useEffect(() => {
    const init = async () => {
      if (!selectedNode) {
        return
      }

      setTopicIsLoading(true)

      try {
        if (selectedNode.type === 'topic') {
          const response = await getTopicsData({ search: selectedNode?.name })

          const node = response?.data.find((i: Topic) => i.name === selectedNode.name)

          setTopic(node)
        }
      } catch (error) {
        console.log(error)
      } finally {
        setTopicIsLoading(false)
      }
    }

    init()
  }, [selectedNode])

  const closeHandler = () => {
    close()
  }

  const handleSave = async () => {
    if (!selectedToNode || !data) {
      return
    }

    setLoading(true)

    try {
      await postMergeTopics({ from: topic?.ref_id, to: selectedToNode?.ref_id })

      if (topic?.ref_id) {
        data[topic?.ref_id] = {
          ...data[topic?.ref_id],
          edgeList: [IS_ALIAS],
          edgeCount: data[topic?.ref_id].edgeCount - 1,
        }

        useTopicsStore.setState({ ids: ids.filter((i) => i !== selectedToNode.ref_id), total: total - 1 })
      }

      closeHandler()
    } catch (error) {
      console.warn(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <BaseModal id="mergeTopic" kind="small" onClose={close} preventOutsideClose>
      <FormProvider {...form}>
        {topicIsLoading ? (
          <Flex align="center" my={24}>
            <ClipLoader color={colors.BLUE_PRESS_STATE} size={24} />
          </Flex>
        ) : (
          <TitleEditor
            from={topic as Topic}
            isSwapped={isSwapped}
            onSelect={setSelectedToNode}
            selectedToNode={selectedToNode}
            setIsSwapped={() => setIsSwapped(!isSwapped)}
          />
        )}
        <Button color="secondary" disabled={loading} onClick={handleSave} size="large" variant="contained">
          Merge topics
          {loading && <ClipLoader color={colors.BLUE_PRESS_STATE} size={10} />}
        </Button>
      </FormProvider>
    </BaseModal>
  )
}
