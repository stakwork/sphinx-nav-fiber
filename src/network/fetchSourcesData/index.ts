import { FetchRadarResponse, RadarRequest, SubmitErrRes } from '~/types'
import { api } from '../api'

type TradarParams = {
  skip?: string
  limit?: string
  approved?: string
}

const defaultParams = {
    skip: '0',
    limit: '500',
    approved: 'True',
}

export const getRadarData = async (queryParams: TradarParams = defaultParams) => {
  const response = await api.get<FetchRadarResponse>(
    `/radar?${new URLSearchParams({ ...defaultParams, ...queryParams }).toString()}`,
  )

  return response
}

export const getAboutData = async () => {
  const response = await api.get('/about');

  console.log(response);
}

export const triggerRadarJob = async () => api.get<SubmitErrRes>(`/radar/trigger-job`)

export const putRadarData = async (id: string, data: RadarRequest) => {
  const response = await api.put(`/radar/${id}`, JSON.stringify(data))

  return response
}

export const approveRadarData = async (id: string) => {
  const response = await api.put(`/radar/${id}/approve`, JSON.stringify({approve: 'True'}))

  return response
}

export const deleteRadarData = async (id: string) => {
  const response = await api.delete(`/radar/${id}`)

  return response
}
