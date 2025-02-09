import { lazy, Suspense, useCallback, useEffect, useRef } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { Socket } from 'socket.io-client'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { GlobalStyle } from '~/components/GlobalStyle'
import { Overlay } from '~/components/Universe/Overlay' // Import Overlay directly
import { useSocket } from '~/hooks/useSockets'
import { useAiSummaryStore } from '~/stores/useAiSummaryStore'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { useFeatureFlagStore } from '~/stores/useFeatureFlagStore'
import { useTeachStore } from '~/stores/useTeachStore'
import { useUserStore } from '~/stores/useUserStore'
import {
  AiSummaryAnswerResponse,
  AiSummaryAudioResponse,
  AiSummaryQuestionsResponse,
  AiSummarySourcesResponse,
  ExtractedEntitiesResponse,
  FetchDataResponse,
} from '~/types'
import { colors } from '~/utils/colors'
import { updateBudget } from '~/utils/setBudget'
import version from '~/utils/versionHelper'
import { ModalsContainer } from '../ModalsContainer'
import { ActionsToolbar } from './ActionsToolbar'
import { AppBar } from './AppBar'
import { DeviceCompatibilityNotice } from './DeviceCompatibilityNotification'
import { Toasts } from './Toasts'

const Wrapper = styled(Flex)`
  height: 100%;
  width: 100%;
  background-color: ${colors.black};
`

const Version = styled(Flex)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: ${colors.white};
  font-size: 12px;
  opacity: 0.5;
