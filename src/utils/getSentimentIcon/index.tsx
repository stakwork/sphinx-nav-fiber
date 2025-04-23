import EmotionDown from '~/components/Icons/EmotionDown'
import EmotionMeh from '~/components/Icons/EmotionMeh'
import EmotionUp from '~/components/Icons/EmotionUp'
import { colors } from '~/utils/colors'

export const getSentimentIcon = (score?: number): JSX.Element => {
  if (score === undefined || score === null) {
    return <EmotionMeh color={colors.EMOTION_NORMAL} />
  }

  if (score <= 4) {
    return <EmotionDown color={colors.EMOTION_DOWN} />
  }

  if (score >= 7) {
    return <EmotionUp color={colors.EMOTION_UP} />
  }

  return <EmotionMeh color={colors.EMOTION_NORMAL} />
}
