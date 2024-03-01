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
  name?: string
  node_type: string
  edge_count?: number
  attributes?: Attributes
  date_added_to_graph?: number
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

export type NormalizedNodes = {
  [refId: string]: NodeExtendedNew
}

export type GraphDataNew = {
  links: EdgeExtendedNew[]
  nodes: NodeExtendedNew[]
}
