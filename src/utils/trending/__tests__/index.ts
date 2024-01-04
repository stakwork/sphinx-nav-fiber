import { showPlayButton } from '../index'

const trendingTopics = [
  {
    count: 1,
    topic: 'Bitcoin',
    tldr: 'Lorem ipsum dolor sit amet',
  },
  {
    count: 2,
    topic: 'AquaBitcoin',
    tldr: 'Lorem ipsum dolor sit amet',
  },
  {
    count: 3,
    topic: 'Appreciation',
    tldr: 'Lorem ipsum dolor sit amet',
    audio_EN: 'Lorem ipsum dolor sit amet',
  },
]

describe('showPlayButton function', () => {
  test('should display not play button when there are 0 or 1 TLDR results', () => {
    expect(
      showPlayButton([
        { count: 0, topic: 'Bitcoin', tldr: 'Lorem ipsum dolor sit amet' },
        { count: 1, topic: 'Genocide', audio_EN: 'Lorem ipsum dolor sit amet' },
      ]),
    ).toBe(false)
  })

  test('should display play button when there are 2 or more TLDR results', () => {
    expect(showPlayButton(trendingTopics)).toBe(true)
  })

  test('should not display play button when there is no audio available', () => {
    expect(showPlayButton([{ count: 0, topic: 'Bitcoin' }])).toBe(false)
  })
})
