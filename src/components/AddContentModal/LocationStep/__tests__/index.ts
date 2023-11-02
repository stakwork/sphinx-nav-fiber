import { validateLatitude, validateLongitude } from '../utils'

describe('validateLongitude', () => {
  /**
   * @jest-environment jsdom
   * @jest-environment-options  {"url": "https://jestjs.io/"}
   * */
  it('should assert we validateLongitude properly', async () => {
    const outsideRangeErrorMsg = 'Longitude must be between -180 and 180.'
    const needValueErrorMsg = 'Longitude is required.'

    expect(validateLongitude(180)).toBe(true)
    expect(validateLongitude(181)).toBe(outsideRangeErrorMsg)
    expect(validateLongitude(179)).toBe(true)
    expect(validateLongitude(0)).toBe(true)
    expect(validateLongitude(null)).toBe(needValueErrorMsg)
  })
})

describe('validateLatitude', () => {
  /**
   * @jest-environment jsdom
   * @jest-environment-options  {"url": "https://jestjs.io/"}
   * */
  it('should assert we validateLatitude properly', async () => {
    const outsideRangeErrorMsg = 'Latitude must be between -90 and 90.'
    const needValueErrorMsg = 'Latitude is required.'

    expect(validateLatitude(90)).toBe(true)
    expect(validateLatitude(91)).toBe(outsideRangeErrorMsg)
    expect(validateLatitude(89)).toBe(true)
    expect(validateLatitude(0)).toBe(true)
    expect(validateLatitude(null)).toBe(true)
  })
})
