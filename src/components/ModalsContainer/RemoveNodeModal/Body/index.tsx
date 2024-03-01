import { Button, Skeleton } from '@mui/material'
import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import { TypeOptions, toast } from 'react-toastify'
import { Flex } from '~/components/common/Flex'
import { ToastMessage } from '~/components/common/Toast/toastMessage'
import { deleteNode, getTopicsData } from '~/network/fetchSourcesData'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { useModal } from '~/stores/useModalStore'
import { NodeExtended, Topic } from '~/types'
import { colors } from '~/utils/colors'
import { TitleEditor } from '../Title'

export type FormData = {
  name: string
}

const notify = (message: string, type: TypeOptions) => {
  toast(<ToastMessage message={message} />, {
    icon: false,
    position: toast.POSITION.BOTTOM_CENTER,
    type,
  })
}

export const Body = () => {
  const { close } = useModal('removeNode')
  const [loading, setLoading] = useState(false)
  const [removeNode, setSelectedNode] = useDataStore((s) => [s.removeNode, s.setSelectedNode])

  const [topicIsLoading, setTopicIsLoading] = useState(false)

  const [actualNode, setActualNode] = useState<null | NodeExtended>()
  const [actualTopicNode, setActualTopicNode] = useState<null | Topic>()

  const selectedNode = useSelectedNode()

  const closeHandler = () => {
    close()
  }

  useEffect(() => {
    const init = async () => {
      if (!selectedNode) {
        return
      }

      setTopicIsLoading(true)

      try {
        if (selectedNode.type === 'topic') {
          const { data } = await getTopicsData({ search: selectedNode?.name })

          const node = data.find((i: Topic) => i.topic === selectedNode.name)

          setActualTopicNode(node)
        } else {
          setActualNode(selectedNode)
        }
      } catch (error) {
        console.log(error)
      } finally {
        setTopicIsLoading(false)
      }
    }

    init()
  }, [selectedNode])

  const handleTopicRemove = async () => {
    setLoading(true)

    try {
      notify('Topic node removal coming soon', 'info')
      setSelectedNode(null)
      closeHandler()
    } catch (error) {
      console.warn(error)
    } finally {
      setLoading(false)
    }
  }

  const handleRemove = async () => {
    let refId = ''
    const node = actualNode || actualTopicNode

    if (!node) {
      return
    }

    if (node?.ref_id) {
      refId = node.ref_id
    }

    setLoading(true)

    try {
      await deleteNode(refId)

      removeNode(refId)
      setSelectedNode(null)
      notify('Removed Node', 'success')
      closeHandler()
    } catch (error) {
      console.log(error)
      notify('Removed failed, try later', 'error')

      console.warn(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <TitleEditor />
      {topicIsLoading ? (
        <Skeleton />
      ) : (
        <Flex direction="row" justify="space-between">
          <Button color="secondary" onClick={closeHandler} size="medium" variant="outlined">
            Cancel
          </Button>
          <Button
            disabled={loading || (!actualNode && !actualTopicNode)}
            onClick={actualNode || actualTopicNode ? handleRemove : handleTopicRemove}
            size="medium"
            variant="text"
          >
            Confirm
            {loading && <ClipLoader color={colors.BLUE_PRESS_STATE} size={10} />}
          </Button>
        </Flex>
      )}
    </>
  )
}
