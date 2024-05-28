import { FetchDataResponse, Link, NodeExtended } from '~/types'
import { getMaxSuperficialWeightPerNodeType, getSuperficialNodeWeight } from '~/utils/getSuperficialNodeWeight'
import { getGraphDataPositions } from '../const'
import { handleNodes } from './handleNodes'

export const formatFetchNodes = (
  dataInit: FetchDataResponse,
  searchterm: string,
  graphStyle: 'split' | 'force' | 'sphere' | 'earth',
) => {
  const { nodes: nodesWithoutPosition, topWeightValue } = handleNodes(dataInit, searchterm)
  // give nodes and links positions based on graphStyle
  const dataWithPositions = getGraphDataPositions(graphStyle, nodesWithoutPosition)
  const { links, nodes } = dataWithPositions

  nodes.sort((a, b) => (b.weight || 0) - (a.weight || 0))

  // re-assign weight based on highest weight value
  // convert to range 0-1

  // for topics and guests, calculate weight based on links
  const maxSuperficialWeight = getMaxSuperficialWeightPerNodeType(nodes, links)

  const nodesWithWeight = addWeightNormalizationToNodes(topWeightValue, maxSuperficialWeight, nodes, links)

  return { links, nodes: nodesWithWeight }
}

const addWeightNormalizationToNodes = (
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
