import styled from 'styled-components'
import { Avatar } from '~/components/common/Avatar'
import { Flex } from '~/components/common/Flex'

const radius = 120

type Props = {
  name: string
  imageUrl: string
}

export const User = ({ name, imageUrl }: Props) => (
  <Wrapper>
    <IconWrapper className="icon">
      <Avatar rounded size={radius / 3} src={imageUrl} type="user" />
    </IconWrapper>
    <div className="content">
      <span>{name}</span>
    </div>
  </Wrapper>
)

const Wrapper = styled(Flex)`
  width: ${radius}px;
  height: ${radius / 3}px;
  border-radius: ${radius / 3}px;
  color: white;
  flex-direction: row;
  .content {
    height: ${radius / 3}px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 4px;
    font-size: 14px;
    white-space: nowrap;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
    min-width: 0;
    span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: block;
      width: 100%;
    }
  }
`

const IconWrapper = styled(Flex)`
  width: ${radius / 3}px;
  height: ${radius / 3}px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  border: 1px solid white;
`
