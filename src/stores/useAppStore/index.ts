import create from "zustand";

type AppStore = {
  currentSearch: string | null;
  secondarySidebarIsOpen: boolean;
  sidebarIsOpen: boolean;
  hasBudgetExplanationModalBeSeen: boolean;
  theme: "dark" | "light";
  transcriptIsOpen: boolean;
  flagErrorIsOpen: boolean;
  relevanceIsSelected: boolean;
  clearSearch: () => void;
  setCurrentSearch: (_: string) => void;
  setRelevanceSelected: (_: boolean) => void;
  setSecondarySidebarIsOpen: (_: boolean) => void;
  setSidebarOpen: (_: boolean) => void;
  setTranscriptOpen: (_: boolean) => void;
  setFlagErrorOpen: (_: boolean) => void;
};

const defaultData = {
  currentSearch: null,
  flagErrorIsOpen: false,
  hasBudgetExplanationModalBeSeen: false,
  relevanceIsSelected: false,
  secondarySidebarIsOpen: false,
  sidebarIsOpen: false,
  theme: "light" as const,
  transcriptIsOpen: false,
};

export const useAppStore = create<AppStore>((set, get) => ({
  ...defaultData,
  clearSearch: () => set({ currentSearch: null }),
  setCurrentSearch: (currentSearch) => set({ currentSearch }),
  setFlagErrorOpen: (flagErrorIsOpen) => set({ flagErrorIsOpen }),
  setRelevanceSelected: (relevanceIsSelected) => set({ relevanceIsSelected }),
  setSecondarySidebarIsOpen: (secondarySidebarIsOpen) =>
    set({
      secondarySidebarIsOpen,
    }),
  setSidebarOpen: (sidebarIsOpen) =>
    set({
      sidebarIsOpen,
      transcriptIsOpen: !sidebarIsOpen ? false : get().transcriptIsOpen,
    }),
  setTranscriptOpen: (transcriptIsOpen) => set({ transcriptIsOpen }),
}));
