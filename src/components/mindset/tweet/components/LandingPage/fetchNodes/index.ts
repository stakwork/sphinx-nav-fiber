import { api } from '~/network/api'
import { FetchDataResponse } from '~/types'

export const getNodes = async (): Promise<FetchDataResponse> => {
  const url = `/graph/search/attributes?search=completed&attribute=status&exact_match=True&node_type=['Tweet']`

  const response = await api.get<FetchDataResponse>(url)

  return response
}

export const getTopics = async (): Promise<FetchDataResponse> => {
  const url = `/graph/search?node_type=['Topic']&limit=100`

  const response = await api.get<FetchDataResponse>(url)

  return response
}
