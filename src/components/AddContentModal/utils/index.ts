import { DOCUMENT, LINK, RSS, TWITTER_HANDLE, TWITTER_SOURCE, WEB_PAGE, YOUTUBE_CHANNEL } from '~/constants'

export const twitterHandlePattern = /\btwitter\.com\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/

const youtubeRegex = /(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/
const youtubeLiveRegex = /(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/
const twitterSpaceRegex = /https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/
const tweetUrlRegex = /https:\/\/twitter\.com\/[^/]+\/status\/(\d+)/
const mp3Regex = /(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/
const youtubeChannelPattern = /https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/i
const genericUrlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/
const twitterBroadcastRegex = /https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/
const rssRegex = /(https?:\/\/)?(www\.)?.+\/(feed|rss|rss.xml|\?feed=rss)$/

export function getInputType(source: string) {
  const linkPatterns = [youtubeLiveRegex, twitterBroadcastRegex, youtubeRegex, twitterSpaceRegex, mp3Regex]

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

  if (genericUrlRegex.test(source)) {
    return WEB_PAGE
  }

  if (rssRegex.test(source)) {
    return RSS
  }

  return DOCUMENT
}

export const extractNameFromLink = (inputString: string, type = ''): string | null => {
  const atPattern = type === TWITTER_HANDLE ? twitterHandlePattern : /@(\w+)/

  const match: RegExpExecArray | null = atPattern.exec(inputString)

  return match ? match[1] : null
}

export const isSource = (type: string): boolean => !!type && [TWITTER_HANDLE, YOUTUBE_CHANNEL, RSS].includes(type)
