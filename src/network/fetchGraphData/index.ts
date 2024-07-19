import { isDevelopment, isE2E } from '~/constants'
import { api } from '~/network/api'
import { FetchDataResponse } from '~/types'
import { payLsat } from '~/utils'
import { getLSat } from '~/utils/getLSat'

// Main function to fetch graph data
export const fetchGraphData = async (
  setBudget: (value: number | null) => void,
  params: Record<string, string>,
  signal: AbortSignal,
  setAbortRequests: (status: boolean) => void,
): Promise<FetchDataResponse> => fetchNodes(setBudget, params, signal, setAbortRequests)

// Consolidated function to handle different fetch scenarios
const fetchNodes = async (
  setBudget: (value: number | null) => void,
  params: Record<string, string>,
  signal: AbortSignal,
  setAbortRequests: (status: boolean) => void,
): Promise<FetchDataResponse> => {
  const args = new URLSearchParams(params).toString()
  const url = `/prediction/graph/search?${args}`

  const fetchWithLSAT = async (): Promise<FetchDataResponse> => {
    const lsatToken = await getLSat()

    try {
      const response = await api.get<FetchDataResponse>(url, { Authorization: lsatToken }, signal)

      return response
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.status === 402) {
        await payLsat(setBudget)

        return fetchNodes(setBudget, params, signal, setAbortRequests)
      }

      throw error
    }
  }

  if (!params.word || (isDevelopment && !isE2E)) {
    return api.get<FetchDataResponse>(`${url}&free=true`, undefined, signal)
  }

  return fetchWithLSAT()
}

export const fetchNodeEdges = async (refId: string, skip: number): Promise<FetchDataResponse | null> => {
  try {
    const response = await api.get<FetchDataResponse>(
      `/prediction/graph/edges/${refId}?skip=${skip}&limit=5&sort_by="edge_count&include_properties=true&includeContent=true"`,
    )

    return response
  } catch (e) {
    console.error(e)

    return null
  }
}
