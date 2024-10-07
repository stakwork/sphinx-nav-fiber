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
import { checkIfRSS, extractNameFromLink, getInputType } from '..'

describe('youtubeRegex', () => {
  it('should assert we can check for youtube clip regex', async () => {
    await expect(getInputType('https://www.youtube.com/watch?v=83eQ9flwVS0&ab_channel=EthanChlebowski')).resolves.toBe(
      LINK,
    )
  })

  it('should assert we can check for youtube live clip regex', async () => {
    await expect(getInputType('https://youtube.com/live/tkdMgjEFNWs')).resolves.toBe(LINK)
  })

  it('should assert we can check for twitter spaces regex', async () => {
    await expect(getInputType('https://twitter.com/i/spaces/1zqKVqwrVzlxB?s=20')).resolves.toBe(LINK)
  })

  it('should assert we can check for youtu.be link regex', async () => {
    await expect(getInputType('https://youtu.be/HfMYOeg79dM')).resolves.toBe(LINK)
  })

  it('should assert we can check for youtu.be link with parameters regex', async () => {
    await expect(getInputType('https://youtu.be/HfMYOeg79dM?t=120')).resolves.toBe(LINK)
  })

  it('should assert we can check for twitter tweet regex', async () => {
    await expect(getInputType('https://twitter.com/LarryRuane/status/1720496960489095668')).resolves.toBe(
      TWITTER_SOURCE,
    )
  })

  it('should assert we can check for x.com tweet regex', async () => {
    await expect(getInputType('https://x.com/bernaaaljg/status/1795260855002583101')).resolves.toBe(TWITTER_SOURCE)
  })

  it('should assert we can check for mp3 url regex', async () => {
    await expect(getInputType('https://hahaha.com/i/spaces/1zqKVqwrVzlxB?s=20.mp3')).resolves.toBe(LINK)
  })

  it('should assert we can check for Twitter broadcast regex', async () => {
    await expect(getInputType('https://twitter.com/i/broadcasts/1YqxoDbOqevKv')).resolves.toBe(LINK)
  })

  it('should assert we can check for generic url regex', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        headers: {
          get: (header) => (header === 'Content-Type' ? 'text/html' : null),
        },
      }),
    ) as jest.Mock

    await expect(getInputType('https://idkwhat.com/routeing/tou')).resolves.toBe(WEB_PAGE)

    jest.restoreAllMocks()
  })

  it('should assert we can check for youtube clip regex', async () => {
    await expect(getInputType('https://www.youtube.com/@MrBeast')).resolves.toBe(YOUTUBE_CHANNEL)
  })

  it('should assert we can check for twitter handle regex', async () => {
    await expect(getInputType('https://twitter.com/@KevKevPal')).resolves.toBe(TWITTER_HANDLE)
  })

  it('should assert we can check for x.com handle regex', async () => {
    await expect(getInputType('https://x.com/@KevKevPal')).resolves.toBe(TWITTER_HANDLE)
  })

  it('should assert we can check for youtube live clip regex', async () => {
    await expect(getInputType('https://www.youtube.com/@MrBeast')).resolves.toBe(YOUTUBE_CHANNEL)
  })

  it('should assert we can check for document regex', async () => {
    await expect(getInputType('some plain text')).resolves.toBe(DOCUMENT)
  })

  it('should assert we can check for GitHub repository regex', async () => {
    await expect(getInputType('https://github.com/stakwork/sphinx-nav-fiber')).resolves.toBe(GITHUB_REPOSITORY)
  })
})

describe('extractNameFromLink', () => {
  it('should extract the name from a valid link', () => {
    const inputString = 'youtube.com/@username'
    const result = extractNameFromLink(inputString, YOUTUBE_CHANNEL)

    expect(result).toEqual('username')
  })

  it('should return null for an invalid link without a name', () => {
    const inputString = 'Invalid link without username'
    const result = extractNameFromLink(inputString)

    expect(result).toBeNull()
  })

  it('should handle multiple occurrences and return the first match', () => {
    const inputString = 'twitter.com/@support?&val=@help'
    const result = extractNameFromLink(inputString, TWITTER_HANDLE)

    expect(result).toEqual('support')
  })

  it('should handle multiple occurrences and return the first match', () => {
    const inputString = 'twitter.com/support'
    const result = extractNameFromLink(inputString, TWITTER_HANDLE)

    expect(result).toEqual('support')
  })

  it('should return null for an empty string', () => {
    const inputString = ''
    const result = extractNameFromLink(inputString)

    expect(result).toBeNull()
  })
})

describe('getInputType', () => {
  it('should assert we can check for RSS feed url regex', async () => {
    await expect(getInputType('http://example.com/feed')).resolves.toBe(RSS)
    await expect(getInputType('http://example.com/rss')).resolves.toBe(RSS)
    await expect(getInputType('http://example.com/rss.xml')).resolves.toBe(RSS)
    await expect(getInputType('http://example.com/?feed=rss')).resolves.toBe(RSS)
  })

  it('should assert we can check for RSS feed by content type', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        headers: {
          get: (header) => (header === 'Content-Type' ? 'application/rss+xml' : null),
        },
      }),
    ) as jest.Mock

    await expect(getInputType('https://rss.arxiv.org/rss/cs.AI')).resolves.toBe(RSS)

    jest.restoreAllMocks()
  })
})

describe('checkIfRSS', () => {
  it('should return true for a valid RSS feed', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        headers: {
          get: (header) => (header === 'Content-Type' ? 'application/rss+xml' : null),
        },
      }),
    ) as jest.Mock

    await expect(checkIfRSS('https://rss.arxiv.org/rss/cs.AI')).resolves.toBe(true)

    jest.restoreAllMocks()
  })

  it('should return false for a non-RSS feed', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        headers: {
          get: (header) => (header === 'Content-Type' ? 'text/html' : null),
        },
      }),
    ) as jest.Mock

    await expect(checkIfRSS('https://example.com')).resolves.toBe(false)

    jest.restoreAllMocks()
  })

  it('should return false for a fetch error', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('Network error'))) as jest.Mock

    await expect(checkIfRSS('https://example.com')).resolves.toBe(false)

    jest.restoreAllMocks()
  })
})
