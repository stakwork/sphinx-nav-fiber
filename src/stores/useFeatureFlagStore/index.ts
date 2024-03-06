import { create } from 'zustand'

export type FeatureFlag = {
  trendingTopics: boolean
  setTrendingTopics: (val: boolean) => void
}

const defaultData = {
  trendingTopics: true,
}

export const useFeatureFlag = create<FeatureFlag>((set) => ({
  ...defaultData,
  setTrendingTopics: (trendingTopics) => set({ trendingTopics }),
}))
