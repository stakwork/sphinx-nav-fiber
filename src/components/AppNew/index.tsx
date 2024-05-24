import { Leva } from 'leva'
import { lazy, Suspense, useCallback, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import 'react-toastify/dist/ReactToastify.css'
import { Socket } from 'socket.io-client'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { GlobalStyle } from '~/components/GlobalStyle'
import { isDevelopment } from '~/constants'
import { useSocket } from '~/hooks/useSockets'
import { useAppStore } from '~/stores/useAppStore'
import { useGraphStore } from '~/stores/useGraphStore'
import { useUserStore } from '~/stores/useUserStore'
import { colors } from '~/utils/colors'
import { updateBudget } from '~/utils/setBudget'
import version from '~/utils/versionHelper'
import { ActionsToolbar } from './ActionsToolbar'
import { AppBar } from './AppBar'
import { DeviceCompatibilityNotice } from './DeviceCompatibilityNotification'
import { Helper } from './Helper'
import { ModalsContainer } from './ModalsContainer'
import { Toasts } from './Toasts'
import { Overlay } from './Universe/Overlay'

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
const LazyUniverse = lazy(() => import('./Universe').then(({ Universe }) => ({ default: Universe })))
const LazySideBar = lazy(() => import('./SideBar').then(({ SideBar }) => ({ default: SideBar })))

export const AppNew = () => {
  const [setBudget, setNodeCount] = useUserStore((s) => [s.setBudget, s.setNodeCount])

  const [setSidebarOpen, searchTerm, setCurrentSearch, setRelevanceSelected, setTranscriptOpen] = [
    useAppStore((s) => s.setSidebarOpen),
    useAppStore((s) => s.currentSearch),
    useAppStore((s) => s.setCurrentSearch),
    useAppStore((s) => s.setRelevanceSelected),
    useAppStore((s) => s.setTranscriptOpen),
  ]

  const [fetchData, setSelectedNode] = useGraphStore((s) => [s.fetchData, s.setSelectedNode])

  const socket: Socket | undefined = useSocket()

  const form = useForm<{ search: string }>({ mode: 'onChange' })

  const handleSubmit = form.handleSubmit(({ search }) => {
    setTranscriptOpen(false)
    setSelectedNode(null)
    setRelevanceSelected(false)
    setCurrentSearch(search)
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

  const handleNewNode = useCallback(() => {
    setNodeCount('INCREMENT')
  }, [setNodeCount])

  // setup socket
  useEffect(() => {
    if (socket) {
      socket.on('connect_error', (error: unknown) => {
        console.error('Socket connection error:', error)
      })

      socket.on('newnode', handleNewNode)
    }
  }, [socket, handleNewNode])

  useEffect(
    () => () => {
      if (socket) {
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
          <FormProvider {...form}>
            <LazyMainToolbar />
            {false && <LazySideBar onSubmit={handleSubmit} />}
            <LazyUniverse />
            <AppBar />
            <Version>v{version}</Version>
            <ActionsToolbar />
            <Overlay onSubmit={handleSubmit} />
          </FormProvider>
          <ModalsContainer />
          <Toasts />
          <Helper />
        </Wrapper>
      </Suspense>
    </>
  )
}
