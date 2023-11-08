import { getInputType } from '..'
import { YOUTUBE_CHANNEL, RSS, TWITTER_HANDLE, GITHUB_REPOSITORY, TOPIC } from '~/constants'

describe('youtubeRegex', () => {
  it('should assert we can check for youtube clip regex', async () => {
    expect(getInputType('https://www.youtube.com/watch?v=83eQ9flwVS0&ab_channel=EthanChlebowski')).toBe(YOUTUBE_CHANNEL)
  })

  it('should assert we can check for twitter spaces regex', async () => {
    expect(getInputType('https://twitter.com/i/spaces/1zqKVqwrVzlxB?s=20')).toBe(RSS)
  })

  it('should assert we can check for twitter tweet regex', async () => {
    expect(getInputType('https://twitter.com/LarryRuane/status/1720496960489095668')).toBe(RSS)
  })

  it('should assert we can check for mp3 url regex', async () => {
    expect(getInputType('https://hahaha.com/i/spaces/1zqKVqwrVzlxB?s=20.mp3')).toBe(RSS)
  })

  it('should assert we can check for generic url regex', async () => {
    expect(getInputType('https://idkwhat.com/routeing/tou')).toBe(RSS)
  })

  it('should assert we can check for twitter handle regex', async () => {
    expect(getInputType('https://twitter.com/@KevKevPal')).toBe(TWITTER_HANDLE)
  })

  it('should assert we can check for github repo regex', async () => {
    expect(getInputType('https://github.com/stakwork/sphinx-relay')).toBe(GITHUB_REPOSITORY)
  })

  it('should assert we can check for topic regex', async () => {
    expect(getInputType('Bitcoin')).toBe(TOPIC)
  })
})
