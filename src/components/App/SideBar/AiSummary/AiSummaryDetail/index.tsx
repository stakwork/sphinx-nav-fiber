import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { AIEntity } from '~/types'
import { colors } from '~/utils/colors'
import { EpisodeSkeleton } from '../../Relevance/EpisodeSkeleton'
import { AiSummarySkeleton } from '../AiSummarySkeleton'
import { AiQuestions } from './AiQuestions'
import { AiSources } from './AiSources'

type Props = {
  question: string
  response: AIEntity
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

export const AiSummaryDetails = ({ question, response }: Props) => {
  const [displayedText, setDisplayedText] = useState('')
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const { answer } = response
    let timeoutId: NodeJS.Timeout

    if (!answer) {
      return
    }

    if (displayedText.length < answer.length) {
      timeoutId = setTimeout(() => {
        setDisplayedText(answer.slice(0, displayedText.length + 1))
      }, 10)

      // eslint-disable-next-line consistent-return
      return () => clearTimeout(timeoutId)
    }
  }, [response, displayedText])

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [response])

  return (
    <>
      {response.answerLoading ? (
        <AiSummarySkeleton ref={ref} />
      ) : (
        <AiSummaryDetailsWrapper>
          <Title>{question}</Title>
          <SummaryText>{displayedText}</SummaryText>
        </AiSummaryDetailsWrapper>
      )}
      {response.sourcesLoading ? <EpisodeSkeleton count={1} /> : <AiSources sourceIds={response.sources || []} />}
      {response.questionsLoading ? <EpisodeSkeleton count={1} /> : <AiQuestions questions={response.questions || []} />}
    </>
  )
}
