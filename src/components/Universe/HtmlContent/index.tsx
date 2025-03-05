import Button from '@mui/material/Button'
import { useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import ArrowBackIcon from '~/components/Icons/ArrowBackIcon'
import { useAiSummaryStore } from '~/stores/useAiSummaryStore'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { useUserStore } from '~/stores/useUserStore'
import { colors } from '~/utils/colors'

type HtmlContentProps = {
  content: string
}

export const HtmlContent = ({ content }: HtmlContentProps) => {
  const { setAbortRequests } = useDataStore((s) => s)
  const { setBudget } = useUserStore((s) => s)
  const { fetchAIData } = useAiSummaryStore((s) => s)
  const { htmlHistory, addToHtmlHistory, goBackHtmlHistory } = useAppStore((s) => s)

  useEffect(() => {
    addToHtmlHistory(content)
  }, [content, addToHtmlHistory])

  const handleClick = useCallback(
    (e: Event) => {
      e.preventDefault()

      const target = e.target as HTMLAnchorElement

      if (target.tagName === 'A' && target.href) {
        fetchAIData(setBudget, setAbortRequests, target.href)
      }
    },
    [fetchAIData, setBudget, setAbortRequests],
  )

  const handleBack = useCallback(() => {
    const previousContent = goBackHtmlHistory()

    if (previousContent) {
      // Update the current HTML content through the app store
      useAppStore.getState().setHtmlContent(previousContent)
    }
  }, [goBackHtmlHistory])

  useEffect(() => {
    const container = document.querySelector('.html-content-container')

    if (container) {
      container.addEventListener('click', handleClick as EventListener)
    }

    return () => {
      if (container) {
        container.removeEventListener('click', handleClick as EventListener)
      }
    }
  }, [handleClick])

  return (
    <HtmlContentWrapper>
      <Header>
        {htmlHistory.length > 1 && (
          <BackButton onClick={handleBack} startIcon={<ArrowBackIcon />}>
            Back
          </BackButton>
        )}
      </Header>
      <ContentContainer className="html-content-container" dangerouslySetInnerHTML={{ __html: content }} />
    </HtmlContentWrapper>
  )
}

const HtmlContentWrapper = styled(Flex)`
  flex: 1;
  background: ${colors.black};
  overflow-y: auto;
  padding: 40px;
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const Header = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 60px;
  padding: 0 0 20px 0;
`

const BackButton = styled(Button)`
  && {
    color: ${colors.white};
    font-size: 14px;
    text-transform: none;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    svg {
      font-size: 20px;
    }
  }
`

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  color: ${colors.white};
  font-family: inherit;
  height: 100%;
  display: flex;
  flex-direction: column;

  header {
    margin-bottom: 2rem;
  }

  nav {
    margin-bottom: 1.5rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1.5rem;

    th,
    td {
      border: 1px solid ${colors.white};
      padding: 1rem;
      text-align: left;
    }

    th {
      background-color: ${colors.white};
      color: ${colors.black};
    }
  }

  a {
    color: ${colors.BLUE_PRESS_STATE};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .back-button {
    margin-bottom: 1.5rem;
  }

  h1,
  h2 {
    color: ${colors.white};
    margin-bottom: 1rem;
  }

  pre {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    code {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

export default HtmlContent
