import create from "zustand";
import { getSampleData } from "../../main/map/helpers";
import { fetchGraphData } from "../../network/fetchGraphData";
import { GraphData, Node } from "../../types";

type DataStore = {
  data: GraphData;
  selectedNode: Node | null;
  refresh: (search: string) => void;
  setSelectedNode: (selectedNode: Node) => void;
};

const sampleData = getSampleData();

export const useDataStore = create<DataStore>((set) => ({
  data: sampleData,
  selectedNode: null,
  setSelectedNode: (selectedNode) => set({ selectedNode }),
  refresh: async (search) => {
    if (search?.length) {
      const data = await fetchGraphData(search);

      set({ data });
    } else {
      const data = getSampleData();

      set({ data });
    }
  },
}));
