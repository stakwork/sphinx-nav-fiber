import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { AIEntity } from '~/types'
import { EpisodeSkeleton } from '../Relevance/EpisodeSkeleton'
import { AiAnswer } from './AiAnswer'
import { AiQuestions } from './AiQuestions'
import { AiSources } from './AiSources'
import { AiSummarySkeleton } from './AiSummarySkeleton'

type Props = {
  question: string
  response: AIEntity
}

const Title = styled(Text)`
  font-size: 20px;
  font-weight: 600;
  padding: 24px 24px 0;
`

export const AiSummary = ({ question, response }: Props) => (
  <Wrapper>
    <Title>{question}</Title>
    {response.answerLoading ? <AiSummarySkeleton /> : <AiAnswer answer={response.answer || ''} />}
    {response.sourcesLoading ? <EpisodeSkeleton count={1} /> : <AiSources sourceIds={response.sources || []} />}
    {response.questionsLoading ? <EpisodeSkeleton count={1} /> : <AiQuestions questions={response.questions || []} />}
  </Wrapper>
)

const Wrapper = styled(Flex).attrs({
  direction: 'column',
})`
  border-top: 1px solid #101317;
`
