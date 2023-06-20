import { Link, NodeExtended } from '~/types'

const typesWeighedByChildren = ['show', 'episode']

export const getSuperficialNodeWeight = (n: NodeExtended, links: Link[]) => {
  if (n.weight) {
    return n.weight
  }

  if (typesWeighedByChildren.includes(n.node_type)) {
    return n?.children?.length || 0
  }

  const myLinks = links.filter((f) => f.sourceRef === n.ref_id || f.targetRef === n.ref_id)

  return myLinks.length
}

export const getMaxSuperficialWeightPerNodeType = (nodes: NodeExtended[], links: Link[]) => {
  const maxWeightsByType: Record<string, number> = {}

  nodes.forEach((n) => {
    const weight = getSuperficialNodeWeight(n, links)

    if (!maxWeightsByType[n.node_type] || maxWeightsByType[n.node_type] < weight) {
      maxWeightsByType[n.node_type] = weight
    }
  })

  return maxWeightsByType
}
