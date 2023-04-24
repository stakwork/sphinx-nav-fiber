import create from "zustand";
import { isChileGraph } from "~/constants";
import { getMockGraphData } from "~/mocks/getMockGraphData";
import { fetchGraphData } from "~/network/fetchGraphData";
import { GraphData, NodeExtended, NodeType, Sources } from "~/types";
import { saveSearchTerm } from "~/utils/relayHelper/index";

type DataStore = {
  categoryFilter: NodeType | null
  disableCameraRotation: boolean
  graphRadius: number | null
  data: GraphData | null
  isFetching: boolean
  isTimestampLoaded: boolean
  selectedNode: NodeExtended | null
  selectedTimestamp: NodeExtended | null
  sources: Sources[] | null
  queuedSources: Sources[] | null
  sphinxModalIsOpen: boolean
  setCategoryFilter: (categoryFilter: NodeType | null) => void
  setDisableCameraRotation: (rotation: boolean) => void
  fetchData: (search?: string | null) => void
  setGraphRadius: (graphRadius?: number | null) => void
  setSelectedNode: (selectedNode: NodeExtended | null) => void
  setSelectedTimestamp: (selectedTimestamp: NodeExtended | null) => void
  setSources: (sources: Sources[] | null) => void
  setQueuedSources: (sources: Sources[] | null) => void
  setSphinxModalOpen: (_: boolean) => void
}

const defaultData: Omit<
  DataStore,
  | 'fetchData'
  | 'setCameraAnimation'
  | 'setCategoryFilter'
  | 'setDisableCameraRotation'
  | 'setSelectedNode'
  | 'setSelectedTimestamp'
  | 'setSphinxModalOpen'
  | 'setSources'
  | 'setQueuedSources'
  | 'setGraphRadius'
> = {
  categoryFilter: null,
  data: null,
  disableCameraRotation: false,
  graphRadius: isChileGraph ? 1600 : 3056, // calculated from initial load
  isFetching: false,
  isTimestampLoaded: false,
  queuedSources: null,
  selectedNode: null,
  selectedTimestamp: null,
  sources: null,
  sphinxModalIsOpen: false,
}

export const useDataStore = create<DataStore>((set, get) => ({
  ...defaultData,
  fetchData: async (search) => {
    if (get().isFetching) {
      return;
    }

    set({ isFetching: true });

    if (true
      // search?.length
    ) {
      set({ sphinxModalIsOpen: true });

      const data = await fetchGraphData(search||'');

      await saveSearchTerm(search||'');

      set({ data, isFetching: false, sphinxModalIsOpen: false });

      return;
    }

    const mockGraphData = await getMockGraphData();

    set({ data: mockGraphData, isFetching: false });
  },
  setCategoryFilter: (categoryFilter) => set({ categoryFilter }),
  setDisableCameraRotation: (rotation) =>
    set({ disableCameraRotation: rotation }),
  setGraphRadius: (graphRadius) => set({ graphRadius }),
  setQueuedSources: (queuedSources) => set({ queuedSources }),
  setSelectedNode: (selectedNode) =>
    set({ isTimestampLoaded: false, selectedNode }),
  setSelectedTimestamp: (selectedTimestamp) => set({ selectedTimestamp }),
  setSources: (sources) => set({ sources }),
  setSphinxModalOpen: (sphinxModalIsOpen) => set({ sphinxModalIsOpen }),
}));

export const useSelectedNode = () => useDataStore((s) => s.selectedNode);

export const setIsTimestampLoaded = (isTimestampLoaded: boolean) =>
  useDataStore.setState({ isTimestampLoaded });
