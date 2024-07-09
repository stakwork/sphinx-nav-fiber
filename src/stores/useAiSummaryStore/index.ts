import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export type AiSummaryStore = {
  aiSummaryRequest: string
  aiSummaryIsLoading: boolean
  aiSummaryAnswers: { [k: string]: string }
  setAiSummaryAnswer: (key: string, answer: string) => void
  setAiSummaryRequest: (query: string) => void
  setAiSummaryIsLoading: (status: boolean) => void
  getAiSummaryAnswer: (key: string) => string
  getKeyExist: (key: string) => boolean
}

const defaultData = {
  aiSummaryRequest: '',
  aiSummaryIsLoading: false,
  aiSummaryAnswers: {},
}

export const useAiSummaryStore = create<AiSummaryStore>()(
  devtools((set, get) => ({
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
    setAiSummaryRequest: (aiSummaryRequest) => ({ aiSummaryRequest }),

    getKeyExist: (key) => {
      if (key in get().aiSummaryAnswers) {
        return true
      }

      return false
    },
  })),
)
