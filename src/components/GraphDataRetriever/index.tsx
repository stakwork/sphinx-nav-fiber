import create from "zustand";
import { getSampleData } from "../../main/map/helpers";
import { fetchGraphData } from "../../network/fetchGraphData";
import { GraphData, Node } from "../../types";

type DataStore = {
  data: GraphData;
  selectedNode: Node | null;
  xOffset: number;
  hoveredNode: any;
  refresh: (search: string) => void;
  setSelectedNode: (selectedNode: Node) => void;
  setXOffset: (xOffset: number) => void;
  setHoveredNode: (hoveredNode: any) => void;
};

const sampleData = getSampleData();

export const useDataStore = create<DataStore>((set) => ({
  data: sampleData,
  selectedNode: null,
  xOffset: 0,
  hoveredNode: null,
  setHoveredNode: (hoveredNode:number) => set({ hoveredNode }),
  setXOffset: (xOffset:number) => set({ xOffset }),
  setSelectedNode: (selectedNode:any) => set({ selectedNode }),
  refresh: async (search:string) => {
    if (search?.length) {
      const data = await fetchGraphData(search);

      set({ data });
    } else {
      const data = getSampleData();

      set({ data });
    }
  },
}));
