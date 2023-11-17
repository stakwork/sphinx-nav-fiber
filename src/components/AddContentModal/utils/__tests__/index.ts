import { LINK, TWITTER_HANDLE, TWITTER_SOURCE, WEB_PAGE, YOUTUBE_CHANNEL } from '~/constants'
import { extractNameFromLink, getInputType } from '..'

describe('youtubeRegex', () => {
  it('should assert we can check for youtube clip regex', async () => {
    expect(getInputType('https://www.youtube.com/watch?v=83eQ9flwVS0&ab_channel=EthanChlebowski')).toBe(LINK)
  })

  it('should assert we can check for twitter spaces regex', async () => {
    expect(getInputType('https://twitter.com/i/spaces/1zqKVqwrVzlxB?s=20')).toBe(LINK)
  })

  it('should assert we can check for twitter tweet regex', async () => {
    expect(getInputType('https://twitter.com/LarryRuane/status/1720496960489095668')).toBe(TWITTER_SOURCE)
  })

  it('should assert we can check for mp3 url regex', async () => {
    expect(getInputType('https://hahaha.com/i/spaces/1zqKVqwrVzlxB?s=20.mp3')).toBe(LINK)
  })

  it('should assert we can check for generic url regex', async () => {
    expect(getInputType('https://idkwhat.com/routeing/tou')).toBe(WEB_PAGE)
  })

  it('should assert we can check for youtube clip regex', async () => {
    expect(getInputType('https://www.youtube.com/@MrBeast')).toBe(YOUTUBE_CHANNEL)
  })

  it('should assert we can check for twitter handle regex', async () => {
    expect(getInputType('https://twitter.com/@KevKevPal')).toBe(TWITTER_HANDLE)
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
