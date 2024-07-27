import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { BaseModal } from '~/components/Modal'
import { postMergeTopics } from '~/network/fetchSourcesData'
import { useSelectedNode } from '~/stores/useGraphStore'
import { useModal } from '~/stores/useModalStore'
import { useTopicsStore } from '~/stores/useTopicsStore'
import { NodeExtended, TEdge } from '~/types'
import { colors } from '~/utils/colors'
import { IS_ALIAS } from '../../SourcesTableModal/SourcesView/constants'
import { TitleEditor } from './Title'

export type FormData = {
  name: string
}

export const MergeNodeModal = () => {
  const { close } = useModal('mergeToNode')
  const [data, ids, total] = useTopicsStore((s) => [s.data, s.ids, s.total])
  const form = useForm<FormData>({ mode: 'onChange' })
  const [loading, setLoading] = useState(false)
  const [isSwapped, setIsSwapped] = useState(false)
  const [selectedToNode, setSelectedToNode] = useState<TEdge | null>(null)

  const [topic, setTopic] = useState<NodeExtended>()

  const selectedNode = useSelectedNode()

  useEffect(() => {
    if (!selectedNode) {
      return
    }

    setTopic(selectedNode)
  }, [selectedNode])

  const closeHandler = () => {
    setSelectedToNode(null)
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
    <BaseModal id="mergeToNode" kind="small" onClose={closeHandler} preventOutsideClose>
      <FormProvider {...form}>
        <TitleEditor
          from={topic}
          isSwapped={isSwapped}
          onSelect={setSelectedToNode}
          selectedToNode={selectedToNode}
          setIsSwapped={() => setIsSwapped(!isSwapped)}
        />

        <CustomButton
          color="secondary"
          data-testid="merge-topics-button"
          disabled={loading || !selectedToNode}
          onClick={handleSave}
          size="large"
          variant="contained"
        >
          Merge topics
          {loading && (
            <ClipLoaderWrapper>
              <ClipLoader color={colors.BLUE_PRESS_STATE} size={12} />
            </ClipLoaderWrapper>
          )}
        </CustomButton>
      </FormProvider>
    </BaseModal>
  )
}

const CustomButton = styled(Button)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`

const ClipLoaderWrapper = styled.span`
  margin-top: 2px;
`
