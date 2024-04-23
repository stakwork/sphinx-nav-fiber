import { calculateNodePositions } from '..'
import { SchemaExtended, SchemaWithChildren } from '../../types'

describe('calculateNodePositions', () => {
  const rootNode: SchemaWithChildren = {
    type: 'Thing',
    ref_id: 'root',
    children: ['child1', 'child2'],
  }

  const child1: SchemaWithChildren = {
    type: 'Thing',
    ref_id: 'child1',
    children: [],
  }

  const child2: SchemaWithChildren = {
    type: 'Thing',
    ref_id: 'child2',
    children: [],
  }

  const nodes: SchemaWithChildren[] = [rootNode, child1, child2]

  it('calculates node positions correctly', () => {
    const result: SchemaExtended[] = calculateNodePositions(nodes)

    // Check if result array has the correct length
    expect(result).toHaveLength(nodes.length)

    // Check if all nodes have x, y, and z positions
    result.forEach((node) => {
      expect(node.x).toBeDefined()
      expect(node.y).toBeDefined()
      expect(node.z).toBeDefined()
    })

    // Check if root node is positioned at (0, 0, 0)
    const rootNodeWithPosition = result.find((node) => node.ref_id === 'root')

    expect(rootNodeWithPosition?.x).toBe(0)
    expect(rootNodeWithPosition?.y).toBe(0)
    expect(rootNodeWithPosition?.z).toBe(0)

    // Check if child nodes are positioned correctly relative to the root node
    const child1WithPosition = result.find((node) => node.ref_id === 'child1')
    const child2WithPosition = result.find((node) => node.ref_id === 'child2')

    // Since radius is 2, child nodes should be positioned at (2, 0, 0) and (-2, 0, 0)
    expect(child1WithPosition?.x).toBe(2)
    expect(child1WithPosition?.y).toBeCloseTo(0)
    expect(child1WithPosition?.z).toBe(0)

    expect(child2WithPosition?.x).toBe(-2)
    expect(child2WithPosition?.y).toBeCloseTo(0)
    expect(child2WithPosition?.z).toBe(0)
  })

  it('returns empty array if root node is not found', () => {
    const nodesWithoutRoot: SchemaWithChildren[] = [{ type: 'NotThing', ref_id: 'child1', children: [] }]
    const result: SchemaExtended[] = calculateNodePositions(nodesWithoutRoot)

    expect(result).toHaveLength(0)
  })

  it('returns empty array if root node is not found', () => {
    const nodesWithoutRoot: SchemaWithChildren[] = [{ type: 'NotThing', children: [] }]
    const result: SchemaExtended[] = calculateNodePositions(nodesWithoutRoot)

    expect(result).toHaveLength(0)
  })
})
