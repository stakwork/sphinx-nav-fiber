import create from 'zustand'
import { useDataStore } from '../useDataStore'
import { useTeachStore } from '../useTeachStore'

export type SecondarySidebarActiveTab = '' | 'sentiment' | 'sources' | 'about'

type AppStore = {
  currentSearch: string | null
  secondarySidebarActiveTab: SecondarySidebarActiveTab
  sidebarIsOpen: boolean
  hasBudgetExplanationModalBeSeen: boolean
  theme: 'dark' | 'light'
  transcriptIsOpen: boolean
  flagErrorIsOpen: boolean
  relevanceIsSelected: boolean
  clearSearch: () => void
  setCurrentSearch: (_: string) => void
  setRelevanceSelected: (_: boolean) => void
  setSecondarySidebarActiveTab: (_: SecondarySidebarActiveTab) => void
  setSidebarOpen: (_: boolean) => void
  setTranscriptOpen: (_: boolean) => void
  setFlagErrorOpen: (_: boolean) => void
}

const defaultData = {
  currentSearch: null,
  flagErrorIsOpen: false,
  hasBudgetExplanationModalBeSeen: false,
  relevanceIsSelected: false,
  secondarySidebarActiveTab: '' as const,
  sidebarIsOpen: true,
  theme: 'light' as const,
  transcriptIsOpen: false,
}

export const useAppStore = create<AppStore>((set, get) => ({
  ...defaultData,
  clearSearch: () => set({ currentSearch: null }),
  setCurrentSearch: (currentSearch) => {
    const { setTeachMeAnswer } = useTeachStore.getState()
    const { setSelectedNode, setCategoryFilter } = useDataStore.getState()

    const resetAppStore = {
      transcriptIsOpen: false,
      relevanceIsSelected: false,
    }

    setSelectedNode(null)
    setCategoryFilter(null)
    setTeachMeAnswer('')

    set({ ...resetAppStore, currentSearch })
  },
  setFlagErrorOpen: (flagErrorIsOpen) => set({ flagErrorIsOpen }),
  setRelevanceSelected: (relevanceIsSelected) => set({ relevanceIsSelected }),
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
}))
