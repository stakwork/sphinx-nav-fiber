// @ts-nocheck
// @ts-ignore

import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { fetchGraphData } from '~/network/fetchGraphData'
import { FilterParams, GraphData, Link, NodeExtended, NodeType, Sources, Trending, TStats } from '~/types'
import { useAiSummaryStore } from '../useAiSummaryStore'
import { useAppStore } from '../useAppStore'

export type GraphStyle = 'sphere' | 'force' | 'split' | 'earth'

export const graphStyles: GraphStyle[] = ['sphere', 'force', 'split', 'earth']

export type FetchNodeParams = {
  word?: string
  skip_cache?: string
  free?: string
  media_type?: string
}

export type SidebarFilterWithCount = {
  name: string
  count: number
}

export type DataStore = {
  splashDataLoading: boolean
  abortRequest: boolean
  categoryFilter: NodeType | null
  dataInitial: { nodes: NodeExtended[]; links: Link[] } | null
  dataNew: { nodes: NodeExtended[]; links: Link[] } | null
  currentPage: number
  itemsPerPage: number
  filters: FilterParams
  isFetching: boolean
  isLoadingNew: boolean
  selectedTimestamp: NodeExtended | null
  sources: Sources[] | null
  queuedSources: Sources[] | null
  hideNodeDetails: boolean
  sidebarFilter: string
  sidebarFilters: string[]
  sidebarFilterCounts: SidebarFilterWithCount[]
  trendingTopics: Trending[]
  stats: TStats | null
  nodeTypes: string[]
  seedQuestions: string[] | null

  setTrendingTopics: (trendingTopics: Trending[]) => void
  setDataNew: (data: GraphData) => void
  resetDataNew: () => void
  setStats: (stats: TStats) => void
  setSidebarFilter: (filter: string) => void
  setCategoryFilter: (categoryFilter: NodeType | null) => void
  fetchData: (
    setBudget: (value: number | null) => void,
    setAbortRequests: (status: boolean) => void,
    AISearchQuery?: string,
    params?: FetchNodeParams,
  ) => void
  setSelectedTimestamp: (selectedTimestamp: NodeExtended | null) => void
  setSources: (sources: Sources[] | null) => void
  setQueuedSources: (sources: Sources[] | null) => void
  setIsFetching: (_: boolean) => void
  setHideNodeDetails: (_: boolean) => void
  addNewNode: (data: FetchDataResponse) => void
  updateNode: (updatedNode: NodeExtended) => void
  removeNode: (id: string) => void
  setSidebarFilterCounts: (filterCounts: SidebarFilterWithCount[]) => void
  setAbortRequests: (abortRequest: boolean) => void
  nextPage: () => void
  setFilters: (filters: Partial<FilterParams>) => void
  setSeedQuestions: (questions: string[]) => void
}

const defaultData: Omit<
  DataStore,
  | 'setTrendingTopics'
  | 'setStats'
  | 'setSidebarFilter'
  | 'fetchData'
  | 'setFilters'
  | 'setIsFetching'
  | 'setCategoryFilter'
  | 'setHoveredNode'
  | 'setSelectedTimestamp'
  | 'setSphinxModalOpen'
  | 'setSources'
  | 'setSidebarFilterCounts'
  | 'setQueuedSources'
  | 'setHideNodeDetails'
  | 'addNewNode'
  | 'updateNode'
  | 'removeNode'
  | 'setAbortRequests'
  | 'nextPage'
  | 'setDataNew'
  | 'resetDataNew'
  | 'setSeedQuestions'
> = {
  categoryFilter: null,
  dataInitial: null,
  currentPage: 0,
  itemsPerPage: 25,
  filters: {
    skip: '0',
    limit: '25',
    depth: '2',
    sort_by: 'date',
    include_properties: 'true',
    top_node_count: '10',
    includeContent: 'true',
    node_type: [],
  },
  isFetching: false,
  isLoadingNew: false,
  queuedSources: null,
  selectedTimestamp: null,
  sources: null,
  sidebarFilter: 'all',
  sidebarFilters: [],
  trendingTopics: [],
  sidebarFilterCounts: [],
  stats: null,
  splashDataLoading: true,
  abortRequest: false,
  dataNew: null,
  seedQuestions: null,
}

let abortController: AbortController | null = null

