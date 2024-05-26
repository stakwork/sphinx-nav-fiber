import { Leva } from 'leva'
import { lazy, Suspense, useCallback, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
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
import { getGraphDataPositions } from '~/network/fetchGraphData/const'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { useTeachStore } from '~/stores/useTeachStore'
import { useUserStore } from '~/stores/useUserStore'
import { GraphData } from '~/types'
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
  const [setBudget, setNodeCount] = useUserStore((s) => [s.setBudget, s.setNodeCount])
  const [isLoading, setIsLoading] = useState(false)

  const {
    setSidebarOpen,
    currentSearch: searchTerm,
    setCurrentSearch,
    setRelevanceSelected,
    setTranscriptOpen,
  } = useAppStore((s) => s)

  const setTeachMeAnswer = useTeachStore((s) => s.setTeachMeAnswer)

  const { data, setData, fetchData, graphStyle, setSelectedNode, setCategoryFilter, setAbortRequests } = useDataStore(
    (s) => s,
  )

  const socket: Socket | undefined = useSocket()

  const form = useForm<{ search: string }>({ mode: 'onChange' })

  const handleSubmit = form.handleSubmit(({ search }) => {
    setTranscriptOpen(false)
    setSelectedNode(null)
    setRelevanceSelected(false)
    setCurrentSearch(search)
    setTeachMeAnswer('')
    setCategoryFilter(null)
  })

  const runSearch = useCallback(async () => {
    await fetchData(setBudget, setAbortRequests, { ...(searchTerm ? { word: searchTerm } : {}) })
    setSidebarOpen(true)

    if (searchTerm) {
      await updateBudget(setBudget)
    } else {
      setSelectedNode(null)
    }
  }, [fetchData, setBudget, searchTerm, setSidebarOpen, setSelectedNode, setAbortRequests])

  useEffect(() => {
    runSearch()
  }, [searchTerm, runSearch])

  const repositionGraphDataAfterStyleChange = () => {
    if (data) {
      setIsLoading(true)

      const updatedData: GraphData = getGraphDataPositions(graphStyle, data.nodes)

      setData(updatedData)
      setIsLoading(false)
    }
  }

  // switch graph style
  useEffect(() => {
    repositionGraphDataAfterStyleChange()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [graphStyle])

  const handleNewNode = useCallback(() => {
    setNodeCount('INCREMENT')
  }, [setNodeCount])

  // setup socket
  useEffect(() => {
    if (socket) {
      socket.connect()

      socket.on('connect_error', (error: unknown) => {
        console.error('Socket connection error:', error)
      })

      socket.on('newnode', handleNewNode)
    }

    return () => {
      if (socket) {
        socket.off()
      }
    }
  }, [socket, handleNewNode])

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
              <LazySideBar onSubmit={handleSubmit} />
              <LazyUniverse />
              {isLoading && <Preloader fullSize={false} />}
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
