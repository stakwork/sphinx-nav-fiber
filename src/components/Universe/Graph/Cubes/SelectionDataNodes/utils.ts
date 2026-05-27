import { Link, NodeExtended } from '~/types'

export const MAX_RELATED_SELECTION_NODES = 20

export const uniqueNodesByRefId = <T extends Pick<NodeExtended, 'ref_id'>>(nodes: T[]): T[] => {
  const seen = new Set<string>()

  return nodes.filter((node) => {
    if (seen.has(node.ref_id)) {
      return false
    }

    seen.add(node.ref_id)

    return true
  })
}

export const getLinksForNodes = <T extends Pick<NodeExtended, 'ref_id'>>(links: Link[], nodes: T[]): Link[] => {
  const nodeIds = new Set(nodes.map((node) => node.ref_id))

  return links.filter((link) => nodeIds.has(link.source) && nodeIds.has(link.target))
}
