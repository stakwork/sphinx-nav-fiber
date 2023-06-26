import { formatTimestamp } from '..'

describe('formatTimestamp', () => {
  it('should return both start and end with a space-space if end is base10', () => {
    expect(formatTimestamp('1687277349-1684598949')).toEqual('1687277349 - 1684598949')
  })

  it('should return just start if end is not base10', () => {
    expect(formatTimestamp('1687277349-0xF')).toEqual('1687277349')
  })

  it('should return just start if end is not base10 but not sure if this is what we want we might want to check for base10 for start', () => {
    expect(formatTimestamp('0xG-0xF')).toEqual('0xG')
  })
})
