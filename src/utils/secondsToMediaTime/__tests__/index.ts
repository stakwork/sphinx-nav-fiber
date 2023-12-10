import { secondsToMediaTime } from '..'

describe('secondsToMediaTime', () => {
  it('converts 0 seconds to "00:00"', () => {
    expect(secondsToMediaTime(0)).toEqual('00:00')
  })

  it('converts 65 seconds to "01:05"', () => {
    expect(secondsToMediaTime(65)).toEqual('01:05')
  })

  it('converts 3600 seconds to "60:00"', () => {
    expect(secondsToMediaTime(3600)).toEqual('60:00')
  })

  it('converts 3665 seconds to "61:05"', () => {
    expect(secondsToMediaTime(3665)).toEqual('61:05')
  })
})
