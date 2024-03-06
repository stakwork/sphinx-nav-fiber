/* eslint-disable */
import { Vector3 } from 'three'
// import { getNodeColorByType } from '~/components/Universe/Graph/constant'
import { isDevelopment, isE2E, NODE_RELATIVE_HIGHLIGHT_COLORS } from '~/constants'
import { api } from '~/network/api'
import { FetchNodeParams } from '~/stores/useDataStore'
import { MOCKED_NODES_EDGES } from './mockedData'
import { FetchGDataResponse, GraphDataNew } from './types'
import { generateForceGraphPositions } from './utils/prepareGraphDataForce'

const defaultData: GraphDataNew = {
  links: [],
  nodes: [],
}

type TopicMapItem = {
  children: string[]
  position: Vector3
}

type TopicMap = Record<string, TopicMapItem>

const shouldIncludeTopics = true
const maxScale = 26

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

  if (!params.word) {
    try {
      const response = await api.get<FetchGDataResponse>(`/prediction/graph/search?top_node_count=1&limit=5`)

      return response
    } catch (e) {
      console.error(e)

      return null
    }
  }

  return null
}

export const getAdminId = async (tribeId: string) => {
  const response = await fetch(`https://tribes.sphinx.chat/tribes/${tribeId}`)

  const jsonData = await response.json()

  return jsonData
}

const getGraphData = async (
  graphStyle: 'split' | 'force' | 'sphere' | 'earth' | 'v2',
  setBudget: (value: number | null) => void,
  params: FetchNodeParams,
) => {
  try {
    const dataInit = await fetchNodes(setBudget, params)

    const graphData: FetchGDataResponse | null = false ? MOCKED_NODES_EDGES : dataInit

    console.log(graphData)

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
  const dataWithPositions: GraphDataNew = generateForceGraphPositions(nodes, edges)

  return dataWithPositions
}
