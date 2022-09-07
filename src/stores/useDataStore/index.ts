import create from "zustand";
import { mockGraphData } from "~/mocks/graphdata";
import { fetchGraphData } from "~/network/fetchGraphData";
import { GraphData, Node } from "~/types";

type DataStore = {
  data: GraphData | null;
  selectedNode: Node | null;
  hoveredNode: any | null;
  selectedTimestamp: any | null;
  setSelectedTimestamp: (selectedTimestamp: any | null) => void;
  fetchData: (search?: string | null) => void;
  setSelectedNode: (selectedNode: Node | null) => void;
  setHoveredNode: (hoveredNode: any) => void;
};

export const useDataStore = create<DataStore>((set) => ({
  data: null,
  hoveredNode: null,
  selectedNode: null,
  selectedTimestamp: null,
  setSelectedTimestamp: (selectedTimestamp) => set({ selectedTimestamp }),
  setHoveredNode: (hoveredNode) => set({ hoveredNode }),
  setSelectedNode: (selectedNode) => set({ selectedNode }),
  fetchData: async (search) => {
    if (search?.length) {
      const data = await fetchGraphData(search);

      set({ data });
    } else {
      setTimeout(() => set({ data: mockGraphData }), 1000);
    }
  },
}));

export const useSelectedNode = () => useDataStore((s) => s.selectedNode);
