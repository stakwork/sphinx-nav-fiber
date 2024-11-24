import { create } from 'zustand'
import { NodeExtended } from '~/types'

type MindsetStore = {
  selectedEpisodeId: string
  selectedEpisode: NodeExtended | null
  selectedEpisodeLink: string
  setSelectedEpisodeId: (id: string) => void
  setSelectedEpisode: (node: NodeExtended) => void
  setSelectedEpisodeLink: (link: string) => void
}

const defaultData: Omit<MindsetStore, 'setSelectedEpisodeId' | 'setSelectedEpisodeLink' | 'setSelectedEpisode'> = {
  selectedEpisodeId: '',
  selectedEpisodeLink: '',
  selectedEpisode: null,
}

export const useMindsetStore = create<MindsetStore>((set) => ({
  ...defaultData,
  setSelectedEpisodeId: (selectedEpisodeId) => set({ selectedEpisodeId }),
  setSelectedEpisodeLink: (selectedEpisodeLink) => set({ selectedEpisodeLink }),
  setSelectedEpisode: (selectedEpisode) => set({ selectedEpisode }),
}))
