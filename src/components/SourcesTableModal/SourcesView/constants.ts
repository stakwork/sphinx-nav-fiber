import { GITHUB_REPOSITORY, RSS, TOPIC, TWITTER_HANDLE, YOUTUBE_CHANNEL } from '~/constants'
import { ISourceMap } from './types'

export const sourcesMapper: ISourceMap = {
  [GITHUB_REPOSITORY]: 'Github repository',
  [RSS]: 'RSS link',
  [TOPIC]: 'Topic',
  [TWITTER_HANDLE]: 'Twitter Handle',
  [YOUTUBE_CHANNEL]: 'Youtube channel',
}

export const TWITTER_LINK = 'https://twitter.com'
