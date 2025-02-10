import { groupBy, values } from 'lodash'
import { NodeExtended } from '~/types'
import { videoTimeToSeconds } from '~/utils/videoTimetoSeconds'

export const getSelectedNodeTimestamps = (nodes: NodeExtended[], selectedNode: NodeExtended | null) => {
  if (!selectedNode) {
    return null
  }

  const selectedNodeShowEpisodes = nodes.filter(
    (node) =>
      node.properties?.show_title &&
      node.properties?.link &&
      node.properties.show_title === selectedNode.properties?.show_title &&
      node.properties.episode_title === selectedNode.properties?.episode_title,
  )

  const groupedTimestamps = groupBy(selectedNodeShowEpisodes, (n) => n.properties?.timestamp)

  const timestamps = values(groupedTimestamps).reduce((acc, items) => {
    if (items[0]) {
      acc.push(items[0])
    }

    return acc
  }, [])

  timestamps.sort((a, b) => {
    const aTimestamp = a.properties?.timestamp || ''
    const bTimestamp = b.properties?.timestamp || ''

    const [aSplit] = typeof aTimestamp === 'string' ? aTimestamp.split('-') : ['']
    const [bSplit] = typeof bTimestamp === 'string' ? bTimestamp.split('-') : ['']

    const aTime = videoTimeToSeconds(aSplit)
    const bTime = videoTimeToSeconds(bSplit)

    return aTime - bTime
  })

  return timestamps
}
