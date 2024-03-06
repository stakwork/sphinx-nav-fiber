import { create } from 'zustand'

export type FeatureFlag = {
  trendingTopicsFlag: boolean
  setTrendingTopicsFlag: (val: boolean) => void
}

const defaultData = {
  trendingTopicsFlag: true,
}

export const useFeatureFlag = create<FeatureFlag>((set) => ({
  ...defaultData,
  setTrendingTopicsFlag: (trendingTopicsFlag) => set({ trendingTopicsFlag }),
}))
