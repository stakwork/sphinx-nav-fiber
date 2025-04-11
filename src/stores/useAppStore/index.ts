import { create } from 'zustand'
import { TAboutParams } from '~/network/fetchSourcesData'

export type SecondarySidebarActiveTab = '' | 'sentiment' | 'sources' | 'about'

export type AppStore = {
  currentSearch: string
  searchFormValue: string
  secondarySidebarActiveTab: SecondarySidebarActiveTab
  sidebarIsOpen: boolean
  universeQuestionIsOpen: boolean
  hasBudgetExplanationModalBeSeen: boolean
  theme: 'dark' | 'light'
  transcriptIsOpen: boolean
  flagErrorIsOpen: boolean
  relevanceIsSelected: boolean
  currentPlayingAudio: React.MutableRefObject<HTMLAudioElement | null> | null
  appMetaData: TAboutParams | null
  showCollapseButton: boolean
  clearSearch: () => void
  setCurrentSearch: (_: string) => void
  setSearchFormValue: (_: string) => void
  setRelevanceSelected: (_: boolean) => void
  setSecondarySidebarActiveTab: (_: SecondarySidebarActiveTab) => void
  setSidebarOpen: (_: boolean) => void
  setTranscriptOpen: (_: boolean) => void
  setFlagErrorOpen: (_: boolean) => void
  setAppMetaData: (val: TAboutParams) => void
  setUniverseQuestionIsOpen: () => void
  setCurrentPlayingAudio: (_: React.MutableRefObject<HTMLAudioElement | null> | null) => void
  setShowCollapseButton: (_: boolean) => void
  selectedColor: string
  setSelectedColor: (color: string) => void
  selectedIcon: string
  setSelectedIcon: (icon: string) => void
  isHtmlContent: boolean
  htmlContent: string
  setHtmlContent: (content: string) => void
  setIsHtmlContent: (isHtml: boolean) => void
  htmlHistory: string[]
  addToHtmlHistory: (content: string) => void
  goBackHtmlHistory: () => string | null
}

const defaultData = {
  currentSearch: '',
  searchFormValue: '',
  flagErrorIsOpen: false,
  universeQuestionIsOpen: false,
  hasBudgetExplanationModalBeSeen: false,
  relevanceIsSelected: false,
  secondarySidebarActiveTab: '' as const,
  sidebarIsOpen: true,
  theme: 'light' as const,
  transcriptIsOpen: false,
  appMetaData: null,
  currentPlayingAudio: null,
  showCollapseButton: true,
  selectedColor: '#962777',
  selectedIcon: 'ConstructionIcon',
  isHtmlContent: false,
  htmlContent: '',
  htmlHistory: [],
}

export const useAppStore = create<AppStore>((set, get) => ({
  ...defaultData,
  clearSearch: () => set({ currentSearch: '' }),
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
  setUniverseQuestionIsOpen: () => set({ universeQuestionIsOpen: !get().universeQuestionIsOpen }),
  setAppMetaData: (appMetaData) => set({ appMetaData }),
  setShowCollapseButton: (showCollapseButton) => set({ showCollapseButton }),
  setSelectedColor: (selectedColor) => set({ selectedColor }),
  setSelectedIcon: (selectedIcon) => set({ selectedIcon }),
  setHtmlContent: (htmlContent) => set({ htmlContent }),
  setIsHtmlContent: (isHtmlContent) => set({ isHtmlContent }),
  addToHtmlHistory: (content) =>
    set((state) => ({
      htmlHistory: [...state.htmlHistory, content],
    })),
  goBackHtmlHistory: () => {
    const { htmlHistory } = get()

    if (htmlHistory.length <= 1) {
      return null
    }

    set((state) => ({
      htmlHistory: state.htmlHistory.slice(0, -1),
    }))

    return htmlHistory[htmlHistory.length - 2]
  },
}))
