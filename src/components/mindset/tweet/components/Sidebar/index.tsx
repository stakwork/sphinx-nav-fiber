import { lazy, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { MENU_WIDTH } from '~/components/App/SideBar'
import { Flex } from '~/components/common/Flex'
import { useModal } from '~/stores/useModalStore'
import { useTweetMindsetStore } from '~/stores/useTweetMindsetStore'
import { colors } from '~/utils'
import { Tweet } from './Tweet'

const LazyTweetAnalyze = lazy(() =>
  import('~/components/ModalsContainer/TweetAnalyze').then(({ TweetAnalyze }) => ({ default: TweetAnalyze })),
)

export const SideBar = () => {
  const setSelectedTweet = useTweetMindsetStore((s) => s.setSelectedTweet)
  const selectedTweet = useTweetMindsetStore((s) => s.selectedTweet)
  const { tweetId: selectedTweetIds } = useParams()
  const [analyzeTweetId, setAnalyzeTweetId] = useState<string>('')
  const { open } = useModal('tweetAnalyze')

  const ids = selectedTweetIds?.split('&') || []

  const handleAnalyzeClick = (id: string) => {
    open()
    setAnalyzeTweetId(id)
  }

  return (
    <>
      <Wrapper align="stretch" basis="100%" grow={1} shrink={1}>
        {ids.length > 1 ? (
          <EngagementButton
            onClick={() => {
              handleAnalyzeClick('summary')
            }}
          >
            Summary Report
          </EngagementButton>
        ) : null}
        {ids.map((id: string) => (
          <TweetWrapper
            key={id}
            className={selectedTweet === id ? 'selected' : ''}
            onClick={() => setSelectedTweet(id)}
          >
            <Tweet
              handleAnalyzeClick={() => {
                handleAnalyzeClick(id)
              }}
              nodeId={id}
            />
          </TweetWrapper>
        ))}
        <LazyTweetAnalyze tweetId={analyzeTweetId} />
      </Wrapper>
    </>
  )
}

const EngagementButton = styled.button`
  width: 100%;
  background: ${colors.ANALYTICS_CARD_BG};
  color: ${colors.white};
  padding: 16px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  margin-top: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  border: 1px solid ${colors.ANALYTICS_CARD_BG};
  &:hover {
    opacity: 0.6;
  }
`

const Wrapper = styled(Flex)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  padding: '0 20px 0 20px',
  background: 'transparent',
  width: '100%',
  height: 'calc(100vh - 180px)',
  overflow: 'auto',

  [theme.breakpoints.up('sm')]: {
    width: MENU_WIDTH,
    gap: '10px',
  },
}))

const TweetWrapper = styled(Flex)`
  width: 100%;
  margin-bottom: 20px;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 16px;

  &.selected {
    border: 1px solid ${colors.white};
  }

  &:hover {
    border: 1px solid ${colors.white};
  }

  ${({ theme }) => theme.breakpoints.up('sm')} {
    width: 390px;
    margin: 0 auto;
  }
`
