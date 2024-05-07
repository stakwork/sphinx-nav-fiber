import styled from 'styled-components'
import { Flex } from '../Flex'

type Episode = {
  img: string
}

type EpisodeTypeImage = {
  [key: string]: Episode
}

const EpisodeTypeImages: EpisodeTypeImage = {
  podcast: { img: 'clip_badge.svg' },
  clip: { img: 'clip_badge.svg' },
  show: { img: 'show_badge.svg' },
  tweet: { img: 'tweet_badge.svg' },
  twitter_space: { img: 'clip_badge.svg' },
  youtube: { img: 'clip_badge.svg' },
  episode: { img: 'episode_badge.svg' },
  document: { img: 'text_badge.svg' },
  image: { img: 'thing_badge.png' },
  organization: { img: 'organization_badge.svg' },
  person: { img: 'person_badge.svg' },
  guest: { img: 'person_badge.svg' },
  host: { img: 'person_badge.svg' },
  event: { img: 'event_badge.svg' },
  topic: { img: 'topic_badge.svg' },
}

type Props = {
  type: string
}

export const TypeBadge = ({ type }: Props) => (
  <EpisodeWrapper>
    <img alt={type} className="badge__img" src={EpisodeTypeImages[type]?.img || 'generic_badge.svg'} />
  </EpisodeWrapper>
)

const EpisodeWrapper = styled(Flex).attrs({
  direction: 'row',
})`
  cursor: pointer;
  border-radius: 3px;
  overflow: hidden;

  .badge__img {
    object-fit: cover;
  }
`
