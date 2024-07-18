import Button from '@mui/material/Button'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import ChevronDownIcon from '~/components/Icons/ChevronDownIcon'
import ChevronUpIcon from '~/components/Icons/ChevronUpIcon'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useAiSummaryStore } from '~/stores/useAiSummaryStore'
import { AIEntity } from '~/types'
import { colors } from '~/utils/colors'
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
  flex-grow: 1;
`

const TitleWrapper = styled(Flex).attrs({
  direction: 'row',
  alignItems: 'center',
})`
  padding: 24px 10px 24px 24px;
`

export const AiSummary = ({ question, response }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const [collapsed, setCollapsed] = useState(false)
  const { setAiSummaryAnswer } = useAiSummaryStore((s) => s)

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const toggleCollapse = () => {
    setCollapsed(!collapsed)
  }

  const handleLoaded = () => {
    if (question) {
      setAiSummaryAnswer(question, { hasBeenRendered: true })
    }
  }

  return (
    <Wrapper>
      <TitleWrapper>
        <Title ref={ref}>{question}</Title>
        <CollapseButton onClick={toggleCollapse}>{collapsed ? <ChevronDownIcon /> : <ChevronUpIcon />}</CollapseButton>
      </TitleWrapper>
      {!collapsed && (
        <>
          {response.answerLoading ? (
            <AiSummarySkeleton />
          ) : (
            <AiAnswer
              answer={response.answer || ''}
              entities={response.entities}
              handleLoaded={() => handleLoaded()}
              hasBeenRendered={!!response?.hasBeenRendered}
            />
          )}
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

const CollapseButton = styled(Button)`
  &&.MuiButton-root {
    background-color: ${colors.COLLAPSE_BUTTON};
    border: none;
    cursor: pointer;
    flex-shrink: 0;
    padding: 0px;
    width: 29px;
    height: 26px;
    min-width: 26px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 9px;
    height: 9px;
    color: white;
  }
`
