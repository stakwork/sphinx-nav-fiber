import { ComponentType, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { colors } from '~/utils'
import { EngagementTable } from './Engagement'
import { RetweetsTable } from './Retweets'
import { SentimentTable } from './Sentiment'

export const ENGAGEMENT = 'ENGAGEMENT'
export const FOLLOWERS = 'FOLLOWERS'
export const TOP_REPOSTERS = 'TOP_REPOSTERS'
export const SENTIMENT = 'SENTIMENT'

const ComponentsMap: Record<string, ComponentType<{ sortBy: SortBy; idsToAnalyze: string[] }>> = {
  [ENGAGEMENT]: EngagementTable,
  [FOLLOWERS]: EngagementTable,
  [TOP_REPOSTERS]: RetweetsTable,
  [SENTIMENT]: SentimentTable,
}

const SortButton = styled.button<{ active?: boolean }>`
  background: ${({ active }) => (active ? colors.primaryBlue : 'transparent')};
  border: 1px solid ${({ active }) => (active ? colors.primaryGreen : colors.GRAY9)};
  color: ${({ active }) => (active ? colors.white : colors.GRAY6)};
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  &:hover {
    border-color: ${({ active }) => (active ? colors.primaryGreen : colors.GRAY6)};
  }
`

export const Avatar = styled.div<{ imageUrl?: string }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${colors.BG1};
  ${({ imageUrl }) => imageUrl && `background-image: url(${imageUrl});`}
  background-size: cover;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const Username = styled.span`
  font-size: 14px;
`

export const TweetTime = styled.div`
  color: ${colors.GRAY7};
  font-size: 12px;
`

export const TweetLink = styled.a`
  color: ${colors.SOURCE_TABLE_LINK};
  cursor: pointer;
  font-size: 16px;
  height: 16px;
  margin-left: 8px;
`

export const Engagement = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const EngagementBar = styled.div<{ percentage: number }>`
  width: 100px;
  height: 4px;
  background-color: ${colors.BG1};
  border-radius: 2px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${(props) => props.percentage}%;
    background-color: ${colors.primaryGreen};
    border-radius: 2px;
  }
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${colors.white};
`

type SortOption = {
  label: string
  value: string
}

export const SORT_OPTIONS: Record<string, SortOption> = {
  [ENGAGEMENT]: {
    label: 'Engagement',
    value: 'impression_count',
  },
  [FOLLOWERS]: {
    label: 'Followers',
    value: 'followers',
  },
  [TOP_REPOSTERS]: {
    label: 'Top Reposters',
    value: 'top_reposters',
  },
  [SENTIMENT]: {
    label: 'Sentiment',
    value: 'sentiment',
  },
} as const

export type SortBy = (typeof SORT_OPTIONS)[keyof typeof SORT_OPTIONS]['value']

type Props = {
  tweetId: string
}

export const Body = ({ tweetId }: Props) => {
  const [sortBy, setSortBy] = useState<SortBy>(SORT_OPTIONS.ENGAGEMENT.value)

  const { tweetId: tweetIds } = useParams()

  const idsToAnalyze = useMemo(() => {
    const ids = tweetIds?.split('&') || []

    return tweetId === 'summary' ? ids : ids.filter((id) => id === tweetId)
  }, [tweetIds, tweetId])

  const ComponentKey = Object.entries(SORT_OPTIONS).find(([, option]) => option.value === sortBy)?.[0]

  const TableComponent = ComponentKey ? ComponentsMap[ComponentKey] : null

  return (
    <Wrapper>
      <Flex p={24}>
        <Title>Engagement Report</Title>
        <Flex direction="row">
          {Object.keys(SORT_OPTIONS).map((optionKey) => (
            <SortButton
              key={optionKey}
              active={sortBy === SORT_OPTIONS[optionKey as keyof typeof SORT_OPTIONS].value}
              onClick={() => setSortBy(SORT_OPTIONS[optionKey as keyof typeof SORT_OPTIONS].value)}
            >
              {SORT_OPTIONS[optionKey as keyof typeof SORT_OPTIONS].label}
            </SortButton>
          ))}
        </Flex>
      </Flex>

      {TableComponent && <TableComponent idsToAnalyze={idsToAnalyze} sortBy={sortBy} />}
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  display: flex;
  flex: 1;
  min-height: 572px;
  overflow: auto;

  @media (max-width: 1024px) {
    width: 100%;
    min-height: 400px;
    max-height: 400px;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-height: 300px;
    max-height: 300px;
  }

  @media (max-width: 480px) {
    width: 100%;
    min-height: 250px;
    max-height: 250px;
  }
`
