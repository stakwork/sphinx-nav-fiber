import { Trending } from '~/types'

export function getTrendingTopic(trending: Trending): string {
  return trending.tldr_topic ?? trending.topic
}
