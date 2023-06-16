import { GraphStyle } from '~/stores/useDataStore'
import { generateForceGraphPositions } from '~/transformers/forceGraph'
import { generateSphereGraphPositions } from '~/transformers/sphereGraph'
import { generateSplitGraphPositions } from '~/transformers/splitGraph'
import { GraphData, NodeExtended } from '~/types'

export const shouldIncludeTopics = true
export const maxScale = 26

export const defaultData: GraphData = {
  links: [],
  nodes: [],
}

export const getGraphDataPositions = (graphStyle: GraphStyle, nodes: NodeExtended[]) => {
  // give nodes and links positions based on graphStyle
  if (graphStyle === 'split') {
    return generateSplitGraphPositions(nodes)
  }

  if (graphStyle === 'sphere') {
    return generateSphereGraphPositions(nodes)
  }

  return generateForceGraphPositions(nodes)
}
