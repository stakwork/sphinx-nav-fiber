import { TextareaAutosize } from '@mui/base'
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material'
import { useCallback, useEffect, useRef, useState } from 'react'
import { MdSend } from 'react-icons/md'
import { PropagateLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import { Socket } from 'socket.io-client'
import * as sphinx from 'sphinx-bridge'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { ToastMessage } from '~/components/common/Toast/toastMessage'
import useSocket from '~/hooks/useSockets'
import { postAskQuestion } from '~/network/fetchGraphData'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { useTeachStore } from '~/stores/useTeachStore'
import { useUserStore } from '~/stores/useUserStore'
import { colors } from '~/utils/colors'
import { updateBudget } from '~/utils/setBudget'

type ResponseType = {
  answer: string
}

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const names = ['Beginner', 'Intermediate', 'Advanced', 'Expert']

export const AskQuestion = () => {
  const data = useDataStore((s) => s.data)
  const [question, setQuestion] = useState('')
  const [selectedValue, setSelectedValue] = useState<string>('Beginner')
  const searchTerm = useAppStore((s) => s.currentSearch)
  const isSocketSet: { current: boolean } = useRef<boolean>(false)
  const socket: Socket | null = useSocket()
  const [setBudget] = useUserStore((s) => [s.setBudget])

  const [askedQuestions, askedQuestionsAnswers, setAskedQuestion, setAskedQuestionAnswer, hasQuestionInProgress] =
    useTeachStore((s) => [
      s.askedQuestions,
      s.askedQuestionsAnswers,
      s.setAskedQuestion,
      s.setAskedQuestionAnswer,
      s.hasQuestionInProgress,
    ])

  const handleAskQuestion = useCallback(
    (response: ResponseType) => {
      setAskedQuestionAnswer(response.answer)

      toast(<ToastMessage message="Response is ready" />, {
        position: toast.POSITION.BOTTOM_CENTER,
        type: 'success',
      })
    },
    [setAskedQuestionAnswer],
  )

  useEffect(() => {
    if (isSocketSet.current) {
      return
    }

    if (handleAskQuestion) {
      if (socket) {
        socket.on('askquestionhook', handleAskQuestion)

        isSocketSet.current = true
      }
    }
  }, [handleAskQuestion, socket])

  const handleSubmitQuestion = async () => {
    if (question) {
      setAskedQuestion(question)
      setQuestion('')
    }

    try {
      const nodesWithTranscript = data?.nodes.filter((i) => i.text)
      const firstFiveItems = nodesWithTranscript?.slice(0, 5)

      const transcripts = (firstFiveItems?.length ? firstFiveItems.map((i) => i.text).join(' ') : '')
        .substring(0, 2500)
        .replace(/[?&=+/#]/g, (match) => `\\${match}`)

      if (searchTerm) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        await sphinx.enable()

        await postAskQuestion(
          {
            expertise_level: selectedValue,
            question_text: question,
            search_term: searchTerm,
            transcripts,
          },
          setBudget,
        )

        await updateBudget(setBudget)

        toast(<ToastMessage message="We started preparing response for you" />, {
          type: 'success',
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  const canSubmit = selectedValue && question.trim() && !hasQuestionInProgress

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setSelectedValue(event.target.value as string)
  }

  const onEnterPress = async (e: React.KeyboardEvent) => {
    if (hasQuestionInProgress) {
      e.preventDefault()

      return
    }

    if (e.keyCode === 13 && e.shiftKey === false && canSubmit) {
      e.preventDefault()
      handleSubmitQuestion()
    }
  }

  return (
    <AskQuestionContainer>
      <Flex>
        <Flex>
          <FormControl component="div">
            <StyledInput id="select-label" size="small">
              Expertise level
            </StyledInput>
            <StyledSelect
              id="demo-multiple-name"
              input={<OutlinedInput label="Expertise level" />}
              labelId="select-label"
              MenuProps={MenuProps}
              onChange={handleChange}
              size="small"
              value={selectedValue}
            >
              {names.map((name) => (
                <MenuItem key={name} component="li" value={name}>
                  {name}
                </MenuItem>
              ))}
            </StyledSelect>
          </FormControl>
        </Flex>
      </Flex>
      <ResponsesWrapper>
        {askedQuestions?.map((item, index) => (
          <Flex key={item} className="response" py={12}>
            <Text kind="medium">{item}</Text>
            <Flex py={12}>
              {askedQuestionsAnswers?.[index] !== undefined ? (
                <Text color="unreadMsgText">{askedQuestionsAnswers[index]}</Text>
              ) : (
                <Flex align="center" py={12}>
                  <Flex align="center" py={12}>
                    <PropagateLoader color={colors.white} />
                  </Flex>
                  <Flex align="center" py={12}>
                    <Text>Generating response</Text>
                  </Flex>
                </Flex>
              )}
            </Flex>
          </Flex>
        ))}
      </ResponsesWrapper>
      <TextAreaWrapper onKeyDown={onEnterPress} py={12} tabIndex={-1}>
        <StyledTextarea
          disabled={hasQuestionInProgress}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter your question"
          value={question}
        />
        <IconWrapper>
          <MdSend color={canSubmit ? colors.white : colors.gray300} size="18" />
        </IconWrapper>
      </TextAreaWrapper>
    </AskQuestionContainer>
  )
}

const AskQuestionContainer = styled.div`
  margin-top: 20px;
`

const StyledTextarea = styled(TextareaAutosize)`
  background: ${colors.inputBg1};
  max-width: 100%;
  color: ${colors.secondaryText4};
  padding: 16px 8px;
  border: none;
  outline: none;
`

const StyledInput = styled(InputLabel)`
  &.MuiFormLabel-root.MuiInputLabel-root {
    color: ${colors.secondaryText4};
  }
`

const StyledSelect = styled(Select)`
  .MuiInputBase-root {
    color: blue;
  }
  background: ${colors.inputBg1};

  .MuiSvgIcon-root {
    color: ${colors.white};
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  .MuiSelect-select {
    color: ${colors.white};
  }
`

const TextAreaWrapper = styled(Flex)`
  position: relative;
`

const IconWrapper = styled(Flex)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  transform: rotate(-45deg);
`

const ResponsesWrapper = styled(Flex)`
  flex-shrink: 1;
  overflow: auto;

  .response {
    border-bottom: 1px solid ${colors.divider2};
  }
`
