import EmotionDown from '~/components/Icons/EmotionDown'
import EmotionMeh from '~/components/Icons/EmotionMeh'
import EmotionUp from '~/components/Icons/EmotionUp'
import { colors } from '~/utils/colors'

export const getSentimentIcon = (score?: number): JSX.Element => {
  if (score === undefined || score === null) {
    return (
      <span style={{ color: colors.EMOTION_NORMAL }}>
        <EmotionMeh />
      </span>
    )
  }

  if (score <= 4) {
    return (
      <span style={{ color: colors.EMOTION_DOWN }}>
        <EmotionDown />
      </span>
    )
  }

  if (score >= 7) {
    return (
      <span style={{ color: colors.EMOTION_UP }}>
        <EmotionUp />
      </span>
    )
  }

  return (
    <span style={{ color: colors.EMOTION_NORMAL }}>
      <EmotionMeh />
    </span>
  )
}
