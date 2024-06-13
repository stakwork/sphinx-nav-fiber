import { isDevelopment, isE2E } from '~/constants'
import { api } from '~/network/api'
import { FetchDataResponse, FilterParams } from '~/types'
import { getLSat } from '~/utils/getLSat'
import { payLsat } from '~/utils/payLsat'

// Main function to fetch graph data
export const fetchGraphData = async (
  setBudget: (value: number | null) => void,
  params: FilterParams,
  signal: AbortSignal,
  setAbortRequests: (status: boolean) => void,
): Promise<FetchDataResponse> => fetchNodes(setBudget, params, signal, setAbortRequests)

// Consolidated function to handle different fetch scenarios
const fetchNodes = async (
  setBudget: (value: number | null) => void,
  params: FilterParams,
  signal: AbortSignal,
  setAbortRequests: (status: boolean) => void,
): Promise<FetchDataResponse> => {
  const args = new URLSearchParams(params).toString()
  const url = `/prediction/graph/search?${args}`

  const fetchWithLSAT = async (): Promise<FetchDataResponse> => {
    const lsatToken = await getLSat()

    const response = await api.get<FetchDataResponse>(url, { Authorization: lsatToken }, signal)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((response as any).status === 402) {
      await payLsat(setBudget)

      return fetchNodes(setBudget, params, signal, setAbortRequests)
    }

    return response
  }

  if (!params.word || (isDevelopment && !isE2E)) {
    return api.get<FetchDataResponse>(url, undefined, signal)
  }

  return fetchWithLSAT()
}

export const fetchNodeEdges = async (refId: string, skip: number): Promise<FetchDataResponse | null> => {
  try {
    const response = await api.get<FetchDataResponse>(
      `/prediction/graph/edges/${refId}?skip=${skip}&limit=5&sort_by="edge_count"`,
    )

    return response
  } catch (e) {
    console.error(e)

    return null
  }
}
