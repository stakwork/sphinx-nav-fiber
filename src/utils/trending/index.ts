import { Trending } from '~/types'

export function getTrendingTopic(trending: Trending): string {
  return trending.tldr ?? trending.topic
}
