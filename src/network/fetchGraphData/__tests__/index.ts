import { formatFetchNodes } from '..'

describe('formatFetchNodes', () => {
  const node1 = {
    x: 0,
    y: 0,
    z: 0,
    label: 'test',
    name: 'test',
    node_type: 'test',
  }

  it('should give us the expected output', () => {
    const emptyInput = {
      data_series: { title: 'test' },
      exact: [node1],
      related: [node1],
    }
    const emptyResponse = {
      links: [],
      nodes: [
        {
          id: undefined,
          image_url: undefined,
          index: 0,
          label: 'test',
          name: 'test',
          node_type: 'test',
          scale: 1.5,
          type: 'test',
          vx: 0,
          vy: 0,
          vz: 0,
          weight: NaN,
          x: 0,
          y: 0,
          z: 0,
        },
      ],
    }

    expect(formatFetchNodes(emptyInput)).toStrictEqual(emptyResponse)
  })
})
