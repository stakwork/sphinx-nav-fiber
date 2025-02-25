const protocol = /^(https?:\/\/)/
const subDomain = /(www\.)?/
const rootDomain = /[\w-]+(\.[\w-]+)*/
const topLevelDomains = /(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/
const path = /(\/[^\s?]*)?/
const query = /(\?[^\s]*)?/

const tweetRegExp = /(?:https?:\/\/)?(?:www\.)?(twitter|x)\.com\/\w+\/status\/(\d+)/s

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

export const isValidTweet = (url: string): boolean => {
  if (!validateUrl(url)) {
    return false
  }

  return tweetRegExp.test(url)
}
