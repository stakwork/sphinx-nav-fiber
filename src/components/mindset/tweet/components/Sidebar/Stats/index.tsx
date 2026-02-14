import { FaMeh, FaThumbsDown, FaThumbsUp } from 'react-icons/fa'
import styled, { keyframes } from 'styled-components'
import { Flex } from '~/components/common/Flex'
import SentimentDataIcon from '~/components/Icons/SentimentDataIcon'
import { useTweetMindsetStore } from '~/stores/useTweetMindsetStore'
import { Node } from '~/types'
import { colors } from '~/utils/colors'

type Props = {
  node: Node
  handleAnalyzeClick: () => void
}

const analyticsMapper = {
  impression_count: {
    label: 'Impressions',
    formatter: (value: number, index: number) => value.toLocaleString().split(',').at(index),
  },
  like_count: {
    label: 'Likes',
    formatter: (value: number, index: number) => value.toLocaleString().split(',').at(index),
  },
  reply_count: {
    label: 'Replies',
    formatter: (value: number, index: number) => value.toLocaleString().split(',').at(index),
  },
  retweet_count: {
    label: 'Retweets',
    formatter: (value: number, index: number) => value.toLocaleString().split(',').at(index),
  },
  quote_count: {
    label: 'Quotes',
    formatter: (value: number, index: number) => value.toLocaleString().split(',').at(index),
  },
  bookmark_count: {
    label: 'Bookmarks',
    formatter: (value: number, index: number) => value.toLocaleString().split(',').at(index),
  },
  analytics_location: { label: 'Location', formatter: (value: string) => value || 'Unknown' },
  analytics_gender: { label: 'Gender', formatter: (value: string) => value || 'Unknown' },
  followers: {
    label: 'Followers',
    formatter: (value: number, index: number) => value.toLocaleString().split(',').at(index),
  },
}

const getSentimentIcon = (score?: number) => {
  if (score === undefined || score === null) {
    return <FaMeh color={colors.GRAY3} />
  }

  if (score <= 4) {
    return <FaThumbsDown color="#ef4444" />
  }

  if (score >= 7) {
    return <FaThumbsUp color="#22c55e" />
  }

  return <FaMeh color={colors.GRAY3} />
}

export const Stats = ({ node, handleAnalyzeClick }: Props) => {
  const viewToFollowerRatio =
    node?.properties?.followers !== undefined &&
    node?.properties?.impression_count !== undefined &&
    node.properties.impression_count !== 0
      ? (node.properties.impression_count / node.properties.followers).toFixed(2)
      : 'N/A'

  const tweetPlayingTime = useTweetMindsetStore((s) => s.tweetPlayingTime)

  // Convert to raw timestamps (as numbers)
  const rawTimestamps = node?.properties?.time_series
    ? (node?.properties.time_series as string).split(',').map(Number)
    : []

  let index = -1

  if (tweetPlayingTime) {
    const timeInSeconds = tweetPlayingTime > 1e12 ? tweetPlayingTime / 1000 : tweetPlayingTime

    // Find the last index where the timestamp is <= tweetPlayingTime
    for (let i = 0; i < rawTimestamps.length; i += 1) {
      if (timeInSeconds >= rawTimestamps[i]) {
        index = i
      } else {
        break // timestamps must be in ascending order
      }
    }
  }

  return (
    <Card>
      <Flex align="center" direction="row" justify="space-between" mb={16}>
        <Title>Analytics</Title>
        <IconButton
          onClick={(e) => {
            e.stopPropagation()
            handleAnalyzeClick()
          }}
        >
          <SentimentDataIcon />
        </IconButton>
      </Flex>
      <Grid>
        {Object.entries(analyticsMapper).map(([key, { label, formatter }]) =>
          node?.properties?.[key] !== undefined ? (
            <Metric key={key}>
              <span>{label}</span>
              <Value key={index}>{formatter(node.properties[key] as never, index)}</Value>
            </Metric>
          ) : null,
        )}
        <Metric>
          <span>Views-to-followers</span>
          <Value>{viewToFollowerRatio}</Value>
        </Metric>
        <Metric>
          <span>Sentiment</span>
          <Value>{getSentimentIcon(node?.properties?.analytics_sentiment_score)}</Value>
        </Metric>
      </Grid>
      <EngagementReportButton
        onClick={(e) => {
          e.stopPropagation()
          handleAnalyzeClick()
        }}
      >
        Engagement Report
      </EngagementReportButton>
    </Card>
  )
}

const Card = styled.div`
  background: ${colors.ANALYTICS_CARD_BG};
  border-radius: 16px;
  padding: 16px 0;
  max-width: 350px;
`

const Title = styled.h2`
  color: ${colors.white};
  font-size: 16px;
  font-weight: 500;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;
`

const Metric = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.GRAY3};
  font-size: 14px;
  padding-right: 4px;
`

const popIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(6px) scale(0.95);
  }
  60% {
    transform: translateY(-2px) scale(1.02);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`

const Value = styled.span`
  color: ${colors.GRAY6};
  display: flex;
  align-items: center;
  animation: ${popIn} 0.3s ease;
  svg {
    width: 14px;
    height: 14px;
    margin-left: 4px;
  }
`

const IconButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-size: 24px;
  flex-shrink: 0;
  color: ${colors.SOURCE_TABLE_LINK};
  opacity: 1;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`

const EngagementReportButton = styled.button`
  margin-top: 16px;
  width: 100%;
  background: ${colors.primaryBlue};
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background: #2563eb;
  }
`
