import { Link } from '~/types'

// const transcript = 'Entrepreneurship is being revolutionized by Blockchain and AI, as they open new frontiers for innovation and secure digital solutions.'

export const nodes = [
  { edge_count: 0, x: 0, y: 0, z: 0, label: 'label', ref_id: '1', node_type: 'Clip', name: 'Podcast' },
  { edge_count: 0, x: 0, y: 0, z: 0, label: 'label', ref_id: '2', node_type: 'Topic', name: 'Bitcoin' },
  { edge_count: 0, x: 0, y: 0, z: 0, label: 'label', ref_id: '3', node_type: 'Topic', name: 'Blockchain' },
  { edge_count: 0, x: 0, y: 0, z: 0, label: 'label', ref_id: '4', node_type: 'Topic', name: 'Hard Money' },
  { edge_count: 0, x: 0, y: 0, z: 0, label: 'label', ref_id: '5', node_type: 'Topic', name: 'Digital Currency' },
  { edge_count: 0, x: 0, y: 0, z: 0, label: 'label', ref_id: '6', node_type: 'Topic', name: 'Government Control' },
  { edge_count: 0, x: 0, y: 0, z: 0, label: 'label', ref_id: '7', node_type: 'Topic', name: 'Inflation' },
  { edge_count: 0, x: 0, y: 0, z: 0, label: 'label', ref_id: '8', node_type: 'Topic', name: 'Public Network' },
  { edge_count: 0, x: 0, y: 0, z: 0, label: 'label', ref_id: '9', node_type: 'Topic', name: 'Energy Consumption' },
  { edge_count: 0, x: 0, y: 0, z: 0, label: 'label', ref_id: '10', node_type: 'Topic', name: 'Immutability' },
  { edge_count: 0, x: 0, y: 0, z: 0, label: 'label', ref_id: '11', node_type: 'Topic', name: 'Scarcity' },
  { edge_count: 0, x: 0, y: 0, z: 0, label: 'label', ref_id: '12', node_type: 'Topic', name: 'Decentralization' },
  { edge_count: 0, x: 0, y: 0, z: 0, label: 'label', ref_id: '13', node_type: 'Topic', name: 'Investment Risks' },
  { edge_count: 0, x: 0, y: 0, z: 0, label: 'label', ref_id: '14', node_type: 'Topic', name: 'Adoption' },
  { edge_count: 0, x: 0, y: 0, z: 0, label: 'label', ref_id: '15', node_type: 'Person', name: 'Satoshi Nakamoto' },
]

export const edges: Link[] = [
  // Bitcoin as a digital currency
  {
    ref_id: '1',
    edge_type: 'Mentioned',
    target: '1', // Clip
    source: '2', // Bitcoin
    properties: { mentionedStart: 7.68, mentionedEnd: 19.619 },
  },

  // Bitcoin's hard money nature
  {
    ref_id: '2',
    edge_type: 'Mentioned',
    target: '1', // Clip
    source: '4', // Hard Money
    properties: { mentionedStart: 28.019, mentionedEnd: 38.04 },
  },

  // Blockchain as a public ledger
  {
    ref_id: '3',
    edge_type: 'Mentioned',
    target: '1', // Clip
    source: '3', // Blockchain
    properties: { mentionedStart: 50.82, mentionedEnd: 56.52 },
  },

  // Scarcity of Bitcoin
  {
    ref_id: '4',
    edge_type: 'Mentioned',
    target: '1', // Clip
    source: '5', // Scarcity
    properties: { mentionedStart: 19.439, mentionedEnd: 25.619 },
  },

  // Government control contrasted with Bitcoin
  {
    ref_id: '5',
    edge_type: 'Mentioned',
    target: '1', // Clip
    source: '6', // Government Control
    properties: { mentionedStart: 34.619, mentionedEnd: 43.02 },
  },

  // Energy consumption in Bitcoin mining
  {
    ref_id: '6',
    edge_type: 'Mentioned',
    target: '1', // Clip
    source: '9', // Energy Consumption
    properties: { mentionedStart: 31.8, mentionedEnd: 38.04 },
  },

  // Immutability ensured by the blockchain
  {
    ref_id: '7',
    edge_type: 'Mentioned',
    target: '1', // Clip
    source: '10', // Immutability
    properties: { mentionedStart: 56.52, mentionedEnd: 60.48 },
  },

  // Decentralization of Bitcoin's public network
  {
    ref_id: '8',
    edge_type: 'Mentioned',
    target: '1', // Clip
    source: '12', // Decentralization
    properties: { mentionedStart: 90.72, mentionedEnd: 97.52 },
  },

  // Bitcoin investment risks
  {
    ref_id: '9',
    edge_type: 'Mentioned',
    target: '1', // Clip
    source: '13', // Investment Risks
    properties: { mentionedStart: 126.44, mentionedEnd: 133.48 },
  },

  // Bitcoin adoption rates and potential
  {
    ref_id: '10',
    edge_type: 'Mentioned',
    target: '1', // Clip
    source: '14', // Adoption
    properties: { mentionedStart: 122.44, mentionedEnd: 130.48 },
  },
]

export const edgesMention: Array<{ source: string; mentionedStart: number }> = edges
  .filter((e) => e.properties?.mentionedStart)
  .map((edge) => ({ source: edge.source, mentionedStart: edge.properties?.mentionedStart as number }))

export const nodesWithTimestamp = nodes
  .filter((node) => edgesMention.some((ed) => ed.source === node.ref_id))
  .map((node) => {
    const edge = edgesMention.find((ed) => node.ref_id === ed.source)

    if (edge) {
      return { ...node, mentionedStart: edge.mentionedStart }
    }

    return null
  })

export const data = {
  nodes,
  edges,
}

const timestamps = edges.flatMap((e) => {
  const { mentionedStart, mentionedEnd } = e.properties ?? {}

  return mentionedStart !== undefined && mentionedEnd !== undefined ? [mentionedStart, mentionedEnd] : [0, 0]
})

export const minTimestamp = Math.min(...(timestamps as number[]))

export const maxTimestamp = Math.max(...(timestamps as number[]))

export const normalizeTimestamp = (value: number, min: number, max: number, rangeMin: number, rangeMax: number) =>
  rangeMin + ((value - min) / (max - min)) * (rangeMax - rangeMin)
