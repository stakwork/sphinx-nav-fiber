import create from 'zustand'

type TeachStore = {
  askedQuestions: string[] | null
  askedQuestionsAnswers: string[] | null
  teachMeAnswer: string | null
  hasQuestionInProgress: boolean
  hasTeachingInProgress: boolean
  setAskedQuestion: (question: string) => void
  setAskedQuestionAnswer: (answer: string) => void
  setHasQuestionInProgress: (hasQuestionInProgress: boolean) => void
  setHasTeachingInProgress: (hasTeachingInProgress: boolean) => void
  setTeachMeAnswer: (answer: string) => void
}

const defaultData: Omit<
  TeachStore,
  | 'setTeachMeAnswer'
  | 'setAskedQuestionAnswer'
  | 'setAskedQuestion'
  | 'setHasQuestionInProgress'
  | 'setHasTeachingInProgress'
> = {
  askedQuestions: null,
  askedQuestionsAnswers: null,
  hasQuestionInProgress: false,
  hasTeachingInProgress: false,
  teachMeAnswer: null,
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
  setTeachMeAnswer: (answer: string) => set({ hasTeachingInProgress: false, teachMeAnswer: answer }),
}))
