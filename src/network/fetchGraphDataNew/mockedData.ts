/* eslint-disable @typescript-eslint/no-explicit-any */
import { FetchGDataResponse } from './types'

const nodesMock = [
  ...generateRandomNodes('Topic', 20),
  {
    attributes: {
      Data_Bank: 'Ethereum,Ticker Ethereum',
      date_added_to_graph: '1708751258.8079817',
      muted_topic: true,
      namespace: 'default',
      pubkey: '',
      ref_id: 'b30aeba5-54a8-4227-8f05-79798a721996',
      spelling_verification: false,
      topic: 'Ethereum,Ticker Ethereum',
    },
    weight: 0,
    node_type: 'Topic',
    ref_id: 'b30aeba5-54a8-4227-8f05-79798a721996',
  },
  {
    attributes: {
      Data_Bank: 'Litecoin,Ticker Litecoin',
      date_added_to_graph: '1708751258.8079817',
      muted_topic: false,
      namespace: 'default',
      pubkey: '',
      ref_id: 'fc3a46e2-28ec-4a5f-9836-8308ef515005',
      spelling_verification: true,
      topic: 'Litecoin,Ticker Litecoin',
    },
    weight: 0,
    node_type: 'Topic',
    ref_id: 'fc3a46e2-28ec-4a5f-9836-8308ef515005',
  },
  ...generateRandomNodes('Organization', 20),
  ...generateRandomNodes('People', 20),
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
      attributes: {
        // Generate random attributes based on type
        Data_Bank: `Data_${randomNodeType}_${i}`,
        date_added_to_graph: Date.now(), // Example: current timestamp
        muted_topic: Math.random() < 0.5, // Example: random true/false
        namespace: 'default',
        pubkey: '',
        ref_id: `ref_id_${randomNodeType}_${i}`,
        spelling_verification: Math.random() < 0.5, // Example: random true/false
        topic: `Topic_${randomNodeType}_${i}`,
      },
      weight: Math.floor(Math.random() * 10), // Example: random weight (0-9)
      node_type: randomNodeType,
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
