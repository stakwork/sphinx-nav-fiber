import { groupBy, values } from 'lodash'
import { NodeExtended } from '~/types'
import { videoTimetoSeconds } from '~/utils/videoTimetoSeconds'

export const getSelectedNodeTimestamps = (nodes: NodeExtended[], selectedNode: NodeExtended | null) => {
  if (!selectedNode) {
    return null
  }

  const selectedNodeShowEpisodes = nodes.filter(
    (node) =>
      (node.show_title && node.link && node.show_title === selectedNode.show_title) ||
      (node.show_title &&
        node.link &&
        node.show_title === selectedNode.show_title &&
        node.episode_title === selectedNode.episode_title),
  )

  const groupedTimestamps = groupBy(selectedNodeShowEpisodes, (n) => n.timestamp)

  const timestamps = values(groupedTimestamps).reduce((acc, items) => {
    if (items[0]) {
      acc.push(items[0])
    }

    return acc
  }, [])

  timestamps.sort((a, b) => {
    const [aSplit] = a.timestamp?.split('-') || ['']
    const [bSplit] = b.timestamp?.split('-') || ['']
    const aTime = videoTimetoSeconds(aSplit)
    const bTime = videoTimetoSeconds(bSplit)

    return aTime - bTime
  })

  return timestamps
}
