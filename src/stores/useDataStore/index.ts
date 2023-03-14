import create from "zustand";
import { isChileGraph } from "~/constants";
import { getMockGraphData } from "~/mocks/getMockGraphData";
import { fetchGraphData } from "~/network/fetchGraphData";
import { GraphData, NodeExtended, NodeType } from "~/types";
import { saveSearchTerm } from "~/utils/relayHelper/index";

type DataStore = {
  cameraAnimation: gsap.core.Tween | null;
  categoryFilter: NodeType | null;
  disableCameraRotation: boolean;
  graphRadius: number | null;
  data: GraphData | null;
  hoveredNode: NodeExtended | null;
  isFetching: boolean;
  isTimestampLoaded: boolean;
  selectedNode: NodeExtended | null;
  selectedTimestamp: NodeExtended | null;
  sphinxModalIsOpen: boolean;
  setCameraAnimation: (cameraAnimation: gsap.core.Tween | null) => void;
  setCategoryFilter: (categoryFilter: NodeType | null) => void;
  setDisableCameraRotation: (rotation: boolean) => void;
  fetchData: (search?: string | null) => void;
  setGraphRadius: (graphRadius?: number | null) => void;
  setSelectedNode: (selectedNode: NodeExtended | null) => void;
  setSelectedTimestamp: (selectedTimestamp: NodeExtended | null) => void;
  setHoveredNode: (hoveredNode: NodeExtended | null) => void;
  setSphinxModalOpen: (_: boolean) => void;
};

const defaultData: Omit<
  DataStore,
  | "fetchData"
  | "setCameraAnimation"
  | "setCategoryFilter"
  | "setDisableCameraRotation"
  | "setHoveredNode"
  | "setSelectedNode"
  | "setSelectedTimestamp"
  | "setSphinxModalOpen"
  | "setGraphRadius"
> = {
  cameraAnimation: null,
  categoryFilter: null,
  data: null,
  disableCameraRotation: false,
  graphRadius: isChileGraph ? 1600 : 3056, // calculated from initial load
  hoveredNode: null,
  isFetching: false,
  isTimestampLoaded: false,
  selectedNode: null,
  selectedTimestamp: null,
  sphinxModalIsOpen: false,
};

export const useDataStore = create<DataStore>((set, get) => ({
  ...defaultData,
  fetchData: async (search) => {
    if (get().isFetching) {
      return;
    }

    set({ isFetching: true });

    if (search?.length) {
      set({ sphinxModalIsOpen: true });

      const data = await fetchGraphData(search);

      await saveSearchTerm(search);

      set({ data, isFetching: false, sphinxModalIsOpen: false });

      return;
    }

    const mockGraphData = await getMockGraphData();

    set({ data: mockGraphData, isFetching: false });
  },
  setCameraAnimation: (cameraAnimation) => set({ cameraAnimation }),
  setCategoryFilter: (categoryFilter) => set({ categoryFilter }),
  setDisableCameraRotation: (rotation) =>
    set({ disableCameraRotation: rotation }),
  setGraphRadius: (graphRadius) => set({ graphRadius }),
  setHoveredNode: (hoveredNode) => set({ hoveredNode }),
  setSelectedNode: (selectedNode) =>
    set({ isTimestampLoaded: false, selectedNode }),
  setSelectedTimestamp: (selectedTimestamp) => set({ selectedTimestamp }),
  setSphinxModalOpen: (sphinxModalIsOpen) => set({ sphinxModalIsOpen }),
}));

export const useSelectedNode = () => useDataStore((s) => s.selectedNode);

export const setIsTimestampLoaded = (isTimestampLoaded: boolean) =>
  useDataStore.setState({ isTimestampLoaded });
