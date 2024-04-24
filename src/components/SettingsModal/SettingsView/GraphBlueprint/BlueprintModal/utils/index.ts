import { SchemaExtended, SchemaWithChildren } from '../types'

export const calculateNodePositions = (nodes: SchemaWithChildren[]): SchemaExtended[] => {
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
