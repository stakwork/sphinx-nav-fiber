import create from 'zustand'
import { NodeExtended } from '~/types'

type PlayerStore = {
  isPlaying: boolean
  miniPlayerIsVisible: boolean
  hasError: boolean
  playingTime: number
  duration: number
  volume: number
  playingNode: NodeExtended | null
  setPlayingTime: (time: number) => void
  resetPlayer: () => void
  setVolume: (volume: number) => void
  setDuration: (time: number) => void
  setIsPlaying: (isPlaying: boolean) => void
  setMiniPlayerIsVisible: (miniPlayerIsVisible: boolean) => void
  setHasError: (hasError: boolean) => void
  setPlayingNode: (playingNode: NodeExtended | null) => void
}

const defaultData: Omit<
  PlayerStore,
  | 'setIsPlaying'
  | 'setPlayingTime'
  | 'setPlayingNode'
  | 'setDuration'
  | 'setVolume'
  | 'setHasError'
  | 'resetPlayer'
  | 'setMiniPlayerIsVisible'
> = {
  isPlaying: false,
  miniPlayerIsVisible: false,
  hasError: false,
  playingTime: 0,
  playingNode: null,
  duration: 0,
  volume: 0.5,
}

export const usePlayerStore = create<PlayerStore>((set, get) => ({
  ...defaultData,
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setMiniPlayerIsVisible: (miniPlayerIsVisible) => {
    if (!miniPlayerIsVisible) {
      set({ miniPlayerIsVisible, isPlaying: false })
    } else {
      set({ miniPlayerIsVisible })
    }
  },
  setHasError: (hasError) => set({ hasError }),
  setPlayingTime: (time) => set({ playingTime: time }),
  setDuration: (duration) => set({ duration }),
  setVolume: (volume) => set({ volume }),
  setPlayingNode: (playingNode) => {
    if (!playingNode) {
      set({
        ...defaultData,
      })
    }

    const statePlayingNode = get().playingNode

    if (statePlayingNode?.ref_id !== playingNode?.ref_id) {
      set({
        ...defaultData,
        miniPlayerIsVisible: true,
        playingNode,
      })
    }
  },
  resetPlayer: () => set({ duration: defaultData.duration, hasError: defaultData.hasError }),
}))
