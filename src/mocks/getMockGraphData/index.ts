import getLinks from './links'
import getNodes from './nodes'

import { isChileGraph } from '~/constants'
import getLinksChile from './linksChile'
import getNodesChile from './nodesChile'

const initialGraphData = {
  chile: {
    links: getLinksChile,
    nodes: getNodesChile,
  },
  main: {
    links: getLinks,
    nodes: getNodes,
  },
}

export const getMockGraphData = () => {
  const graphFor = isChileGraph ? 'chile' : 'main'

  const ids: Record<string, number> = {}

  const nodes = initialGraphData[graphFor].nodes()
  const links = initialGraphData[graphFor].links()

  // eslint-disable-next-line no-restricted-syntax
  for (const node of nodes) {
    const count = ids[node.id] || 0

    ids[node.id] = count + 1

    node.id = `${node.id}${count - 1 > 0 ? `-${count - 1}` : ''}`
  }

  return { links, nodes }
}
