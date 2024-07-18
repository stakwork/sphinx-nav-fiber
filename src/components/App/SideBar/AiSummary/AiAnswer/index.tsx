import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { highlightAiSummary } from '~/components/App/SideBar/AiSummary/utils/AiSummaryHighlight'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useDataStore } from '~/stores/useDataStore'
import { useUserStore } from '~/stores/useUserStore'
import { ExtractedEntity } from '~/types/index'

type Props = {
  answer: string
  entities?: ExtractedEntity[]
  hasBeenRendered: boolean
  handleLoaded: () => void
}

const Wrapper = styled(Flex).attrs({
  direction: 'column',
})`
  padding: 0 1.5rem 1.5rem;
  gap: 1rem;
`

const SummaryText = styled(Text)`
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;
`

export const AiAnswer = ({ answer, entities, handleLoaded, hasBeenRendered }: Props) => {
  const { fetchData, setAbortRequests } = useDataStore((s) => s)
  const { setBudget } = useUserStore((s) => s)
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (!answer || hasBeenRendered) {
      return
    }

    if (displayedText.length < answer.length) {
      timeoutId = setTimeout(() => {
        setDisplayedText(answer.slice(0, displayedText.length + 1))
      }, 10)

      // eslint-disable-next-line consistent-return
      return () => clearTimeout(timeoutId)
    }

    handleLoaded()
  }, [answer, displayedText, handleLoaded, hasBeenRendered])

  useEffect(() => {
    if (displayedText) {
      return
    }

    if (hasBeenRendered) {
      setDisplayedText(answer)
    }
  }, [answer, displayedText, hasBeenRendered])

  const handleSubmit = (search: string) => {
    fetchData(setBudget, setAbortRequests, search)
  }

  const responseTextDisplay = highlightAiSummary(displayedText, handleSubmit, entities)

  return (
    <Wrapper>
      <SummaryText>{responseTextDisplay}</SummaryText>
    </Wrapper>
  )
}
