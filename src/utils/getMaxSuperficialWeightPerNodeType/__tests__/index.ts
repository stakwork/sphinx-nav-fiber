import { getMaxSuperficialWeightPerNodeType } from '../../../network/fetchGraphData'

describe('test getMaxSuperficialWeightPerNodeType', () => {
  it('should return correct weights per node type', () => {
    const nodes = [
      {
        ref_id: '1',
        node_type: 'clip',
        weight: 100,
      },
      {
        ref_id: '2',
        node_type: 'episode',
        weight: 10,
      },
      {
        ref_id: '2',
        node_type: 'episode',
        weight: 80,
      },
      {
        ref_id: '3',
        node_type: 'clip',
        weight: 1,
      },
      {
        ref_id: '3',
        node_type: 'guest',
        weight: 300,
      },
    ]

    const links = [{}]

    const maxSuperficialWeight = getMaxSuperficialWeightPerNodeType(nodes, links)

    expect(maxSuperficialWeight['clip']).toEqual(100)
    expect(maxSuperficialWeight['episode']).toEqual(80)
    expect(maxSuperficialWeight['guest']).toEqual(300)
  })
})
