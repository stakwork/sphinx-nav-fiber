import { getTrendingTopic } from '../index'

describe('trending', () => {
  it('should return topic if tldr not present', () => {
    expect(getTrendingTopic({ topic: 'topic', count: 1 })).toEqual('topic')
  })

  it('should return tldr if tldr present', () => {
    expect(getTrendingTopic({ topic: 'topic', tldr: 'tldr', count: 1 })).toEqual('tldr')
  })
})
