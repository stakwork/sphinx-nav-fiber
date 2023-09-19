import { create } from 'zustand'

export type AvailableModals = 'addNode' | 'budgetExplanation' | 'sourcesTable'

export type AddNodeModalData = 'content' | 'source' | null

type ModalStore = {
  currentModals: Record<AvailableModals, boolean>
  addNodeModalData: AddNodeModalData
  close: (modal: AvailableModals) => void
  open: (modal: AvailableModals) => void
  setAddNodeModalData: (data: AddNodeModalData) => void
}

const defaultData = {
  addNodeModalData: null,
  currentModals: { addNode: false, budgetExplanation: false },
}

export const useModalStore = create<ModalStore>((set) => ({
  ...defaultData,
  close: (modal) => {
    set((state) => ({
      addNodeModalData: null,
      currentModals: {
        ...state.currentModals,
        [modal]: false,
      },
    }))
  },
  open: (modal) => {
    set((state) => ({
      currentModals: {
        ...state.currentModals,
        [modal]: true,
      },
    }))
  },
  setAddNodeModalData: (data: AddNodeModalData) => {
    set(() => ({
      addNodeModalData: data,
    }))
  },
}))

export const useSomeModalIsOpen = () => {
  const { currentModals } = useModalStore()

  return Object.values(currentModals).some((v) => v)
}

export const useModal = (id: AvailableModals) => {
  const { open, close, setAddNodeModalData, currentModals, addNodeModalData } = useModalStore()

  return {
    addNodeModalData,
    close: () => close(id),
    open: () => open(id),
    setAddNodeModalData: (data: AddNodeModalData) => setAddNodeModalData(data),
    visible: currentModals[id],
  }
}
