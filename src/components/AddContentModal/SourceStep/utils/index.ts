// mandatory protocol: http or https
const protocol = /^(https?:\/\/)/g

// optional subdomain 'www.' prefix
const subDomain = /(www\.)?/g

// domain name: Letters, numbers, hyphens, and dots
const rootDomain = /[\w-]+(\.[\w-]+)*/g

// regular expression for extensive top-level domain (TLD) matching
const topLevelDomains = /(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/g

// path: Optional, can include multiple slashes and allowable characters
const path = /(\/[^\s?]*)?/g

// query string: Optional, starts with '?' followed by non-space characters
const query = /(\?[^\s]*)?/g

// full regex for source url
export const sourceUrlRegex = new RegExp(
  `${protocol.source}${subDomain.source}${rootDomain.source}${topLevelDomains.source}?${path.source}${query.source}$`,
  'i',
)

export const validateSourceURL = (input: string) => {
  const match = input?.match(sourceUrlRegex)

  if (match) {
    // Extract domain from input
    const url = new URL(input)
    const domain = url.hostname

    if (domain?.startsWith('www.')) {
      // Check for two dots if 'www.' is present
      return (domain?.match(/\./g) || []).length >= 2
    }
    // Check for one dot if 'www.' is not present

    return (domain?.match(/\./g) || []).length >= 1
  }

  return false
}
