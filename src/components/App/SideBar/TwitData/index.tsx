import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useSelectedNode } from '~/stores/useDataStore'
import { colors } from '~/utils/colors'

export const TwitData = () => {
  const selectedNode = useSelectedNode()

  const twitId: string = selectedNode?.tweet_id || ''

  return (
    selectedNode && (
      <Flex direction="column" px={24} py={16}>
        <Flex align="center" direction="row" justify="flex-start" p={10}>
          <Text color="primaryText1">{selectedNode?.label}</Text>
        </Flex>
        {twitId && (
          <TweetContainer>
            <Flex direction="row">
              <ProfilePicture>
                <img alt="Profile" src={selectedNode.image_url || 'twitter_placeholder.png'} />
              </ProfilePicture>

              <AuthorInfo>
                <AuthorName>{selectedNode.name}</AuthorName>
                <TwitterHandle>{selectedNode.twitter_handle || '@unknown_handle'}</TwitterHandle>
              </AuthorInfo>
            </Flex>
            <TweetText>{selectedNode.text}</TweetText>
          </TweetContainer>
        )}
      </Flex>
    )
  )
}

const TweetContainer = styled.div`
  padding: 10px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  background: ${colors.BG1};
`

const ProfilePicture = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 6px;
  overflow: hidden;
  margin-right: 10px;
  flex: 1 1 50px;
  max-width: 50px;
  margin-bottom: 16px;

  img {
    width: 100%;
    height: 100%;
  }
`

const AuthorInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 5px;
  flex-direction: column;
`

const AuthorName = styled.span`
  font-family: Barlow;
  font-weight: 700;
  color: ${colors.white};
`

const TwitterHandle = styled.span`
  color: ${colors.PRIMARY_BLUE};
`

const TweetText = styled.p`
  font-family: Barlow;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  color: ${colors.white};
`
