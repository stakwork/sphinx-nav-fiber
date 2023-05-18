import create from 'zustand'
import { isChileGraph } from '~/constants'
import { fetchGraphData } from '~/network/fetchGraphData'
import { GraphData, NodeExtended, NodeType, Sources } from '~/types'
import { saveSearchTerm } from '~/utils/relayHelper/index'

type GraphStyle = 'split' | 'force'

type DataStore = {
  scrollEventsDisabled: boolean
  categoryFilter: NodeType | null
  disableCameraRotation: boolean
  graphRadius: number | null
  data: GraphData | null
  graphStyle: GraphStyle
  isFetching: boolean
  isTimestampLoaded: boolean
  hoveredNode: NodeExtended | null
  selectedNode: NodeExtended | null
  selectedTimestamp: NodeExtended | null
  sources: Sources[] | null
  queuedSources: Sources[] | null
  sphinxModalIsOpen: boolean
  cameraFocusTrigger: boolean
  nearbyNodeIds: string[]
  setScrollEventsDisabled: (scrollEventsDisabled: boolean) => void
  setCategoryFilter: (categoryFilter: NodeType | null) => void
  setDisableCameraRotation: (rotation: boolean) => void
  fetchData: (search?: string | null) => void
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
}

const defaultData: Omit<
  DataStore,
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
  | 'setQueuedSources'
  | 'setGraphRadius'
  | 'setGraphStyle'
  | 'setNearbyNodeIds'
> = {
  categoryFilter: null,
  data: null,
  scrollEventsDisabled: false,
  disableCameraRotation: false,
  graphRadius: isChileGraph ? 1600 : 3056, // calculated from initial load
  graphStyle: 'force',
  isFetching: false,
  isTimestampLoaded: false,
  queuedSources: null,
  hoveredNode: null,
  selectedNode: null,
  selectedTimestamp: null,
  sources: null,
  sphinxModalIsOpen: false,
  cameraFocusTrigger: false,
  nearbyNodeIds: [],
}

export const useDataStore = create<DataStore>((set, get) => ({
  ...defaultData,
  fetchData: async (search) => {
    if (get().isFetching) {
      return
    }

    set({ isFetching: true, sphinxModalIsOpen: true })

    const data = await fetchGraphData(search || '')

    if (search) {
      await saveSearchTerm()
    }

    set({ data, isFetching: false, sphinxModalIsOpen: false })
  },
  setIsFetching: (isFetching) => set({ isFetching }),
  setData: (data) => set({ data }),
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
      set({ isTimestampLoaded: false, selectedNode })
    }
  },
  setSelectedTimestamp: (selectedTimestamp) => set({ selectedTimestamp }),
  setSources: (sources) => set({ sources }),
  setSphinxModalOpen: (sphinxModalIsOpen) => set({ sphinxModalIsOpen }),
  setCameraFocusTrigger: (cameraFocusTrigger) => set({ cameraFocusTrigger }),
  setNearbyNodeIds: (nearbyNodeIds) => set({ nearbyNodeIds }),
}))

export const useSelectedNode = () => useDataStore((s) => s.selectedNode)

export const setIsTimestampLoaded = (isTimestampLoaded: boolean) => useDataStore.setState({ isTimestampLoaded })
