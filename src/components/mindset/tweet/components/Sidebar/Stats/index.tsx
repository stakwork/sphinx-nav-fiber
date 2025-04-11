import { FaMeh, FaThumbsDown, FaThumbsUp } from 'react-icons/fa'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import SentimentDataIcon from '~/components/Icons/SentimentDataIcon'
import { Node } from '~/types'
import { colors } from '~/utils/colors'

type Props = {
  node: Node
  handleAnalyzeClick: () => void
}

const analyticsMapper = {
  impression_count: { label: 'Impressions', formatter: (value: number) => value.toLocaleString() },
  like_count: { label: 'Likes', formatter: (value: number) => value },
  reply_count: { label: 'Replies', formatter: (value: number) => value },
  retweet_count: { label: 'Retweets', formatter: (value: number) => value },
  quote_count: { label: 'Quotes', formatter: (value: number) => value },
  bookmark_count: { label: 'Bookmarks', formatter: (value: number) => value },
  analytics_location: { label: 'Location', formatter: (value: string) => value || 'Unknown' },
  analytics_gender: { label: 'Gender', formatter: (value: string) => value || 'Unknown' },
  followers: { label: 'Followers', formatter: (value: number) => value.toLocaleString() },
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
  // Calculate follower-to-view ratio safely.

  const viewToFollowerRatio =
    node?.properties?.followers !== undefined &&
    node?.properties?.impression_count !== undefined &&
    node.properties.impression_count !== 0
      ? (node.properties.impression_count / node.properties.followers).toFixed(2)
      : 'N/A'

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
              <Value>{formatter(node.properties[key] as never)}</Value>
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

const Value = styled.span`
  color: ${colors.GRAY6};
  display: flex;
  align-items: center;
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
