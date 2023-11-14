import { LINK, TWITTER_HANDLE, TWITTER_SOURCE, WEB_PAGE, YOUTUBE_CHANNEL } from '~/constants'
import { getInputType } from '..'

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