`

const LazyMainToolbar = lazy(() => import('./MainToolbar').then(({ MainToolbar }) => ({ default: MainToolbar })))
const LazyUniverse = lazy(() => import('~/components/Universe').then(({ Universe }) => ({ default: Universe })))
const LazySideBar = lazy(() => import('./SideBar').then(({ SideBar }) => ({ default: SideBar })))

export const App = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')
  const { setBudget, setNodeCount } = useUserStore((s) => s)
  const queueRef = useRef<FetchDataResponse | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const {
    setSidebarOpen,
    currentSearch: searchTerm,
    setCurrentSearch,
    setRelevanceSelected,
    setTranscriptOpen,
    universeQuestionIsOpen,
  } = useAppStore((s) => s)

  const setTeachMeAnswer = useTeachStore((s) => s.setTeachMeAnswer)

  const {
    fetchData,
    setCategoryFilter,
    setAbortRequests,
    addNewNode,
    splashDataLoading,
    runningProjectId,
    setRunningProjectMessages,
    isFetching,
    resetData,
  } = useDataStore((s) => s)

  const { setAiSummaryAnswer, getKeyExist, aiRefId } = useAiSummaryStore((s) => s)

  const [realtimeGraphFeatureFlag, chatInterfaceFeatureFlag] = useFeatureFlagStore((s) => [
    s.realtimeGraphFeatureFlag,
    s.chatInterfaceFeatureFlag,
  ])

  const socket: Socket | undefined = useSocket()

  const form = useForm<{ search: string }>({ mode: 'onChange' })

  const { setValue } = form

  useEffect(() => {
    setValue('search', query ?? '')

    setTranscriptOpen(false)
    setRelevanceSelected(false)
    setCurrentSearch(query ?? '')
    setTeachMeAnswer('')
    setCategoryFilter(null)
  }, [query, setCategoryFilter, setCurrentSearch, setRelevanceSelected, setTeachMeAnswer, setTranscriptOpen, setValue])

  useEffect(() => {
    const runSearch = async () => {
      await fetchData(setBudget, setAbortRequests)
      setSidebarOpen(true)

      if (searchTerm) {
        await updateBudget(setBudget)
      }
    }

    resetData()

    runSearch()
  }, [searchTerm, fetchData, setBudget, setAbortRequests, setSidebarOpen, resetData])

  const handleNewNode = useCallback(() => {
    setNodeCount('INCREMENT')
  }, [setNodeCount])

  const handleNewNodeCreated = useCallback(
    (data: FetchDataResponse) => {
      if (isFetching) {
        return
      }

      if (!queueRef.current) {
        queueRef.current = { nodes: [], edges: [] }
      }

      if (data.edges) {
        queueRef.current.edges.push(...data.edges)
      }

      if (data.nodes) {
        queueRef.current.nodes.push(...data.nodes)
      }

      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }

      timerRef.current = setTimeout(() => {
        // Combine all queued data into a single update
        if (queueRef.current) {
          const { nodes: newNodes, edges: newEdges } = queueRef.current
          const batchedData = { nodes: newNodes, edges: newEdges }

          queueRef.current = { nodes: [], edges: [] }

          addNewNode(batchedData)
        }
      }, 3000) // Adjust delay as necessary
    },
    [addNewNode, isFetching],
  )

  const handleAiSummaryAnswer = useCallback(
    (data: AiSummaryAnswerResponse) => {
      if (data.ref_id) {
        setAiSummaryAnswer(data.ref_id, { answer: data.answer, answerLoading: false })
      }
    },
    [setAiSummaryAnswer],
  )

  const handleAiSummaryAudio = useCallback(
    (data: AiSummaryAudioResponse) => {
      if (data.ref_id) {
        setAiSummaryAnswer(data.ref_id, { audio_en: data.audio_EN })
      }
    },
    [setAiSummaryAnswer],
  )

  const handleAiRelevantQuestions = useCallback(
    (data: AiSummaryQuestionsResponse) => {
      if (data.ref_id) {
        setAiSummaryAnswer(data.ref_id, {
          questions: data.relevant_questions.map((i) => i.question),
          questionsLoading: false,
        })
      }
    },
    [setAiSummaryAnswer],
  )

  const handleAiSources = useCallback(
    (data: AiSummarySourcesResponse) => {
      if (data.ref_id) {
        setAiSummaryAnswer(data.ref_id, { sources: data.sources.map((i) => i.ref_id), sourcesLoading: false })
      }
    },
    [setAiSummaryAnswer],
  )

  const handleExtractedEntities = useCallback(
    (data: ExtractedEntitiesResponse) => {
      if (data.question && getKeyExist(aiRefId)) {
        setAiSummaryAnswer(aiRefId, { answerLoading: false, entities: data.entities })
      }
    },
    [setAiSummaryAnswer, getKeyExist, aiRefId],
  )

  // setup socket
  useEffect(() => {
    if (socket) {
      socket.connect()

      socket.on('connect_error', (error: unknown) => {
        console.error('Socket connection error:', error)
      })

      socket.on('newnode', handleNewNode)

      if (chatInterfaceFeatureFlag) {
        socket.on('extractedentitieshook', handleExtractedEntities)
      }

      // subscribe to ai_summary
      if (chatInterfaceFeatureFlag) {
        socket.on('askquestionhook', handleAiSummaryAnswer)
      }

      if (chatInterfaceFeatureFlag) {
        socket.on('relevantquestionshook', handleAiRelevantQuestions)
      }

      if (chatInterfaceFeatureFlag) {
        socket.on('answersourceshook', handleAiSources)
      }

      if (realtimeGraphFeatureFlag) {
        socket.on('new_node_created', handleNewNodeCreated)
      }

      if (chatInterfaceFeatureFlag) {
        socket.on('answeraudiohook', handleAiSummaryAudio)
      }
    }

    return () => {
      if (socket) {
        socket.off()
      }
    }
  }, [
    socket,
    handleNewNode,
    handleNewNodeCreated,
    realtimeGraphFeatureFlag,
    handleAiSummaryAnswer,
    chatInterfaceFeatureFlag,
    handleAiRelevantQuestions,
    handleAiSources,
    handleExtractedEntities,
    handleAiSummaryAudio,
  ])

  useEffect(() => {
    if (!runningProjectId) {
      return
    }

    const ws = new WebSocket('wss://jobs.stakwork.com/cable?channel=ProjectLogChannel')

    ws.onopen = () => {
      const id = runningProjectId

      const command = {
        command: 'subscribe',
        identifier: JSON.stringify({ channel: 'ProjectLogChannel', id }),
      }

      // Send the command as a JSON string
      ws.send(JSON.stringify(command))
    }

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data)

      console.log(data)

      if (data.type === 'ping') {
        return
      }

      const message = data?.message?.message

      if (message) {
        setRunningProjectMessages(message)
      }

      // Handle the message from the server here
    }

    ws.onerror = (error) => {
      console.error('WebSocket error:', error)
    }
  }, [runningProjectId, setRunningProjectMessages])

  useEffect(() => {
    if (runningProjectId) {
      try {
        socket?.emit('update_project_id', { id: runningProjectId })
      } catch (error) {
        console.error(error)
      }
    }
  }, [runningProjectId, socket])

  return (
    <>
      <GlobalStyle />

      <DeviceCompatibilityNotice />

      <Suspense fallback={<div>Loading...</div>}>
        {!splashDataLoading ? (
          <Wrapper direction="row">
            <FormProvider {...form}>
              <LazyMainToolbar />
              {!universeQuestionIsOpen && <LazySideBar />}
              <LazyUniverse />
              <Overlay />
              <AppBar />
              <Version>v{version}</Version>
              <ActionsToolbar />
            </FormProvider>

            <ModalsContainer />
            <Toasts />
          </Wrapper>
        ) : null}
      </Suspense>
    </>
  )
}
