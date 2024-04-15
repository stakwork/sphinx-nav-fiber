import { sourceUrlRegex, validateSourceURL } from '..'

describe('sourceUrlRegex', () => {
  const regex = new RegExp(sourceUrlRegex)

  it('should assert we can check for a valid url', async () => {
    expect(regex.test('https://twitter.com/i/spaces/1zqKVqwrVzlxB?s=20')).toBe(true)
    expect(regex.test('https://twitter.com/i/spaces/1zqKVqwrVzlxB?s=20')).toBe(true)
    expect(regex.test('https://twitter.com')).toBe(true)
    expect(regex.test('https://twitter.com')).toBe(true)
    expect(regex.test('https://www.twitter.com')).toBe(true)
    expect(regex.test('https://twitter.org')).toBe(true)
    expect(regex.test('https://facebook.com')).toBe(true)
    expect(regex.test('https://www.youtube.com/watch?v=D900-udw9Dw&ab_channel=SwanBitcoin')).toBe(true)
    expect(regex.test('https://www.youtube.com/watch?v=D900-udw9Dw&ab_channel=SwanBitcoin')).toBe(true)
    expect(regex.test('https://youtube.com/watch?v=D900-udw9Dw&ab_channel=SwanBitcoin')).toBe(true)
    expect(regex.test('https://youtube.com')).toBe(true)
    expect(regex.test('https://youtube.com')).toBe(true)
    expect(regex.test('https://www.youtube.com')).toBe(true)
    expect(regex.test('https://youtube.org')).toBe(true)
    expect(regex.test('@tomsmith')).toBe(false)
    expect(regex.test('389sdfsdfjk')).toBe(false)
  })
})

describe('validateSourceURL', () => {
  it('should assert we can check for a valid source', () => {
    expect(validateSourceURL('https://twitter.com/i/spaces/1zqKVqwrVzlxB?s=20')).toBe(true)
    expect(validateSourceURL('https://twitter.com/@Ekep-Obasi')).toBe(true)
    expect(validateSourceURL('https://youtube.com/watch?v=D900-udw9Dw&ab_channel=SwanBitcoin')).toBe(true)
    expect(validateSourceURL('https://youtube.com/live/8djflewrio')).toBe(true)
    expect(validateSourceURL('https://google.com')).toBe(true)
    expect(validateSourceURL('https://frontendmasters.com')).toBe(true)
    expect(validateSourceURL('www/idkwhat.mp3')).toBe(false)
  })
})
