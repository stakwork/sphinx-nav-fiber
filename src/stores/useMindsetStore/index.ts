import { create } from 'zustand'
import { Node, NodeExtended } from '~/types'

type MindsetStore = {
  selectedEpisodeId: string
  clips: NodeExtended[]
  selectedEpisode: NodeExtended | null
  selectedEpisodeLink: string
  setSelectedEpisodeId: (id: string) => void
  setSelectedEpisode: (node: NodeExtended) => void
  setSelectedEpisodeLink: (link: string) => void
  setClips: (clips: Node[]) => void
}

const defaultData: Omit<
  MindsetStore,
  'setSelectedEpisodeId' | 'setSelectedEpisodeLink' | 'setSelectedEpisode' | 'setClips'
> = {
  selectedEpisodeId: '',
  selectedEpisodeLink: '',
  selectedEpisode: null,
  clips: [],
}

export const useMindsetStore = create<MindsetStore>((set) => ({
  ...defaultData,
  setSelectedEpisodeId: (selectedEpisodeId) => set({ selectedEpisodeId }),
  setSelectedEpisodeLink: (selectedEpisodeLink) => set({ selectedEpisodeLink }),
  setSelectedEpisode: (selectedEpisode) => set({ selectedEpisode }),
  setClips: (clips) => set({ clips }),
}))
