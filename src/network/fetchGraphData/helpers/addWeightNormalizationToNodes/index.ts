import { Link, NodeExtended } from '~/types'
import { getSuperficialNodeWeight } from '~/utils'

export const addWeightNormalizationToNodes = (
  topWeightValue: number,
  maxSuperficialWeight: Record<string, number>,
  nodes: NodeExtended[],
  links: Link[],
) =>
  nodes.map((n) => {
    let weight = (n.weight || 0) / topWeightValue

    if (!n.weight && maxSuperficialWeight[n.node_type]) {
      const myWeight = getSuperficialNodeWeight(n, links)

      weight = myWeight / maxSuperficialWeight[n.node_type]
    }

    return {
      ...n,
      weight,
    }
  })
