/* eslint-disable @typescript-eslint/no-explicit-any */
import { FetchGDataResponse } from './types'

const nodesMock = [
  ...generateRandomNodes('Topic', 20),
  {
    name: 'bitcoin',
    edge_count: 0,
    node_type: 'Topic',
    ref_id: 'b30aeba5-54a8-4227-8f05-79798a721996',
  },
  {
    name: 'bitcoin',
    edge_count: 0,
    node_type: 'Topic',
    ref_id: 'fc3a46e2-28ec-4a5f-9836-8308ef515005',
  },
  ...generateRandomNodes('Organization', 20),
  ...generateRandomNodes('People', 2),
]

const edgesMock = [
  ...generateRandomEdges(
    nodesMock.filter((i) => i.node_type === 'Topic'),
    nodesMock.filter((i) => i.node_type === 'Organization'),
  ),
  ...generateRandomEdges(
    nodesMock.filter((i) => i.node_type === 'Topic'),
    nodesMock.filter((i) => i.node_type === 'People'),
  ),
]

export const MOCKED_NODES_EDGES: FetchGDataResponse = {
  edges: edgesMock,
  nodes: nodesMock,
}

// Define a function to generate random nodes
function generateRandomNodes(type: string, length: number) {
  const nodes = []

  for (let i = 0; i < length; i += 1) {
    const randomNodeType = type

    const newNode = {
      edge_count: Math.floor(Math.random() * 10), // Example: random weight (0-9)
      node_type: randomNodeType,
      name: `${randomNodeType} name ${i}`,
      ref_id: `ref_id_${randomNodeType}_${i}`,
    }

    nodes.push(newNode)
  }

  return nodes
}

function generateRandomEdges(nodesA: string | any[], nodesB: any[]) {
  const edges = []

  for (let i = 0; i < nodesB.length; i += 1) {
    const newEdge = {
      attributes: {
        decision_type: 'ML',
      },
      edge_type: 'RELATED_TO',
      source: nodesA[i].ref_id,
      target: nodesB[i].ref_id,
    }

    edges.push(newEdge)
  }

  return edges
}
