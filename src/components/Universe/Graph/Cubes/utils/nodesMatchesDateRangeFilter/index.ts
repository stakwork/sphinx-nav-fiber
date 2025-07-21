import moment from 'moment'
import { NodeExtended } from '~/types'

export const nodesMatchesDateRangeFilter = (targetNode: NodeExtended, value: string | null): boolean => {
  if (!value || targetNode.date_added_to_graph === undefined) {
    return false
  }

  const nodeDate = moment.unix(targetNode.date_added_to_graph)

  switch (value) {
    case 'last_day':
      return nodeDate.isAfter(moment().subtract(1, 'day'))
    case 'last_week':
      return nodeDate.isAfter(moment().subtract(1, 'week'))
    case 'last_month':
      return nodeDate.isAfter(moment().subtract(1, 'month'))
    case 'last_year':
      return nodeDate.isAfter(moment().subtract(1, 'year'))
    default:
      return true
  }
}
