import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Avatar } from '~/components/common/Avatar'
import { Flex } from '~/components/common/Flex'
import CheckIcon from '~/components/Icons/CheckIcon'
import LinkIcon from '~/components/Icons/LinkIcon'
import PersonIcon from '~/components/Icons/PersonIcon'
import { getNode } from '~/network/fetchSourcesData'
import { Node } from '~/types'
import { colors } from '~/utils/colors'
import { adaptTweetNode } from '~/utils/twitterAdapter'
import { Stats } from '../Stats'

interface TweetProps {
  nodeId: string
  handleAnalyzeClick: () => void
}

export const Tweet = ({ nodeId, handleAnalyzeClick }: TweetProps) => {
  const [node, setNode] = useState<Node | null>(null)

  useEffect(() => {
    const fetchNode = async () => {
      try {
        const data = await getNode(nodeId)

        setNode(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchNode()
  }, [nodeId])

  const adaptedNode = node ? adaptTweetNode(node) : null

  const { text, name, verified, image_url: profilePicture, twitter_handle: twitterHandle } = adaptedNode || {}

  let profileUrl = ''

  if (adaptedNode?.node_type === 'Tweet') {
    profileUrl = `https://x.com/${twitterHandle}/status/${adaptedNode?.tweet_id}`
  } else if (adaptedNode?.node_type === 'User') {
    profileUrl = `https://x.com/${twitterHandle}`
  }

  return (
    <Wrapper>
      <ContentWrapper>
        <AvatarSection>
          {profilePicture ? (
            <Avatar rounded size={58} src={profilePicture} type="person" />
          ) : (
            <DefaultAvatar>
              <PersonIcon />
            </DefaultAvatar>
          )}
        </AvatarSection>

        <UserInfoSection>
          <UserNameRow>
            <NameVerifiedGroup>
              {name && <UserDisplayName>{name}</UserDisplayName>}
              {!verified && (
                <VerifiedBadge>
                  <CheckIcon />
                </VerifiedBadge>
              )}
            </NameVerifiedGroup>
            <LinkIconWrapper href={profileUrl} target="_blank">
              <LinkIcon />
            </LinkIconWrapper>
          </UserNameRow>
          {twitterHandle && <UserHandle>@{twitterHandle}</UserHandle>}
          <TweetText>{text}</TweetText>
          {node && <Stats handleAnalyzeClick={handleAnalyzeClick} node={node} />}
        </UserInfoSection>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  background: ${colors.ANALYTICS_CARD_BG};
  border-radius: 16px;
  padding: 10px;
  width: 100%;
  max-width: 369px;
`

const ContentWrapper = styled(Flex)`
  display: grid;
  width: 100%;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: start;
`

const AvatarSection = styled(Flex)`
  margin-right: 10px;
`

const DefaultAvatar = styled(Flex)`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: ${colors.GRAY3};
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-size: 24px;
`

const UserInfoSection = styled(Flex)`
  flex-direction: column;
  gap: 3px;
  margin-top: 12px;
`

const UserNameRow = styled(Flex)`
  align-items: center;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  justify-content: space-between;
`

const NameVerifiedGroup = styled(Flex)`
  align-items: center;
  flex-direction: row;
  gap: 8px;
  flex-shrink: 1;
  min-width: 0;
`

const UserDisplayName = styled(Flex)`
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
`

const UserHandle = styled(Flex)`
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
  margin-top: 2px;
`

const TweetText = styled(Flex)`
  color: ${colors.white};
  font-family: Barlow;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 4px;
  white-space: normal;
`

const VerifiedBadge = styled(Flex)`
  background: #1d9bf0;
  border-radius: 50%;
  width: 13px;
  height: 13px;
  font-size: 15px;
  margin-top: 3px;

  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 10px;
    text-align: center;
    height: 10px;
    color: ${colors.BG1_HOVER};
  }
`

const LinkIconWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  opacity: 0.6;
  font-size: 14px;
  flex-shrink: 0;
  &:hover {
    opacity: 1;
  }
  svg {
    width: 18px;
    height: 18px;
    color: ${colors.white} !important;
    fill: ${colors.white} !important;
  }
`
