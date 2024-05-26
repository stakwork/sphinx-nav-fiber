/* eslint-disable */
// import { getNodeColorByType } from '~/components/Universe/Graph/constant'
import { isDevelopment, isE2E, NODE_RELATIVE_HIGHLIGHT_COLORS } from '~/constants'
import { api } from '~/network/api'
import { FetchNodeParams } from '~/stores/useDataStore'
import { MOCKED_NODES_EDGES } from './mockedData'
import { FetchGDataResponse, GraphDataNew, NodeNew } from './types'
import { generateSplitGraphPositions } from './utils/prepareGraphDataCircle'

const defaultData: GraphDataNew = {
  links: [],
  nodes: [],
}

export const fetchGraphData = async (
  graphStyle: 'split' | 'force' | 'sphere' | 'earth' | 'v2',
  setBudget: (value: number | null) => void,
  params: FetchNodeParams,
): Promise<GraphDataNew | undefined> => {
  try {
    return getGraphData(graphStyle, setBudget, params)
  } catch (e) {
    console.log(defaultData)
    return defaultData
  }
}

const fetchNodes = async (
  setBudget: (value: number | null) => void,
  params: FetchNodeParams,
): Promise<FetchGDataResponse | null> => {
  const args = new URLSearchParams({
    ...(isDevelopment || isE2E ? { free: 'true' } : {}),
    ...params,
  }).toString()

  try {
    const response = await api.get<FetchGDataResponse>(
      `/prediction/graph/search?top_node_count=5&limit=5` + (params.word ? `&word=${params.word}` : ''),
    )

    return response
  } catch (e) {
    console.error(e)

    return null
  }

  return null
}

export const fetchNode = async (refId: string): Promise<NodeNew | null> => {
  try {
    const response = await api.get<NodeNew>(`/node/${refId}`)

    return response
  } catch (e) {
    console.error(e)

    return null
  }

  return null
}

export const fetchNodeEdges = async (refId: string, skip: number): Promise<FetchGDataResponse | null> => {
  try {
    const response = await api.get<FetchGDataResponse>(
      `/prediction/graph/edges/${refId}?skip=${skip}&limit=4&sort_by="edge_count"`,
    )

    return response
  } catch (e) {
    console.error(e)

    return null
  }

  return null
}

const getGraphData = async (
  graphStyle: 'split' | 'force' | 'sphere' | 'earth' | 'v2',
  setBudget: (value: number | null) => void,
  params: FetchNodeParams,
) => {
  try {
    const dataInit = await fetchNodes(setBudget, params)

    const graphData: FetchGDataResponse | null = false ? MOCKED_NODES_EDGES : dataInit

    if (graphData) {
      return formatFetchNodes(graphData, graphStyle)
    }
  } catch (e) {
    console.error(e)

    return defaultData
  }
}

const getSegmentColor = (aType: string, bType: string) => {
  if (aType === 'topic' || bType === 'topic') {
    return NODE_RELATIVE_HIGHLIGHT_COLORS.topics.segmentColor
  }

  if (aType === 'guest' || bType === 'guest') {
    return NODE_RELATIVE_HIGHLIGHT_COLORS.guests.segmentColor
  }

  return NODE_RELATIVE_HIGHLIGHT_COLORS.children.segmentColor
}

export const formatFetchNodes = (
  dataInit: FetchGDataResponse,
  graphStyle: 'split' | 'force' | 'sphere' | 'earth' | 'v2',
) => {
  let { edges, nodes } = dataInit

  console.log(graphStyle)

  // const dataWithPositions: GraphDataNew = generateSplitGraphPositions(nodes, edges)
  const dataWithPositions: GraphDataNew = generateSplitGraphPositions(nodes, edges)

  return dataWithPositions
}
