import { NodeExtended } from '~/types'

const sortAB = (aType: string, bType: string, type: string) => {
  let direction = -2

  if (aType === type && bType === type) {
    direction = 0
  } else if (aType === type && bType !== type) {
    direction = -1
  } else if (aType !== type && bType === type) {
    direction = 1
  }

  return direction
}

export const sortNodesByHierarchy = (nodes: NodeExtended[]) => {
  const sortedNodes = nodes
    .map((n) => n)
    .sort((a, b) => {
      let direction = 0

      if (a.node_type === 'show' || b.node_type === 'show') {
        direction = sortAB(a.node_type, b.node_type, 'show')
      } else if (a.node_type === 'episode' || b.node_type === 'episode') {
        direction = sortAB(a.node_type, b.node_type, 'episode')
      } else if (a.node_type === 'clip' || b.node_type === 'clip') {
        direction = sortAB(a.node_type, b.node_type, 'clip')
      } else if (a.node_type !== 'guest' && b.node_type === 'guest') {
        direction = sortAB(a.node_type, b.node_type, 'guest')
      } else {
        direction = 0
      }

      return direction
    })

  return sortedNodes
}

export function getMyParents(node: NodeExtended, nodes: NodeExtended[] | undefined) {
  const { ref_id: refId } = node

  if (!refId || !nodes) {
    return []
  }

  const parents = nodes.filter((f) => f.children?.includes(refId))

  return parents
}

export function getMyChildren(childrenRefIds: string[], nodes: NodeExtended[]) {
  const children = nodes.filter((f) => f.ref_id && childrenRefIds.includes(f.ref_id))

  return children
}
