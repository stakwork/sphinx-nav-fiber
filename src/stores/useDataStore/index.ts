import create from "zustand";
import { getMockGraphData } from "~/mocks/getMockGraphData";
import { fetchGraphData } from "~/network/fetchGraphData";
import { GraphData, NodeExtended } from "~/types";

type DataStore = {
  cameraAnimation: gsap.core.Tween | null;
  data: GraphData | null;
  hoveredNode: NodeExtended | null;
  isFetching: boolean;
  isTimestampLoaded: boolean;
  selectedNode: NodeExtended | null;
  selectedTimestamp: NodeExtended | null;
  setCameraAnimation: (cameraAnimation: gsap.core.Tween | null) => void;
  fetchData: (search?: string | null) => void;
  setSelectedNode: (selectedNode: NodeExtended | null) => void;
  setSelectedTimestamp: (selectedTimestamp: NodeExtended | null) => void;
  setHoveredNode: (hoveredNode: NodeExtended) => void;
};

export const useDataStore = create<DataStore>((set, get) => ({
  cameraAnimation: null,
  data: null,
  hoveredNode: null,
  isFetching: false,
  isTimestampLoaded: false,
  selectedNode: null,
  selectedTimestamp: null,
  setCameraAnimation: (cameraAnimation) => set({ cameraAnimation }),
  setHoveredNode: (hoveredNode) => set({ hoveredNode }),
  setSelectedNode: (selectedNode) =>
    set({ selectedNode, isTimestampLoaded: false }),
  setSelectedTimestamp: (selectedTimestamp) => set({ selectedTimestamp }),
  fetchData: async (search) => {
    if (get().isFetching) {
      return;
    }

    set({ isFetching: true });

    if (search?.length) {
      const data = await fetchGraphData(search);

      set({ data });
    } else {
      const mockGraphData = await getMockGraphData();

      set({ data: mockGraphData });
    }

    set({ isFetching: false });
  },
}));

export const useSelectedNode = () => useDataStore((s) => s.selectedNode);

export const setIsTimestampLoaded = (isTimestampLoaded: boolean) =>
  useDataStore.setState({ isTimestampLoaded });
