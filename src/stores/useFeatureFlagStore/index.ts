import { create } from 'zustand'

export type FeatureFlag = {
  trendingTopics: boolean
  setTrendingTopic: (val: boolean) => void
}

const defaultData = {
  trendingTopics: true,
}

export const useAppStore = create<FeatureFlag>((set) => ({
  ...defaultData,
  setTrendingTopic: (trendingTopics) => set({ trendingTopics }),
}))
