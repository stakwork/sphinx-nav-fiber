import {
  FetchEdgeTypesResponse,
  FetchEdgesResponse,
  FetchRadarResponse,
  FetchTopicResponse,
  NodeRequest,
  RadarRequest,
  SubmitErrRes,
} from '~/types'
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

export type TStatParams = {
  num_audio: number
  num_contributors: number
  num_daily: number
  num_episodes: number
  num_nodes: number
  num_people: number
  num_tweet: number
  num_twitter_space: number
  num_video: number
}

export type TPriceParams = {
  success: string
  message: string
  data: {
    price: number
    endpoint: string
    method: string
  }
}

export type TMergeTopicsParams = {
  from: string
  to: string
}

export type TAddEdgeParams = {
  from: string
  to: string
  relationship: string
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

export const getStats = async () => {
  const response = await api.get<TStatParams>('/stats')

  return response
}

export const getEdgeTypes = async () => {
  const response = await api.get<FetchEdgeTypesResponse>(`/curation/edge/type`)

  return response
}

export const getEdges = async (term: string) => {
  const response = await api.get<FetchEdgesResponse>(`/curation/search/${term}`)

  return response
}

export const postEdgeType = async (data: TAddEdgeParams) => {
  const response = await api.post(`/curation/edge`, JSON.stringify(data))

  return response
}

export const postAboutData = async (data: TAboutParams) => {
  const response = await api.post(`/about`, JSON.stringify(data))

  return response
}

export const postMergeTopics = async (data: TMergeTopicsParams) => {
  const response = await api.post(`/curation/merge`, JSON.stringify(data))

  return response
}

export const triggerRadarJob = async () => api.get<SubmitErrRes>(`/radar/trigger-job`)

export const putRadarData = async (id: string, data: RadarRequest) => {
  const response = await api.put(`/radar/${id}`, JSON.stringify(data))

  return response
}

export const putNodeData = async (ref_id: string, data: NodeRequest) => {
  const response = await api.put(`/node?ref_id=${ref_id}`, JSON.stringify(data))

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

export const deleteNode = async (id: string) => {
  const response = await api.delete(`/node/?ref_id=${id}`)

  return response
}

export const getPriceData = async (endpoint: string) => {
  const response = await api.get<TPriceParams>(`/getprice?endpoint=${endpoint}&method=post`)

  return response
}
