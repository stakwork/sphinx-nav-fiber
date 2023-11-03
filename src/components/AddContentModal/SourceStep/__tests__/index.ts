import { twitterOrYoutubeRegexOrMp3 } from '../utils'

describe('twitterOrYoutubeRegexOrMp3', () => {
  const regex = new RegExp(twitterOrYoutubeRegexOrMp3)

  it('should assert we can check for twitter spaces regex', async () => {
    expect(regex.test('https://twitter.com/i/spaces/1zqKVqwrVzlxB?s=20')).toBe(true)
    expect(regex.test('twitter.com/i/spaces/1zqKVqwrVzlxB?s=20')).toBe(true)
    expect(regex.test('twitter.com')).toBe(false)
    expect(regex.test('https://twitter.com')).toBe(false)
    expect(regex.test('www.twitter.com')).toBe(false)
    expect(regex.test('twitter.org')).toBe(false)
    expect(regex.test('facebook.com')).toBe(false)
  })

  it('should assert we can check for youtube regex', async () => {
    expect(regex.test('https://www.youtube.com/watch?v=D900-udw9Dw&ab_channel=SwanBitcoin')).toBe(true)
    expect(regex.test('www.youtube.com/watch?v=D900-udw9Dw&ab_channel=SwanBitcoin')).toBe(true)
    expect(regex.test('youtube.com/watch?v=D900-udw9Dw&ab_channel=SwanBitcoin')).toBe(true)
    expect(regex.test('youtube.com')).toBe(false)
    expect(regex.test('https://youtube.com')).toBe(false)
    expect(regex.test('www.youtube.com')).toBe(false)
    expect(regex.test('youtube.org')).toBe(false)
    expect(regex.test('facebook.com')).toBe(false)
  })

  it('should assert we can check for mp3 regex', async () => {
    expect(regex.test('idkwhat.mp3')).toBe(true)
    expect(regex.test('https://idkwhat.mp3')).toBe(true)
    expect(regex.test('www.idkwhat.mp3')).toBe(true)
    expect(regex.test('idkwhat.org')).toBe(false)
    expect(regex.test('facebook.com')).toBe(false)
  })
})
