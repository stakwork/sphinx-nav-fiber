import styled from 'styled-components'

type Props = {
  size?: 45 | 80 | 130 | 188
  src: string
  type: 'audio' | 'video' | 'twitter'
}

export const Avatar = styled.div<Props>`
  background-image: ${({ src, type = 'audio' }) => `url(${src}), url('/${type}_placeholder.svg')`};
  background-size: contain;
  background-repeat: no-repeat;
  width: ${({ size = 45 }) => size}px;
  height: ${({ size = 45 }) => size}px;
  border-radius: 2px;
`
