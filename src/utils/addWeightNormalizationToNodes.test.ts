import { addWeightNormalizationToNodes, getMaxSuperficialWeightPerNodeType } from '../network/fetchGraphData'

describe('addWeightNormalizationToNodes', () => {
  it('should return correct weights', () => {
    const topWeightValue = 4
    const maxSuperficialWeight = getMaxSuperficialWeightPerNodeType(testNodes, testLinks)
    const results = addWeightNormalizationToNodes(topWeightValue, maxSuperficialWeight, testNodes, testLinks)
    console.log('results', results)
  })
})

const testNodes = [
  {
    ref_id: '1',
    node_type: 'clip',
    weight: 100,
  },
  {
    ref_id: '2',
    node_type: 'clip',
    weight: 1,
  },
  {
    ref_id: '3',
    node_type: 'episode',
  },
  {
    ref_id: '4',
    node_type: 'show',
  },
  {
    ref_id: '5',
    node_type: 'guest',
  },
  {
    ref_id: '6',
    node_type: 'topic',
  },
]

const testLinks = [
  {
    sourceRef: '4',
    targetRef: '6',
  },
  {
    sourceRef: '3',
    targetRef: '5',
  },
  {
    sourceRef: '2',
    targetRef: '4',
  },
]
