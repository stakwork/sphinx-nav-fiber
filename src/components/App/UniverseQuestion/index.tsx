import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'

import { TextareaAutosize } from '@mui/base'
import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import ArrowForwardIcon from '~/components/Icons/ArrowForwardIcon'
import ExploreIcon from '~/components/Icons/ExploreIcon'
import { getAboutData } from '~/network/fetchSourcesData'
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

  useEffect(() => {
    const fetchSeedQuestions = async () => {
      try {
        const response = await getAboutData()

        if (response.seed_questions) {
          setSeedQuestions(response.seed_questions)
        }
      } catch (error) {
        console.error('Error fetching seed questions:', error)
      }
    }

    fetchSeedQuestions()
  }, [])

  const handleSubmitQuestion = async (questionToSubmit: string) => {
    if (questionToSubmit) {
      setUniverseQuestionIsOpen()
    }

    await fetchData(setBudget, setAbortRequests, questionToSubmit)
  }

  const canSubmit = true

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

  return (
    <Wrapper>
      Ideas have shape
      <TextAreaWrapper onKeyDown={onEnterPress} py={12} tabIndex={-1}>
        <StyledTextarea
          minRows={5}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter your question"
          value={question}
        />
        <StyledButton
          color="secondary"
          endIcon={<ArrowForwardIcon />}
          onClick={() => handleSubmitQuestion(question)}
          variant="contained"
        >
          Search
        </StyledButton>
      </TextAreaWrapper>
      {seedQuestions.length > 0 && (
        <SeedQuestionsWrapper>
          {seedQuestions.map((seedQuestion) => (
            <SeedQuestion key={seedQuestion} onClick={() => handleSeedQuestionClick(seedQuestion)}>
              {seedQuestion}
            </SeedQuestion>
          ))}
        </SeedQuestionsWrapper>
      )}
      <CloseButton onClick={setUniverseQuestionIsOpen} startIcon={<ExploreIcon />}>
        Explore graph
      </CloseButton>
    </Wrapper>
  )
}

const StyledTextarea = styled(TextareaAutosize)`
  background: ${colors.BG1};
  max-width: 702px;
  width: 702px;
  color: ${colors.white};
  padding: 16px 8px;
  border: none;
  outline: none;
  border-radius: 12px;
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
`

const StyledButton = styled(Button)`
  && {
    position: absolute;
    bottom: 20px;
    right: 20px;
    height: 32px;
    border-radius: 16px;
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
  padding: 15px 20px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: Barlow;
  font-size: 13px;
  font-weight: 500;
  &:hover {
    background: ${colors.DROPDOWN_SELECTED};
  }
`
