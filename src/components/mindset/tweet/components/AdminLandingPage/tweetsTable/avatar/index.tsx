import styled from 'styled-components'

interface IProps {
  name?: string
  url?: string
}

export const Avatar = ({ name, url }: IProps) => (
  <AvatarContainer>
    {url ? <img alt={name || 'avatar'} className="avatar" src={url} /> : <div className="avatar avatar_default" />}
  </AvatarContainer>
)

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .avatar {
    width: 46px;
    height: 46px;
    border-radius: 50%;

    &_default {
      background: rgb(97, 138, 255);
    }
  }
`
