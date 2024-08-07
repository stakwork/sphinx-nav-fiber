import Button from '@mui/material/Button'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import AiPauseIcon from '~/components/Icons/AiPauseIcon'
import AiPlayIcon from '~/components/Icons/AiPlayIcon'
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
  refId: string
}

const Title = styled(Text)`
  font-size: 20px;
  font-weight: 600;
  flex-grow: 1;
  overflow-wrap: break-word;
  white-space: normal;
  word-break: break-word;
  margin-right: 10px;
`

const TitleWrapper = styled(Flex).attrs({
  direction: 'row',
  alignItems: 'center',
})`
  padding: 24px 10px 24px 24px;
  flex-shrink: 1;
  overflow: hidden;
`

export const AiSummary = ({ question, response, refId }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const [collapsed, setCollapsed] = useState(false)
  const { setAiSummaryAnswer } = useAiSummaryStore((s) => s)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const toggleCollapse = () => {
    setCollapsed(!collapsed)
  }

  const handleLoaded = () => {
    if (refId) {
      setAiSummaryAnswer(refId, { hasBeenRendered: true })
    }
  }

  const handleToggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }

      setIsPlaying(!isPlaying)
    }
  }

  return (
    <Wrapper>
      <TitleWrapper>
        <Title ref={ref}>{question}</Title>
        {response.audio_en && (
          <AudioButton onClick={handleToggleAudio}>{isPlaying ? <AiPauseIcon /> : <AiPlayIcon />}</AudioButton>
        )}
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
          {(response?.sources || []).length ? <AiSources sourceIds={response.sources || []} /> : null}
        </>
      )}
      {response.audio_en && (
        <StyledAudio ref={audioRef} src={response.audio_en}>
          <track kind="captions" />
        </StyledAudio>
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
    width: 27px;
    height: 26px;
    min-width: 26px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1px;
  }

  svg {
    width: 9px;
    height: 9px;
    color: white;
  }
`

const AudioButton = styled(Button)`
  &&.MuiButton-root {
    background-color: ${colors.COLLAPSE_BUTTON};
    border: none;
    cursor: pointer;
    flex-shrink: 0;
    padding: 0px;
    width: 27px;
    height: 26px;
    min-width: 26px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1px;
    margin-right: 10px;
  }

  svg {
    width: 29px;
    height: 12px;
    color: white;
  }
`

const StyledAudio = styled.audio`
  display: none;
`
