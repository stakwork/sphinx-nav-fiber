import { create } from 'zustand'

export type AvailableModals = 'budgetExplanation' | 'sourcesTable' | 'addContent' | 'editTopic'

type ModalStore = {
  currentModals: Record<AvailableModals, boolean>
  close: (modal: AvailableModals) => void
  open: (modal: AvailableModals) => void
}

const defaultData = {
  addNodeModalData: null,
  currentModals: {
    budgetExplanation: false,
    sourcesTable: false,
    addContent: false,
    editTopic: false,
  },
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
}))

export const useSomeModalIsOpen = () => {
  const { currentModals } = useModalStore()

  return Object.values(currentModals).some((v) => v)
}

export const useModal = (id: AvailableModals) => {
  const { open, close, currentModals } = useModalStore()

  return {
    close: () => close(id),
    open: () => open(id),
    visible: currentModals[id],
  }
}
