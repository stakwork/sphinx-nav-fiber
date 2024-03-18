import { Vector3 } from 'three'
import { EdgeNew, GraphDataNew, NodeExtendedNew, NodeNew } from '../types'

// [
//   'Topic',
//   'Alias',
//   'Event',
//   'Product',
//   'Corporation',
//   'Place',
//   'Person',
//   'Organization',
//   'TLDR',
//   'Software',
//   'Project',
//   'Radar',
//   'Show',
//   'Episode',
// ]

interface Center {
  x: number
  y: number
  z: number
  radius: number
}

function generateTopicNodePosition(
  nodes: NodeNew[],
  maxEdgeCount: number,
  center: Center,
  yPosition: number,
): NodeExtendedNew[] {
  // Dictionary to store radius offsets for each unique edge count
  const radiusOffsetMap: { [key: number]: number } = {}

  // Generate positions for each node
  const extendedNodes = nodes.map((node) => {
    // Calculate radius based on edge count (inverse of edge count, so nodes with more edges are closer to center)
    const edgeCount = node.edge_count || 0
    const baseRadius = center.radius - (center.radius * edgeCount) / maxEdgeCount

    // Calculate radius offset for this edge count
    let radiusOffset

    if (edgeCount in radiusOffsetMap) {
      radiusOffset = radiusOffsetMap[edgeCount]
    } else {
      radiusOffset = Math.random() * 300 // Adjust this value as needed
      radiusOffsetMap[edgeCount] = radiusOffset
    }

    // Calculate final radius by adding the offset
    const radius = baseRadius + radiusOffset

    // Calculate angle for the current node (evenly spaced around the circle)
    const angle = Math.random() * Math.PI * 2 // Random angle for even distribution

    // Calculate x and z coordinates using trigonometric functions (cos and sin)

    return {
      ...node,
      x: center.x + radius * Math.cos(angle),
      y: yPosition,
      z: center.z + radius * Math.sin(angle),
    }
  })

  return extendedNodes
}

const universeScale = 1000

const step = 300

export const customCube = {
  scale: universeScale / 2,
  position: {
    x: universeScale / 2,
    y: 0,
    z: 0,
  },
}

export const generateSplitGraphPositions = (nodes: NodeNew[], edges: EdgeNew[]): GraphDataNew => {
  // sort parent then children

  type TNodesByType = {
    [nodeType: string]: NodeNew[]
  }

  const nodesByType: TNodesByType = nodes.reduce((acc: TNodesByType, curr) => {
    if (acc[curr.node_type]) {
      acc[curr.node_type].push(curr)
    } else {
      acc[curr.node_type] = [curr]
    }

    return acc
  }, {})

  const types = Object.keys(nodesByType)

  const center: Center = { x: 0, y: 0, z: 0, radius: 1000 }

  const updatedNodes: NodeExtendedNew[] = types.reduce((acc: NodeExtendedNew[], curr: string, index) => {
    const patternIndex = index % 2 === 0 ? index / 2 : -Math.ceil(index / 2)
    const maxWeight = Math.max(...nodesByType[curr].map((n) => n.edge_count || 0), 1)
    const currentTypeNodes = generateTopicNodePosition(nodesByType[curr], maxWeight, center, patternIndex * step)

    return [...acc, ...currentTypeNodes]
  }, [])

  const links = edges.map((i) => {
    const sourceNode = updatedNodes.find((f) => f.ref_id === i.source)
    const targetNode = updatedNodes.find((f) => f.ref_id === i.target)

    const sourcePosition = new Vector3(sourceNode?.x || 0, sourceNode?.y || 0, sourceNode?.z || 0)
    const targetPosition = new Vector3(targetNode?.x || 0, targetNode?.y || 0, targetNode?.z || 0)

    return {
      ...i,
      sourcePosition,
      targetPosition,
    }
  })

  return { nodes: updatedNodes, links, nodeTypes: types }
}
