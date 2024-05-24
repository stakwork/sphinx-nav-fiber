import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { nodesAreRelatives } from '~/components/Universe/constants'
import { isChileGraph } from '~/constants'
import { fetchGraphData } from '~/network/fetchGraphData'
import { GraphData, Link, NodeExtended, NodeType, Sources, Trending, TStats } from '~/types'
import { saveSearchTerm } from '~/utils/relayHelper/index'

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
  scrollEventsDisabled: boolean
  abortRequest: boolean
  categoryFilter: NodeType | null
  disableCameraRotation: boolean
  graphRadius: number | null
  data: { nodes: NodeExtended[]; links: Link[] } | null
  selectionGraphData: GraphData
  graphStyle: GraphStyle
  isFetching: boolean
  hoveredNode: NodeExtended | null
  selectedNode: NodeExtended | null
  selectedTimestamp: NodeExtended | null
  sources: Sources[] | null
  queuedSources: Sources[] | null
  sphinxModalIsOpen: boolean
  cameraFocusTrigger: boolean
  selectedNodeRelativeIds: string[]
  nearbyNodeIds: string[]
  showSelectionGraph: boolean
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
  setScrollEventsDisabled: (scrollEventsDisabled: boolean) => void
  setCategoryFilter: (categoryFilter: NodeType | null) => void
  setDisableCameraRotation: (rotation: boolean) => void
  fetchData: (
    setBudget: (value: number | null) => void,
    setAbortRequests: (status: boolean) => void,
    params?: FetchNodeParams,
  ) => void
  setData: (data: GraphData) => void
  setGraphStyle: (graphStyle: GraphStyle) => void
  setGraphRadius: (graphRadius?: number | null) => void
  setHoveredNode: (hoveredNode: NodeExtended | null) => void
  setSelectedNode: (selectedNode: NodeExtended | null) => void
  setSelectedTimestamp: (selectedTimestamp: NodeExtended | null) => void
  setSources: (sources: Sources[] | null) => void
  setQueuedSources: (sources: Sources[] | null) => void
  setSphinxModalOpen: (_: boolean) => void
  setCameraFocusTrigger: (_: boolean) => void
  setIsFetching: (_: boolean) => void
  setNearbyNodeIds: (_: string[]) => void
  setShowSelectionGraph: (_: boolean) => void
  setSelectionData: (data: GraphData) => void
  setHideNodeDetails: (_: boolean) => void
  setTeachMe: (_: boolean) => void
  addNewNode: (node: NodeExtended) => void
  updateNode: (updatedNode: NodeExtended) => void
  removeNode: (id: string) => void
  setSidebarFilterCounts: (filterCounts: SidebarFilterWithCount[]) => void
  setAbortRequests: (abortRequest: boolean) => void
}

