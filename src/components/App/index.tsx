import { Leva } from 'leva'
import { useCallback, useEffect, useRef } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import 'react-toastify/dist/ReactToastify.css'
import { Socket } from 'socket.io-client'
import * as sphinx from 'sphinx-bridge-kevkevinpal'
import styled from 'styled-components'
import { DataRetriever } from '~/components/DataRetriever'
import { GlobalStyle } from '~/components/GlobalStyle'
import { Universe } from '~/components/Universe'
import { Flex } from '~/components/common/Flex'
import { isDevelopment, isE2E } from '~/constants'
import useSocket from '~/hooks/useSockets'
import { getGraphDataPositions } from '~/network/fetchGraphData/const'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { useTeachStore } from '~/stores/useTeachStore'
import { useUserStore } from '~/stores/useUserStore'
import { GraphData } from '~/types'
import { colors } from '~/utils/colors'
import { updateBudget } from '~/utils/setBudget'
import { E2ETests } from '~/utils/tests'
import version from '~/utils/versionHelper'
import { AddContentModal } from '../AddContentModal'
import { SettingsModal } from '../SettingsModal'
import { SourcesTableModal } from '../SourcesTableModal'
import { ActionsToolbar } from './ActionsToolbar'
import { AppBar } from './AppBar'
import { Helper } from './Helper'
import { MainToolbar } from './MainToolbar'
import { AppProviders } from './Providers'
import { SecondarySideBar } from './SecondarySidebar'
import { SideBar } from './SideBar'
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

  const [data, setData, fetchData, graphStyle, setSphinxModalOpen, setSelectedNode, setCategoryFilter] = [
    useDataStore((s) => s.data),
    useDataStore((s) => s.setData),
    useDataStore((s) => s.fetchData),
    useDataStore((s) => s.graphStyle),
    useDataStore((s) => s.setSphinxModalOpen),
    useDataStore((s) => s.setSelectedNode),
    useDataStore((s) => s.setCategoryFilter),
  ]

  const isSocketSet: { current: boolean } = useRef<boolean>(false)

  const socket: Socket | null = useSocket()

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
    if (searchTerm) {
      setSphinxModalOpen(true)

      // skipping this for end to end test because it requires a sphinx-relay to be connected
      if (!isE2E) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        await sphinx.enable()

        await updateBudget(setBudget)
      }

      setSphinxModalOpen(false)
    }

    await fetchData(searchTerm)
    setSidebarOpen(true)

    await updateBudget(setBudget)
  }, [fetchData, searchTerm, setSphinxModalOpen, setSidebarOpen, setBudget])

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
    if (isSocketSet.current) {
      return
    }

    if (socket) {
      socket.on('newnode', handleNewNode)

      isSocketSet.current = true
    }
  }, [socket, handleNewNode])

  return (
    <AppProviders>
      <GlobalStyle />

      <Leva hidden={!isDevelopment} />

      <Wrapper direction="row">
        <DataRetriever>
          <FormProvider {...form}>
            <MainToolbar />
            <SideBar onSubmit={handleSubmit} />
            <Universe />
            <SecondarySideBar />
            <AppBar />
            <Version>v{version}</Version>
            <ActionsToolbar />
          </FormProvider>
        </DataRetriever>

        <AddContentModal />
        <SettingsModal />

        <Toasts />

        <SourcesTableModal />
        <Helper />
      </Wrapper>
      <E2ETests />
    </AppProviders>
  )
}
