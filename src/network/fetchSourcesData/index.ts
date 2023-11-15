import { FetchRadarResponse, FetchTopicResponse, NodeRequest, RadarRequest, SubmitErrRes } from '~/types'
import { api } from '../api'

type TradarParams = {
  skip?: string
  limit?: string
  approved?: string
  sort_by?: string
}

export type TAboutParams = {
  /* eslint-disable camelcase */
  title?: string
  description?: string
  mission_statement?: string
  search_term?: string
}

export type TMergeTopicsParams = {
  /* eslint-disable camelcase */
  from: string
  to: string
}

export type TtopicsParams = {
  muted?: string
  skip?: string
  limit?: string
  sort_by?: string
  search?: string
}

const defaultParams = {
  skip: '0',
  limit: '500',
}

export const getRadarData = async (queryParams: TradarParams = defaultParams) => {
  const response = await api.get<FetchRadarResponse>(
    `/radar?${new URLSearchParams({ ...defaultParams, ...queryParams }).toString()}`,
  )

  return response
}

export const getTopicsData = async (queryParams: TtopicsParams = defaultParams) => {
  const response = await api.get<FetchTopicResponse>(
    `/topics?${new URLSearchParams({ ...defaultParams, ...queryParams }).toString()}`,
  )

  return response
}

export const getAboutData = async () => {
  const response = await api.get<TAboutParams>('/about')

  return response
}

export const postAboutData = async (data: TAboutParams) => {
  const response = await api.post('/about', JSON.stringify(data))

  return response
}

export const postMergeTopics = async (data: TMergeTopicsParams) => {
  const response = await api.post('/curation/merge', JSON.stringify(data))

  return response
}

export const triggerRadarJob = async () => api.get<SubmitErrRes>(`/radar/trigger-job`)

export const putRadarData = async (id: string, data: RadarRequest) => {
  const response = await api.put(`/radar/${id}`, JSON.stringify(data))

  return response
}

export const putNodeData = async (data: NodeRequest) => {
  const response = await api.put(`/node`, JSON.stringify(data))

  return response
}

export const approveRadarData = async (id: string, pubkey: string) => {
  const response = await api.put(`/radar/${id}/approve`, JSON.stringify({ approve: 'True', pubkey }))

  return response
}

export const deleteRadarData = async (id: string) => {
  const response = await api.delete(`/radar/${id}`)

  return response
}
