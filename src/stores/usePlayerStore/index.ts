import create from 'zustand'

type PlayerStore = {
  isPlaying: boolean
  setIsPlaying: (isPlaying: boolean) => void
}

const defaultData: Omit<PlayerStore, 'setIsPlaying'> = {
  isPlaying: false,
}

export const usePlayerStore = create<PlayerStore>((set) => ({
  ...defaultData,
  setIsPlaying: (isPlaying) => set({ isPlaying }),
}))
