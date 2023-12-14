import { DOCUMENT, LINK, TWITTER_HANDLE, TWITTER_SOURCE, WEB_PAGE, YOUTUBE_CHANNEL } from '~/constants'

export const twitterHandlePattern = /\btwitter\.com\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/

const youtubeRegex = /(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/
const youtubeLiveRegex = /(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/
const twitterSpaceRegex = /https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/
const tweetUrlRegex = /https:\/\/twitter\.com\/[^/]+\/status\/(\d+)/
const mp3Regex = /(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/
const youtubeChannelPattern = /https?:\/\/(www\.)?youtube\.com\/(@)?([\w-]+)/i
const genericUrlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/

export function getInputType(source: string) {
  let inputType = DOCUMENT;

  if (youtubeLiveRegex.test(source)) {
    inputType = LINK;
  } else if (youtubeRegex.test(source) || twitterSpaceRegex.test(source) || mp3Regex.test(source)) {
    inputType = LINK;
  } else if (youtubeChannelPattern.test(source)) {
    inputType = YOUTUBE_CHANNEL;
  } else if (twitterHandlePattern.test(source)) {
    inputType = TWITTER_HANDLE;
  } else if (tweetUrlRegex.test(source)) {
    inputType = TWITTER_SOURCE;
  } else if (genericUrlRegex.test(source)) {
    inputType = WEB_PAGE;
  }

  return inputType;
}

export const extractNameFromLink = (inputString: string, type = ''): string | null => {
  const atPattern = type === TWITTER_HANDLE ? twitterHandlePattern : /@(\w+)/

  const match: RegExpExecArray | null = atPattern.exec(inputString)

  return match ? match[1] : null
}

export const isSource = (type: string): boolean => !!type && [TWITTER_HANDLE, YOUTUBE_CHANNEL].includes(type)
