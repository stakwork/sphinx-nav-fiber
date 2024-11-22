import { Link } from '~/types'

// const transcript = 'Entrepreneurship is being revolutionized by Blockchain and AI, as they open new frontiers for innovation and secure digital solutions.'

export const nodes = [
  { ref_id: '1', node_type: 'Person', name: 'Charlie' },
  { ref_id: '2', node_type: 'Person', name: 'Alice' },
  { ref_id: '3', node_type: 'Topic', name: 'Entrepreneurship' },
  { ref_id: '4', node_type: 'Topic', name: 'Blockchain' },
  { ref_id: '5', node_type: 'Topic', name: 'AI' },
  { ref_id: '6', node_type: 'Clip', name: 'Clip' },
]

export const edges: Link[] = [
  {
    ref_id: '1',
    edge_type: 'Mentioned',
    source: '3',
    target: '6',
    properties: { mentionedStart: 0.5, mentionedEnd: 2.0 },
  },
  {
    ref_id: '2',
    edge_type: 'Mentioned',
    source: '4',
    target: '6',
    properties: { mentionedStart: 4.6, mentionedEnd: 9.0 },
  },
  {
    ref_id: '3',
    edge_type: 'Mentioned',
    source: '5',
    target: '6',
    properties: { mentionedStart: 9.1, mentionedEnd: 10.0 },
  },
  {
    ref_id: '4',
    edge_type: 'Related',
    source: '1',
    target: '6',
  },
]

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
