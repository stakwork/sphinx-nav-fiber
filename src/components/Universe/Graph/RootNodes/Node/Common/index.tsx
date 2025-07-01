import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'

type Props = {
  name: string
  radius: number
  isRoot?: boolean
}

export const Common = ({ name, isRoot, radius }: Props) => (
  <Wrapper className={isRoot ? 'root' : ''} radius={radius}>
    <span>{name}</span>
  </Wrapper>
)

const Wrapper = styled(Flex)<{ radius: number }>`
  pointer-events: none;
  font-size: ${(props) => (props.className === 'root' ? '12px' : '8px')};
  font-weight: ${(props) => (props.className === 'root' ? 600 : 400)};
  border-radius: ${(props) => (props.className === 'root' ? '5px' : '10px')};
  border: ${(props) => (props.className === 'root' ? '2px solid #3da9ff' : '1px solid #fff')};
  width: ${(props) => `${props.radius}px`};
  height: ${(props) => `${props.radius}px`};
  text-align: center;
  color: #eaeaea;
  background-color: ${(props) => (props.className === 'root' ? 'transparent' : 'rgba(53, 58, 70, 0.6)')};
  display: flex;
  align-items: center;
  justify-content: center;
`
