import create from "zustand";

export type AvailableModals = "addNode" | "budgetExplanation";

type ModalStore = {
  currentModals: Record<AvailableModals, boolean>;
  close: (modal: AvailableModals) => void;
  open: (modal: AvailableModals) => void;
};

const defaultData = {
  currentModals: { addNode: false, budgetExplanation: false },
};

export const useModalStore = create<ModalStore>((set) => ({
  ...defaultData,
  close: (modal) => {
    set((state) => ({
      currentModals: {
        ...state.currentModals,
        [modal]: false,
      },
    }));
  },
  open: (modal) => {
    set((state) => ({
      currentModals: {
        ...state.currentModals,
        [modal]: true,
      },
    }));
  },
}));

export const useModal = (id: AvailableModals) => {
  const { open, close, currentModals } = useModalStore();

  return {
    close: () => close(id),
    open: () => open(id),
    visible: currentModals[id],
  };
};
