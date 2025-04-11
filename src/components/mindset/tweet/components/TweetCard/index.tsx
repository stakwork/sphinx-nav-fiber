import styled from 'styled-components'
import { Avatar } from '~/components/common/Avatar'
import { Flex } from '~/components/common/Flex'
import { Node } from '~/types'
import { colors } from '~/utils/colors'
import { adaptTweetNode } from '~/utils/twitterAdapter'

interface VideoCardProps {
  node: Node
  onClick: () => void
  selected: boolean
}

export const TweetCard = ({ node, onClick, selected }: VideoCardProps) => {
  const adaptedNode = node ? adaptTweetNode(node) : null

  const { text, name, verified, image_url: profilePicture, twitter_handle: twitterHandle } = adaptedNode || {}

  return (
    <CardWrapper className={selected ? 'selected' : ''} onClick={onClick}>
      <Flex direction="column">
        <Flex align="center" direction="row" pr={16}>
          <PictureWrapper>
            <Avatar rounded size={28} src={profilePicture || ''} type="person" />
          </PictureWrapper>
          <Flex>
            <Name align="center" direction="row">
              {name}
              {verified && (
                <div className="verification">
                  <img alt="verified" src="verified_twitter.svg" />
                </div>
              )}
            </Name>
            {twitterHandle && <TwitterHandle>@{twitterHandle}</TwitterHandle>}
          </Flex>
        </Flex>

        <Flex grow={1} shrink={1}>
          <TwitText data-testid="episode-description">{text}</TwitText>
        </Flex>
      </Flex>
    </CardWrapper>
  )
}

const CardWrapper = styled(Flex)`
  background: ${colors.BG1};
  width: 170px;
  height: 200px;
  color: ${colors.white};
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  &.selected {
    background: ${colors.SEEDQUESTION};
    &:hover {
      background: ${colors.SEEDQUESTION};
    }
  }

  &:hover {
    background: ${colors.SEEDQUESTION_HOVER};
  }
`

const PictureWrapper = styled(Flex)`
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`

const Name = styled(Flex)`
  color: ${colors.white};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.22px;
  .verification {
    margin-left: 4px;
  }
`

const TwitterHandle = styled(Flex)`
  color: ${colors.GRAY7};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const TwitText = styled(Flex)`
  color: ${colors.white};
  font-family: Barlow;
  font-size: 17px;
  font-weight: 400;
  font-style: normal;
  line-height: 130%;
  letter-spacing: -0.39px;
  margin: 8px 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
`
