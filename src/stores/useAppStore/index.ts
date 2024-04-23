import { create } from 'zustand'
import { TAboutParams } from '~/network/fetchSourcesData'

export type SecondarySidebarActiveTab = '' | 'sentiment' | 'sources' | 'about'

export type AppStore = {
  currentSearch: string | null
  searchFormValue: string
  secondarySidebarActiveTab: SecondarySidebarActiveTab
  sidebarIsOpen: boolean
  hasBudgetExplanationModalBeSeen: boolean
  theme: 'dark' | 'light'
  transcriptIsOpen: boolean
  flagErrorIsOpen: boolean
  relevanceIsSelected: boolean
  currentPlayingAudio: React.MutableRefObject<HTMLAudioElement | null> | null
  appMetaData: TAboutParams | null
  clearSearch: () => void
  setCurrentSearch: (_: string) => void
  setSearchFormValue: (_: string) => void
  setRelevanceSelected: (_: boolean) => void
  setSecondarySidebarActiveTab: (_: SecondarySidebarActiveTab) => void
  setSidebarOpen: (_: boolean) => void
  setTranscriptOpen: (_: boolean) => void
  setFlagErrorOpen: (_: boolean) => void
  setAppMetaData: (val: TAboutParams) => void
  setCurrentPlayingAudio: (_: React.MutableRefObject<HTMLAudioElement | null> | null) => void
}

const defaultData = {
  currentSearch: null,
  searchFormValue: '',
  flagErrorIsOpen: false,
  hasBudgetExplanationModalBeSeen: false,
  relevanceIsSelected: false,
  secondarySidebarActiveTab: '' as const,
  sidebarIsOpen: true,
  theme: 'light' as const,
  transcriptIsOpen: false,
  appMetaData: null,
  currentPlayingAudio: null,
}

export const useAppStore = create<AppStore>((set, get) => ({
  ...defaultData,
  clearSearch: () => set({ currentSearch: null }),
  setCurrentSearch: (currentSearch) => set({ currentSearch }),
  setSearchFormValue: (searchFormValue) => set({ searchFormValue }),
  setFlagErrorOpen: (flagErrorIsOpen) => set({ flagErrorIsOpen }),
  setRelevanceSelected: (relevanceIsSelected) => set({ relevanceIsSelected }),
  setCurrentPlayingAudio: (currentPlayingAudio) => set({ currentPlayingAudio }),
  setSecondarySidebarActiveTab: (secondarySidebarActiveTab) =>
    set({
      secondarySidebarActiveTab,
    }),
  setSidebarOpen: (sidebarIsOpen) =>
    set({
      sidebarIsOpen,
      transcriptIsOpen: !sidebarIsOpen ? false : get().transcriptIsOpen,
    }),
  setTranscriptOpen: (transcriptIsOpen) => set({ transcriptIsOpen }),
  setAppMetaData: (appMetaData) => set({ appMetaData }),
}))
