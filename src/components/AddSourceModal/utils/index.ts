import { DOCUMENT, YOUTUBE_CHANNEL, TWITTER_HANDLE, GITHUB_REPOSITORY, RSS, TOPIC } from '~/constants'

const twitterHandlePattern = /@(\w+)/g
const youtubeChannelPattern = /https?:\/\/(www\.)?youtube\.com\/(@)?([\w-]+)/i
const githubRepoPattern = /https?:\/\/github\.com\/([\w-]+)\/([\w-]+)/i
const genericUrlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/

export function getInputType(source: string) {
  let inputType = DOCUMENT

  if (youtubeChannelPattern.test(source)) {
    inputType = YOUTUBE_CHANNEL
  } else if (twitterHandlePattern.test(source)) {
    inputType = TWITTER_HANDLE
  } else if (githubRepoPattern.test(source)) {
    inputType = GITHUB_REPOSITORY
  } else if (genericUrlRegex.test(source)) {
    inputType = RSS
  } else {
    inputType = TOPIC
  }

  return inputType
}
