import { validateSourceURL } from '..'

describe('validateSourceURL', () => {
  describe('Invalid URLs', () => {
    it('should return false for URLs containing spaces', () => {
      expect(validateSourceURL('http://domain.com/path with spaces')).toBe(false)
      expect(validateSourceURL('https://site.com/? space=true')).toBe(false)
    })

    it('should return false for URLs with consecutive dots in domain', () => {
      expect(validateSourceURL('https://www..com')).toBe(false)
    })

    it('should return false for URLs with missing domain', () => {
      expect(validateSourceURL('http://')).toBe(false)
    })

    it('should return false for URLs with invalid top-level domain', () => {
      expect(validateSourceURL('http://youtube.badtld')).toBe(false)
    })

    it('should return false for URLs with query containing spaces', () => {
      expect(validateSourceURL('https://site.com/?query=bad value')).toBe(false)
    })

    it('should return false for invalid urls', () => {
      expect(validateSourceURL('twitter.com/i/spaces/1zqKVqwrVzlxB?s=20')).toBe(false)
      expect(validateSourceURL('twitter.com')).toBe(false)
      expect(validateSourceURL('www.twitter.com')).toBe(false)
      expect(validateSourceURL('twitter.org')).toBe(false)
      expect(validateSourceURL('facebook.com')).toBe(false)
      expect(validateSourceURL('www.youtube.com/watch?v=D900-udw9Dw&ab_channel=SwanBitcoin')).toBe(false)
      expect(validateSourceURL('youtube.com/watch?v=D900-udw9Dw&ab_channel=SwanBitcoin')).toBe(false)
      expect(validateSourceURL('youtube.com')).toBe(false)
      expect(validateSourceURL('www.youtube.com')).toBe(false)
      expect(validateSourceURL('youtube.org')).toBe(false)
      expect(validateSourceURL('@tomsmith')).toBe(false)
      expect(validateSourceURL('389sdfsdfjk')).toBe(false)
    })
  })

  describe('Valid URLs', () => {
    it('should return true for valid URLs', () => {
      expect(validateSourceURL('https://www.google.com')).toBe(true)
      expect(validateSourceURL('https://sub.domain.com')).toBe(true)
      expect(validateSourceURL('http://www.test.info/about')).toBe(true)
      expect(validateSourceURL('https://www.test.com/about/index.html')).toBe(true)
      expect(validateSourceURL('https://domain.com/query?name=value')).toBe(true)
      expect(validateSourceURL('http://www.test.com/path/to/resource?name=value&another=one')).toBe(true)
      expect(validateSourceURL('https://test.com/path/to/resource?name=value&another=one#anchor')).toBe(true)
      expect(validateSourceURL('https://www.domain.biz')).toBe(true)
      expect(validateSourceURL('https://twitter.com/i/spaces/1zqKVqwrVzlxB?s=20')).toBe(true)
      expect(validateSourceURL('https://twitter.com/@Ekep-Obasi')).toBe(true)
      expect(validateSourceURL('https://youtube.com/live/8djflewrio')).toBe(true)
      expect(validateSourceURL('https://google.com')).toBe(true)
      expect(validateSourceURL('https://twitter.com/i/spaces/1zqKVqwrVzlxB?s=20')).toBe(true)
      expect(validateSourceURL('https://twitter.com')).toBe(true)
      expect(validateSourceURL('https://www.youtube.com/watch?v=D900-udw9Dw&ab_channel=SwanBitcoin')).toBe(true)
      expect(validateSourceURL('https://youtube.com')).toBe(true)
    })
  })
})
