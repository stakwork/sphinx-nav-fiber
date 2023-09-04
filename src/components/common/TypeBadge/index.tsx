import styled from 'styled-components'
import { colors } from '~/utils/colors'
import { Flex } from '../Flex'

type Episode = {
  img: string
  label: string
}

type EpisodeTypeImage = {
  [key: string]: Episode
}

const EpisodeTypeImages: EpisodeTypeImage = {
  podcast: { img: 'podcast.png', label: 'clip' },
  twitter: { img: 'twitter.png', label: 'twit' },
  twitter_space: { img: 'twitter.png', label: 'twitter_space' },
  youtube: { img: 'clip.png', label: 'episode' },
}

type Props = {
  type: string
}

export const TypeBadge = ({ type }: Props) => (
  <EpisodeWrapper>
    <img alt={EpisodeTypeImages[type].label} src={EpisodeTypeImages[type].img} />
    <div className="label">{EpisodeTypeImages[type].label}</div>
  </EpisodeWrapper>
)

const EpisodeWrapper = styled(Flex).attrs({
  direction: 'row',
})`
  cursor: pointer;
  background: ${colors.white};
  border-radius: 1px;
  overflow: hidden;

  img {
    width: 14px;
    height: 14px;
    object-fit: cover;
  }

  .label {
    color: ${colors.BG1};
    font-family: Barlow;
    font-size: 8px;
    font-style: normal;
    font-weight: 800;
    line-height: 14px;
    text-transform: uppercase;
    line-height: 14px;
    letter-spacing: 0.48px;
    padding: 0 4px;
  }
`
