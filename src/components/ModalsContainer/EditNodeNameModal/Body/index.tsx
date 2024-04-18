import { Button, Skeleton } from '@mui/material'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { validateImageInputType } from '~/components/ModalsContainer/EditNodeNameModal/utils'
import { Flex } from '~/components/common/Flex'
import { getTopicsData, putNodeData } from '~/network/fetchSourcesData'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { useModal } from '~/stores/useModalStore'
import { NodeExtended, Topic } from '~/types'
import { colors } from '~/utils/colors'
import { TitleEditor } from '../Title'

export type FormData = {
  name: string
  image_url: string
  imageInputType?: boolean
}

export const Body = () => {
  const { close } = useModal('editNodeName')
  const form = useForm<FormData>({ mode: 'onChange' })
  const { watch, setValue, reset, getValues } = form
  const [loading, setLoading] = useState(false)

  const [topicIsLoading, setTopicIsLoading] = useState(false)

  const [actualTopicNode, setActualTopicNode] = useState<null | Topic>()

  const selectedNode = useSelectedNode()

  const { open: openRemoveNodeModal } = useModal('removeNode')

  useEffect(() => {
    if (actualTopicNode) {
      setValue('name', actualTopicNode?.name)
    } else if (selectedNode) {
      setValue('name', selectedNode.name)

      setValue('image_url', selectedNode?.image_url ?? '')
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
        console.log(error)
      } finally {
        setTopicIsLoading(false)
      }
    }

    init()
  }, [selectedNode])

  const isValidImageUrl = watch('imageInputType')

  const topicValue = watch('name')

  const imageUrl = watch('image_url')

  useEffect(() => {
    setValue('imageInputType', validateImageInputType(imageUrl))
  }, [imageUrl, setValue])

  const closeHandler = () => {
    close()
  }

  const node = actualTopicNode || selectedNode

  const handleSave = async () => {
    setLoading(true)

    const propName = 'name'
    const updatedData = { [propName]: topicValue.trim(), image_url: imageUrl.trim() }

    try {
      await putNodeData(node?.ref_id || '', updatedData)

      const { updateNode } = useDataStore.getState()

      updateNode({ ...node, ...updatedData } as NodeExtended)

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

  const isNodeNameChanged = getValues().name && actualTopicNode?.name !== getValues().name

  const shouldDisableSave =
    loading || topicIsLoading || (!!imageUrl && !isValidImageUrl) || (!imageUrl && !isNodeNameChanged)

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
        <Flex direction="row" mb={6}>
          <DeleteButton
            color="secondary"
            disabled={topicIsLoading || !node}
            onClick={handleDelete}
            size="large"
            style={{ marginRight: 20 }}
            variant="contained"
          >
            Delete
          </DeleteButton>
          <Button
            color="secondary"
            disabled={shouldDisableSave}
            onClick={handleSave}
            size="large"
            style={{ flex: 1 }}
            variant="contained"
          >
            Save Changes
            {loading && <ClipLoader color={colors.BLUE_PRESS_STATE} size={10} />}
          </Button>
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

    &:hover,
    &:active,
    &:focus {
      color: ${colors.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`
