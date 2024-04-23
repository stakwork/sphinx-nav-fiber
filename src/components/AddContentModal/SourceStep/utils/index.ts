// mandatory protocol: http or https
const protocol = /^(https?:\/\/)/g

// optional subdomain 'www.' prefix
const subDomain = /(www\.)?/g

// domain name: Letters, numbers, hyphens, and dots
const rootDomain = /[\w-]+(\.[\w-]+)*/g

// extensive TLD matching
const topLevelDomains =
  /(com|org|net|info|edu|gov|mil|co|biz|name|museum|club|email|link|city|solutions|photography|tips|today|technology|directory|center|gallery|graphics|equipment|exchange|estate|land|media|money|news|network|world|international|services|engineer|systems|software|ninja|xyz|site|online|space|store|tech|fun|press|website|co.uk)/g

// path: Optional, can include multiple slashes and allowable characters
const path = /(\/[^\s?]*)?/g

// query string: Optional, starts with '?' followed by non-space characters
const query = /(\?[^\s]*)?/g

// full regex for source url
export const sourceUrlRegex = new RegExp(
  `${protocol.source}${subDomain.source}${rootDomain.source}\\.${topLevelDomains.source}?${path.source}${query.source}$`,
  'i',
)

export const validateSourceURL = (input: string) => sourceUrlRegex.test(input)
