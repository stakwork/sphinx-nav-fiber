import { getMaxSuperficialWeightPerNodeType } from '..'

type FakeNode = {
  ref_id: string
  node_type: string
  weight?: number
  children?: string[]
}

describe('test getMaxSuperficialWeightPerNodeType', () => {
  it('should return correct weights per node type', () => {
    const nodes: FakeNode[] = [
      {
        ref_id: '1',
        node_type: 'clip',
        weight: 100,
      },
      {
        ref_id: '2',
        node_type: 'episode',
        children: ['1', '2', '3'],
      },

      {
        ref_id: '3',
        node_type: 'clip',
        weight: 1,
      },
      {
        ref_id: '4',
        node_type: 'guest',
      },
      {
        ref_id: '5',
        node_type: 'show',
        children: ['1'],
      },
      {
        ref_id: '6',
        node_type: 'episode',
      },
    ]

    const links = [
      {
        sourceRef: '2',
        targetRef: '4',
      },
    ]

    const maxSuperficialWeights = getMaxSuperficialWeightPerNodeType(nodes, links)

    expect(maxSuperficialWeights.clip).toEqual(100)
    expect(maxSuperficialWeights.episode).toEqual(3)
    expect(maxSuperficialWeights.guest).toEqual(1)
    expect(maxSuperficialWeights.show).toEqual(1)
  })
})
