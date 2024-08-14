import { Leva } from 'leva'
import { lazy, Suspense, useCallback, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { Socket } from 'socket.io-client'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { GlobalStyle } from '~/components/GlobalStyle'
import { Overlay } from '~/components/Universe/Overlay' // Import Overlay directly
import { isDevelopment } from '~/constants'
import { useSocket } from '~/hooks/useSockets'
import { useAiSummaryStore } from '~/stores/useAiSummaryStore'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { useFeatureFlagStore } from '~/stores/useFeatureFlagStore'
import { useUpdateSelectedNode } from '~/stores/useGraphStore'
import { useTeachStore } from '~/stores/useTeachStore'
import { useUserStore } from '~/stores/useUserStore'
import {
  AiSummaryAnswerResponse,
  AiSummaryAudioResponse,
  AiSummaryQuestionsResponse,
  AiSummarySourcesResponse,
  ExtractedEntitiesResponse,
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
  const [setBudget, setNodeCount] = useUserStore((s) => [s.setBudget, s.setNodeCount])

  const {
    setSidebarOpen,
    currentSearch: searchTerm,
    setCurrentSearch,
    setRelevanceSelected,
    setTranscriptOpen,
  } = useAppStore((s) => s)

  const setTeachMeAnswer = useTeachStore((s) => s.setTeachMeAnswer)

  const { fetchData, setCategoryFilter, setAbortRequests, addNewNode, splashDataLoading } = useDataStore((s) => s)

  const { setAiSummaryAnswer, getKeyExist, aiRefId } = useAiSummaryStore((s) => s)

  const setSelectedNode = useUpdateSelectedNode()

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
    setSelectedNode(null)
    setRelevanceSelected(false)
    setCurrentSearch(query ?? '')
    setTeachMeAnswer('')
    setCategoryFilter(null)
  }, [
    query,
    setCategoryFilter,
    setCurrentSearch,
    setRelevanceSelected,
    setSelectedNode,
    setTeachMeAnswer,
    setTranscriptOpen,
    setValue,
  ])

  useEffect(() => {
    const runSearch = async () => {
      await fetchData(setBudget, setAbortRequests)
      setSidebarOpen(true)

      if (searchTerm) {
        await updateBudget(setBudget)
      } else {
        setSelectedNode(null)
      }
    }

    runSearch()
  }, [searchTerm, fetchData, setBudget, setAbortRequests, setSidebarOpen, setSelectedNode])

  const handleNewNode = useCallback(() => {
    setNodeCount('INCREMENT')
  }, [setNodeCount])

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

  const handleNewNodeCreated = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (data: any) => {
      // Use the data recieved to create graph in realtime
      addNewNode(data)
    },
    [addNewNode],
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

  return (
    <>
      <GlobalStyle />

      <DeviceCompatibilityNotice />

      <Leva hidden={!isDevelopment} />

      <Suspense fallback={<div>Loading...</div>}>
        {!splashDataLoading ? (
          <Wrapper direction="row">
            <FormProvider {...form}>
              <LazyMainToolbar />
              <LazySideBar />
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
