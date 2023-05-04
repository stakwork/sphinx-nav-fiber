import create from 'zustand'
import { isChileGraph } from '~/constants'
type GraphStyle = 'split' | 'force'
import { getMockGraphData } from '~/mocks/getMockGraphData'
import { fetchGraphData } from '~/network/fetchGraphData'
import { GraphData, NodeExtended, NodeType, Sources } from '~/types'
import { saveSearchTerm } from '~/utils/relayHelper/index'

type DataStore = {
  scrollEventsDisabled: boolean
  categoryFilter: NodeType | null
  disableCameraRotation: boolean
  graphRadius: number | null
  data: GraphData | null
  graphStyle: GraphStyle
  isFetching: boolean
  isTimestampLoaded: boolean
  selectedNode: NodeExtended | null
  selectedTimestamp: NodeExtended | null
  sources: Sources[] | null
  queuedSources: Sources[] | null
  sphinxModalIsOpen: boolean
  cameraFocusTrigger: boolean
  setScrollEventsDisabled: (scrollEventsDisabled: boolean) => void
  setCategoryFilter: (categoryFilter: NodeType | null) => void
  setDisableCameraRotation: (rotation: boolean) => void
  fetchData: (search?: string | null) => void
  setData: (data: GraphData) => void
  setGraphStyle: (graphStyle: GraphStyle) => void
  setGraphRadius: (graphRadius?: number | null) => void
  setSelectedNode: (selectedNode: NodeExtended | null) => void
  setSelectedTimestamp: (selectedTimestamp: NodeExtended | null) => void
  setSources: (sources: Sources[] | null) => void
  setQueuedSources: (sources: Sources[] | null) => void
  setSphinxModalOpen: (_: boolean) => void
  setCameraFocusTrigger: (_: boolean) => void
  setIsFetching: (_: boolean) => void
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
  | 'setSelectedNode'
  | 'setSelectedTimestamp'
  | 'setSphinxModalOpen'
  | 'setCameraFocusTrigger'
  | 'setSources'
  | 'setQueuedSources'
  | 'setGraphRadius'
  | 'setGraphStyle'
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
  selectedNode: null,
  selectedTimestamp: null,
  sources: null,
  sphinxModalIsOpen: false,
  cameraFocusTrigger: false,
}

export const useDataStore = create<DataStore>((set, get) => ({
  ...defaultData,
  fetchData: async (search) => {
    if (get().isFetching) {
      return
    }

    set({ isFetching: true })

    if (search?.length) {
      set({ isFetching: true, sphinxModalIsOpen: true })

      const data = await fetchGraphData(search || '')

      await saveSearchTerm(search || '')

      set({ data, isFetching: false, sphinxModalIsOpen: false })

      return
    }

    const mockGraphData = await getMockGraphData()

    set({ data: mockGraphData, isFetching: false })
  },
  setIsFetching: (isFetching) => set({ isFetching }),
  setData: (data) => set({ data }),
  setScrollEventsDisabled: (scrollEventsDisabled) => set({ scrollEventsDisabled }),
  setCategoryFilter: (categoryFilter) => set({ categoryFilter }),
  setDisableCameraRotation: (rotation) => set({ disableCameraRotation: rotation }),
  setGraphRadius: (graphRadius) => set({ graphRadius }),
  setGraphStyle: (graphStyle) => set({ graphStyle }),
  setQueuedSources: (queuedSources) => set({ queuedSources }),
  setSelectedNode: (selectedNode) => set({ isTimestampLoaded: false, selectedNode }),
  setSelectedTimestamp: (selectedTimestamp) => set({ selectedTimestamp }),
  setSources: (sources) => set({ sources }),
  setSphinxModalOpen: (sphinxModalIsOpen) => set({ sphinxModalIsOpen }),
  setCameraFocusTrigger: (cameraFocusTrigger) => set({ cameraFocusTrigger }),
}))

export const useSelectedNode = () => useDataStore((s) => s.selectedNode)

export const setIsTimestampLoaded = (isTimestampLoaded: boolean) => useDataStore.setState({ isTimestampLoaded })
