import create from "zustand";
import { mockGraphData } from "~/mocks/graphdata";
import { fetchGraphData } from "~/network/fetchGraphData";
import { GraphData, Node } from "~/types";

type DataStore = {
  data: GraphData | null;
  selectedNode: Node | null;
  hoveredNode: any | null;
  loadingData: boolean;
  setLoadingData: (bool: boolean) => void;
  fetchData: (search?: string | null) => void;
  setSelectedNode: (selectedNode: Node | null) => void;
  setHoveredNode: (hoveredNode: any) => void;
};

export const useDataStore = create<DataStore>((set) => ({
  data: null,
  hoveredNode: null,
  selectedNode: null,
  loadingData: false,
  setLoadingData: (loadingData) => set({ loadingData }),
  setHoveredNode: (hoveredNode) => set({ hoveredNode }),
  setSelectedNode: (selectedNode) => set({ selectedNode }),
  fetchData: async (search) => {
    set({ loadingData:true });
    if (search?.length) {
      const data = await fetchGraphData(search);
      set({ data });
    } else {
      setTimeout(() => set({ data: mockGraphData }), 1000);
    }
    set({ loadingData:false });
  },
}));

export const useSelectedNode = () => useDataStore((s) => s.selectedNode);
