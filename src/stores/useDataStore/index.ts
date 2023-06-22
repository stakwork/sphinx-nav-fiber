import { Mesh } from 'three'
import create from 'zustand'
import { nodesAreRelatives } from '~/components/Universe/constants'
import { isChileGraph } from '~/constants'
import { fetchGraphData } from '~/network/fetchGraphData'
import { GraphData, NodeExtended, NodeType, Sources } from '~/types'
import { saveSearchTerm } from '~/utils/relayHelper/index'

export type GraphStyle = 'split' | 'force' | 'sphere' | 'earth'

export const graphStyles: GraphStyle[] = ['split', 'earth', 'force', 'sphere']

type DataStore = {
  scrollEventsDisabled: boolean
  categoryFilter: NodeType | null
  disableCameraRotation: boolean
  graphRadius: number | null
  data: GraphData | null
  selectionGraphData: GraphData
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
  selectedNodeRelativeIds: string[]
  nearbyNodeIds: string[]
  showSelectionGraph: boolean
  hideNodeDetails: boolean
  earthMesh: React.MutableRefObject<Mesh> | null

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
  setShowSelectionGraph: (_: boolean) => void
  setSelectionData: (data: GraphData) => void
  setHideNodeDetails: (_: boolean) => void
  setEarthMesh: (earthMesh: React.MutableRefObject<Mesh> | null) => void
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
  | 'setShowSelectionGraph'
  | 'setSelectionData'
  | 'setHideNodeDetails'
  | 'setEarthMesh'
> = {
  categoryFilter: null,
  data: null,
  selectionGraphData: { nodes: [], links: [] },
  scrollEventsDisabled: false,
  disableCameraRotation: false,
  graphRadius: isChileGraph ? 1600 : 3056, // calculated from initial load
  graphStyle: 'split',
  isFetching: false,
  isTimestampLoaded: false,
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
  hideNodeDetails: false,
  earthMesh: null,
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

    set({
      data,
      isFetching: false,
      sphinxModalIsOpen: false,
      disableCameraRotation: false,
      nearbyNodeIds: [],
      selectedNodeRelativeIds: [],
      showSelectionGraph: false,
    })
  },
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
        isTimestampLoaded: false,
        selectedNode,
        disableCameraRotation: true,
        selectedNodeRelativeIds: relativeIds,
      })
    }
  },
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
  setEarthMesh: (earthMesh) => set({ earthMesh }),
}))

export const useSelectedNode = () => useDataStore((s) => s.selectedNode)

export const setIsTimestampLoaded = (isTimestampLoaded: boolean) => useDataStore.setState({ isTimestampLoaded })
