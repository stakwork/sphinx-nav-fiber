import styled from 'styled-components'

type Props = {
  size?: number
  height?: number
  width?: number
  src: string
  type: string
  rounded?: boolean
}

type TTypeMapper = {
  [key: string]: string
}

const TypesMapper: TTypeMapper = {
  video: 'video',
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
  background-image: ${({ src, type = 'audio' }) =>
    `url(${src}), url('/${TypesMapper[type] || 'generic'}_placeholder_img.png')`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: ${({ size = 45, width }) => width || size}px;
  height: ${({ size = 45, height }) => height || size}px;
  border-radius: ${({ rounded }) => (rounded ? '50%' : '2px')};
`
