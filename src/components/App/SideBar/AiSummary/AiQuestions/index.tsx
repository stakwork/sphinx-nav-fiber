import { Slide } from '@mui/material'
import { memo } from 'react'
import styled from 'styled-components'
import PlusIcon from '~/components/Icons/PlusIcon'
import StackIcon from '~/components/Icons/StackIcon'
import { Flex } from '~/components/common/Flex'
import { useDataStore } from '~/stores/useDataStore'
import { useUserStore } from '~/stores/useUserStore'
import { colors } from '~/utils'
import { useHasAiChatsResponseLoading } from '~/stores/useAiSummaryStore'
import { ClipLoader } from 'react-spinners'

type Props = {
  questions: string[]
}

// eslint-disable-next-line no-underscore-dangle
const _AiQuestions = ({ questions }: Props) => {
  const { fetchData, setAbortRequests } = useDataStore((s) => s)
  const [setBudget] = useUserStore((s) => [s.setBudget])

  const isLoading = useHasAiChatsResponseLoading()

  const handleSubmitQuestion = (question: string) => {
    if (question) {
      fetchData(setBudget, setAbortRequests, question)
    }
  }

  return questions?.length ? (
    <SectionWrapper>
      <Slide direction="right" in mountOnEnter>
        <Heading className="heading" direction="row">
          <div className="heading__icon">
            <StackIcon />
          </div>
          <HeadingTitle>More on this</HeadingTitle>
        </Heading>
      </Slide>
      {!isLoading ? (
        <Slide direction="right" in mountOnEnter>
          <Flex>
            {questions.map((i) => (
              <QuestionWrapper
                key={i}
                align="center"
                direction="row"
                justify="space-between"
                onClick={() => handleSubmitQuestion(i)}
              >
                <span>{i}</span>
                <Flex className="icon">
                  <PlusIcon />
                </Flex>
              </QuestionWrapper>
            ))}
          </Flex>
        </Slide>
      ) : (
        <LoaderWrapper>
          <ClipLoader color={colors.lightGray} data-testid="loader" size="20" />
        </LoaderWrapper>
      )}
    </SectionWrapper>
  ) : null
}

export const AiQuestions = memo(_AiQuestions)

const Heading = styled(Flex)`
  &.heading {
    font-weight: 600;
    color: ${colors.white};
    font-size: 14px;

    .heading__icon {
      margin-right: 12px;
      font-size: 20px;
    }

    .heading__count {
      font-weight: 400;
      color: ${colors.GRAY7};
      margin-left: 16px;
    }
  }
`

const HeadingTitle = styled.span`
  margin-top: 1px;
`

const QuestionWrapper = styled(Flex)`
  color: ${colors.GRAY3};
  padding: 12px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  &:last-child {
    border: none;
  }
  font-size: 14px;
  cursor: pointer;
  line-height: 1.4;

  &:hover {
    color: ${colors.white};
    .icon {
      color: ${colors.white};
    }
  }

  .icon {
    font-size: 20px;
    color: ${colors.GRAY7};
    cursor: pointer;
  }
`

const SectionWrapper = styled(Flex)`
  padding: 0 24px 24px 24px;
`

const LoaderWrapper = styled(Flex)`
  justify-content: center;
  align-items: center;
  height: 100%;
`
