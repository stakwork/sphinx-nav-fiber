import { FaBookmark, FaChartBar, FaComment, FaHeart, FaQuoteRight, FaRetweet } from 'react-icons/fa'
import styled from 'styled-components'
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
    impressions?: number | string
    likes?: number | string
    replies?: number | string
    retweets?: number | string
    quotes?: number | string
    bookmarks?: number | string
  }
}

const MetricsBar = ({ metrics }: MetricsProps) => {
  const metricEntries = [
    { key: 'replies', value: metrics.replies, icon: <FaComment /> },
    { key: 'retweets', value: metrics.retweets, icon: <FaRetweet /> },
    { key: 'quotes', value: metrics.quotes, icon: <FaQuoteRight /> },
    { key: 'likes', value: metrics.likes, icon: <FaHeart /> },
    { key: 'bookmarks', value: metrics.bookmarks, icon: <FaBookmark /> },
    { key: 'impressions', value: metrics.impressions, icon: <FaChartBar /> },
  ].filter(({ value }) => value !== undefined && value !== null && value !== '')

  const formatNumber = (num?: number | string) => {
    if (typeof num === 'number') {
      return num.toLocaleString()
    }

    const normalized = Number(String(num).replaceAll(',', ''))

    return Number.isNaN(normalized) ? String(num) : normalized.toLocaleString()
  }

  if (!metricEntries.length) {
    return null
  }

  return (
    <MetricsContainer>
      {metricEntries.map(({ key, value, icon }) => (
        <MetricItem key={key}>
          <span>{formatNumber(value)}</span>
          {icon}
        </MetricItem>
      ))}
    </MetricsContainer>
  )
}

export const Tweet = ({ node }: Props) => {
  const properties = node.properties || {}
  const nodeType = node.node_type

  const {
    text,
    name,
    tweet_id: tweetId,
    impression_count: impressions,
    like_count: likes,
    reply_count: replies,
    retweet_count: retweets,
    quote_count: quotes,
    bookmark_count: bookmarks,
    image_url: imageUrl,
    twitter_handle: twitterHandle,
    alias,
    verified,
    url,
    link,
    source_url: sourceUrl,
  } = properties as {
    text?: string
    name?: string
    tweet_id?: string
    impression_count?: number | string
    like_count?: number | string
    reply_count?: number | string
    retweet_count?: number | string
    quote_count?: number | string
    bookmark_count?: number | string
    image_url?: string
    twitter_handle?: string
    alias?: string
    verified?: boolean
    url?: string
    link?: string
    source_url?: string
  }

  const postUrl =
    url || link || sourceUrl || (tweetId && twitterHandle ? `https://x.com/${twitterHandle}/status/${tweetId}` : '')

  const displayName = alias || twitterHandle || name || node.name || nodeType
  const displaySubName = twitterHandle || alias || ''
  const postText = text || name || node.name || ''

  return (
    <TooltipContainer>
      <UserContentWrapper>
        <ContentRow>
          <AvatarColumn>
            {imageUrl ? (
              <UserAvatar alt={displayName} loading="lazy" src={imageUrl} />
            ) : (
              <DefaultAvatar>
                <PersonIcon />
              </DefaultAvatar>
            )}
          </AvatarColumn>

          <MainColumn>
            <UserNameRow>
              {postUrl ? (
                <UserDisplayName href={postUrl} rel="noreferrer" target="_blank">
                  {displayName}
                </UserDisplayName>
              ) : (
                <UserDisplayName as="span">{displayName}</UserDisplayName>
              )}
              {verified && (
                <VerifiedBadge>
                  <CheckIcon />
                </VerifiedBadge>
              )}
              {displaySubName &&
                (postUrl ? (
                  <UserDisplaySubName href={postUrl} rel="noreferrer" target="_blank">
                    @{displaySubName}
                  </UserDisplaySubName>
                ) : (
                  <UserDisplaySubName as="span">@{displaySubName}</UserDisplaySubName>
                ))}
            </UserNameRow>

            {postText && <PostText>{postText}</PostText>}
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
    </TooltipContainer>
  )
}

const TooltipContainer = styled(Flex)`
  width: fit-content;
  background: ${colors.HOVER_CARD_BG};
  flex-direction: column;
  pointer-events: auto;
  align-items: flex-start;
  border-radius: 8px;
  overflow: hidden;
  max-width: 390px;
  border-bottom: 5px solid rgba(0, 0, 0, 0.3);
  padding: 16px 14px;
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
  gap: 12px;
  margin-top: 4px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 10px;
`

const MetricItem = styled(Flex)`
  flex-direction: row;
  align-items: center;
  gap: 4px;
  color: ${colors.white} !important;
  font-size: 13px;
  margin-bottom: 4px;
  min-width: 0;

  svg {
    width: 16px;
    height: 16px;
    color: rgba(255, 255, 255, 0.6) !important;
    flex-shrink: 0;
  }

  span {
    color: ${colors.white} !important;
    min-width: 8px;
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
