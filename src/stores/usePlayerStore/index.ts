import create from 'zustand'
import { NodeExtended } from '~/types'

type PlayerStore = {
  isPlaying: boolean
  playingTime: number
  playingNode: NodeExtended | null
  setPlayingTime: (time: number) => void
  setIsPlaying: (isPlaying: boolean) => void
  setPlayingNode: (playingNode: NodeExtended | null) => void
}

const defaultData: Omit<PlayerStore, 'setIsPlaying' | 'setPlayingTime' | 'setPlayingNode'> = {
  isPlaying: false,
  playingTime: 0,
  playingNode: null,
}

export const usePlayerStore = create<PlayerStore>((set, get) => ({
  ...defaultData,
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setPlayingTime: (time) => set({ playingTime: time }),
  setPlayingNode: (playingNode) => {
    if (!playingNode) {
      set({
        playingNode: null,
      })
    }

    const statePlayingNode = get().playingNode

    if (statePlayingNode?.ref_id !== playingNode?.ref_id) {
      set({
        playingNode,
      })
    }
  },
}))
