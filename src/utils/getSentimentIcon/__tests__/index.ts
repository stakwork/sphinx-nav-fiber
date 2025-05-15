import EmotionDown from '../../../components/Icons/EmotionDown'
import EmotionMeh from '../../../components/Icons/EmotionMeh'
import EmotionUp from '../../../components/Icons/EmotionUp'
import { colors } from '../../colors/index'
import { getSentimentIcon } from '../index'

describe('getSentimentIcon', () => {
  it('should return EmotionMeh wrapped in span when score is undefined', () => {
    const result = getSentimentIcon()

    expect(result.type).toBe('span')
    expect(result.props.style.color).toBe(colors.EMOTION_NORMAL)
    expect(result.props.children.type).toBe(EmotionMeh)
  })

  it('should return EmotionDown wrapped in span when score is less than or equal to 4', () => {
    const result = getSentimentIcon(3)

    expect(result.type).toBe('span')
    expect(result.props.style.color).toBe(colors.EMOTION_DOWN)
    expect(result.props.children.type).toBe(EmotionDown)
  })

  it('should return EmotionUp wrapped in span when score is greater than or equal to 7', () => {
    const result = getSentimentIcon(8)

    expect(result.type).toBe('span')
    expect(result.props.style.color).toBe(colors.EMOTION_UP)
    expect(result.props.children.type).toBe(EmotionUp)
  })

  it('should return EmotionMeh wrapped in span when score is between 5 and 6', () => {
    const result = getSentimentIcon(6)

    expect(result.type).toBe('span')
    expect(result.props.style.color).toBe(colors.EMOTION_NORMAL)
    expect(result.props.children.type).toBe(EmotionMeh)
  })
})
