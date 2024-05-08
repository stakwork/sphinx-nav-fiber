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

const countDescendants = (item: SchemaWithChildren, allData: SchemaWithChildren[]): number => {
  const children = allData.filter((child) => child.parent === item.type)

  return children.reduce((count, child) => count + 1 + countDescendants(child, allData), 0)
}

type SchemaWithDescendants = SchemaWithChildren & { descendants: number }

export const calculateNodePositionsTree = (nodes: SchemaWithChildren[]): SchemaExtended[] => {
  const withDescendants: SchemaWithDescendants[] = nodes.map((item) => ({
    ...item,
    descendants: countDescendants(item, nodes),
  }))

  const root = withDescendants.find((i) => i.type === 'Thing')
  const nodesWithPositions: SchemaExtended[] = []
  const stepX = 2
  const stepY = 2

  const loopThroughNodes = (nodeId: string, childIndex: number, childrenLength: number, parentX = 0, depth = 0) => {
    const node = nodes.find((n) => n.ref_id === nodeId)

    if (node) {
      const x = parentX + childIndex * stepX - (childrenLength * stepX) / 2 + stepX / 2
      const y = -depth * stepY + 3

      nodesWithPositions.push({ ...node, x, y, z: 0 })

      node.children.forEach((child, index, arr) => {
        loopThroughNodes(child, index, arr.length, x, depth + 1)
      })
    }
  }

  if (root?.ref_id) {
    loopThroughNodes(root?.ref_id, 0, 0)
  }

  return nodesWithPositions
}
