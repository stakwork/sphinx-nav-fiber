import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { colors } from '~/utils/colors'

type Props = {
  question: string
  answer: string
}

const AiSummaryDetailsWrapper = styled(Flex).attrs({
  direction: 'column',
})`
  padding: 1.5rem;
  border-top: 1px solid #101317;
  background: ${colors.BG1};
  gap: 1rem;
`

const Title = styled(Text)`
  font-size: 20px;
  font-weight: 600;
`

const SummaryText = styled(Text)`
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;
`

export const AiSummaryDetails = ({ question, answer }: Props) => {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let currentIndex = 0

    const typeCharacter = () => {
      if (currentIndex < answer.length) {
        setDisplayedText((prev) => prev + answer[currentIndex])
        currentIndex += 1
        setTimeout(typeCharacter, 25)
      }
    }

    if (answer) {
      typeCharacter()
    }

    // Cleanup function in case the component unmounts during typing
    return () => {
      if (answer) {
        currentIndex = answer.length
      }
    }
  }, [answer])

  return (
    <AiSummaryDetailsWrapper>
      <Title>{question}</Title>

      <SummaryText>{displayedText}</SummaryText>
    </AiSummaryDetailsWrapper>
  )
}
