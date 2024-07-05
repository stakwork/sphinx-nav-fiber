import { create } from 'zustand'

export type AiSummaryStore = {
  aiSummaryIsLoading: boolean
  aiSummaryAnswers: { [k: string]: string }
  setAiSummaryAnswer: (key: string, answer: string) => void
  setAiSummaryIsLoading: (status: boolean) => void
  getAiSummaryAnswer: (key: string) => string
}

const defaultData = {
  aiSummaryIsLoading: false,
  aiSummaryAnswers: {},
}

export const useAiSummaryStore = create<AiSummaryStore>((set, get) => ({
  ...defaultData,
  setAiSummaryIsLoading: (status) => set({ aiSummaryIsLoading: status }),
  setAiSummaryAnswer: (key, answer) => {
    const summaryAnswers = get().aiSummaryAnswers

    const newSummaryAnswers = { ...summaryAnswers, [key]: answer }

    set({ aiSummaryAnswers: { ...newSummaryAnswers } })
  },
  getAiSummaryAnswer: (key) => {
    const summaryAnswers = get().aiSummaryAnswers

    return summaryAnswers[key]
  },
}))
