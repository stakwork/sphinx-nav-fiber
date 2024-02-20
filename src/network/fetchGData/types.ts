type Attributes = {
  [key: string]: string
}

type Edge = {
  attributes: Attributes
  edge_type: string
  source: string
  target: string
}

type Node = {
  ref_id: string
  type: string[]
  attributes: Attributes
}

export type FetchGDataResponse = {
  edges: Edge[]
  nodes: Node[]
}

export type NodeExtended = Node & {
  x?: number
  y?: number
  z?: number
}

export type EdgeExtended = Edge & {
  x?: number
  y?: number
  z?: number
}
