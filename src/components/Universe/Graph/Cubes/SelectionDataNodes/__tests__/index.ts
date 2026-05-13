import { NodeExtended } from '~/types'
import { getSelectionNodeRadius, layoutSelectionNodes } from '../utils'

const makeNode = (refId: string): NodeExtended =>
  ({
    ref_id: refId,
    node_type: 'Topic',
    properties: {},
    x: 0,
    y: 0,
    z: 0,
  }) as NodeExtended

describe('SelectionDataNodes utils', () => {
  it('keeps a readable minimum radius for small graphs', () => {
    expect(getSelectionNodeRadius(2)).toBe(240)
    expect(getSelectionNodeRadius(4)).toBe(240)
  })

  it('expands the radius as more sibling nodes are shown', () => {
    expect(getSelectionNodeRadius(12)).toBeGreaterThan(160)
  })

  it('places the selected node at the center and distributes siblings around it', () => {
    const nodes = [makeNode('selected'), makeNode('a'), makeNode('b'), makeNode('c')]
    const laidOutNodes = layoutSelectionNodes(nodes, 'selected')
    const selectedNode = laidOutNodes.find((node) => node.ref_id === 'selected')
    const siblingNodes = laidOutNodes.filter((node) => node.ref_id !== 'selected')

    expect(selectedNode).toMatchObject({ x: 0, y: 0, z: 0 })

    siblingNodes.forEach((node) => {
      const distanceFromCenter = Math.hypot(node.x || 0, node.y || 0)

      expect(distanceFromCenter).toBeCloseTo(240, 5)
    })

    expect(new Set(siblingNodes.map((node) => `${node.x}:${node.y}`)).size).toBe(siblingNodes.length)
  })
})
