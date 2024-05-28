import { Button } from '@mui/material'
import { useCallback, useEffect, useRef } from 'react'
import { PropagateLoader } from 'react-spinners'
import ReactFlow from 'reactflow'
import { Socket } from 'socket.io-client'
import * as sphinx from 'sphinx-bridge'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { postInstagraph, postTeachMe } from '~/network/teach'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { InstagraphResponse, useTeachStore } from '~/stores/useTeachStore'
import { useUserStore } from '~/stores/useUserStore'
import { colors } from '~/utils/colors'
import { updateBudget } from '~/utils/setBudget'
import { AskQuestion } from '../AskQuestion'

import 'reactflow/dist/style.css'
import { useSocket } from '~/hooks/useSockets'

type ResponseType = {
  tutorial: string
}

export const TeachMe = () => {
  const [data, setTeachMe] = useDataStore((s) => [s.data, s.setTeachMe])
  const [searchTerm, setSideBarOpen] = useAppStore((s) => [s.currentSearch, s.setSidebarOpen])
  const [setBudget] = useUserStore((s) => [s.setBudget])

  const isSocketSet: { current: boolean } = useRef<boolean>(false)
  const socket: Socket | undefined = useSocket()

  const [setTeachMeAnswer, setHasTeachingInProgress, setInstagraphAnswer, setHasInstagraphInProgress] = useTeachStore(
    (s) => [s.setTeachMeAnswer, s.setHasTeachingInProgress, s.setInstagraphAnswer, s.setHasInstagraphInProgress],
  )

  const handleTeachMe = useCallback(
    (response: ResponseType) => {
      setTeachMeAnswer(response.tutorial)
    },
    [setTeachMeAnswer],
  )

  const handleInstagraph = useCallback(
    (response: InstagraphResponse) => {
      setInstagraphAnswer(response)
    },
    [setInstagraphAnswer],
  )

  useEffect(() => {
    if (!socket) {
      return
    }

    if (handleTeachMe) {
      socket.on('teachmehook', handleTeachMe)
    }

    if (handleInstagraph) {
      socket.on('instagraphhook', handleInstagraph)

      isSocketSet.current = true
    }
  }, [socket, handleTeachMe, handleInstagraph])

  const handleTutorialStart = async () => {
    if (searchTerm) {
      setHasTeachingInProgress(true)
      setHasInstagraphInProgress(true)
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

        await postTeachMe(
          {
            term: searchTerm,
            transcripts,
          },
          setBudget,
        )

        await updateBudget(setBudget)

        await postInstagraph(
          {
            term: searchTerm,
            transcripts,
          },
          setBudget,
        )

        await updateBudget(setBudget)
      } catch (error: unknown) {
        setHasTeachingInProgress(false)
        setHasInstagraphInProgress(false)
      }
    }
  }

  return <ButtonStyled onClick={() => handleTutorialStart()}>Teach me</ButtonStyled>
}

const TeachMeLoader = ({ text }: { text: string }) => (
  <Flex align="center" justify="center" py={12}>
    <Flex align="center" py={12}>
      <PropagateLoader color={colors.white} />
    </Flex>
    <Flex align="center" py={12}>
      <Text>{text}</Text>
    </Flex>
  </Flex>
)

export const TeachMeText = () => {
  const [teachMeAnswer, hasTeachingInProgress, instgraphAnswser, hasInstagraphInProgress] = useTeachStore((s) => [
    s.teachMeAnswer,
    s.hasTeachingInProgress,
    s.instgraphAnswser,
    s.hasInstagraphInProgress,
  ])

  const showInstagraph: boolean = !hasInstagraphInProgress && !!instgraphAnswser?.edges && !!instgraphAnswser?.nodes

  return (
    <>
      {showInstagraph ? (
        <ReactFlow edges={instgraphAnswser?.edges} nodes={instgraphAnswser?.nodes} />
      ) : (
        <TeachMeLoader text="Generating instagraph" />
      )}
      {!hasTeachingInProgress ? (
        <>
          <TeachMeAnswerFlex>
            <Text>{teachMeAnswer}</Text>
          </TeachMeAnswerFlex>
          <AskQuestion />
        </>
      ) : (
        <TeachMeLoader text="Generating tutorial" />
      )}
    </>
  )
}

const ButtonStyled = styled(Button)``

const TeachMeAnswerFlex = styled(Flex)`
  padding-left: 10px;
  padding-right: 10px;
`
