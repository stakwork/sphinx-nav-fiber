import { GITHUB_REPOSITORY, RSS, TOPIC, TWITTER_HANDLE, YOUTUBE_CHANNEL } from '~/constants'
import { ISourceMap } from './types'

export const sourcesMapper: ISourceMap = {
  [GITHUB_REPOSITORY]: 'Github repository',
  [RSS]: 'RSS link',
  [TOPIC]: 'Topic',
  [TWITTER_HANDLE]: 'Twitter Handle',
  [YOUTUBE_CHANNEL]: 'Youtube channel',
}

export const DATE = 'date'
export const EDGE_COUNT = 'edge_count'
export const ALPHABETICALLY = 'alphabetically'

type Option = Record<string, string>

export const SORT_MAPPING: Option = {
  [DATE]: 'Date',
  [EDGE_COUNT]: 'Edge Count',
  [ALPHABETICALLY]: 'Alphabetically',
}

export const TWITTER_LINK = 'https://twitter.com'
