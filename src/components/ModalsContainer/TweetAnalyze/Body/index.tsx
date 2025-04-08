import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { colors } from '~/utils'
import { EngagementTable } from './Engagement'
import { RetweetsTable } from './Retweets'

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

export const SORT_OPTIONS: Record<string, string> = {
  ENGAGEMENT: 'impression_count',
  FOLLOWERS: 'followers',
  TOP_REPOSTERS: 'top_reposters',
} as const

export type SortBy = (typeof SORT_OPTIONS)[keyof typeof SORT_OPTIONS]

type Props = {
  tweetId: string
}

export const Body = ({ tweetId }: Props) => {
  const [sortBy, setSortBy] = useState<SortBy>(SORT_OPTIONS.ENGAGEMENT)

  const { tweetId: tweetIds } = useParams()

  const idsToAnalyze = useMemo(() => {
    const ids = tweetIds?.split('&') || []

    return tweetId === 'summary' ? ids : ids.filter((id) => id === tweetId)
  }, [tweetIds, tweetId])

  return (
    <Wrapper>
      <Flex p={24}>
        <Title>Engagement Report</Title>
        <Flex direction="row">
          {Object.keys(SORT_OPTIONS).map((optionKey) => (
            <SortButton
              key={optionKey}
              active={sortBy === SORT_OPTIONS[optionKey]}
              onClick={() => setSortBy(SORT_OPTIONS[optionKey as keyof typeof SORT_OPTIONS])}
            >
              {optionKey}
            </SortButton>
          ))}
        </Flex>
      </Flex>

      {sortBy !== 'top_reposters' ? (
        <EngagementTable idsToAnalyze={idsToAnalyze} sortBy={sortBy} />
      ) : (
        <RetweetsTable idsToAnalyze={idsToAnalyze} sortBy={sortBy} />
      )}
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
