import { memo } from 'react'
import styled from 'styled-components'
import PlusIcon from '~/components/Icons/PlusIcon'
import StackIcon from '~/components/Icons/StackIcon'
import { Flex } from '~/components/common/Flex'
import { useDataStore } from '~/stores/useDataStore'
import { useUserStore } from '~/stores/useUserStore'
import { colors } from '~/utils'

type Props = {
  questions: string[]
}

// eslint-disable-next-line no-underscore-dangle
const _AiQuestions = ({ questions }: Props) => {
  const { fetchData, setAbortRequests } = useDataStore((s) => s)
  const [setBudget] = useUserStore((s) => [s.setBudget])

  const handleSubmitQuestion = (question: string) => {
    if (question) {
      fetchData(setBudget, setAbortRequests, question)
    }
  }

  return questions?.length ? (
    <SectionWrapper>
      <Heading className="heading" direction="row">
        <div className="heading__icon">
          <StackIcon />
        </div>
        <span>More on this</span>
      </Heading>
      <Flex>
        {questions.map((i) => (
          <QuestionWrapper key={i} align="center" direction="row" justify="space-between">
            <span>{i}</span>
            <Flex className="icon" onClick={() => handleSubmitQuestion(i)}>
              <PlusIcon />
            </Flex>
          </QuestionWrapper>
        ))}
      </Flex>
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

const QuestionWrapper = styled(Flex)`
  color: ${colors.GRAY3};
  padding: 12px 0;
  border-bottom: 1px solid ${colors.black};
  .icon {
    font-size: 20px;
    color: ${colors.GRAY7};
    cursor: pointer;
  }
`

const SectionWrapper = styled(Flex)`
  padding: 24px;
  border-top: 1px solid ${colors.black};
`
