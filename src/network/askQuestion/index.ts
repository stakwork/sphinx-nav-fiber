import { getLSat, payLsat } from '~/utils'
import { api } from '../api'

/* eslint-disable camelcase */
export type QuestionData = {
  search_term: string
  transcripts: string
  expertise_level: string
  question_text: string
}

export const postAskQuestion = async (data: QuestionData, setBudget: (value: number | null) => void): Promise<void> => {
  const lsatToken = await getLSat()

  try {
    await api.post(`/ask_question`, JSON.stringify(data), { Authorization: lsatToken })

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.status === 402) {
      await payLsat(setBudget)

      await postAskQuestion(data, setBudget)

      return
    }

    throw error
  }
}
