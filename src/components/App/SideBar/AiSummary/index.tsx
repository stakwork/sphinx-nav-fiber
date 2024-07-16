import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { AIEntity, NodeExtended } from '~/types'
import { EpisodeSkeleton } from '../Relevance/EpisodeSkeleton'
import { AiAnswer } from './AiAnswer'
import { AiQuestions } from './AiQuestions'
import { AiSources } from './AiSources'
import { AiSummarySkeleton } from './AiSummarySkeleton'

type Props = {
  question: string
  response: AIEntity
  filteredNodes: NodeExtended[]
}

const Title = styled(Text)`
  font-size: 20px;
  font-weight: 600;
  padding: 24px 24px 0;
`

export const AiSummary = ({ question, response, filteredNodes }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <Wrapper>
      <Title ref={ref}>{question}</Title>
      {response.answerLoading ? (
        <AiSummarySkeleton />
      ) : (
        <AiAnswer answer={response.answer || ''} filteredNodes={filteredNodes} />
      )}
      {response.sourcesLoading ? <EpisodeSkeleton count={1} /> : <AiSources sourceIds={response.sources || []} />}
      {response.questionsLoading ? <EpisodeSkeleton count={1} /> : <AiQuestions questions={response.questions || []} />}
    </Wrapper>
  )
}

const Wrapper = styled(Flex).attrs({
  direction: 'column',
})`
  border-top: 1px solid #101317;
`
