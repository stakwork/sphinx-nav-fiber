import styled from 'styled-components'
import { Avatar } from '~/components/common/Avatar'
import { Flex } from '~/components/common/Flex'

type Props = {
  name: string
  imgUrl: string
  description?: string
}

export const Speaker = ({ name, imgUrl, description }: Props) => (
  <Wrapper>
    <div className="avatar">{!imgUrl ? name.charAt(0) : <Avatar rounded size={64} src={imgUrl} type="Person" />}</div>
    <div className="label">
      <div className="name">{name}</div>
      <div className="description">{description}</div>
    </div>
  </Wrapper>
)

const Wrapper = styled(Flex)`
  position: relative;
  align-items: center;
  gap: 8px;

  .avatar {
    position: relative;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 2px solid rgb(196, 181, 253);
    background-color: rgb(31, 41, 55);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 18px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }

  .label {
    background-color: rgba(31, 41, 55, 0.9);
    backdrop-filter: blur(8px);
    border: 1px solid rgb(75, 85, 99);
    border-radius: 8px;
    padding: 4px 12px;
    color: white;
    font-size: 14px;
    font-weight: 500;

    .name {
      font-size: 16px;
      font-weight: 600;
    }

    .description {
      font-size: 14px;
      font-weight: 400;
    }
  }
`
