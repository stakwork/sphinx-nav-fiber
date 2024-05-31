import { uniqBy } from 'lodash'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { fetchGraphData } from '~/network/fetchGraphData'
import { FilterParams, Link, NodeExtended, NodeType, Sources, TStats, Trending } from '~/types'

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
  currentPage: number
  itemsPerPage: number
  filters: FilterParams
  isFetching: boolean
  isLoadingNew: boolean
  selectedTimestamp: NodeExtended | null
  sources: Sources[] | null
  queuedSources: Sources[] | null
  showTeachMe: boolean
  hideNodeDetails: boolean
  sidebarFilter: string
  sidebarFilters: string[]
  sidebarFilterCounts: SidebarFilterWithCount[]
  trendingTopics: Trending[]
  stats: TStats | null

  setTrendingTopics: (trendingTopics: Trending[]) => void
  setStats: (stats: TStats) => void
  setSidebarFilter: (filter: string) => void
  setCategoryFilter: (categoryFilter: NodeType | null) => void
  fetchData: (
    setBudget: (value: number | null) => void,
    setAbortRequests: (status: boolean) => void,
    params?: FetchNodeParams,
  ) => void
  setSelectedTimestamp: (selectedTimestamp: NodeExtended | null) => void
  setSources: (sources: Sources[] | null) => void
  setTeachMe: (show: boolean) => void
  setQueuedSources: (sources: Sources[] | null) => void
  setIsFetching: (_: boolean) => void
  setHideNodeDetails: (_: boolean) => void
  addNewNode: (node: NodeExtended) => void
  updateNode: (updatedNode: NodeExtended) => void
  removeNode: (id: string) => void
  setSidebarFilterCounts: (filterCounts: SidebarFilterWithCount[]) => void
  setAbortRequests: (abortRequest: boolean) => void
  nextPage: () => void
}

const defaultData: Omit<
  DataStore,
  | 'setTrendingTopics'
  | 'setStats'
  | 'setSidebarFilter'
  | 'fetchData'
  | 'setIsFetching'
  | 'setCameraAnimation'
  | 'setCategoryFilter'
  | 'setDisableCameraRotation'
  | 'setHoveredNode'
  | 'setSelectedTimestamp'
  | 'setSphinxModalOpen'
  | 'setCameraFocusTrigger'
  | 'setSources'
  | 'setSidebarFilterCounts'
  | 'setQueuedSources'
  | 'setGraphRadius'
  | 'setGraphStyle'
  | 'setNearbyNodeIds'
  | 'setShowSelectionGraph'
  | 'setSelectionData'
  | 'setHideNodeDetails'
  | 'setTeachMe'
  | 'addNewNode'
  | 'updateNode'
  | 'removeNode'
  | 'setAbortRequests'
  | 'nextPage'
> = {
  categoryFilter: null,
  dataInitial: null,
  currentPage: 0,
  itemsPerPage: 15,
  filters: {
    skip: '0',
    limit: '15',
    depth: '1',
    sort_by: 'edge_count',
    include_properties: 'true',
    top_node_count: '10',
    node_type: "['Topic', 'Person']",
  },
  isFetching: false,
  isLoadingNew: false,
  queuedSources: null,
  selectedTimestamp: null,
  sources: null,
  showTeachMe: false,
  sidebarFilter: 'all',
  sidebarFilters: [],
  trendingTopics: [],
  sidebarFilterCounts: [],
  stats: null,
  splashDataLoading: true,
  abortRequest: false,
}

let abortController: AbortController | null = null

export const useDataStore = create<DataStore>()(
  devtools((set, get) => ({
    ...defaultData,
    fetchData: async (setBudget, setAbortRequests) => {
      const { currentPage, itemsPerPage, dataInitial: existingData, filters } = get()

      if (!currentPage) {
        set({ isFetching: true })
      } else {
        set({ isLoadingNew: true })
      }

      if (abortController) {
        abortController.abort('abort')
      }

      const controller = new AbortController()
      const { signal } = controller

      abortController = controller

      const updatedParams = {
        ...filters,
        skip: currentPage === 0 ? String(currentPage * itemsPerPage) : String(currentPage * itemsPerPage + 1),
        limit: String(itemsPerPage),
      }

      try {
        const data = await fetchGraphData(setBudget, updatedParams, signal, setAbortRequests)

        if (!data?.nodes) {
          return
        }

        const newNodes = currentPage === 0 ? [] : [...(existingData?.nodes || [])]
        const newLinks = currentPage === 0 ? [] : [...(existingData?.links || [])]

        newNodes.push(...(data?.nodes || []))
        newLinks.push(...(data?.edges || []))

        const sidebarFilters = ['all', ...new Set(newNodes.map((i) => (i.node_type || '').toLowerCase()))]

        const sidebarFilterCounts = sidebarFilters.map((filter) => ({
          name: filter,
          count: newNodes.filter((node) => filter === 'all' || node.node_type?.toLowerCase() === filter).length,
        }))

        set({
          dataInitial: { nodes: uniqBy(newNodes, 'ref_id'), links: uniqBy(newLinks, 'ref_id') },
          isFetching: false,
          isLoadingNew: false,
          sidebarFilters,
          sidebarFilterCounts,
        })
      } catch (error) {
        console.log(error)
        set({ isFetching: false })
        set({ isLoadingNew: false })
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
    setFilters: (filters: FilterParams) => set((state) => ({ filters: { ...state.filters, ...filters, page: 0 } })),
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
    setTeachMe: (showTeachMe) => set({ showTeachMe }),
    updateNode: (updatedNode) => {
      console.log(updatedNode)
    },
    addNewNode: (node) => {
      console.log(node)
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
