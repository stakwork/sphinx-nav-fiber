import { isE2E } from '~/constants'
import { api } from '~/network/api'
import { FetchSentimentResponse } from '~/types'
import { getLSat, payLsat } from '~/utils'

export const getSentimentData = async (
  setBudget: (value: number | null) => void,
  args?: {
    topic: string
    cutoff_date: string
  },
): Promise<FetchSentimentResponse> => {
  const search = args && new URLSearchParams(args)

  const endpoint = search ? `/sentiments?${search.toString()}` : '/sentiments'

  // disable payment for tests (data is mocked)
  if (isE2E) {
    const response = await api.get<FetchSentimentResponse>(endpoint)

    return response
  }

  const lsatToken = await getLSat()

  try {
    const response = await api.get<FetchSentimentResponse>(endpoint, {
      Authorization: lsatToken,
    })

    return response

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.status === 402) {
      await payLsat(setBudget)

      return getSentimentData(setBudget, args)
    }

    throw error
  }
}
