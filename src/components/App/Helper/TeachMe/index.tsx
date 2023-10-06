import { useCallback, useEffect, useRef } from 'react'
import { PropagateLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import { Socket } from 'socket.io-client'
import * as sphinx from 'sphinx-bridge-kevkevinpal'
import { Button } from '@mui/material'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { ToastMessage } from '~/components/common/Toast/toastMessage'
import useSocket from '~/hooks/useSockets'
import { postTeachMe } from '~/network/fetchGraphData'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { useTeachStore } from '~/stores/useTeachStore'
import { colors } from '~/utils/colors'
import { AskQuestion } from '../AskQuestion'
import ReactFlow from 'reactflow'

import 'reactflow/dist/style.css'

type ResponseType = {
  tutorial: string
}

export const TeachMe = () => {
  const [data, setTeachMe] = useDataStore((s) => [s.data, s.setTeachMe])
  const [searchTerm, setSideBarOpen] = useAppStore((s) => [s.currentSearch, s.setSidebarOpen])

  const isSocketSet: { current: boolean } = useRef<boolean>(false)
  const socket: Socket | null = useSocket()

  const [setTeachMeAnswer, setHasTeachingInProgress] = useTeachStore((s) => [
    s.setTeachMeAnswer,
    s.setHasTeachingInProgress,
  ])

  const handleTeachMe = useCallback(
    (response: ResponseType) => {
      setTeachMeAnswer(response.tutorial)

      toast(<ToastMessage message="Tutorial is ready" />, {
        position: toast.POSITION.BOTTOM_CENTER,
        type: 'success',
      })
    },
    [setTeachMeAnswer],
  )

  useEffect(() => {
    if (isSocketSet.current) {
      return
    }

    if (handleTeachMe) {
      if (socket) {
        socket.on('teachmehook', handleTeachMe)

        isSocketSet.current = true
      }
    }
  }, [socket, handleTeachMe])

  const handleTutorialStart = async () => {
    if (searchTerm) {
      setHasTeachingInProgress(true)
      setSideBarOpen(true)
      setTeachMe(true)

      try {
        const nodesWithTranscript = data?.nodes.filter((i) => i.text)
        const firstFiveItems = nodesWithTranscript?.slice(0, 5)

        const transcripts = (firstFiveItems?.length ? firstFiveItems.map((i) => i.text).join(' ') : '')
          .substring(0, 2500)
          .replace(/[?&=+/#]/g, (match) => `\\${match}`)

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        await sphinx.enable()

        await postTeachMe({
          term: searchTerm,
          transcripts,
        })

        toast(<ToastMessage message="We started preparing tutorial for you" />, {
          type: 'success',
        })
      } catch (error: unknown) {
        setHasTeachingInProgress(false)
      }
    }
  }

  return (
    <Button kind="big" onClick={() => handleTutorialStart()}>
      Teach me
    </Button>
  )
}

export const TeachMeText = () => {
  const initialNodes = [
    {
      color: '#FF8C00',
      data: {
        label: 'Sphinx Relay',
      },
      id: 'sphinx_relay',
      position: {
        x: 0,
        y: 0,
      },
      properties: {},
      type: 'technology',
    },
    {
      color: '#FFD700',
      data: {
        label: 'Layer 2 Scaling Solution',
      },
      id: 'layer_2_scaling_solution',
      position: {
        x: 0,
        y: 100,
      },
      properties: {},
      type: 'concept',
    },
    {
      color: '#FFD700',
      data: {
        label: 'Payment Channels',
      },
      id: 'payment_channels',
      position: {
        x: -200,
        y: 200,
      },
      properties: {},
      type: 'concept',
    },
    {
      color: '#FF8C00',
      data: {
        label: 'Lightning Network',
      },
      id: 'lightning_network',
      position: {
        x: -200,
        y: 300,
      },
      properties: {},
      type: 'technology',
    },
    {
      color: '#FF8C00',
      data: {
        label: 'Bitcoin',
      },
      id: 'bitcoin',
      position: {
        x: -400,
        y: 400,
      },
      properties: {},
      type: 'technology',
    },
  ]

  const initialEdges = [
    {
      color: '#008000',
      direction: 'forward',
      label: 'is a',
      properties: {},
      source: 'sphinx_relay',
      target: 'layer_2_scaling_solution',
    },
    {
      color: '#008000',
      direction: 'forward',
      label: 'uses',
      properties: {},
      source: 'layer_2_scaling_solution',
      target: 'payment_channels',
    },
    {
      color: '#008000',
      direction: 'forward',
      label: 'utilizes',
      properties: {},
      source: 'payment_channels',
      target: 'lightning_network',
    },
    {
      color: '#008000',
      direction: 'forward',
      label: 'built on',
      properties: {},
      source: 'lightning_network',
      target: 'bitcoin',
    },
  ]

  const [teachMeAnswer, hasTeachingInProgress] = useTeachStore((s) => [s.teachMeAnswer, s.hasTeachingInProgress])

  return (
    <>
      {!hasTeachingInProgress ? (
        <>
          <ReactFlow edges={initialEdges} nodes={initialNodes} />
          <Flex>
            <Text>{teachMeAnswer}</Text>
          </Flex>
          <AskQuestion />
        </>
      ) : (
        <Flex align="center" justify="center" py={12}>
          <Flex align="center" py={12}>
            <PropagateLoader color={colors.white} />
          </Flex>
          <Flex align="center" py={12}>
            <Text>Generating tutorial</Text>
          </Flex>
        </Flex>
      )}
    </>
  )
}
