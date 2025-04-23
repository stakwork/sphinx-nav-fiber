import EmotionDown from '../../../components/Icons/EmotionDown'
import EmotionMeh from '../../../components/Icons/EmotionMeh'
import EmotionUp from '../../../components/Icons/EmotionUp'
import { colors } from '../../colors/index'
import { getSentimentIcon } from '../index'

describe('getSentimentIcon', () => {
  it('should return EmotionMeh when score is undefined', () => {
    const result = getSentimentIcon()

    expect(result.type).toBe(EmotionMeh)
    expect(result.props.color).toBe(colors.EMOTION_NORMAL)
  })

  it('should return EmotionDown when score is less than or equal to 4', () => {
    const result = getSentimentIcon(3)

    expect(result.type).toBe(EmotionDown)
    expect(result.props.color).toBe(colors.EMOTION_DOWN)
  })

  it('should return EmotionUp when score is greater than or equal to 7', () => {
    const result = getSentimentIcon(8)

    expect(result.type).toBe(EmotionUp)
    expect(result.props.color).toBe(colors.EMOTION_UP)
  })

  it('should return EmotionMeh when score is between 5 and 6', () => {
    const result = getSentimentIcon(6)

    expect(result.type).toBe(EmotionMeh)
    expect(result.props.color).toBe(colors.EMOTION_NORMAL)
  })
})
