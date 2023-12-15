import {
  FetchEdgesResponse,
  FetchRadarResponse,
  FetchTopicResponse,
  NodeRequest,
  RadarRequest,
  SubmitErrRes,
} from '~/types'
import { createSigMsgQuery } from '~/utils'
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
  const query = await createSigMsgQuery()

  const response = await api.get<FetchTopicResponse>(
    `/topics?${new URLSearchParams({ ...defaultParams, ...queryParams }).toString()}${query}`,
  )

  return response
}

export const getAboutData = async () => {
  const response = await api.get<TAboutParams>('/about')

  return response
}

export const getStats = async () => {
  const response = await api.get<TAboutParams>('/stats')

  return response
}

export const getEdgeTypes = async () => {
  const query = await createSigMsgQuery()

  const response = await api.get<FetchEdgesResponse>(`curation/edge/type?${query}`)

  return response
}

export const postEdgeType = async (data: TAddEdgeParams) => {
  const query = await createSigMsgQuery()

  const response = await api.post(`/curation/edge?${query}`, JSON.stringify(data))

  return response
}

export const postAboutData = async (data: TAboutParams) => {
  const query = await createSigMsgQuery()

  const response = await api.post(`/about?${query}`, JSON.stringify(data))

  return response
}

export const postMergeTopics = async (data: TMergeTopicsParams) => {
  const query = await createSigMsgQuery()

  const response = await api.post(`/curation/merge?${query}`, JSON.stringify(data))

  return response
}

export const triggerRadarJob = async () => api.get<SubmitErrRes>(`/radar/trigger-job`)

export const putRadarData = async (id: string, data: RadarRequest) => {
  const query = await createSigMsgQuery()

  const response = await api.put(`/radar/${id}?${query}`, JSON.stringify(data))

  return response
}

export const putNodeData = async (data: NodeRequest) => {
  const query = await createSigMsgQuery()

  const response = await api.put(`/node?${query}`, JSON.stringify(data))

  return response
}

export const approveRadarData = async (id: string, pubkey: string) => {
  const query = await createSigMsgQuery()

  const response = await api.put(`/radar/${id}/approve?${query}`, JSON.stringify({ approve: 'True', pubkey }))

  return response
}

export const deleteRadarData = async (id: string) => {
  const query = await createSigMsgQuery()

  const response = await api.delete(`/radar/${id}?${query}`)

  return response
}
