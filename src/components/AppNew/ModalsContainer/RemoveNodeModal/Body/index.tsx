import { Button, Skeleton } from '@mui/material'
import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import { Flex } from '~/components/common/Flex'
import { deleteNode, getTopicsData } from '~/network/fetchSourcesData'
import { useSelectedNode } from '~/stores/useDataStore'
import { useModal } from '~/stores/useModalStore'
import { Topic } from '~/types'
import { colors } from '~/utils/colors'
import { TitleEditor } from '../Title'

export type FormData = {
  name: string
}

export const Body = () => {
  const { close } = useModal('removeNode')
  const [loading, setLoading] = useState(false)

  const [topicIsLoading, setTopicIsLoading] = useState(false)

  const [actualNode, setActualNode] = useState<null | Topic>()

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
        const { data } = await getTopicsData({ search: selectedNode?.name })

        const node = data.find((i) => i.topic === selectedNode.name)

        setActualNode(node)
      } catch (error) {
        console.log(error)
      } finally {
        setTopicIsLoading(false)
      }
    }

    init()
  }, [selectedNode])

  const handleRemove = async () => {
    if (!actualNode?.ref_id) {
      return
    }

    setLoading(true)

    try {
      const res = await deleteNode(actualNode.ref_id)

      console.log(res)

      console.log('remove')

      false && closeHandler()
    } catch (error) {
      console.log(error)

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
          <Button disabled={loading || !actualNode} onClick={handleRemove} size="medium" variant="text">
            Confirm
            {loading && <ClipLoader color={colors.BLUE_PRESS_STATE} size={10} />}
          </Button>
        </Flex>
      )}
    </>
  )
}
