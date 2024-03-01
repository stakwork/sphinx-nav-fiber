import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import { Vector3 } from 'three'
import { Flex } from '~/components/common/Flex'
import { NodeExtendedNew } from '~/network/fetchGraphDataNew/types'
import { useGraphStore } from '~/stores/useGraphStore'
import { useModal } from '~/stores/useModalStore'
import { colors } from '~/utils/colors'
import { TitleEditor } from './Title'

export type FormData = {
  topic: string
}

export const Body = () => {
  const { close } = useModal('addEdgeToNode')
  const form = useForm<FormData>({ mode: 'onChange' })
  const [loading, setLoading] = useState(false)
  const [selectedType, setSelectedType] = useState('RELATION_TYPE')

  const [selectedNode, addNewLink] = useGraphStore((s) => [s.selectedNode, s.addNewLink])

  const [topicIsLoading, setTopicIsLoading] = useState(false)
  const [selectedToNode, setSelectedToNode] = useState<NodeExtendedNew | null>(null)

  // const [actualNode, setActualNode] = useState<null | Topic>()

  useEffect(() => {
    const init = async () => {
      if (!selectedNode) {
        return
      }

      setTopicIsLoading(true)

      try {
        // const { data: topicData } = await getTopicsData({ search: selectedNode?.name })
        // const node = topicData.find((i) => i.topic === selectedNode.name)
        // setActualNode(node)
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
    if (!selectedToNode || !selectedNode) {
      return
    }

    console.log(123)

    addNewLink({
      attributes: {},
      edge_type: selectedType,
      source: selectedNode?.ref_id,
      target: selectedToNode.ref_id,
      sourcePosition: new Vector3(selectedNode.x, selectedNode.y, selectedNode.z),
      targetPosition: new Vector3(selectedToNode.x, selectedToNode.y, selectedToNode.z),
    })

    close()

    return

    try {
      // await postEdgeType({ from: actualNode.ref_id, to: selectedToNode?.ref_id, relationship: selectedType })

      // const { ref_id: id } = actualNode
      // const { ref_id: selectedId } = selectedToNode

      // console.log(id, selectedId)

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

  console.log(selectedNode)

  return (
    <FormProvider {...form}>
      {topicIsLoading ? (
        <Flex align="center" my={24}>
          <ClipLoader color={colors.BLUE_PRESS_STATE} size={24} />
        </Flex>
      ) : (
        <TitleEditor
          from={(selectedNode?.name as string) || ''}
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
