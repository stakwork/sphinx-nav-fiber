import { formatNumberWithCommas } from '../index'

describe('formatNumberWithCommas', () => {
  it('should format a number with default locale (en-US)', () => {
    const result = formatNumberWithCommas(1000000)

    expect(result).toBe('1,000,000')
  })

  it('should handle a negative number', () => {
    const result = formatNumberWithCommas(-1234567.89)

    expect(result).toBe('-1,234,567.89')
  })

  it('should handle a decimal number', () => {
    const result = formatNumberWithCommas(1234.56)

    expect(result).toBe('1,234.56')
  })

  it('should handle zero', () => {
    const result = formatNumberWithCommas(0)

    expect(result).toBe('0')
  })
})
