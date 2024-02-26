import { Vector3 } from 'three'

type Attributes = {
  [key: string]: string | boolean | number
}

export type EdgeNew = {
  attributes: Attributes
  edge_type: string
  source: string
  target: string
}

export type NodeNew = {
  ref_id: string
  node_type: string
  attributes: Attributes
  weight?: number
}

export type FetchGDataResponse = {
  edges: EdgeNew[]
  nodes: NodeNew[]
}

export type NodeExtendedNew = NodeNew & {
  x: number
  y: number
  z: number
}

export type EdgeExtendedNew = EdgeNew & {
  sourcePosition: Vector3
  targetPosition: Vector3
}