const defaultData: Omit<
  DataStore,
  | 'setTrendingTopics'
  | 'setStats'
  | 'setSidebarFilter'
  | 'fetchData'
  | 'setIsFetching'
  | 'setData'
  | 'setCameraAnimation'
  | 'setScrollEventsDisabled'
  | 'setCategoryFilter'
  | 'setDisableCameraRotation'
  | 'setHoveredNode'
  | 'setSelectedNode'
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
> = {
  categoryFilter: null,
  data: null,
  selectionGraphData: { nodes: [], links: [] },
  scrollEventsDisabled: false,
  disableCameraRotation: false,
  graphRadius: isChileGraph ? 1600 : 3056, // calculated from initial load
  graphStyle: (localStorage.getItem('graphStyle') as GraphStyle) || 'sphere',
  isFetching: false,
  queuedSources: null,
  hoveredNode: null,
  selectedNode: null,
  selectedTimestamp: null,
  sources: null,
  sphinxModalIsOpen: false,
  cameraFocusTrigger: false,
  selectedNodeRelativeIds: [],
  nearbyNodeIds: [],
  showSelectionGraph: false,
  showTeachMe: false,
  hideNodeDetails: false,
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
    fetchData: async (setBudget, setAbortRequests, params) => {
      set({ isFetching: true, sphinxModalIsOpen: true })

      if (abortController) {
        abortController.abort()
      }

      const controller = new AbortController()
      const { signal } = controller

      abortController = controller

      const data = await fetchGraphData(get().graphStyle, setBudget, params ?? {}, signal, setAbortRequests)

      let loadingState = false

      if (params?.word) {
        await saveSearchTerm()
      }

      const sidebarFilters = ['all', ...new Set(data.nodes.map((i) => (i.node_type || '').toLowerCase()))]

      const sidebarFilterCounts = sidebarFilters.map((filter) => ({
        name: filter,
        count: data.nodes.filter((node) => filter === 'all' || node.node_type?.toLowerCase() === filter).length,
      }))

      if (get().abortRequest) {
        loadingState = true

        set({ abortRequest: false })
      }

      set({
        data,
        isFetching: loadingState,
        sphinxModalIsOpen: loadingState,
        disableCameraRotation: false,
        nearbyNodeIds: [],
        selectedNodeRelativeIds: [],
        showSelectionGraph: false,
        showTeachMe: false,
        sidebarFilters,
        sidebarFilterCounts,
      })
    },
    setSidebarFilterCounts: (sidebarFilterCounts) => set({ sidebarFilterCounts }),
    setTrendingTopics: (trendingTopics) => set({ trendingTopics }),
    setStats: (stats) => set({ stats }),
    setIsFetching: (isFetching) => set({ isFetching }),
    setData: (data) => set({ data }),
    setSelectionData: (selectionGraphData) => set({ selectionGraphData }),
    setScrollEventsDisabled: (scrollEventsDisabled) => set({ scrollEventsDisabled }),
    setCategoryFilter: (categoryFilter) => set({ categoryFilter }),
    setDisableCameraRotation: (rotation) => set({ disableCameraRotation: rotation }),
    setGraphRadius: (graphRadius) => set({ graphRadius }),
    setGraphStyle: (graphStyle) => set({ graphStyle }),
    setQueuedSources: (queuedSources) => set({ queuedSources }),
    setHoveredNode: (hoveredNode) => set({ hoveredNode }),
    setSelectedNode: (selectedNode) => {
      const stateSelectedNode = get().selectedNode

      if (stateSelectedNode?.ref_id !== selectedNode?.ref_id) {
        const { data } = get()

        const relativeIds =
          data?.nodes.filter((f) => f.ref_id && nodesAreRelatives(f, selectedNode)).map((n) => n?.ref_id || '') || []

        set({
          hoveredNode: null,
          selectedNode,
          disableCameraRotation: true,
          selectedNodeRelativeIds: relativeIds,
        })
      }
    },
    setSidebarFilter: (sidebarFilter: string) => set({ sidebarFilter }),
    setSelectedTimestamp: (selectedTimestamp) => set({ selectedTimestamp }),
    setSources: (sources) => set({ sources }),
    setSphinxModalOpen: (sphinxModalIsOpen) => set({ sphinxModalIsOpen }),
    setCameraFocusTrigger: (cameraFocusTrigger) => set({ cameraFocusTrigger }),
    setNearbyNodeIds: (nearbyNodeIds) => {
      const stateNearbyNodeIds = get().nearbyNodeIds

      if (nearbyNodeIds.length !== stateNearbyNodeIds.length || nearbyNodeIds[0] !== stateNearbyNodeIds[0]) {
        set({ nearbyNodeIds })
      }
    },
    setShowSelectionGraph: (showSelectionGraph) => set({ showSelectionGraph }),
    setHideNodeDetails: (hideNodeDetails) => set({ hideNodeDetails }),
    setTeachMe: (showTeachMe) => set({ showTeachMe }),
    updateNode: (updatedNode) => {
      set((state) => {
        const nodes = state.data?.nodes || []
        const links = state.data?.links || []

        const updatedNodes = nodes.map((node) => {
          if (node.ref_id === updatedNode.ref_id) {
            return { ...node, ...updatedNode }
          }

          return node
        })

        return {
          ...state,
          data: {
            ...state.data,
            nodes: updatedNodes,
            links,
          },
        }
      })
    },
    addNewNode: (node) => {
      const { data } = get()

      if (!data) {
        return
      }

      const newData = { ...data, nodes: [node, ...data.nodes] }

      set({ data: newData })
    },
    removeNode: (id) => {
      const { data } = get()

      if (!data) {
        return
      }

      const removeData = {
        ...data,
        nodes: data.nodes.filter((el) => el.ref_id !== id && el.id !== id),
      }

      set({ data: removeData })
    },
    setAbortRequests: (abortRequest) => set({ abortRequest }),
  })),
)

export const useSelectedNode = () => useDataStore((s) => s.selectedNode)

export const useFilteredNodes = () =>
  useDataStore((s) => {
    if (s.sidebarFilter === 'all') {
      return s.data?.nodes || []
    }

    return (s.data?.nodes || []).filter((i) => i.node_type?.toLowerCase() === s.sidebarFilter.toLowerCase())
  })

export const useUpdateGraphData = () => {
  const data = useDataStore((state) => state.data)

  return data
}
