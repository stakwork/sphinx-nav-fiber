import { Leva } from 'leva'
import { Suspense, lazy, useCallback, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import 'react-toastify/dist/ReactToastify.css'
import { Socket } from 'socket.io-client'
import styled from 'styled-components'
import { DataRetriever } from '~/components/DataRetriever'
import { GlobalStyle } from '~/components/GlobalStyle'
import { Flex } from '~/components/common/Flex'
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
import { ActionsToolbar } from './ActionsToolbar'
import { AppBar } from './AppBar'
import { DeviceCompatibilityNotice } from './DeviceCompatibilityNotification'
import { Helper } from './Helper'
import { SecondarySideBar } from './SecondarySidebar'
import { Toasts } from './Toasts'
import { ModalsContainer } from '../ModalsContainer'

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

  const [setSidebarOpen, searchTerm, setCurrentSearch, setRelevanceSelected, setTranscriptOpen] = [
    useAppStore((s) => s.setSidebarOpen),
    useAppStore((s) => s.currentSearch),
    useAppStore((s) => s.setCurrentSearch),
    useAppStore((s) => s.setRelevanceSelected),
    useAppStore((s) => s.setTranscriptOpen),
  ]

  const setTeachMeAnswer = useTeachStore((s) => s.setTeachMeAnswer)

  const [data, setData, fetchData, graphStyle, setSelectedNode, setCategoryFilter] = [
    useDataStore((s) => s.data),
    useDataStore((s) => s.setData),
    useDataStore((s) => s.fetchData),
    useDataStore((s) => s.graphStyle),
    useDataStore((s) => s.setSelectedNode),
    useDataStore((s) => s.setCategoryFilter),
  ]

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
    await fetchData(setBudget, { word: searchTerm ?? '' })
    setSidebarOpen(true)

    if (searchTerm) {
      await updateBudget(setBudget)
    }
  }, [fetchData, searchTerm, setSidebarOpen, setBudget])

  useEffect(() => {
    runSearch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, runSearch])

  const repositionGraphDataAfterStyleChange = () => {
    if (data) {
      const updatedData: GraphData = getGraphDataPositions(graphStyle, data.nodes)

      setData(updatedData)
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
      socket.on('connect_error', (error: unknown) => {
        console.error('Socket connection error:', error)
      })

      socket.on('connect', () => console.log('connected'))
      socket.on('disconnect', () => console.log('disconnected'))
      socket.on('newnode', handleNewNode)
    }
  }, [socket, handleNewNode])

  useEffect(
    () => () => {
      if (socket) {
        console.log('disc')
        socket.disconnect()
      }
    },
    [socket],
  )

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
