import { Trending } from '~/types'
import { api } from '../api'

export type FetchTrendingResponse = Trending[]

export const getTrends = async () => {
  const endpoint = `/get_trends`

  const response = await api.get<FetchTrendingResponse>(endpoint)

  return response
}
