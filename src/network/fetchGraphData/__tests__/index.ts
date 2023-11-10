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
  const data_series_node = {
    x: 1,
    y: 1,
    z: 1,
    label: 'test2',
    name: 'test2',
    node_type: 'data_series',
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
  it('should give us the expected output for two of the same node', () => {
    const emptyInput = {
      data_series: { title: 'test' },
      exact: [node1, node1],
      related: [node1, node1],
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
  it('should give us the expected output for two different nodes', () => {
    const emptyInput = {
      data_series: { title: 'test' },
      exact: [node1, data_series_node],
      related: [node1, data_series_node],
    }

    const formattedResponse = formatFetchNodes(emptyInput)
    expect(formattedResponse.links).toStrictEqual([])
    expect(formattedResponse.nodes[0].label).toBe('test')
    expect(formattedResponse.nodes[0].name).toBe('test')
    expect(formattedResponse.nodes[0].node_type).toBe('test')
    expect(formattedResponse.nodes[0].scale).toBe(1.5)
    expect(formattedResponse.nodes[0].type).toBe('test')
    expect(formattedResponse.nodes[0].index).toBe(0)

    expect(formattedResponse.nodes[1].label).toBe('test2')
    expect(formattedResponse.nodes[1].name).toBe('test2')
    expect(formattedResponse.nodes[1].node_type).toBe('data_series')
    expect(formattedResponse.nodes[1].scale).toBe(1.5)
    expect(formattedResponse.nodes[1].type).toBe('data_series')
    expect(formattedResponse.nodes[1].index).toBe(1)

    expect(formattedResponse.nodes[2].label).toBe('test2')
    expect(formattedResponse.nodes[2].name).toBe('test2')
    expect(formattedResponse.nodes[2].node_type).toBe('data_series')
    expect(formattedResponse.nodes[2].scale).toBe(1.5)
    expect(formattedResponse.nodes[2].type).toBe('data_series')
    expect(formattedResponse.nodes[2].index).toBe(2)
  })
})
