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
        <ContentRow>
          <AvatarColumn>
            {imageUrl ? (
              <UserAvatar alt={displayName} src={imageUrl} />
            ) : (
              <DefaultAvatar>
                <PersonIcon />
              </DefaultAvatar>
            )}
          </AvatarColumn>

          <MainColumn>
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

            {text && <PostText>{text}</PostText>}
          </MainColumn>
        </ContentRow>

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
  border-radius: 16px;
  padding: 15px;
  padding-bottom: 3px !important;
  flex-direction: column;
  gap: 4px;
  pointer-events: auto;
  align-items: flex-start;
`

const UserTooltipContainer = styled(TooltipContainer)`
  width: 320px;
  min-height: auto;
  border-radius: 16px;
  padding: 12px;
  overflow: hidden;
`

const UserContentWrapper = styled(Flex)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`

const ContentRow = styled(Flex)`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 12px;
`

const AvatarColumn = styled(Flex)`
  flex-shrink: 0;
  width: 40px;
`

const MainColumn = styled(Flex)`
  flex-direction: column;
  flex-grow: 1;
  min-width: 0;
  max-width: calc(100% - 52px);
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

const PostText = styled.div`
  font-family: 'Barlow';
  font-size: 15px;
  line-height: 1.4;
  color: ${colors.white};
  margin: 0;
  word-break: break-word;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
`

const UserNameRow = styled(Flex)`
  align-items: center;
  flex-direction: row;
  gap: 8px;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 6px;
`

const UserDisplayName = styled.a`
  font-family: 'Barlow';
  font-size: 15px;
  font-weight: 600;
  color: ${colors.white};
  text-decoration: none;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  &:hover {
    text-decoration: underline;
  }
`

const UserDisplaySubName = styled.a`
  font-family: 'Barlow';
  font-size: 15px;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  &:hover {
    text-decoration: underline;
  }
`

const VerifiedBadge = styled(Flex)`
  background: #1d9bf0;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin: 0 2px;
  svg {
    width: 10px;
    height: 10px;
    color: ${colors.BG1_HOVER};
  }
`

const MetricsContainer = styled(Flex)`
  flex-direction: row;
  gap: 20px;
  margin-top: 4px;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const MetricItem = styled(Flex)`
  flex-direction: row;
  align-items: center;
  gap: 4px;
  color: ${colors.white} !important;
  font-size: 13px;
  margin-bottom: 10px;

  svg {
    width: 16px;
    height: 16px;
    color: rgba(255, 255, 255, 0.6) !important;
  }

  span {
    color: ${colors.white} !important;
    min-width: 8px;
    text-align: right;
  }
`
