import { secondsToMediaTime } from '..'

describe('secondsToMediaTime', () => {
  it('converts 0 seconds to "0:00"', () => {
    expect(secondsToMediaTime(0)).toEqual('0:00')
  })

  it('converts 65 seconds to "1:05"', () => {
    expect(secondsToMediaTime(65)).toEqual('1:05')
  })

  it('converts 3600 seconds to "1:00:00"', () => {
    expect(secondsToMediaTime(3600)).toEqual('1:00:00')
  })

  it('converts 3665 seconds to "1:01:05"', () => {
    expect(secondsToMediaTime(3665)).toEqual('1:01:05')
  })

  it('converts 5025 seconds to "1:23:45"', () => {
    expect(secondsToMediaTime(5025)).toEqual('1:23:45')
  })

  it('converts 7261 seconds to "2:01:01"', () => {
    expect(secondsToMediaTime(7261)).toEqual('2:01:01')
  })

  it('handles large values correctly', () => {
    expect(secondsToMediaTime(123456)).toEqual('34:17:36')
  })
})
