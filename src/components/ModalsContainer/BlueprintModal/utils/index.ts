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
  const nodesNormalized = nodes.reduce<{ [key: string]: SchemaWithChildren }>((acc, curr) => {
    if (curr.ref_id) {
      acc[curr.ref_id] = curr
    }

    return acc
  }, {})

  const root = nodes.find((i) => i.type === 'Thing')
  const nodesWithPositions: SchemaExtended[] = []
  const maxChildren = Math.max(...nodes.filter((i) => i.type !== 'Thing').map((i) => i.children.length))
  const stepY = 2

  const loopThroughNodes = (nodeId: string, childIndex: number, childrenLength: number, parentX = 0, depth = 0) => {
    const node = nodes.find((n) => n.ref_id === nodeId)

    const stepX =
      childrenLength && childrenLength <= maxChildren ? Math.floor(maxChildren / childrenLength) : maxChildren

    const position = (childIndex % 2 === 0 ? childIndex : -(childIndex + 1)) / 2
    const deltaX = childrenLength && childrenLength % 2 === 0 ? stepX / 2 : 0

    if (node) {
      const x = parentX + deltaX + position * stepX
      const y = -depth * stepY + 3
      // const siblingsLength = node.children.reduce((acc, curr) => acc + curr.children.length, 0)

      nodesWithPositions.push({ ...node, x, y, z: 0 })

      const sortedByChildrenLength = [...node.children].sort(
        (a, b) => nodesNormalized[b].children.length - nodesNormalized[a].children.length,
      )

      sortedByChildrenLength.forEach((childId, index, arr) => {
        loopThroughNodes(childId, index, arr.length, x, depth + 1)
      })
    }
  }

  if (root?.ref_id) {
    loopThroughNodes(root?.ref_id, 0, 0)
  }

  return nodesWithPositions
}
