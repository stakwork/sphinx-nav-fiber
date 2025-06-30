import { create } from 'zustand'
import { Link, Node } from '~/types'

export type RootNodesStore = {
  rootStoreData: { nodes: Node[]; links: Link[] } | null
  activeView: 'graph' | 'list'
  setRootStoreData: (data: { nodes: Node[]; links: Link[] }) => void
  setActiveView: (view: 'graph' | 'list') => void
}

const defaultData = {
  rootStoreData: null,
  activeView: 'graph',
} as const

export const useRootNodesStore = create<RootNodesStore>((set) => ({
  ...defaultData,
  setRootStoreData: (data) => set({ rootStoreData: data }),
  setActiveView: (view: 'graph' | 'list') => set({ activeView: view }),
}))
