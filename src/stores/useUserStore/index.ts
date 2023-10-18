import create from 'zustand'

type ActionType = 'CLEAR' | 'INCREMENT'

export type UserStore = {
  isAdmin: boolean
  pubKey: string
  setIsAdmin: (val: boolean) => void
  setPubKey: (val: string) => void
  budget: number | null
  setBudget: (val: number | null) => void
  postCount: number
  setPostCount: (action: ActionType) => void
}

const defaultData: Omit<UserStore, 'setIsAdmin' | 'setPubKey' | 'setBudget' | 'setPostCount'> = {
  isAdmin: false,
  pubKey: '',
  budget: 0,
  postCount: 0,
}

export const useUserStore = create<UserStore>((set) => ({
  ...defaultData,
  setIsAdmin: (isAdmin) => set({ isAdmin }),
  setPubKey: (pubKey) => set({ pubKey }),
  setBudget: (budget) => set({ budget }),
  setPostCount: (action: ActionType) =>
    set((state) => {
      if (action === 'INCREMENT') {
        return { postCount: state.postCount + 1 }
      }

      return { postCount: 0 }
    }),
}))
