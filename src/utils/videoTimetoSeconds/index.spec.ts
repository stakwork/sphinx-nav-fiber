import { videoTimetoSeconds } from '.'

describe('test videoTimetoSeconds', () => {
  test('correct time', () => {
    expect(videoTimetoSeconds('00:00:01')).toBe(1)
    expect(videoTimetoSeconds('00:01:01')).toBe(61)
    expect(videoTimetoSeconds('01:01:01')).toBe(3661)
  })
})
