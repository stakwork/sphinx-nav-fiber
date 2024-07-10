import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { AIEntity } from '~/types'

type AIAnswer = {
  [key: string]: AIEntity
}

export type AiSummaryStore = {
  aiSummaryIsLoading: boolean
  aiSummaryAnswers: AIAnswer
  setAiSummaryAnswer: (key: string, answer: AIEntity) => void
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

      summaryAnswers[key] = { ...(summaryAnswers[key] || {}), ...answer }

      const clone = structuredClone(summaryAnswers)

      set({ aiSummaryAnswers: clone })
    },
    getAiSummaryAnswer: (key) => {
      const summaryAnswers = get().aiSummaryAnswers

      return summaryAnswers[key].answer || ''
    },

    getKeyExist: (key) => {
      if (key in get().aiSummaryAnswers) {
        return true
      }

      return false
    },
  })),
)
