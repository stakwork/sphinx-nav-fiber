import { SchemaExtended, SchemaWithChildren } from '../types'

export const calculateNodePositionsRadial = (nodes: SchemaWithChildren[]): SchemaExtended[] => {
  const root = nodes.find((i) => i.type === 'Thing')
  const nodesWithPositions: SchemaExtended[] = []
  const radius = 2

  const loopThroughNodes = (
    nodeId: string,
    siblingsLength: number,
    currentIndex: number,
    parentAngle = 0,
    depth = 0,
  ) => {
    const node = nodes.find((n) => n.ref_id === nodeId)

    if (node) {
      const angle = siblingsLength ? (2 * Math.PI) / siblingsLength : 0
      const angleStep = currentIndex * angle + parentAngle
      const x = depth * radius * Math.cos(angleStep)
      const y = depth * radius * Math.sin(angleStep)

      nodesWithPositions.push({ ...node, x, y, z: 0 })

      node.children.forEach((child, index) => {
        loopThroughNodes(child, node.children.length, index, angleStep, depth + 1)
      })
    }
  }

  if (root?.ref_id) {
    loopThroughNodes(root?.ref_id, 0, 0)
  }

  return nodesWithPositions
}

export const calculateNodePositionsTree = (nodes: SchemaWithChildren[]): SchemaExtended[] => {
  // Normalize nodes
  // const nodesNormalized = nodes.reduce<{ [key: string]: SchemaWithChildren }>((acc, curr) => {
  //   if (curr.ref_id) {
  //     acc[curr.ref_id] = curr
  //   }

  //   return acc
  // }, {})

  // Find the root node
  const root = nodes.find((i) => i.type === 'Thing')

  // Array to store nodes with positions
  const nodesWithPositions: SchemaExtended[] = []

  // Constants for layout
  const horizontalSpacing = 2 // Adjust this value based on your layout preferences
  const verticalSpacing = 2 // Adjust this value based on your layout preferences

  // Function to perform depth-first traversal and calculate positions
  const traverse = (nodeId: string, depth: number, xOffset: number): number => {
    const node = nodes.find((n) => n.ref_id === nodeId)

    if (node) {
      // Calculate X and Y positions
      const x = xOffset
      const y = -depth * verticalSpacing + 5

      // Push node with position to result array
      nodesWithPositions.push({ ...node, x, y, z: 0 })

      // Calculate total height of subtree rooted at this node
      let subTreeWidth = 0

      node.children.forEach((childId) => {
        subTreeWidth += traverse(childId, depth + 1, xOffset + subTreeWidth)
      })

      // Return height of this subtree
      return Math.max(horizontalSpacing, subTreeWidth)
    }

    return 0
  }

  // If root exists, start traversal
  if (root?.ref_id) {
    traverse(root?.ref_id, 0, 0)
  }

  return nodesWithPositions
}
