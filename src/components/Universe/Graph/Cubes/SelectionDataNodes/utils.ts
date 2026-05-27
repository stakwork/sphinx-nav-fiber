import { NodeExtended } from '~/types'

const MIN_SELECTION_RADIUS = 240
const MAX_SELECTION_RADIUS = 480
const NODE_SPACING = 110

export const getSelectionNodeRadius = (nodeCount: number) => {
  const orbitNodeCount = Math.max(nodeCount - 1, 0)

  if (orbitNodeCount <= 1) {
    return MIN_SELECTION_RADIUS
  }

  const radiusForSpacing = Math.ceil((orbitNodeCount * NODE_SPACING) / (2 * Math.PI))

  return Math.min(MAX_SELECTION_RADIUS, Math.max(MIN_SELECTION_RADIUS, radiusForSpacing))
}

export const layoutSelectionNodes = (nodes: NodeExtended[], selectedNodeId?: string | null) => {
  if (!nodes.length) {
    return []
  }

  const radius = getSelectionNodeRadius(nodes.length)
  const orbitNodes = nodes.filter((node) => node.ref_id !== selectedNodeId)
  const angleStep = orbitNodes.length > 0 ? (Math.PI * 2) / orbitNodes.length : 0

  let orbitIndex = 0

  return nodes.map((node) => {
    if (node.ref_id === selectedNodeId) {
      return { ...node, x: 0, y: 0, z: 0 }
    }

    const theta = angleStep * orbitIndex
    orbitIndex += 1

    return {
      ...node,
      x: Math.cos(theta) * radius,
      y: Math.sin(theta) * radius,
      z: 0,
    }
  })
}
