import { FaBookmark, FaChartBar, FaComment, FaHeart, FaQuoteRight, FaRetweet } from 'react-icons/fa'
import styled from 'styled-components'
import { useGraphData } from '~/components/DataRetriever'
import CheckIcon from '~/components/Icons/CheckIcon'
import PersonIcon from '~/components/Icons/PersonIcon'
import { Flex } from '~/components/common/Flex'
import { Node } from '~/types'
import { colors } from '~/utils/colors'

type Props = {
  node: Node
}

type MetricsProps = {
  metrics: {
    impressions?: number
    likes?: number
    replies?: number
    retweets?: number
    quotes?: number
    bookmarks?: number
  }
}

const MetricsBar = ({ metrics }: MetricsProps) => {
  const formatNumber = (num?: number) => {
    if (!num) {
      return '0'
    }

    return num.toLocaleString()
  }

  return (
    <MetricsContainer>
      {metrics.replies !== undefined && (
        <MetricItem>
          <span>{formatNumber(metrics.replies)}</span>
          <FaComment />
        </MetricItem>
      )}
      {metrics.retweets !== undefined && (
        <MetricItem>
          <span>{formatNumber(metrics.retweets)}</span>
          <FaRetweet />
        </MetricItem>
      )}
      {metrics.quotes !== undefined && (
        <MetricItem>
          <span>{formatNumber(metrics.quotes)}</span>
          <FaQuoteRight />
        </MetricItem>
      )}
      {metrics.likes !== undefined && (
        <MetricItem>
          <span>{formatNumber(metrics.likes)}</span>
          <FaHeart />
        </MetricItem>
      )}
      {metrics.bookmarks !== undefined && (
        <MetricItem>
          <span>{formatNumber(metrics.bookmarks)}</span>
          <FaBookmark />
        </MetricItem>
      )}
      {metrics.impressions !== undefined && (
        <MetricItem>
          <span>{formatNumber(metrics.impressions)}</span>
          <FaChartBar />
        </MetricItem>
      )}
    </MetricsContainer>
  )
}

export const PostHoverCard = ({ node }: Props) => {
  const properties = node.properties || {}
  const nodeType = node.node_type

  const {
    text,
    author,
    tweet_id: tweetId,
    impression_count: impressions,
    like_count: likes,
    reply_count: replies,
    retweet_count: retweets,
    quote_count: quotes,
    bookmark_count: bookmarks,
  } = properties as {
    text?: string
    author?: string
    tweet_id?: string
    impression_count?: number
    like_count?: number
    reply_count?: number
    retweet_count?: number
    quote_count?: number
    bookmark_count?: number
  }

  const graphData = useGraphData()

  const userNode = graphData.nodes.find((n: Node) => n.node_type === 'User' && n.properties?.author_id === author)

  const userProperties = userNode?.properties || {}

  const {
    alias,
    image_url: imageUrl,
    twitter_handle: twitterHandle,
    verified,
  } = userProperties as {
    alias?: string
    image_url?: string
    twitter_handle?: string
    verified?: boolean
  }

  let postUrl = ''

  if (nodeType === 'Tweet' && tweetId && twitterHandle) {
    postUrl = `https://x.com/${twitterHandle}/status/${tweetId}`
  }

  const displayName = alias || twitterHandle || ''
  const displaySubName = twitterHandle || alias || ''

  return (
    <UserTooltipContainer>
      <UserContentWrapper>
        <AvatarSection>
          {imageUrl ? (
            <UserAvatar alt={displayName} src={imageUrl} />
          ) : (
            <DefaultAvatar>
              <PersonIcon />
            </DefaultAvatar>
          )}
        </AvatarSection>

        <UserInfoSection>
          <UserNameRow>
            <UserDisplayName href={postUrl} target="_blank">
              {displayName}
            </UserDisplayName>
            {verified && (
              <VerifiedBadge>
                <CheckIcon />
              </VerifiedBadge>
            )}
            <UserDisplaySubName href={postUrl} target="_blank">
              @{displaySubName}
            </UserDisplaySubName>
          </UserNameRow>
        </UserInfoSection>

        {text && <PostText>{text}</PostText>}
        <MetricsBar
          metrics={{
            impressions,
            likes,
            replies,
            retweets,
            quotes,
            bookmarks,
          }}
        />
      </UserContentWrapper>
    </UserTooltipContainer>
  )
}

const TooltipContainer = styled(Flex)`
  width: 390px;
  min-height: 100px;
  background: ${colors.HOVER_CARD_BG};
  border-radius: 8px;
  padding: 15px;
  padding-bottom: 3px !important;
  flex-direction: column;
  gap: 4px;
  pointer-events: auto;
  align-items: flex-start;
`

const UserTooltipContainer = styled(TooltipContainer)`
  width: fit-content;
  min-width: 180px;
  max-width: 300px;
  min-height: auto;
  border-radius: 16px;
  overflow: hidden;
`

const UserContentWrapper = styled(Flex)`
  display: grid;
  width: fit-content;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: start;
  padding-bottom: 15px;
`

const AvatarSection = styled(Flex)`
  margin-right: 10px;
`

const DefaultAvatar = styled(Flex)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${colors.GRAY3};
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-size: 24px;
`

const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`

const PostText = styled.a`
  font-family: 'Barlow';
  font-size: 14px;
  line-height: 1.4;
  color: ${colors.white};
  text-decoration: none;
  word-break: break-word;

  &:hover {
    text-decoration: underline;
  }
`

const UserInfoSection = styled(Flex)`
  flex-direction: column;
  gap: 2px;
`

const UserNameRow = styled(Flex)`
  align-items: center;
  flex-direction: row;
  gap: 8px;
  flex-wrap: nowrap;
  width: 100%;
`

const UserDisplayName = styled.a`
  font-family: 'Barlow';
  font-size: 15px;
  font-weight: 700;
  color: ${colors.white};
  text-decoration: none;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  &:hover {
    text-decoration: underline;
  }
`

const UserDisplaySubName = styled.a`
  font-family: 'Barlow';
  font-size: 14px;
  font-weight: 400;
  color: ${colors.white};
  opacity: 0.6;
  text-decoration: none;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  &:hover {
    text-decoration: underline;
  }
`

const VerifiedBadge = styled(Flex)`
  background: #1d9bf0;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  svg {
    width: 12px;
    height: 12px;
    color: ${colors.BG1_HOVER};
  }
`

const MetricsContainer = styled(Flex)`
  flex-direction: row;
  gap: 16px;
  padding-top: 4px;
`

const MetricItem = styled(Flex)`
  flex-direction: row;
  align-items: center;
  gap: 6px;
  color: ${colors.white} !important;
  opacity: 0.7;
  font-size: 13px;

  svg {
    width: 14px;
    height: 14px;
    color: ${colors.white} !important;
  }
`
