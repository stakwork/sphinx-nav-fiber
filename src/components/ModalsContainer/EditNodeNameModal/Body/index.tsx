import { Button, Skeleton } from '@mui/material'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { validateImageInputType } from '~/components/ModalsContainer/EditNodeNameModal/utils'
import { Flex } from '~/components/common/Flex'
import { editNodeData, getTopicsData } from '~/network/fetchSourcesData'
import { useDataStore } from '~/stores/useDataStore'
import { useSelectedNode } from '~/stores/useGraphStore'
import { useModal } from '~/stores/useModalStore'
import { NodeEditRequest, NodeExtended, Topic } from '~/types'
import { colors } from '~/utils/colors'
import { TitleEditor } from '../Title'

export type FormData = {
  name: string
  image_url: string
  imageInputType?: boolean
  [key: string]: unknown
}

export const Body = () => {
  const { close } = useModal('editNodeName')
  const form = useForm<FormData>({ mode: 'onChange' })
  const { watch, setValue, reset, getValues } = form
  const [loading, setLoading] = useState(false)
  const [topicIsLoading, setTopicIsLoading] = useState(false)
  const [actualTopicNode, setActualTopicNode] = useState<null | Topic>()
  const selectedNode = useSelectedNode()
  const updateNode = useDataStore((s) => s.updateNode)
  const { open: openRemoveNodeModal } = useModal('removeNode')

  useEffect(() => {
    if (actualTopicNode) {
      Object.keys(actualTopicNode).forEach((key) => {
        setValue(key, actualTopicNode[key as keyof Topic])
      })
    } else if (selectedNode) {
      Object.keys(selectedNode).forEach((key) => {
        setValue(key, selectedNode[key as keyof NodeExtended])
      })
    }

    return () => {
      reset()
    }
  }, [actualTopicNode, setValue, reset, selectedNode])

  useEffect(() => {
    const init = async () => {
      if (!selectedNode || selectedNode.type !== 'topic') {
        return
      }

      setTopicIsLoading(true)

      try {
        const { data: topicData } = await getTopicsData({ search: selectedNode?.name })

        const node = topicData.find((i) => i.name === selectedNode.name)

        setActualTopicNode(node)
      } catch (error) {
        console.error(error)
      } finally {
        setTopicIsLoading(false)
      }
    }

    init()
  }, [selectedNode])

  const isValidImageUrl = watch('imageInputType')
  const imageUrl = watch('image_url')

  useEffect(() => {
    setValue('imageInputType', validateImageInputType(imageUrl))
  }, [imageUrl, setValue])

  const closeHandler = () => {
    close()
  }

  const node = actualTopicNode || selectedNode

  const handleSave = async () => {
    if (!node) {
      return
    }

    setLoading(true)

    const formData: FormData = getValues()

    const nodeData = {
      name: formData.name,
      image_url: formData.image_url,
      properties: formData.properties,
    }

    try {
      const payloadData: NodeEditRequest = {
        node_type: node.node_type,
        ref_id: node.ref_id,
        properties: nodeData.properties as { [key: string]: unknown },
      }

      await editNodeData(node?.ref_id || '', payloadData)

      updateNode({
        ...node,
        ...nodeData,
      } as NodeExtended)

      closeHandler()
    } catch (error) {
      console.warn(error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    openRemoveNodeModal()
  }

  const name = getValues()?.name?.trim()

  const isNodeNameChanged = name && actualTopicNode?.name.trim() !== name
  const isImageUrlChanged = getValues().image_url && selectedNode?.image_url !== getValues()?.image_url

  const shouldDisableSave =
    loading || topicIsLoading || (!!imageUrl && !isValidImageUrl) || (!isNodeNameChanged && !isImageUrlChanged)

  return (
    <Wrapper>
      <FormProvider {...form}>
        {topicIsLoading ? (
          <Flex my={24}>
            <Skeleton />
          </Flex>
        ) : (
          <TitleEditor />
        )}

        <Flex direction="row" justify="space-between" mt={20}>
          <Flex direction="column">
            <DeleteButton
              color="secondary"
              disabled={topicIsLoading || !node}
              onClick={handleDelete}
              size="large"
              variant="contained"
            >
              Delete
            </DeleteButton>
          </Flex>

          <CustomButton
            color="secondary"
            disabled={shouldDisableSave}
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
          </CustomButton>
        </Flex>
      </FormProvider>
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  padding: 20px;
`

const DeleteButton = styled(Button)`
  && {
    color: ${colors.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);
    flex: 1;
    margin-right: 10px;

    &:hover,
    &:active,
    &:focus {
      color: ${colors.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`

const ClipLoaderWrapper = styled.span`
  margin-top: 4px;
`

const CustomButton = styled(Button)`
  width: 80% !important;
  margin: 0 auto !important;
`
