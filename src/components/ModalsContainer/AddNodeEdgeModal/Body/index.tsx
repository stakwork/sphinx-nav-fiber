import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import { Flex } from '~/components/common/Flex'
import { getEdges, postEdgeType } from '~/network/fetchSourcesData'
import { useSelectedNode } from '~/stores/useDataStore'
import { useModal } from '~/stores/useModalStore'
import { TEdge } from '~/types'
import { colors } from '~/utils/colors'
import { TitleEditor } from '../Title'

export type FormData = {
  topic: string
}

export const Body = () => {
  const { close } = useModal('addEdgeToNode')
  const form = useForm<FormData>({ mode: 'onChange' })
  const [loading, setLoading] = useState(false)
  const [selectedType, setSelectedType] = useState('')

  const [topicIsLoading, setTopicIsLoading] = useState(false)
  const [selectedToNode, setSelectedToNode] = useState<TEdge | null>(null)

  const [topicEdge, setTopicEdge] = useState<null | TEdge>()

  const selectedNode = useSelectedNode()

  useEffect(() => {
    const init = async () => {
      if (!selectedNode) {
        return
      }

      setTopicIsLoading(true)

      try {
        if (selectedNode.type === 'topic') {
          const { data } = await getEdges(selectedNode?.name, { exact_match: 'true', node_type: 'topic' })

          const edge = data.find((i) => i.node_type === 'topic')

          setTopicEdge(edge)
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
    if (!selectedToNode || !topicEdge) {
      return
    }

    setLoading(true)

    try {
      const nodeFrom = topicEdge || selectedToNode

      await postEdgeType({ from: nodeFrom.ref_id, to: selectedToNode?.ref_id, relationship: selectedType })

      const { ref_id: id } = nodeFrom
      const { ref_id: selectedId } = selectedToNode

      console.log(id, selectedId)

      //   if (data) {
      //     const newData = { ...data }

      //     newData[id] = { ...newData[id], edgeList: [...newData[id].edgeList, selectedType] }

      //     if (newData[selectedId]) {
      //       newData[selectedId] = { ...newData[selectedId], edgeList: [...newData[selectedId].edgeList, selectedType] }
      //     }

      //     useTopicsStore.setState({ data: newData })

      closeHandler()
    } catch (error) {
      console.warn(error)
    } finally {
      setLoading(false)
    }
  }

  const submitDisabled = loading || !selectedToNode || !selectedType

  return (
    <FormProvider {...form}>
      {topicIsLoading ? (
        <Flex align="center" my={24}>
          <ClipLoader color={colors.BLUE_PRESS_STATE} size={24} />
        </Flex>
      ) : (
        <TitleEditor
          from={topicEdge ? topicEdge?.search_value : selectedNode?.name || ''}
          onSelect={setSelectedToNode}
          selectedToNode={selectedToNode}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
      )}
      <Button color="secondary" disabled={submitDisabled} onClick={handleSave} size="large" variant="contained">
        Confirm
        {loading && <ClipLoader color={colors.BLUE_PRESS_STATE} size={10} />}
      </Button>
    </FormProvider>
  )
}
