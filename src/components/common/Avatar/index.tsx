import styled from 'styled-components'

type Props = {
  size?: 45 | 80 | 130 | 188 | 64 | 27
  src: string
  type: string
  rounded?: boolean
}

type TTypeMapper = {
  [key: string]: string
}

const TypesMapper: TTypeMapper = {
  youtube: 'video',
  podcast: 'audio',
  clip: 'audio',
  tweet: 'tweet',
  person: 'person',
  twitter_space: 'audio',
}

export const Avatar = styled.div<Props>`
  background-image: ${({ src, type = 'audio' }) => `url(${src}), url('/${TypesMapper[type]}_placeholder.svg')`};
  background-size: contain;
  background-repeat: no-repeat;
  width: ${({ size = 45 }) => size}px;
  height: ${({ size = 45 }) => size}px;
  border-radius: ${({ rounded }) => (rounded ? '50%' : '2px')};
`
