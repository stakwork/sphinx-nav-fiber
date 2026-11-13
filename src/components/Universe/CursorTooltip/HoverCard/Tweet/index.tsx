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
    impressions?: number
    likes?: number
    replies?: number
    retweets?: number
    quotes?: number
    bookmarks?: number
  }
}

type SocialProperties = {
  alias?: string
  author?: string
  author_image_url?: string
  avatar_url?: string
  bookmark_count?: number | string
  image_url?: string
  impression_count?: number | string
  impressions?: number | string
  like_count?: number | string
  link?: string
  media_url?: string
  name?: string
  posted_by?: string
  profile_image_url?: string
  profile_picture?: string
  quote_count?: number | string
  reply_count?: number | string
  retweet_count?: number | string
  source_link?: string
  text?: string
  title?: string
  tweet_id?: string
  twitter_handle?: string
  url?: string
  verified?: boolean
}

const toOptionalNumber = (value?: number | string) => {
  if (value === undefined || value === null || value === '') {
    return undefined
  }

  const parsed = typeof value === 'number' ? value : Number(value)

  return Number.isFinite(parsed) ? parsed : undefined
}

const buildPostUrl = (nodeType: string, properties: SocialProperties) => {
  const { tweet_id: tweetId, twitter_handle: twitterHandle, source_link: sourceLink, link, url } = properties

  if (nodeType === 'Tweet' && tweetId && twitterHandle) {
    return `https://x.com/${twitterHandle.replace(/^@/, '')}/status/${tweetId}`
  }

  return sourceLink || link || url || ''
}

const MetricsBar = ({ metrics }: MetricsProps) => {
  const formatNumber = (num?: number) => {
    if (num === undefined) {
      return '0'
    }

    return num.toLocaleString()
  }

  const hasMetrics = Object.values(metrics).some((metric) => metric !== undefined)

  if (!hasMetrics) {
    return null
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

export const Tweet = ({ node }: Props) => {
  const properties = node.properties || {}
  const nodeType = node.node_type

  const {
    text,
    twitter_handle: twitterHandle,
    alias,
    author,
    posted_by: postedBy,
    name,
    title,
    verified,
    image_url: imageUrl,
    media_url: mediaUrl,
    profile_picture: profilePicture,
    profile_image_url: profileImageUrl,
    avatar_url: avatarImageUrl,
    author_image_url: authorImageUrl,
  } = properties as unknown as SocialProperties

  const socialProperties = properties as unknown as SocialProperties
  const postUrl = buildPostUrl(nodeType, socialProperties)

  const displayName =
    alias || author || postedBy || twitterHandle || name || title || node.name || node.label || nodeType

  const displaySubName = twitterHandle || alias || author || postedBy || ''
  const avatarUrl = profilePicture || profileImageUrl || avatarImageUrl || authorImageUrl
  const contentImageUrl = mediaUrl || imageUrl

  const metrics = {
    impressions: toOptionalNumber(socialProperties.impression_count ?? socialProperties.impressions),
    likes: toOptionalNumber(socialProperties.like_count),
    replies: toOptionalNumber(socialProperties.reply_count),
    retweets: toOptionalNumber(socialProperties.retweet_count),
    quotes: toOptionalNumber(socialProperties.quote_count),
    bookmarks: toOptionalNumber(socialProperties.bookmark_count),
  }

  const contentImageAlt = text || title || displayName

  return (
    <TooltipContainer>
      <UserContentWrapper>
        <ContentRow>
          <AvatarColumn>
            {avatarUrl ? (
              <UserAvatar alt={displayName} src={avatarUrl} />
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
                <UserDisplayNameText>{displayName}</UserDisplayNameText>
              )}
              {verified && (
                <VerifiedBadge>
                  <CheckIcon />
                </VerifiedBadge>
              )}
              {displaySubName &&
                (postUrl ? (
                  <UserDisplaySubName href={postUrl} rel="noreferrer" target="_blank">
                    @{displaySubName.replace(/^@/, '')}
                  </UserDisplaySubName>
                ) : (
                  <UserDisplaySubNameText>@{displaySubName.replace(/^@/, '')}</UserDisplaySubNameText>
                ))}
            </UserNameRow>

            {text && <PostText>{text}</PostText>}
          </MainColumn>
        </ContentRow>

        {contentImageUrl && <PostImage alt={contentImageAlt} src={contentImageUrl} />}

        <MetricsBar metrics={metrics} />
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

const PostImage = styled.img`
  width: 100%;
  max-height: 220px;
  border-radius: 6px;
  object-fit: cover;
  display: block;
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

const UserDisplayNameText = styled.span`
  font-family: 'Barlow';
  font-size: 15px;
  font-weight: 600;
  color: ${colors.white};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
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

const UserDisplaySubNameText = styled.span`
  font-family: 'Barlow';
  font-size: 15px;
  color: rgba(255, 255, 255, 0.6);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
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
    color: ${colors.white} !important;
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
