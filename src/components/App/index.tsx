import { Leva } from 'leva'
import { useCallback, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import 'react-toastify/dist/ReactToastify.css'
import * as sphinx from 'sphinx-bridge-kevkevinpal'
import styled from 'styled-components'
import { AddNodeModal } from '~/components/AddNodeModal'
import { BudgetExplanationModal } from '~/components/BudgetExplanationModal'
import { DataRetriever } from '~/components/DataRetriever'
import { GlobalStyle } from '~/components/GlobalStyle'
import { Universe } from '~/components/Universe'
import { Flex } from '~/components/common/Flex'
import { isDevelopment, isE2E } from '~/constants'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { useModal } from '~/stores/useModalStore'
import { useTeachStore } from '~/stores/useTeachStore'
import { colors } from '~/utils/colors'
import { E2ETests } from '~/utils/tests'
import version from '~/utils/versionHelper'
import { generateForceGraphPositions } from '../../transformers/forceGraph'
import { generateSplitGraphPositions } from '../../transformers/splitGraph'
import { Preloader } from '../Universe/Preloader'
import { AppBar } from './AppBar'
import { FooterMenu } from './FooterMenu'
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
  const { open } = useModal('budgetExplanation')

  const [
    setSidebarOpen,
    searchTerm,
    setCurrentSearch,
    setRelevanceSelected,
    setTranscriptOpen,
    hasBudgetExplanationModalBeSeen,
  ] = [
    useAppStore((s) => s.setSidebarOpen),
    useAppStore((s) => s.currentSearch),
    useAppStore((s) => s.setCurrentSearch),
    useAppStore((s) => s.setRelevanceSelected),
    useAppStore((s) => s.setTranscriptOpen),
    useAppStore((s) => s.hasBudgetExplanationModalBeSeen),
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
      }

      setSphinxModalOpen(false)
    }

    fetchData(searchTerm)
    setSidebarOpen(true)
  }, [fetchData, searchTerm, setSphinxModalOpen, setSidebarOpen])

  useEffect(() => {
    if (searchTerm) {
      if (!hasBudgetExplanationModalBeSeen) {
        open()

        return
      }
    }

    runSearch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, runSearch, hasBudgetExplanationModalBeSeen])

  const repositionGraphDataAfterStyleChange = async () => {
    if (data) {
      if (graphStyle === 'split') {
        const updatedData = generateSplitGraphPositions(data.nodes)

        setData(updatedData)
      } else {
        const updatedData = await generateForceGraphPositions(data.nodes, true)

        setData(updatedData)
      }
    }
  }

  // switch graph style
  useEffect(() => {
    repositionGraphDataAfterStyleChange()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [graphStyle])

  return (
    <AppProviders>
      <GlobalStyle />

      <Leva hidden={!isDevelopment} />

      <Wrapper direction="row">
        <DataRetriever loader={<Preloader />}>
          <FormProvider {...form}>
            <SideBar onSubmit={handleSubmit} />

            <Universe />

            <SecondarySideBar />

            <AppBar onSubmit={handleSubmit} />

            <FooterMenu />
            <Version>v{version}</Version>
          </FormProvider>
        </DataRetriever>

        <AddNodeModal />

        <Toasts />

        <BudgetExplanationModal />
      </Wrapper>
      <E2ETests />
    </AppProviders>
  )
}
