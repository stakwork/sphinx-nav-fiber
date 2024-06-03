import { GraphStyle } from '~/stores/useDataStore'
import { generateEarthGraphPositions } from '~/transformers/earthGraph'
import { generateForceGraphPositions } from '~/transformers/forceGraph'
import { generateSphereGraphPositions } from '~/transformers/sphereGraph'
import { generateSplitGraphPositions } from '~/transformers/splitGraph'
import { GraphData, Link, NodeExtended } from '~/types'

export const shouldIncludeTopics = true
export const maxScale = 26

export const defaultData: GraphData = {
  links: [],
  nodes: [],
}

export const getGraphDataPositions = (graphStyle: GraphStyle, nodes: NodeExtended[], links: Link[]) => {
  console.log('position data')

  // give nodes and links positions based on graphStyle
  if (graphStyle === 'split') {
    return generateSplitGraphPositions(nodes, links)
  }

  if (graphStyle === 'sphere') {
    return generateSphereGraphPositions(nodes)
  }

  if (graphStyle === 'earth') {
    return generateEarthGraphPositions(nodes)
  }

  return generateForceGraphPositions(nodes, links)
}
