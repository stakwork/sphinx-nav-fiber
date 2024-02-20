/* eslint-disable */
import { Vector3 } from 'three'
// import { getNodeColorByType } from '~/components/Universe/Graph/constant'
import { isDevelopment, isE2E, NODE_RELATIVE_HIGHLIGHT_COLORS } from '~/constants'
import { api } from '~/network/api'
import { FetchNodeParams } from '~/stores/useDataStore'
import { GraphData, Guests, NodeExtended } from '~/types'
import { getGraphDataPositions } from './const'
import { FetchGDataResponse } from './types'

const defaultData: GraphData = {
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
  graphStyle: 'split' | 'force' | 'sphere' | 'earth',
  setBudget: (value: number | null) => void,
  params: FetchNodeParams,
) => {
  try {
    return getGraphData(graphStyle, setBudget, params)
  } catch (e) {
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
      const response = await api.get<FetchGDataResponse>(`/prediction/graph/search?word=BlackRock`)

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
  graphStyle: 'split' | 'force' | 'sphere' | 'earth',
  setBudget: (value: number | null) => void,
  params: FetchNodeParams,
) => {
  try {
    const dataInit = await fetchNodes(setBudget, params)

    if (dataInit) {
      return formatFetchNodes(dataInit, graphStyle)
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

export const generateLinksFromNodeData = (
  nodes: NodeExtended[],
  childLinksOnlyVisibleOnSelect: boolean,
  guestLinksOnlyVisibleOnSelect: boolean,
) => {
  const links: Edge[] = []

  // do links
  nodes.forEach((node) => {
    const { children, guests } = node

    children?.forEach((childRefId: string) => {
      if (node.ref_id) {
        const childNode = nodes.find((f) => f.ref_id === childRefId) || null

        if (!childNode) {
          return
        }

        const sourcePosition = new Vector3(node.x || 0, node.y || 0, node.z || 0)
        const targetPosition = new Vector3(childNode?.x || 0, childNode?.y || 0, childNode?.z || 0)

        links.push({
          onlyVisibleOnSelect: childLinksOnlyVisibleOnSelect,
          color: getSegmentColor(node.node_type, childNode?.node_type || ''),
          source: node.ref_id,
          sourceRef: node.ref_id,
          sourcePosition,
          target: childRefId,
          targetRef: childRefId,
          targetPosition,
        })
      }
    })

    guests?.forEach((guest: string | Guests | null) => {
      if (guest && typeof guest !== 'string' && node.ref_id) {
        const guestNode = nodes.find((f) => f.ref_id === guest?.ref_id) || null

        if (!guestNode) {
          return
        }

        const sourcePosition = new Vector3(node.x || 0, node.y || 0, node.z || 0)
        const targetPosition = new Vector3(guestNode?.x || 0, guestNode?.y || 0, guestNode?.z || 0)

        links.push({
          onlyVisibleOnSelect: guestLinksOnlyVisibleOnSelect,
          color: getSegmentColor(node.node_type, 'guest'),
          source: node.ref_id,
          sourceRef: node.ref_id,
          sourcePosition,
          target: guest?.ref_id,
          targetRef: guest?.ref_id,
          targetPosition,
        })
      }
    })
  })

  return links
}

export const formatFetchNodes = (dataInit: FetchGDataResponse, graphStyle: 'split' | 'force' | 'sphere' | 'earth') => {
  let { edges, nodes } = dataInit

  console.log(dataInit)

  const dataWithPositions = getGraphDataPositions(graphStyle, nodes, edges)
  const { links } = dataWithPositions

  nodes = dataWithPositions.nodes

  return { links, nodes }
}
