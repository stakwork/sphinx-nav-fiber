import { videoTimetoSeconds } from '.'

describe('test videoTimetoSeconds', () => {
  test('correct time', () => {
    expect(videoTimetoSeconds('00:00:01').start).toBe(1)
    expect(videoTimetoSeconds('00:01:01').start).toBe(61)
    expect(videoTimetoSeconds('01:01:01').start).toBe(3661)
  })
})
