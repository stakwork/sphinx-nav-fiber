import { styled } from '@mui/material'
import { useCallback, useEffect, useRef } from 'react'
import { PropagateLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import { Socket } from 'socket.io-client'
import * as sphinx from 'sphinx-bridge-kevkevinpal'
import { Button } from '~/components/Button'
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

type ResponseType = {
  tutorial: string
}

export const TeachMe = () => {
  const data = useDataStore((s) => s.data)
  const searchTerm = useAppStore((s) => s.currentSearch)

  const isSocketSet: { current: boolean } = useRef<boolean>(false)
  const socket: Socket | null = useSocket()

  const [teachMeAnswer, setTeachMeAnswer, hasTeachingInProgress, setHasTeachingInProgress] = useTeachStore((s) => [
    s.teachMeAnswer,
    s.setTeachMeAnswer,
    s.hasTeachingInProgress,
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
    <Container>
      {!hasTeachingInProgress ? (
        <>
          {!teachMeAnswer ? (
            <Flex py={8}>
              <Button kind="big" onClick={() => handleTutorialStart()}>
                Teach me
              </Button>
            </Flex>
          ) : (
            <>
              <Flex>
                <Text>{teachMeAnswer}</Text>
              </Flex>
              <AskQuestion />
            </>
          )}
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
    </Container>
  )
}

const Container = styled('div')(() => ({
  marginTop: 'auto',
}))
