import { DOCUMENT, LINK, TWITTER_SOURCE, WEB_PAGE } from '~/constants'

const youtubeRegex = /(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/
const twitterSpaceRegex = /https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/
const tweetUrlRegex = /https:\/\/twitter\.com\/[^/]+\/status\/(\d+)/
const mp3Regex = /(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/
const genericUrlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/

export function getInputType(source: string) {
  let inputType = DOCUMENT

  if (youtubeRegex.test(source)) {
    inputType = LINK
  } else if (twitterSpaceRegex.test(source)) {
    inputType = LINK
  } else if (tweetUrlRegex.test(source)) {
    inputType = TWITTER_SOURCE
  } else if (mp3Regex.test(source)) {
    inputType = LINK
  } else if (genericUrlRegex.test(source)) {
    inputType = WEB_PAGE
  }

  return inputType
}
