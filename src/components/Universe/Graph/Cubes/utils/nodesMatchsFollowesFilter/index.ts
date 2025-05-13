import { NodeExtended } from '~/types'

export const nodeMatchesFollowerFilter = (targetNode: NodeExtended, value: string | null): boolean => {
  if (!value) {
    return false
  }

  if (targetNode.node_type !== 'User') {
    return false
  }

  const followers = targetNode.properties?.followers

  if (followers === undefined) {
    return false
  }

  switch (value) {
    case 'lt_1000':
      return followers < 1000
    case '1000_10000':
      return followers >= 1000 && followers <= 10000
    case 'gt_10000':
      return followers > 10000
    default:
      return true
  }
}
