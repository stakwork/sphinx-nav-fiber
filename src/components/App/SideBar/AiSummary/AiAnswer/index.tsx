import Button from '@mui/material/Button'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { StyledMarkdown } from '~/components/App/SideBar/AiSummary/utils/AiSummaryHighlight/markdown'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import AiCheckIcon from '~/components/Icons/AiCheckIcon'
import AiCopyIcon from '~/components/Icons/AiCopyIcon'
import AiPauseIcon from '~/components/Icons/AiPauseIcon'
import AiPlayIcon from '~/components/Icons/AiPlayIcon'
import NegativeFeedBackIcon from '~/components/Icons/NegativeFeedBackIcon'
import PositiveFeedBackIcon from '~/components/Icons/PositiveFeedBackIcon'
import RegenerateIcon from '~/components/Icons/RegenerateIcon'
import ThumbDownIcon from '~/components/Icons/ThumbDownIcon'
import ThumbUpIcon from '~/components/Icons/ThumbUpIcon'
import { postFeedback } from '~/network/fetchSourcesData'
import { useAppStore } from '~/stores/useAppStore'
import { ExtractedEntity } from '~/types/index'
import { colors } from '~/utils/colors'

type Props = {
  answer: string
  entities?: ExtractedEntity[]
  hasBeenRendered: boolean
  handleLoaded: () => void
  onRegenerate?: () => void
  isPlaying?: boolean
  onTogglePlay?: () => void
  hasAudio?: boolean
  chain: string
}

const Wrapper = styled(Flex).attrs({
  direction: 'column',
})`
  padding: 0 1.5rem 1.5rem;
  gap: 1rem;
  overflow-wrap: break-word;
  white-space: normal;
  word-break: break-word;
`

const StyledAnswer = styled(Text)`
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;

  ${StyledMarkdown} {
    margin: 0;
    padding: 0;
  }
`

const ActionsWrapper = styled(Flex)`
  flex-direction: row;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 5px;
`

const IconWrapper = styled(Flex)`
  justify-content: center;
  align-items: center;
  font-size: 16px;
`

const StyledButton = styled(Button)`
  &&.MuiButton-root {
    position: relative;
    width: 32px;
    height: 32px;
    min-width: 32px;
    padding: 0;
    background-color: transparent;
    border-radius: 6px;
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.create(['opacity', 'box-shadow', 'background-color', 'transform'])};

    &.active {
      background-color: ${colors.COLLAPSE_BUTTON};
    }

    &.hidden {
      opacity: 0;
      transform: scale(0.5);
      pointer-events: none;
      transition: opacity 0.2s ease, transform 0.2s ease;
    }
    ${Text} {
      display: none;
      opacity: 0;
      width: 0;
      padding: 4px 10px;
      border-radius: 4px;
      background: #000;
      box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
      position: absolute;
      left: 50%;
      bottom: -28px;
      transform: translateX(-50%);
      z-index: 99;
      white-space: nowrap;
      visibility: visible;
      font-size: 11px;
      font-style: normal;
      font-weight: 400;
      transition: ${({ theme }) => theme.transitions.create(['opacity', 'visually'])};
    }

    &:hover:not(:active) {
      background-color: ${colors.COLLAPSE_BUTTON};
    }

    &:hover {
      ${Text} {
        display: block;
        width: min-content;
        opacity: 1;
        visibility: visible;
      }
    }

    svg {
      width: 16px;
      height: 16px;
      color: #909baa;
      fill: none;
    }
  }
`

const CopyIconWrapper = styled(Flex)`
  justify-content: center;
  align-items: center;
  font-size: 16px;

  svg {
    width: 18px !important;
    height: 18px !important;
    fill: none !important;
    color: #909baa !important;

    path {
      transform: scale(1.2) !important;
      transform-origin: center !important;
    }

    rect {
      transform: translateX(-2px) !important;
      width: 11px !important;
      height: 11px !important;
      border-radius: 2px !important;
    }
  }
`

