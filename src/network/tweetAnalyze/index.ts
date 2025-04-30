import { FetchDataResponse } from '~/types'
import { api } from '../api'

export const getEngagement = async (id: string) => {
  const response = await api.get<FetchDataResponse>(`/mindset/tweet/engagement/${id}`)

  return response
}

export const getFollowers = async (id: string) => {
  const response = await api.get<FetchDataResponse>(`/mindset/tweet/followers/${id}`)

  return response
}
