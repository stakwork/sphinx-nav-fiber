import { create } from 'zustand'

export type FeatureFlagStore = {
  trendingTopicsFeatureFlag: boolean
  queuedSourcesFeatureFlag: boolean
  customSchemaFeatureFlag: boolean
  v2FeatureFlag: boolean
  graphBluePrintFeatureFlag: boolean
  changeNodeTypeFeatureFlag: boolean
  realtimeGraphFeatureFlag: boolean
  userFeedbackFeatureFlag: boolean
  searchFilteringFeatureFlag: boolean
  chatInterfaceFeatureFlag: boolean
  setTrendingTopicsFeatureFlag: (val: boolean) => void
  setV2FeatureFlag: (val: boolean) => void
  setQueuedSourcesFeatureFlag: (val: boolean) => void
  setCustomSchemaFeatureFlag: (val: boolean) => void
  setGraphBluePrintFeatureFlag: (val: boolean) => void
  setChangeNodeTypeFeatureFlag: (val: boolean) => void
  setRealtimeGraphFeatureFlag: (val: boolean) => void
  setUserFeedbackFeatureFlag: (val: boolean) => void
  setSearchFilteringFeatureFlag: (val: boolean) => void
  setChatInterfaceFeatureFlag: (val: boolean) => void
}

const defaultData: Omit<
  FeatureFlagStore,
  | 'setTrendingTopicsFeatureFlag'
  | 'setV2FeatureFlag'
  | 'setQueuedSourcesFeatureFlag'
  | 'setCustomSchemaFeatureFlag'
  | 'setGraphBluePrintFeatureFlag'
  | 'setChangeNodeTypeFeatureFlag'
  | 'setRealtimeGraphFeatureFlag'
  | 'setUserFeedbackFeatureFlag'
  | 'setSearchFilteringFeatureFlag'
  | 'setChatInterfaceFeatureFlag'
> = {
  trendingTopicsFeatureFlag: true,
  queuedSourcesFeatureFlag: false,
  v2FeatureFlag: false,
  customSchemaFeatureFlag: false,
  graphBluePrintFeatureFlag: false,
  changeNodeTypeFeatureFlag: false,
  realtimeGraphFeatureFlag: false,
  userFeedbackFeatureFlag: false,
  searchFilteringFeatureFlag: false,
  chatInterfaceFeatureFlag: false,
}

export const useFeatureFlagStore = create<FeatureFlagStore>((set) => ({
  ...defaultData,
  setTrendingTopicsFeatureFlag: (trendingTopicsFeatureFlag) => set({ trendingTopicsFeatureFlag }),
  setV2FeatureFlag: (v2FeatureFlag) => set({ v2FeatureFlag }),
  setQueuedSourcesFeatureFlag: (queuedSourcesFeatureFlag) => set({ queuedSourcesFeatureFlag }),
  setCustomSchemaFeatureFlag: (customSchemaFeatureFlag) => set({ customSchemaFeatureFlag }),
  setGraphBluePrintFeatureFlag: (graphBluePrintFeatureFlag) => set({ graphBluePrintFeatureFlag }),
  setChangeNodeTypeFeatureFlag: (changeNodeTypeFeatureFlag) => set({ changeNodeTypeFeatureFlag }),
  setRealtimeGraphFeatureFlag: (realtimeGraphFeatureFlag) => set({ realtimeGraphFeatureFlag }),
  setUserFeedbackFeatureFlag: (userFeedbackFeatureFlag) => set({ userFeedbackFeatureFlag }),
  setSearchFilteringFeatureFlag: (searchFilteringFeatureFlag) => set({ searchFilteringFeatureFlag }),
  setChatInterfaceFeatureFlag: (chatInterfaceFeatureFlag) => set({ chatInterfaceFeatureFlag }),
}))
