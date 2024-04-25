import { create } from 'zustand'

export type FeatureFlagStore = {
  trendingTopicsFlag: boolean
  queuedSourcesFlag: boolean
  customSchemaFlag: boolean
  addItem: boolean
  addContent: boolean
  settings: boolean
  v2Flag: boolean
  graphBluePrint: boolean
  setTrendingTopicsFlag: (val: boolean) => void
  setV2Flag: (val: boolean) => void
  setQueuedSourcesFlag: (val: boolean) => void
  setCustomSchemaFlag: (val: boolean) => void
  setGraphBluePrint: (val: boolean) => void
  setAddItem: (val: boolean) => void
  setAddContent: (val: boolean) => void
  setSettings: (val: boolean) => void
}

const defaultData: Omit<
  FeatureFlagStore,
  | 'setTrendingTopicsFlag'
  | 'setV2Flag'
  | 'setQueuedSourcesFlag'
  | 'setCustomSchemaFlag'
  | 'setGraphBluePrint'
  | 'setAddItem'
  | 'setAddContent'
  | 'setSettings'
> = {
  trendingTopicsFlag: true,
  queuedSourcesFlag: false,
  v2Flag: false,
  customSchemaFlag: false,
  graphBluePrint: false,
  addContent: false,
  addItem: false,
  settings: false,
}

export const useFeatureFlagStore = create<FeatureFlagStore>((set) => ({
  ...defaultData,
  setTrendingTopicsFlag: (trendingTopicsFlag) => set({ trendingTopicsFlag }),
  setV2Flag: (v2Flag) => set({ v2Flag }),
  setQueuedSourcesFlag: (queuedSourcesFlag) => set({ queuedSourcesFlag }),
  setCustomSchemaFlag: (customSchemaFlag) => set({ customSchemaFlag }),
  setGraphBluePrint: (graphBluePrint) => set({ graphBluePrint }),
  setAddContent: (addContent) => set({ addContent }),
  setAddItem: (addItem) => set({ addItem }),
  setSettings: (settings) => set({ settings }),
}))
