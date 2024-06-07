import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { getEdges, postEdgeType } from '~/network/fetchSourcesData'
import { useSelectedNode } from '~/stores/useGraphStore'
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
  const [isSwapped, setIsSwapped] = useState(false)

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
    const nodeFrom = topicEdge || selectedNode

    if (!selectedToNode || !nodeFrom?.ref_id) {
      return
    }

    setLoading(true)

    try {
      await postEdgeType({
        relationship: selectedType,
        ...(!isSwapped
          ? { from: nodeFrom.ref_id, to: selectedToNode?.ref_id }
          : { to: nodeFrom.ref_id, from: selectedToNode?.ref_id }),
      })

      const { ref_id: id } = nodeFrom
      const { ref_id: selectedId } = selectedToNode

      console.log(id, selectedId)

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
          from={topicEdge ?? selectedNode}
          isSwapped={isSwapped}
          onSelect={setSelectedToNode}
          selectedToNode={selectedToNode}
          selectedType={selectedType}
          setIsSwapped={() => setIsSwapped(!isSwapped)}
          setSelectedType={setSelectedType}
        />
      )}
      <CustomButton color="secondary" disabled={submitDisabled} onClick={handleSave} size="large" variant="contained">
        Confirm
        {loading && <ClipLoader color={colors.BLUE_PRESS_STATE} size={10} />}
      </CustomButton>
    </FormProvider>
  )
}

const CustomButton = styled(Button)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`
