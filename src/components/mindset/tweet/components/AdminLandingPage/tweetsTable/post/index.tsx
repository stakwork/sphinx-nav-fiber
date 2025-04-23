import styled from 'styled-components'
import { colors } from '~/utils'

interface IProps {
  name?: string
  twitterHandle?: string
  text?: string
  verified?: boolean
}

export const Post = ({ name, text, twitterHandle, verified }: IProps) => (
  <PostContainer>
    <UserName>
      {name || 'unknown'}
      {verified && (
        <div className="verification">
          <img alt="verified" src="verified_twitter.svg" />
        </div>
      )}
    </UserName>
    <UserHandle>@{twitterHandle || 'unknown'}</UserHandle>
    <PostText>{text || ''}</PostText>
  </PostContainer>
)

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 347px;
`

const UserName = styled.div`
  font-weight: bold;
  font-size: 15px;
  font-weight: 600;
  line-height: 100%;

  display: flex;

  .verification {
    margin-left: 4px;
  }
`

const UserHandle = styled.div`
  color: ${colors.GRAY6};
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 2px;
`

const PostText = styled.div`
  max-height: 44px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 140%;
  font-size: 14px;
`
