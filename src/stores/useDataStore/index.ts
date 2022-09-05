import create from "zustand";
import { mockGraphData } from "~/mocks/graphdata";
import { fetchGraphData } from "~/network/fetchGraphData";
import { GraphData, Node } from "~/types";

type DataStore = {
  data: GraphData | null;
  selectedNode: Node | null;
  hoveredNode: Node | null;
  fetchData: (search?: string | null) => void;
  setSelectedNode: (selectedNode: Node | null) => void;
  setHoveredNode: (hoveredNode: Node) => void;
};

export const useDataStore = create<DataStore>((set) => ({
  data: null,
  hoveredNode: null,
  selectedNode: null,
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
