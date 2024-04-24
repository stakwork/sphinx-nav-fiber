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

  const tweetNode = {
    date: 1700158742,
    latitude: null,
    longitude: null,
    name: 'Yan | swan.com',
    node_type: 'tweet',
    posted_by: {
      name: 'Marty Bent',
      ref_id: '655bdcb1-21c3-411c-aa24-fe7e4c7a248c',
      twitter_handle: 'MartyBent',
    },
    profile_picture: 'https://pbs.twimg.com/profile_images/1599281471679766530/RhszStuB_normal.jpg',
    ref_id: 'a1317497-7ebe-401b-8cfd-fe709bf04e46',
    text: '@adam3us @JSeyff @SGJohnsson Where’s the Vitalik presale video where he talks about finding a friendly jurisdiction?',
    topics: ['Vitalik', 'Bitcoin', 'presale', 'friendly jurisdiction'],
    tweet_id: '1725216924051587516',
    twitter_handle: 'skwp',
    verified: false,
    weight: 2,
  }

  const dataSeriesNode = {
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
          label: 'test',
          name: 'test',
          node_type: 'test',
          scale: 1.5,
          type: 'test',
          x: expect.any(Number),
          y: expect.any(Number),
          z: expect.any(Number),
          weight: NaN,
        },
      ],
    }

    expect(formatFetchNodes(emptyInput, 'searchterm', 'split')).toEqual(emptyResponse)
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
          label: 'test',
          name: 'test',
          node_type: 'test',
          scale: 1.5,
          type: 'test',
          x: expect.any(Number),
          y: expect.any(Number),
          z: expect.any(Number),
          weight: NaN,
        },
      ],
    }

    expect(formatFetchNodes(emptyInput, 'searchterm', 'split')).toEqual(emptyResponse)
  })

  it('should give us the expected output for two different nodes', () => {
    const emptyInput = {
      data_series: { title: 'test' },
      exact: [node1, dataSeriesNode],
      related: [node1, dataSeriesNode],
    }

    const formattedResponse = formatFetchNodes(emptyInput, 'searchterm', 'split')

    expect(formattedResponse.links).toStrictEqual([])
    expect(formattedResponse.nodes[0].label).toBe('test')
    expect(formattedResponse.nodes[0].name).toBe('test')
    expect(formattedResponse.nodes[0].node_type).toBe('test')
    expect(formattedResponse.nodes[0].scale).toBe(1.5)
    expect(formattedResponse.nodes[0].type).toBe('test')
    expect(formattedResponse.nodes[0].x).toEqual(expect.any(Number))
    expect(formattedResponse.nodes[0].y).toEqual(expect.any(Number))
    expect(formattedResponse.nodes[0].z).toEqual(expect.any(Number))

    expect(formattedResponse.nodes[1].label).toBe('test2')
    expect(formattedResponse.nodes[1].name).toBe('test2')
    expect(formattedResponse.nodes[1].node_type).toBe('data_series')
    expect(formattedResponse.nodes[1].scale).toBe(1.5)
    expect(formattedResponse.nodes[1].type).toBe('data_series')
    expect(formattedResponse.nodes[1].x).toEqual(expect.any(Number))
    expect(formattedResponse.nodes[1].y).toEqual(expect.any(Number))
    expect(formattedResponse.nodes[1].z).toEqual(expect.any(Number))
  })

  it('should create topic nodes for each topic from tweet, and guest node for posted_by', () => {
    const emptyInput = {
      data_series: { title: 'test' },
      exact: [tweetNode],
      related: [],
    }

    const result = formatFetchNodes(emptyInput, '1', 'split')

    expect(result.nodes.length).toBe(tweetNode.topics.length + 2)
  })
})
