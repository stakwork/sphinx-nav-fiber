import {
  DOCUMENT,
  GITHUB_REPOSITORY,
  LINK,
  RSS,
  TWITTER_HANDLE,
  TWITTER_SOURCE,
  WEB_PAGE,
  YOUTUBE_CHANNEL,
} from '~/constants'

export const twitterHandlePattern = /\b(?:twitter\.com|x\.com)\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/

const youtubeRegex = /(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/
const youtubeLiveRegex = /(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/
const youtubeShortRegex = /(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/
const twitterSpaceRegex = /https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/
const tweetUrlRegex = /https:\/\/(twitter\.com|x\.com)\/[^/]+\/status\/(\d+)/
const mp3Regex = /(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/

const rssRegex = /(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss\.xml|.*\?(feed|format)=rss)(\/.*)?$/
const youtubeChannelPattern = /https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/

const genericUrlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/
const twitterBroadcastRegex = /https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/
const githubRepoPattern = /https:\/\/github\.com\/[\w-]+\/[\w-]+/

export async function checkIfRSS(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: 'HEAD' })
    const contentType = response.headers.get('Content-Type')

    return contentType?.includes('application/rss+xml') ?? false
  } catch (error) {
    return false
  }
}

export async function getInputType(source: string) {
  const linkPatterns = [
    youtubeLiveRegex,
    twitterBroadcastRegex,
    youtubeRegex,
    youtubeShortRegex,
    twitterSpaceRegex,
    mp3Regex,
  ]

  if (linkPatterns.some((pattern) => pattern.test(source))) {
    return LINK
  }

  if (youtubeChannelPattern.test(source)) {
    return YOUTUBE_CHANNEL
  }

  if (twitterHandlePattern.test(source)) {
    return TWITTER_HANDLE
  }

  if (tweetUrlRegex.test(source)) {
    return TWITTER_SOURCE
  }

  if (rssRegex.test(source)) {
    return RSS
  }

  if (githubRepoPattern.test(source)) {
    return GITHUB_REPOSITORY
  }

  if (genericUrlRegex.test(source)) {
    const isRSS = await checkIfRSS(source)

    return isRSS ? RSS : WEB_PAGE
  }

  return DOCUMENT
}

export const extractNameFromLink = (inputString: string, type = ''): string | null => {
  const atPattern = type === TWITTER_HANDLE ? twitterHandlePattern : /@(\w+)/

  const match: RegExpExecArray | null = atPattern.exec(inputString)

  return match ? match[1] : null
}

export const isSource = (type: string): boolean =>
  !!type && [TWITTER_HANDLE, YOUTUBE_CHANNEL, RSS, GITHUB_REPOSITORY].includes(type)
