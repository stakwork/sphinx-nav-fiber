import Button from '@mui/material/Button'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import ChevronDownIcon from '~/components/Icons/ChevronDownIcon'
import ChevronUpIcon from '~/components/Icons/ChevronUpIcon'
import { Flex } from '~/components/common/Flex'
import { useAiSummaryStore } from '~/stores/useAiSummaryStore'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { useUserStore } from '~/stores/useUserStore'
import { AIEntity } from '~/types'
import { colors } from '~/utils/colors'
import { EpisodeSkeleton } from '../Relevance/EpisodeSkeleton'
import { AiAnswer } from './AiAnswer'
import { AiQuestions } from './AiQuestions'
import { AiSources } from './AiSources'
import { AiSummarySkeleton } from './AiSummarySkeleton'
import { StyledMarkdown } from './utils/AiSummaryHighlight/markdown'

type Props = {
  question: string
  response: AIEntity
  refId: string
}

const TitleContainer = styled.div`
  flex-grow: 1;
  overflow-wrap: break-word;
  white-space: normal;
  word-break: break-word;
  margin-top: calc(100px - 104px);
`

const TitleMarkdown = styled(StyledMarkdown)`
  font-size: 16px;
  font-weight: normal;
  line-height: 1.5;
`

const TitleWrapper = styled(Flex).attrs({
  direction: 'row',
  alignItems: 'center',
})`
  padding: 24px 10px 0 24px;
  flex-shrink: 1;
  overflow: hidden;
`

export const AiSummary = ({ question, response, refId }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const [collapsed, setCollapsed] = useState(false)
  const setAiSummaryAnswer = useAiSummaryStore((s) => s.setAiSummaryAnswer)
  const fetchAiData = useAiSummaryStore((s) => s.fetchAIData)
  const resetAiSummaryAnswer = useAiSummaryStore((s) => s.resetAiSummaryAnswer)
  const { setBudget } = useUserStore((s) => s)
  const { setAbortRequests } = useDataStore((s) => s)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const { currentPlayingAudio, setCurrentPlayingAudio } = useAppStore((s) => s)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  useEffect(() => {
    const audioElement = audioRef.current

    const onAudioPlaybackComplete = () => {
      setCurrentPlayingAudio(null)
      setIsPlaying(false)
    }

    if (audioElement) {
      audioElement.addEventListener('ended', onAudioPlaybackComplete)
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener('ended', onAudioPlaybackComplete)
      }
    }
  }, [setCurrentPlayingAudio, isPlaying])

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
      if (audioRef.current.paused) {
        audioRef.current.play()
        setCurrentPlayingAudio(audioRef)
        setIsPlaying(true)
      } else {
        audioRef.current.pause()
        setCurrentPlayingAudio(null)
        setIsPlaying(false)
      }
    }
  }

  const togglePlay = () => {
    if (currentPlayingAudio?.current && currentPlayingAudio.current !== audioRef.current) {
      currentPlayingAudio.current.pause()
      setCurrentPlayingAudio(null)
    }

    handleToggleAudio()
  }

  const handleRegenerate = async () => {
    setAiSummaryAnswer(refId, {
      question,
      answer: '',
      answerLoading: true,
      sourcesLoading: true,
      questionsLoading: true,
      entities: undefined,
      shouldRender: true,
      questions: [],
      sources: [],
      audio_en: undefined,
    })

    resetAiSummaryAnswer()

    await fetchAiData(setBudget, setAbortRequests, question, { force_regenerate: true })
  }

  return (
    <Wrapper>
      <TitleWrapper>
        <TitleContainer ref={ref}>
          <TitleMarkdown>{`# ${question}`}</TitleMarkdown>
        </TitleContainer>
        {question && (
          <CollapseButton onClick={toggleCollapse}>
            {collapsed ? <ChevronDownIcon /> : <ChevronUpIcon />}
          </CollapseButton>
        )}
      </TitleWrapper>
      {!collapsed && (
        <>
          {response.answerLoading ? (
            <AiSummarySkeleton />
          ) : (
            <AiAnswer
              answer={response.answer || ''}
              chain={refId}
              entities={response.entities}
              handleLoaded={() => handleLoaded()}
              hasAudio={!!response.audio_en}
              hasBeenRendered={!!response?.hasBeenRendered}
              isPlaying={isPlaying && currentPlayingAudio?.current === audioRef.current}
              onRegenerate={handleRegenerate}
              onTogglePlay={togglePlay}
            />
          )}
          {response.questionsLoading ? (
            <EpisodeSkeleton count={1} />
          ) : (
            <AiQuestions questions={response.questions || []} />
          )}
          {(response?.sources || []).length ? (
            <AiSources question={question} sourceIds={response.sources || []} />
          ) : null}
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

const StyledAudio = styled.audio`
  display: none;
`