export const AiAnswer = ({
  answer,
  entities,
  handleLoaded,
  hasBeenRendered,
  onRegenerate,
  isPlaying,
  onTogglePlay,
  hasAudio,
  chain,
}: Props) => {
  const [displayedText, setDisplayedText] = useState('')
  const [highlightedEntities, setHighlightedEntities] = useState<ExtractedEntity[] | undefined>(entities)
  const [isDescriptionComplete, setIsDescriptionComplete] = useState(false)
  const [feedback, setFeedback] = useState<'positive' | 'negative' | null>(null)
  const [isCopied, setIsCopied] = useState(false)
  const { setIsHtmlContent, setHtmlContent } = useAppStore((s) => s)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (!answer || hasBeenRendered) {
      return undefined
    }

    const isHtmlAnswer = isHtmlContent(answer)

    if (isHtmlAnswer) {
      setDisplayedText(answer)
      setIsDescriptionComplete(true)
      handleLoaded()

      return undefined
    }

    if (displayedText.length < answer.length) {
      timeoutId = setTimeout(() => {
        setDisplayedText(answer.slice(0, displayedText.length + 1))
      }, 10)
    } else {
      setIsDescriptionComplete(true)
      handleLoaded()
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [answer, displayedText, handleLoaded, hasBeenRendered])

  useEffect(() => {
    if (displayedText) {
      return
    }

    if (hasBeenRendered) {
      setDisplayedText(answer)
      setIsDescriptionComplete(true)
    }
  }, [answer, displayedText, hasBeenRendered])

  useEffect(() => {
    if (entities && highlightedEntities !== entities) {
      setHighlightedEntities(entities)
    }
  }, [entities, highlightedEntities])

  interface FeedbackResponse {
    status: 'success' | 'error'
  }

  const sendFeedback = async (feedbackType: 'helpful' | 'unhelpful') => {
    try {
      const payload = {
        answer,
        chain,
        feedback_type: feedbackType,
      }

      const response = (await postFeedback(payload)) as FeedbackResponse

      if (response.status === 'success') {
        setFeedback(feedbackType === 'helpful' ? 'positive' : 'negative')
      } else {
        console.error(response, 'Failed to send feedback')
      }
    } catch (error) {
      console.error('Error sending feedback:', error)
    }
  }

  const handlePositiveFeedback = () => {
    if (feedback === 'positive') {
      setFeedback(null)
    } else {
      sendFeedback('helpful')
    }
  }

  const handleNegativeFeedback = () => {
    if (feedback === 'negative') {
      setFeedback(null)
    } else {
      sendFeedback('unhelpful')
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(answer)
      setIsCopied(true)

      setTimeout(() => {
        setIsCopied(false)
      }, 1000)
    } catch (err) {
      console.error('Failed to copy text:', err)
    }
  }

  const isHtmlContent = (text: string): boolean => {
    const trimmedText = text.trim()

    return trimmedText.startsWith('<!DOCTYPE html>') || trimmedText.startsWith('<html') || /^```html/.test(trimmedText)
  }

  useEffect(() => {
    if (displayedText) {
      if (isHtmlContent(displayedText)) {
        setIsHtmlContent(true)
        setHtmlContent(displayedText)
      }
    }
  }, [displayedText, setIsHtmlContent, setHtmlContent])

  return (
    <Wrapper>
      <StyledAnswer>
        <StyledMarkdown>{displayedText}</StyledMarkdown>
      </StyledAnswer>
      {isDescriptionComplete && displayedText.length === answer.length && (
        <ActionsWrapper>
          {hasAudio && (
            <StyledButton onClick={onTogglePlay}>
              <IconWrapper>{isPlaying ? <AiPauseIcon /> : <AiPlayIcon />}</IconWrapper>
              <Text>Read Aloud</Text>
            </StyledButton>
          )}
          <StyledButton onClick={handleCopy}>
            {isCopied ? (
              <IconWrapper>
                <AiCheckIcon />
              </IconWrapper>
            ) : (
              <CopyIconWrapper>
                <AiCopyIcon />
              </CopyIconWrapper>
            )}
            <Text>Copy</Text>
          </StyledButton>
          {feedback === null && (
            <>
              <StyledButton onClick={handlePositiveFeedback}>
                <IconWrapper>
                  <PositiveFeedBackIcon />
                </IconWrapper>
                <Text>Helpful</Text>
              </StyledButton>
              <StyledButton onClick={handleNegativeFeedback}>
                <IconWrapper>
                  <NegativeFeedBackIcon />
                </IconWrapper>
                <Text>Unhelpful</Text>
              </StyledButton>
            </>
          )}
          {feedback === 'positive' && (
            <StyledButton disabled>
              <IconWrapper>
                <ThumbUpIcon />
              </IconWrapper>
              <Text>Helpful</Text>
            </StyledButton>
          )}
          {feedback === 'negative' && (
            <StyledButton disabled>
              <IconWrapper>
                <ThumbDownIcon />
              </IconWrapper>
              <Text>Unhelpful</Text>
            </StyledButton>
          )}
          <StyledButton onClick={onRegenerate}>
            <IconWrapper>
              <RegenerateIcon />
            </IconWrapper>
            <Text>Rewrite</Text>
          </StyledButton>
        </ActionsWrapper>
      )}
    </Wrapper>
  )
}
