import create from 'zustand'

export type UserStore = {
  isAdmin: boolean
  pubKey: string
  setIsAdmin: (val: boolean) => void
  setPubKey: (val: string) => void
  budget: number
  setBudget: (val: number) => void
}

const defaultData: Omit<UserStore, 'setIsAdmin' | 'setPubKey' | 'setBudget'> = {
  isAdmin: false,
  pubKey: '',
  budget: 0,
}

export const useUserStore = create<UserStore>((set) => ({
  ...defaultData,
  setIsAdmin: (isAdmin) => set({ isAdmin }),
  setPubKey: (pubKey) => set({ pubKey }),
  setBudget: (budget) => set({ budget }),
}))
