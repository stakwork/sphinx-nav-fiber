import { isDevelopment, isE2E } from '~/constants'
import { api } from '~/network/api'
import { FetchDataResponse } from '~/types'
import { payLsat, updateBudget } from '~/utils'
import { getLSat } from '~/utils/getLSat'

// Main function to fetch graph data
export const fetchGraphData = async (
  setBudget: (value: number | null) => void,
  params: Record<string, string>,
  isLatest = false,
  signal: AbortSignal,
  setAbortRequests: (status: boolean) => void,
): Promise<FetchDataResponse> => fetchNodes(setBudget, params, isLatest, signal, setAbortRequests)

// Consolidated function to handle different fetch scenarios
const fetchNodes = async (
  setBudget: (value: number | null) => void,
  params: Record<string, string>,
  isLatest = false,
  signal: AbortSignal,
  setAbortRequests: (status: boolean) => void,
): Promise<FetchDataResponse> => {
  const args = new URLSearchParams(params).toString()
  const url = isLatest ? `/graph/search/latest?` : `/graph/search?${args}`

  const fetchWithLSAT = async (): Promise<FetchDataResponse> => {
    const lsatToken = await getLSat()

    try {
      const response = await api.get<FetchDataResponse>(url, { Authorization: lsatToken }, signal)

      updateBudget(setBudget)

      return response
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.status === 402) {
        await payLsat(setBudget)

        return fetchNodes(setBudget, params, isLatest, signal, setAbortRequests)
      }

      throw error
    }
  }

  if (!params.word || (isDevelopment && !isE2E)) {
    return api.get<FetchDataResponse>(`${url}&free=true`, undefined, signal)
  }

  return fetchWithLSAT()
}

interface FetchNodeEdgesParams {
  sortBy?: string
  includeProperties?: boolean
  includeContent?: boolean
  depth?: number
  useSubGraph?: boolean
  nodeType?: string[] // Array of strings for node types
}

export const fetchNodeEdges = async (
  refId: string,
  skip: number,
  limit = 5,
  params: FetchNodeEdgesParams = {}, // Optional params
): Promise<FetchDataResponse | null> => {
  try {
    // Destructure and provide defaults
    const {
      sortBy = 'edge_count',
      includeProperties = true,
      includeContent = true,
      depth = 1,
      useSubGraph = true,
      nodeType = [], // Default to an empty array
    } = params

    // Construct query string
    const query = new URLSearchParams({
      skip: skip.toString(),
      limit: limit.toString(),
      sort_by: sortBy,
      include_properties: includeProperties.toString(),
      includeContent: includeContent.toString(),
      depth: depth.toString(),
      top_node_count: '5',
      use_sub_graph: useSubGraph.toString(),
      ...(nodeType.length > 0 && { node_type: JSON.stringify(nodeType) }), // Add node_type if not empty
    }).toString()

    const response = await api.get<FetchDataResponse>(`/prediction/graph/edges/${refId}?${query}`)

    return response
  } catch (e) {
    console.error(e)

    return null
  }
}
