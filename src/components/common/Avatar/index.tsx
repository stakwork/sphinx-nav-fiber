import styled from 'styled-components'

type Props = {
  size?: number
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
  episode: 'audio',
  clip: 'audio',
  tweet: 'twitter',
  person: 'person',
  guest: 'person',
  twitter_space: 'audio',
  show: 'show',
  image: 'image',
}

export const Avatar = styled.div<Props>`
  background-image: ${({ src, type = 'audio' }) => `url(${src}), url('/${(TypesMapper[type] || 'generic')}_placeholder_img.png')`};
  background-size: contain;
  background-repeat: no-repeat;
  width: ${({ size = 45 }) => size}px;
  height: ${({ size = 45 }) => size}px;
  border-radius: ${({ rounded }) => (rounded ? '50%' : '2px')};
`