export const useDataStore = create<DataStore>()(
  devtools((set, get) => ({
    ...defaultData,
    fetchData: async (setBudget, setAbortRequests, AISearchQuery = '') => {
      const { currentPage, itemsPerPage, dataInitial: existingData, filters } = get()
      const { currentSearch } = useAppStore.getState()
      const { setAiSummaryAnswer, aiRefId } = useAiSummaryStore.getState()
      let ai = { ai_summary: String(!!AISearchQuery) }

      if (!AISearchQuery) {
        if (!currentPage) {
          set({ isFetching: true })
        } else {
          set({ isLoadingNew: true })
        }
      }

      if (AISearchQuery) {
        ai = { ...ai, ai_summary: String(true) }
      }

      if (abortController) {
        abortController.abort('abort')
      }

      const controller = new AbortController()
      const { signal } = controller

      abortController = controller

      const { node_type: filterNodeTypes, ...withoutNodeType } = filters

      const word = AISearchQuery || currentSearch

      const updatedParams = {
        ...withoutNodeType,
        ...ai,
        skip: currentPage === 0 ? String(currentPage * itemsPerPage) : String(currentPage * itemsPerPage + 1),
        limit: String(itemsPerPage),
        ...(filterNodeTypes.length > 0 ? { node_type: JSON.stringify(filterNodeTypes) } : {}),
        ...(word ? { word } : {}),
        ...(aiRefId && AISearchQuery ? { previous_search_ref_id: aiRefId } : {}),
      }

      try {
        const data = await fetchGraphData(setBudget, updatedParams, signal, setAbortRequests)

        if (!data?.nodes) {
          return
        }

        if (data?.query_data?.ref_id) {
          useAiSummaryStore.setState({ aiRefId: data?.query_data?.ref_id })

          setAiSummaryAnswer(data?.query_data?.ref_id, {
            question: AISearchQuery,
            answer: '',
            answerLoading: true,
            sourcesLoading: true,
          })
        }

        const currentNodes = currentPage === 0 && !aiRefId ? [] : [...(existingData?.nodes || [])]
        const currentLinks = currentPage === 0 && !aiRefId ? [] : [...(existingData?.links || [])]

        const newNodes = (data?.nodes || []).filter((n) => !currentNodes.some((c) => c.ref_id === n.ref_id))

        currentNodes.push(...newNodes)

        const newLinks = (data?.edges || [])
          .filter((n) => !currentLinks.some((c) => c.ref_id === n.ref_id))
          .filter((c) => {
            const { target, source } = c

            return currentNodes.some((n) => n.ref_id === target) && currentNodes.some((n) => n.ref_id === source)
          })

        currentLinks.push(...newLinks)

        const nodeTypes = [...new Set(currentNodes.map((i) => i.node_type))]

        const sidebarFilters = ['all', ...nodeTypes.map((i) => i.toLowerCase())]

        const sidebarFilterCounts = sidebarFilters.map((filter) => ({
          name: filter,
          count: currentNodes.filter((node) => filter === 'all' || node.node_type?.toLowerCase() === filter).length,
        }))

        set({
          dataInitial: { nodes: currentNodes, links: currentLinks },
          dataNew: { nodes: newNodes, links: newLinks },
          isFetching: false,
          isLoadingNew: false,
          splashDataLoading: false,
          nodeTypes,
          sidebarFilters,
          sidebarFilterCounts,
        })
      } catch (error) {
        console.log(error)

        if (error !== 'abort') {
          set({ isLoadingNew: false, isFetching: false })
        }
      }
    },
    setPage: (page: number) => set({ currentPage: page }),
    nextPage: () => {
      const { currentPage, fetchData } = get()

      set({ currentPage: currentPage + 1 })
      fetchData()
    },
    prevPage: () => {
      const { currentPage, fetchData } = get()

      if (currentPage > 0) {
        set({ currentPage: currentPage - 1 })
        fetchData()
      }
    },
    resetDataNew: () => null,
    setFilters: (filters: FilterParams) =>
      set((state) => ({ filters: { ...state.filters, ...filters, page: 0 }, currentPage: 0 })),
    setSidebarFilterCounts: (sidebarFilterCounts) => set({ sidebarFilterCounts }),
    setTrendingTopics: (trendingTopics) => set({ trendingTopics }),
    setStats: (stats) => set({ stats }),
    setIsFetching: (isFetching) => set({ isFetching }),

    setCategoryFilter: (categoryFilter) => set({ categoryFilter }),
    setQueuedSources: (queuedSources) => set({ queuedSources }),
    setSidebarFilter: (sidebarFilter: string) => set({ sidebarFilter }),
    setSelectedTimestamp: (selectedTimestamp) => set({ selectedTimestamp }),
    setSources: (sources) => set({ sources }),
    setHideNodeDetails: (hideNodeDetails) => set({ hideNodeDetails }),
    setSeedQuestions: (questions) => set({ seedQuestions: questions }),
    updateNode: (updatedNode) => {
      console.log(updatedNode)
    },
    addNewNode: (data) => {
      const { dataInitial: existingData } = get()

      if (!data?.nodes) {
        return
      }

      const currentNodes = [...(existingData?.nodes || [])]
      const currentLinks = [...(existingData?.links || [])]

      const newNodes = (data?.nodes || []).filter((n) => !currentNodes.some((c) => c.ref_id === n.ref_id))

      currentNodes.push(...newNodes)

      const newLinks = (data?.edges || [])
        .filter((n) => !currentLinks.some((c) => c.ref_id === n.ref_id))
        .filter((c) => {
          const { target, source } = c

          return currentNodes.some((n) => n.ref_id === target) && currentNodes.some((n) => n.ref_id === source)
        })

      currentLinks.push(...newLinks)

      const nodeTypes = [...new Set(currentNodes.map((i) => i.node_type))]

      const sidebarFilters = ['all', ...nodeTypes.map((i) => i.toLowerCase())]

      const sidebarFilterCounts = sidebarFilters.map((filter) => ({
        name: filter,
        count: currentNodes.filter((node) => filter === 'all' || node.node_type?.toLowerCase() === filter).length,
      }))

      set({
        dataInitial: { nodes: currentNodes, links: currentLinks },
        dataNew: { nodes: newNodes, links: newLinks },
        nodeTypes,
        sidebarFilters,
        sidebarFilterCounts,
      })
    },
    removeNode: (id) => {
      console.log(id)
    },
    setAbortRequests: (abortRequest) => set({ abortRequest }),
  })),
)

export const useFilteredNodes = () =>
  useDataStore((s) => {
    if (s.sidebarFilter === 'all') {
      return s.dataInitial?.nodes || []
    }

    return (s.dataInitial?.nodes || []).filter((i) => i.node_type?.toLowerCase() === s.sidebarFilter.toLowerCase())
  })

export const useNodeTypes = () => useDataStore((s) => s.nodeTypes)
