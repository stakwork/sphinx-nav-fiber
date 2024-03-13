import { create } from 'zustand'

export type FeatureFlagStore = {
  trendingTopicsFlag: boolean
  queuedSourcesFlag: boolean
  FeatureFlag: boolean
  v2Flag: boolean
  setTrendingTopicsFlag: (val: boolean) => void
  setV2Flag: (val: boolean) => void
  setQueuedSourcesFlag: (val: boolean) => void
  setFeatureFlag: (val: boolean) => void
}

const defaultData: Omit<
  FeatureFlagStore,
  'setTrendingTopicsFlag' | 'setV2Flag' | 'setQueuedSourcesFlag' | 'setFeatureFlag'
> = {
  trendingTopicsFlag: true,
  queuedSourcesFlag: false,
  v2Flag: false,
  FeatureFlag: false,
}

export const useFeatureFlagStore = create<FeatureFlagStore>((set) => ({
  ...defaultData,
  setTrendingTopicsFlag: (trendingTopicsFlag) => set({ trendingTopicsFlag }),
  setV2Flag: (v2Flag) => set({ v2Flag }),
  setQueuedSourcesFlag: (queuedSourcesFlag) => set({ queuedSourcesFlag }),
  setFeatureFlag: (FeatureFlag) => set({ FeatureFlag }),
}))
