import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { AIEntity } from '~/types'

type AIAnswer = {
  [key: string]: AIEntity
}

export type AiSummaryStore = {
  aiSummaryAnswers: AIAnswer
  aiRefId: string
  setAiSummaryAnswer: (key: string, answer: AIEntity) => void
  setNewLoading: (answer: AIEntity | null) => void
  resetAiSummaryAnswer: () => void
  getAiSummaryAnswer: (key: string) => string
  getKeyExist: (key: string) => boolean
  setAiRefId: (aiRefId: string) => void
  newLoading: AIEntity | null
}

const defaultData = {
  aiSummaryAnswers: {},
  aiRefId: '',
  newLoading: null,
}

export const useAiSummaryStore = create<AiSummaryStore>()(
  devtools((set, get) => ({
    ...defaultData,
    setAiSummaryAnswer: (key, answer) => {
      const summaryAnswers = get().aiSummaryAnswers

      summaryAnswers[key] = { ...(summaryAnswers[key] || {}), ...answer }

      const clone = structuredClone(summaryAnswers)

      set({ aiSummaryAnswers: clone })
    },
    setNewLoading: (newLoading) => {
      set({ newLoading })
    },
    resetAiSummaryAnswer: () => {
      set({ aiSummaryAnswers: {}, aiRefId: '' })
    },
    getAiSummaryAnswer: (key) => {
      const summaryAnswers = get().aiSummaryAnswers

      return summaryAnswers[key].answer || ''
    },

    setAiRefId: (aiRefId) => set({ aiRefId }),

    getKeyExist: (key) => {
      if (key in get().aiSummaryAnswers) {
        return true
      }

      return false
    },
  })),
)

export const useHasAiChats = () =>
  useAiSummaryStore((s) => Object.values(s.aiSummaryAnswers).filter((i) => i.shouldRender).length || !!s.newLoading)

export const useHasAiChatsResponseLoading = () =>
  useAiSummaryStore((s) => {
    const answers = s.aiSummaryAnswers

    return !!s.newLoading || Object.values(answers).at(-1)?.answerLoading
  })
