// stores/useGraphStore.ts
import { create } from 'zustand'
import { FetchDataResponse } from '~/types'

type IsolatedGraphStore = {
  data: FetchDataResponse | null
  isolatedNodeIds: string[]

  setData: (data: FetchDataResponse) => void
}

const defaultData: Omit<IsolatedGraphStore, 'setData'> = {
  data: null,
  isolatedNodeIds: [],
}

export const useIsolatedGraphStore = create<IsolatedGraphStore>((set) => ({
  ...defaultData,
  setData: (data) => {
    const connectedNodeIds = new Set<string>()

    data.edges.forEach((edge) => {
      connectedNodeIds.add(edge.source)
      connectedNodeIds.add(edge.target)
    })

    const isolatedNodeIds = data.nodes.filter((node) => !connectedNodeIds.has(node.ref_id)).map((node) => node.ref_id)

    set({ data, isolatedNodeIds })
  },
}))
