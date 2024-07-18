import { Leva } from 'leva'
import { lazy, Suspense, useCallback, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { Socket } from 'socket.io-client'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { DataRetriever } from '~/components/DataRetriever'
import { GlobalStyle } from '~/components/GlobalStyle'
import { Overlay } from '~/components/Universe/Overlay' // Import Overlay directly
import { Preloader } from '~/components/Universe/Preloader' // Import Preloader directly
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
import { Helper } from './Helper'
import { SecondarySideBar } from './SecondarySidebar'
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

  const { fetchData, setCategoryFilter, setAbortRequests, addNewNode, filters } = useDataStore((s) => s)

  const { setAiSummaryAnswer, getKeyExist } = useAiSummaryStore((s) => s)

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

  const runSearch = useCallback(async () => {
    await fetchData(setBudget, setAbortRequests)
    setSidebarOpen(true)

    if (searchTerm) {
      await updateBudget(setBudget)
    } else {
      setSelectedNode(null)
    }
  }, [fetchData, setBudget, searchTerm, setSidebarOpen, setSelectedNode, setAbortRequests])

  useEffect(() => {
    runSearch()
  }, [searchTerm, runSearch, filters])

  const handleNewNode = useCallback(() => {
    setNodeCount('INCREMENT')
  }, [setNodeCount])

  const handleAiSummaryAnswer = useCallback(
    (data: AiSummaryAnswerResponse) => {
      console.log(data)

      if (data.question && getKeyExist(data.question)) {
        setAiSummaryAnswer(data.question, { answer: data.answer, answerLoading: false })
      }
    },
    [setAiSummaryAnswer, getKeyExist],
  )

  const handleAiRelevantQuestions = useCallback(
    (data: AiSummaryQuestionsResponse) => {
      if (data.question && getKeyExist(data.question)) {
        setAiSummaryAnswer(data.question, {
          questions: data.relevant_questions.map((i) => i.question),
          questionsLoading: false,
        })
      }
    },
    [setAiSummaryAnswer, getKeyExist],
  )

  const handleAiSources = useCallback(
    (data: AiSummarySourcesResponse) => {
      if (data.question && getKeyExist(data.question)) {
        setAiSummaryAnswer(data.question, { sources: data.sources.map((i) => i.ref_id), sourcesLoading: false })
      }
    },
    [setAiSummaryAnswer, getKeyExist],
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
      if (data.question && getKeyExist(data.question)) {
        setAiSummaryAnswer(data.question, { answerLoading: false, entities: data.entities })
      }
    },
    [setAiSummaryAnswer, getKeyExist],
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
  ])

  return (
    <>
      <GlobalStyle />

      <DeviceCompatibilityNotice />

      <Leva hidden={!isDevelopment} />

      <Suspense fallback={<div>Loading...</div>}>
        <Wrapper direction="row">
          <DataRetriever>
            <FormProvider {...form}>
              <LazyMainToolbar />
              <LazySideBar />
              <LazyUniverse />
              {false && <Preloader fullSize={false} />}
              <Overlay />
              <SecondarySideBar />
              <AppBar />
              <Version>v{version}</Version>
              <ActionsToolbar />
            </FormProvider>
          </DataRetriever>
          <ModalsContainer />
          <Toasts />

          <Helper />
        </Wrapper>
      </Suspense>
    </>
  )
}
