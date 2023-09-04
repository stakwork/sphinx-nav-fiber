import styled from 'styled-components'

type Props = {
  size?: 45 | 80 | 130
  src: string
}

export const Avatar = styled.div<Props>`
  background-image: ${({ src }) => `url(${src})`};
  background-size: contain;
  background-repeat: no-repeat;
  width: ${({ size = 45 }) => size}px;
  height: ${({ size = 45 }) => size}px;
  border-radius: 2px;
`
