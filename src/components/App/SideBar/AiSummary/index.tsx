import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import ChevronDownIcon from '~/components/Icons/ChevronDownIcon'
import ChevronUpIcon from '~/components/Icons/ChevronUpIcon'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { AIEntity } from '~/types'
import { colors } from '~/utils/colors'
import { EpisodeSkeleton } from '../Relevance/EpisodeSkeleton'
import { AiAnswer } from './AiAnswer'
import { AiQuestions } from './AiQuestions'
import { AiSummarySkeleton } from './AiSummarySkeleton'
import { AiSources } from './AiSources'

type Props = {
  question: string
  response: AIEntity
}

const Title = styled(Text)`
  font-size: 20px;
  font-weight: 600;
  flex-grow: 1;
`

const TitleWrapper = styled(Flex).attrs({
  direction: 'row',
  alignItems: 'center',
})`
  padding: 24px 10px 0 24px;
`

export const AiSummary = ({ question, response }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const toggleCollapse = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Wrapper>
      <TitleWrapper>
        <Title ref={ref}>{question}</Title>
        <CollapseButton onClick={toggleCollapse}>{collapsed ? <ChevronDownIcon /> : <ChevronUpIcon />}</CollapseButton>
      </TitleWrapper>
      {response.answerLoading ? <AiSummarySkeleton /> : <AiAnswer answer={response.answer || ''} />}
      {!collapsed && (
        <>
          {response.questionsLoading ? (
            <EpisodeSkeleton count={1} />
          ) : (
            <AiQuestions questions={response.questions || []} />
          )}
          {response.sourcesLoading ? <EpisodeSkeleton count={1} /> : <AiSources sourceIds={response.sources || []} />}
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled(Flex).attrs({
  direction: 'column',
})`
  border-top: 1px solid #101317;
`

const CollapseButton = styled.button`
  background-color: ${colors.COLLAPSE_BUTTON} !important;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 27px;
  border-radius: 6px;
  flex-shrink: 0;

  svg {
    width: 8px;
    height: 8px;
    color: white;
  }
`
