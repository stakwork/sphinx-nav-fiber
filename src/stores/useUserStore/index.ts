import create from 'zustand'

export type UserStore = {
  isAdmin: boolean
  pubKey: string
  setIsAdmin: (val: boolean) => void
  setPubKey: (val: string) => void
}

const defaultData: Omit<UserStore, 'setIsAdmin' | 'setPubKey'> = {
  isAdmin: false,
  pubKey: '',
}

export const useUserStore = create<UserStore>((set) => ({
  ...defaultData,
  setIsAdmin: (isAdmin) => set({ isAdmin }),
  setPubKey: (pubKey) => set({ pubKey }),
}))
