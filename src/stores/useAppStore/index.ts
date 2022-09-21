import create from "zustand";

type AppStore = {
  currentSearch: string | null;
  sidebarIsOpen: boolean;
  transcriptIsOpen: boolean;
  clearSearch: () => void;
  setCurrentSearch: (_: string) => void;
  setSidebarOpen: (_: boolean) => void;
  setTranscriptOpen: (_: boolean) => void;
};

const defaultData = {
  currentSearch: null,
  sidebarIsOpen: false,
  transcriptIsOpen: false,
};

export const useAppStore = create<AppStore>((set, get) => ({
  ...defaultData,
  clearSearch: () => set({ currentSearch: null }),
  setCurrentSearch: (currentSearch) => set({ currentSearch }),
  setSidebarOpen: (sidebarIsOpen) =>
    set({
      sidebarIsOpen,
      transcriptIsOpen: !sidebarIsOpen ? false : get().transcriptIsOpen,
    }),
  setTranscriptOpen: (transcriptIsOpen) => set({ transcriptIsOpen }),
}));
