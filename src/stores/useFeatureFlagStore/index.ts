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
  chatInterfaceFeatureFlag: boolean
  fastFiltersFeatureFlag: boolean
  chatSplashScreenAsDefault: boolean
  setTrendingTopicsFeatureFlag: (val: boolean) => void
  setV2FeatureFlag: (val: boolean) => void
  setQueuedSourcesFeatureFlag: (val: boolean) => void
  setCustomSchemaFeatureFlag: (val: boolean) => void
  setGraphBluePrintFeatureFlag: (val: boolean) => void
  setChangeNodeTypeFeatureFlag: (val: boolean) => void
  setRealtimeGraphFeatureFlag: (val: boolean) => void
  setUserFeedbackFeatureFlag: (val: boolean) => void
  setChatInterfaceFeatureFlag: (val: boolean) => void
  setFastFiltersFeatureFlag: (val: boolean) => void
  setChatSplashScreenAsDefault: (val: boolean) => void
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
  | 'setChatInterfaceFeatureFlag'
  | 'setFastFiltersFeatureFlag'
  | 'setChatSplashScreenAsDefault'
> = {
  trendingTopicsFeatureFlag: true,
  queuedSourcesFeatureFlag: false,
  v2FeatureFlag: false,
  customSchemaFeatureFlag: false,
  graphBluePrintFeatureFlag: false,
  changeNodeTypeFeatureFlag: false,
  realtimeGraphFeatureFlag: false,
  userFeedbackFeatureFlag: false,
  chatInterfaceFeatureFlag: false,
  fastFiltersFeatureFlag: false,
  chatSplashScreenAsDefault: false,
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
  setChatInterfaceFeatureFlag: (chatInterfaceFeatureFlag) => set({ chatInterfaceFeatureFlag }),
  setFastFiltersFeatureFlag: (fastFiltersFeatureFlag) => set({ fastFiltersFeatureFlag }),
  setChatSplashScreenAsDefault: (chatSplashScreenAsDefault) => set({ chatSplashScreenAsDefault }),
}))
