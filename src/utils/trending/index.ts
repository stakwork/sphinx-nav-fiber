import { Trending } from '~/types'

export const showPlayButton = (trendingTopics: Trending[]) =>
  trendingTopics.filter((i) => i.tldr).length >= 2 && trendingTopics.some((topic) => topic.audio_EN)

export function getTrendingTopic(trending: Trending): string {
  return trending.tldr_topic ?? trending.name
}
