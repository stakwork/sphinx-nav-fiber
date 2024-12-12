const protocol = /^(https?:\/\/)/
const subDomain = /(www\.)?/
const rootDomain = /[\w-]+(\.[\w-]+)*/
const topLevelDomains = /(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/
const path = /(\/[^\s?]*)?/
const query = /(\?[^\s]*)?/

const youtubeRegex = /(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/
const youtubeLiveRegex = /(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/
const youtubeShortRegex = /(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/
const mp3Regex = /(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/

const urlRegex = new RegExp(
  `${protocol.source}${subDomain.source}${rootDomain.source}${topLevelDomains.source}?${path.source}${query.source}$`,
  'i',
)

export const validateUrl = (input: string): boolean => {
  try {
    const match = input?.match(urlRegex)

    if (!match) {
      return false
    }

    const url = new URL(input)
    const domain = url.hostname

    if (domain?.startsWith('www.')) {
      return (domain?.match(/\./g) || []).length >= 2
    }

    return (domain?.match(/\./g) || []).length >= 1
  } catch {
    return false
  }
}

export const isValidMediaUrl = (url: string): boolean => {
  if (!validateUrl(url)) {
    return false
  }

  const mediaPatterns = [youtubeRegex, youtubeLiveRegex, youtubeShortRegex, mp3Regex]

  return mediaPatterns.some((pattern) => pattern.test(url))
}
