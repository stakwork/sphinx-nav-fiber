import { api } from '~/network/api'
import { FetchDataResponse } from '~/types'

export const getNodes = async (): Promise<FetchDataResponse> => {
  const url = `/graph/search?node_type=['Episode']&include_properties=true&includeContent=true&sort_by=date&top_node_count=30&depth=0`

  const response = await api.get<FetchDataResponse>(url)

  return response
}
