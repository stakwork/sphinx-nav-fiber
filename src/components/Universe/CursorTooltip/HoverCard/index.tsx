import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TypeBadge } from '~/components/common/TypeBadge'
import CheckIcon from '~/components/Icons/CheckIcon'
import PersonIcon from '~/components/Icons/PersonIcon'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { Node } from '~/types'
import { colors } from '~/utils/colors'

type Props = {
  node: Node
}

export const HoverCard = ({ node }: Props) => {
  const { getNodeKeysByType } = useSchemaStore((s) => s)

  if (node.node_type === 'User') {
    const properties = node.properties || {}

    const {
      username,
      twitter_handle: twitterHandle,
      image_url: imageUrl,
      followers: followersCount,
      verified,
      alias,
    } = properties as {
      username?: string
      twitter_handle?: string
      image_url?: string
      followers?: number
      verified?: boolean
      alias?: string
    }

    const displayName = alias || twitterHandle || username || ''
    const displaySubName = twitterHandle || alias || username || ''

    let profileUrl = ''

    if (username) {
      profileUrl = `https://x.com/${alias}`
    } else if (twitterHandle) {
      profileUrl = `https://x.com/${twitterHandle}`
    }

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
              <UserDisplayName href={profileUrl} target="_blank">
                {displayName}
              </UserDisplayName>
              {verified && (
                <VerifiedBadge>
                  <CheckIcon />
                </VerifiedBadge>
              )}
            </UserNameRow>
            <UserDisplaySubName href={profileUrl} target="_blank">
              @{displaySubName}
            </UserDisplaySubName>
            {followersCount && <FollowersCount>{followersCount.toLocaleString()} Followers</FollowersCount>}
          </UserInfoSection>
        </UserContentWrapper>
      </UserTooltipContainer>
    )
  }

  const properties = node.properties || {}

  const { image_url: imageUrl } = properties as { image_url?: string }
  const keyProperty = getNodeKeysByType(node.node_type) || ''

  let description = ''

  if (node.node_type === 'Question') {
    description = node.name ?? ''
  } else if (properties.description) {
    description = properties.description
  } else if (node.text) {
    description = node.text
  } else if (properties) {
    description = properties[keyProperty] || ''
  }

  const truncatedDescription = description?.slice(0, 200) || ''

  const title =
    node.node_type === 'Question'
      ? node.label ??
        node.show_title ??
        node.episode_title ??
        properties.alias ??
        properties.twitter_handle ??
        properties.username ??
        ''
      : properties[keyProperty] ??
        node.label ??
        node.name ??
        node.show_title ??
        node.episode_title ??
        properties.alias ??
        properties.twitter_handle ??
        properties.username ??
        ''

  return (
    <TooltipContainer>
      {imageUrl && (
        <ImageWrapper>
          <TooltipImage alt={node.node_type} loading="lazy" src={imageUrl} />
        </ImageWrapper>
      )}
      <ContentWrapper hasImage={!!imageUrl}>
        <TypeBadge type={node?.node_type} />
        <Title hasImage={!!imageUrl}>{title}</Title>
      </ContentWrapper>
      {truncatedDescription && <Description>{truncatedDescription}</Description>}
    </TooltipContainer>
  )
}

const TooltipContainer = styled(Flex)`
  width: fit-content;
  max-width: 600px;
  min-height: auto;
  max-height: 280px;
  background: ${colors.HOVER_CARD_BG};
  border-radius: 8px;
  padding: 15px;
  flex-direction: column;
  gap: 8px;
  pointer-events: auto;
  align-items: flex-start;
  position: relative;
  transition: opacity 0.3s ease-in-out;
`

const ContentWrapper = styled(Flex)<{ hasImage: boolean }>`
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  margin-left: ${(props) => (props.hasImage ? '50px' : '0')};
`

const Title = styled(Text)<{ hasImage: boolean }>`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.white};
  word-wrap: break-word;
  display: flex;
  white-space: normal;
  align-items: start;
  justify-content: ${(props) => (props.hasImage ? 'flex-end' : 'flex-start')};
`

const Description = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  margin-top: 4px;
  color: ${colors.white};
  opacity: 0.8;
  word-wrap: break-word;
  max-width: 100%;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
`

const ImageWrapper = styled(Flex)`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 40px;
  height: 40px;
`

const TooltipImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`

const UserTooltipContainer = styled(TooltipContainer)`
  min-width: 180px;
  max-width: 300px;
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

const FollowersCount = styled(Text)`
  font-family: 'Barlow';
  font-size: 13px;
  color: ${colors.white};
  opacity: 0.6;
  line-height: 1.2;
  margin-top: 4px;
`
