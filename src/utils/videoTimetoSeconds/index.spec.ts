import { videoTimeToSeconds } from '.'

describe('test videoTimeToSeconds', () => {
  test('correct time', () => {
    expect(videoTimeToSeconds('00:00:01')).toBe(1)
    expect(videoTimeToSeconds('00:01:01')).toBe(61)
    expect(videoTimeToSeconds('01:01:01')).toBe(3661)
  })
})
