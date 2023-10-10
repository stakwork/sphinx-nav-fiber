import create from 'zustand'

export type InstagraphResponse = {
  instagraph: Instagraph
} | null

type Instagraph = {
  edges: Array<{
    direction: string
    label: string
    properties: object
    source: string
    target: string
    color: string
    id: string
  }>
  nodes: Array<{
    color: string
    id: string
    data: { label: string }
    position: { x: number; y: number }
    properties: object
    type: string
  }>
} | null

type TeachStore = {
  askedQuestions: string[] | null
  askedQuestionsAnswers: string[] | null
  teachMeAnswer: string | null
  instgraphAnswser: Instagraph
  hasQuestionInProgress: boolean
  hasTeachingInProgress: boolean
  hasInstagraphInProgress: boolean
  setAskedQuestion: (question: string) => void
  setAskedQuestionAnswer: (answer: string) => void
  setHasQuestionInProgress: (hasQuestionInProgress: boolean) => void
  setHasTeachingInProgress: (hasTeachingInProgress: boolean) => void
  setHasInstagraphInProgress: (hasInstagraphInProgress: boolean) => void
  setTeachMeAnswer: (answer: string) => void
  setInstagraphAnswer: (answer: InstagraphResponse) => void
}

const defaultData: Omit<
  TeachStore,
  | 'setTeachMeAnswer'
  | 'setInstagraphAnswer'
  | 'setAskedQuestionAnswer'
  | 'setAskedQuestion'
  | 'setHasQuestionInProgress'
  | 'setHasInstagraphInProgress'
  | 'setHasTeachingInProgress'
> = {
  askedQuestions: null,
  askedQuestionsAnswers: null,
  hasQuestionInProgress: false,
  hasTeachingInProgress: false,
  hasInstagraphInProgress: false,
  teachMeAnswer: null,
  instgraphAnswser: null,
}

export const useTeachStore = create<TeachStore>((set) => ({
  ...defaultData,
  setAskedQuestion: (question: string) =>
    set((state) => ({
      askedQuestions: [...(state.askedQuestions || []), question],
      hasQuestionInProgress: true,
    })),
  setAskedQuestionAnswer: (answer: string) =>
    set((state) => ({
      askedQuestionsAnswers: [...(state.askedQuestionsAnswers || []), answer],
      hasQuestionInProgress: false,
    })),
  setHasQuestionInProgress: (hasQuestionInProgress: boolean) =>
    set({
      hasQuestionInProgress,
    }),
  setHasTeachingInProgress: (hasTeachingInProgress: boolean) =>
    set({
      hasTeachingInProgress,
    }),
  setHasInstagraphInProgress: (hasInstagraphInProgress: boolean) =>
    set({
      hasInstagraphInProgress,
    }),
  setTeachMeAnswer: (answer: string) => set({ hasTeachingInProgress: false, teachMeAnswer: answer }),
  setInstagraphAnswer: (answer: InstagraphResponse) => {
    if (!!answer?.instagraph?.edges && !!answer?.instagraph?.nodes) {
      set({
        hasInstagraphInProgress: false,
        instgraphAnswser: { edges: answer?.instagraph?.edges, nodes: answer?.instagraph?.nodes },
      })
    }
  },
}))
