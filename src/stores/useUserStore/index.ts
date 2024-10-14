import { create } from 'zustand'

type ActionType = 'CLEAR' | 'INCREMENT'

export type UserStore = {
  isAdmin: boolean
  isAuthenticated: boolean
  pubKey: string
  signedToken: string
  setIsAdmin: (val: boolean) => void
  setPubKey: (val: string) => void
  budget: number | null
  setBudget: (val: number | null) => void
  nodeCount: number
  setNodeCount: (action: ActionType) => void
  tribeUuid: string
  setTribeUuid: (val: string) => void
  tribeHost: string
  swarmUiUrl: string
  setTribeHost: (val: string) => void
  setIsAuthenticated: (val: boolean) => void
  setSignedToken: (val: string) => void
  setSwarmUiUrl: (val: string) => void
}

const defaultData: Omit<
  UserStore,
  | 'setIsAdmin'
  | 'setPubKey'
  | 'setBudget'
  | 'setNodeCount'
  | 'setTribeUuid'
  | 'setTribeHost'
  | 'setIsAuthenticated'
  | 'setSignedToken'
  | 'setSwarmUiUrl'
> = {
  isAdmin: false,
  isAuthenticated: false,
  pubKey: '',
  budget: 0,
  nodeCount: 0,
  tribeHost: '',
  tribeUuid: '',
  signedToken: '',
  swarmUiUrl: '',
}

export const useUserStore = create<UserStore>((set) => ({
  ...defaultData,
  setIsAdmin: (isAdmin) => set({ isAdmin }),
  setPubKey: (pubKey) => set({ pubKey }),
  setBudget: (budget) => set({ budget }),
  setNodeCount: (action: ActionType) =>
    set((state) => {
      if (action === 'INCREMENT') {
        return { nodeCount: state.nodeCount + 1 }
      }

      return { nodeCount: 0 }
    }),
  setTribeUuid: (tribeUuid) => set({ tribeUuid }),
  setTribeHost: (tribeHost) => set({ tribeHost }),
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  setSignedToken: (signedToken) => set({ signedToken }),
  setSwarmUiUrl: (swarmUiUrl) => set({ swarmUiUrl }),
}))
