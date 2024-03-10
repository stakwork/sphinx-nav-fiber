import { Button, Skeleton } from '@mui/material'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { getTopicsData, putNodeData } from '~/network/fetchSourcesData'
import { useSelectedNode } from '~/stores/useDataStore'
import { useModal } from '~/stores/useModalStore'
import { useTopicsStore } from '~/stores/useTopicsStore'
import { Topic } from '~/types'
import { colors } from '~/utils/colors'
import { TitleEditor } from '../Title'

export type FormData = {
  topic: string
}

export const Body = () => {
  const { close } = useModal('editNodeName')
  const [data] = useTopicsStore((s) => [s.data])
  const form = useForm<FormData>({ mode: 'onChange' })
  const { watch, setValue, reset, getValues } = form
  const [loading, setLoading] = useState(false)

  const [topicIsLoading, setTopicIsLoading] = useState(false)

  const [actualNode, setActualNode] = useState<null | Topic>()

  const selectedNode = useSelectedNode()

  const { open: openRemoveNodeModal } = useModal('removeNode')

  useEffect(() => {
    if (actualNode) {
      setValue('topic', actualNode?.topic)
    }

    return () => {
      reset()
    }
  }, [actualNode, setValue, reset])

  useEffect(() => {
    const init = async () => {
      if (!selectedNode) {
        return
      }

      setTopicIsLoading(true)

      try {
        const { data: topicData } = await getTopicsData({ search: selectedNode?.name })

        const node = topicData.find((i) => i.topic === selectedNode.name)

        setActualNode(node)
      } catch (error) {
        console.log(error)
      } finally {
        setTopicIsLoading(false)
      }
    }

    init()
  }, [selectedNode])

  const topicValue = watch('topic')

  const closeHandler = () => {
    close()
  }

  const handleSave = async () => {
    setLoading(true)

    try {
      await putNodeData(actualNode?.ref_id || '', { topic: topicValue.trim() })

      if (data) {
        const newData = { ...data }

        console.log(newData)
      }

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

  const isNodeNameChanged = getValues().topic && actualNode?.topic !== getValues().topic

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
            disabled={topicIsLoading || !actualNode}
            onClick={handleDelete}
            size="large"
            style={{ marginRight: 20 }}
            variant="contained"
          >
            Delete
          </DeleteButton>
          <Button
            color="secondary"
            disabled={loading || topicIsLoading || !isNodeNameChanged}
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
