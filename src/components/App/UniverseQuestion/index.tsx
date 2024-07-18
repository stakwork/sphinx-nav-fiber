import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'

import { TextareaAutosize } from '@mui/base'
import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import ArrowForwardIcon from '~/components/Icons/ArrowForwardIcon'
import ExploreIcon from '~/components/Icons/ExploreIcon'
import HelpIcon from '~/components/Icons/HelpIcon'
import { getAboutData } from '~/network/fetchSourcesData'
import { useAiSummaryStore } from '~/stores/useAiSummaryStore'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { useUserStore } from '~/stores/useUserStore'
import { colors } from '~/utils/colors'

export const UniverseQuestion = () => {
  const [question, setQuestion] = useState('')
  const [seedQuestions, setSeedQuestions] = useState<string[]>([])
  const { fetchData, setAbortRequests } = useDataStore((s) => s)
  const [setBudget] = useUserStore((s) => [s.setBudget])
  const setUniverseQuestionIsOpen = useAppStore((s) => s.setUniverseQuestionIsOpen)
  const resetAiSummaryAnswer = useAiSummaryStore((s) => s.resetAiSummaryAnswer)

  useEffect(() => {
    const fetchSeedQuestions = async () => {
      try {
        const response = await getAboutData()

        if (response.seed_questions) {
          const shuffledQuestions = shuffleArray(response.seed_questions)

          setSeedQuestions(shuffledQuestions)
        }
      } catch (error) {
        console.error('Error fetching seed questions:', error)
      }
    }

    fetchSeedQuestions()
  }, [])

  const handleSubmitQuestion = async (questionToSubmit: string) => {
    if (questionToSubmit) {
      resetAiSummaryAnswer()
      setUniverseQuestionIsOpen()
    }

    await fetchData(setBudget, setAbortRequests, questionToSubmit)
  }

  const canSubmit = !!question.trim().length

  const onEnterPress = async (e: React.KeyboardEvent) => {
    if (e.keyCode === 13 && e.shiftKey === false && canSubmit) {
      e.preventDefault()
      handleSubmitQuestion(question)
    }
  }

  const handleSeedQuestionClick = async (seedQuestion: string) => {
    setQuestion(seedQuestion)
    await handleSubmitQuestion(seedQuestion)
  }

  const shuffleArray = (inputArray: string[]) => {
    const array = [...inputArray]
    let i = array.length - 1

    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1))

      ;[array[i], array[j]] = [array[j], array[i]]
      i -= 1
    }

    return array
  }

  const displayedSeedQuestions = seedQuestions.slice(0, 4)

  const isValidText = !!question && question.trim().length > 0

  return (
    <Wrapper>
      Ideas have shapes
      <TextAreaWrapper onKeyDown={onEnterPress} py={12} tabIndex={-1}>
        <StyledTextarea
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="What do you want to know?"
          value={question}
        />
        <StyledButton
          color="secondary"
          disabled={!isValidText}
          onClick={() => handleSubmitQuestion(question)}
          variant="contained"
        >
          {isValidText ? (
            <>
              Search <ArrowForwardIcon />
            </>
          ) : (
            <ArrowForwardIcon />
          )}
        </StyledButton>
      </TextAreaWrapper>
      {displayedSeedQuestions.length > 0 && (
        <SeedQuestionsWrapper>
          {displayedSeedQuestions.map((seedQuestion) => (
            <SeedQuestion key={seedQuestion} onClick={() => handleSeedQuestionClick(seedQuestion)}>
              <HelpIcon />
              {seedQuestion}
            </SeedQuestion>
          ))}
        </SeedQuestionsWrapper>
      )}
      <CloseButton onClick={setUniverseQuestionIsOpen} startIcon={<ExploreIcon />}>
        Explore Graph
      </CloseButton>
    </Wrapper>
  )
}

const StyledTextarea = styled(TextareaAutosize).attrs({
  minRows: 5,
})`
  background: ${colors.BG1};
  max-width: 702px;
  width: 702px;
  color: ${colors.white};
  padding: 16px;
  border: 1px solid ${colors.modalShield};
  resize: none;
  outline: none;
  border-radius: 12px;
  font-family: 'Barlow';
  font-size: 16px;
  font-weight: 400;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.5);

  &:-moz-placeholder, /* Firefox 18- */
  &::-moz-placeholder, /* Firefox 19+ */
  &:-ms-input-placeholder, /* IE 10+ */
  &::-webkit-input-placeholder, /* Webkit based */
  &::placeholder {
    color: #0bf;
  }
`

const TextAreaWrapper = styled(Flex)`
  position: relative;
  margin-top: 30px;
`

const Wrapper = styled(Flex)`
  background: #16161de3;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  color: #fff;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  font-family: 'Barlow';
`

const StyledButton = styled(Button)`
  && {
    position: absolute;
    bottom: 26px;
    right: 14px;
    height: 32px;
    border-radius: 16px;
    min-width: 32px;
    padding: 2px;
  }

  &&.MuiButton-root {
    padding: 10px;
  }

  svg {
    width: 12px;
    height: 12px;
  }
`

const CloseButton = styled(Button)`
  && {
    position: absolute;
    bottom: 20px;
    right: 20px;
    border-radius: 16px;
  }
`

const SeedQuestionsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 20px;
  max-width: 702px;
  width: 100%;
`

const SeedQuestion = styled.div`
  background: ${colors.BG1};
  color: ${colors.white};
  padding: 15px 12px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  font-family: Barlow;
  font-size: 14px;
  font-weight: 400;
  gap: 10px;
  &:hover {
    background: ${colors.SEEDQUESTION_HOVER};
  }

  &:active {
    background: ${colors.SEEDQUESTION};
  }
  svg {
    width: 20px;
    height: 20px;
  }

  path {
    fill: ${colors.modalWhiteOverlayBg};
  }
`
