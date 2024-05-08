import styled from 'styled-components'
import { colors } from '~/utils/colors'
import { Flex } from '../Flex'

type Props = {
  type: string
}

type BadgeProps = {
  iconStart: string
  color: string
  label: string
}

export const TypeBadge = ({ type }: Props) => {
  let badgeProps: BadgeProps

  const nodeType = type.toLowerCase()

  switch (nodeType) {
    case 'youtube':
    case 'twitter_space':
    case 'podcast':
    case 'clip':
      badgeProps = {
        iconStart: 'video_badge.svg',
        color: colors.CLIP,
        label: 'clip',
      }

      break

    case 'show':
      badgeProps = {
        iconStart: 'show_badge.svg',
        color: colors.SHOW,
        label: 'show',
      }

      break

    case 'tweet':
      badgeProps = {
        iconStart: 'twitter_badge.svg',
        color: colors.TWEET,
        label: 'tweet',
      }

      break

    case 'episode':
      badgeProps = {
        iconStart: 'audio_badge.svg',
        color: colors.EPISODE,
        label: 'episode',
      }

      break

    case 'document':
      badgeProps = {
        iconStart: 'notes_badge.svg',
        color: colors.TEXT,
        label: 'text',
      }

      break

    case 'organization':
      badgeProps = {
        iconStart: 'organization_badge.svg',
        color: colors.ORGANIZATION,
        label: 'organization',
      }

      break

    case 'person':
    case 'guest':
    case 'host':
      badgeProps = {
        iconStart: 'person_badge.svg',
        color: colors.PERSON,
        label: 'person',
      }

      break

    case 'event':
      badgeProps = {
        iconStart: 'event_badge.svg',
        color: colors.EVENT,
        label: 'event',
      }

      break

    case 'topic':
      badgeProps = {
        iconStart: 'topic_badge.svg',
        color: colors.TOPIC,
        label: 'topic',
      }

      break

    default:
      badgeProps = {
        iconStart: 'generic_badge.svg',
        color: colors.black,
        label: 'Unknown',
      }

      break
  }

  return <Badge {...badgeProps} />
}

const Badge = ({ iconStart, color, label }: BadgeProps) => (
  <EpisodeWrapper color={color} label={label}>
    <img alt={label} className="badge__img" src={iconStart} />
    <div className="badge__label">{label}</div>
  </EpisodeWrapper>
)

const EpisodeWrapper = styled(Flex).attrs({
  direction: 'row',
})<{ color: string; label: string }>`
  cursor: pointer;
  background: ${({ color }) => color};
  border-radius: 3px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  gap: 2px;

  .badge__img {
    width: 10px;
    height: 10px;
    object-fit: contain;
  }

  .badge__label {
    color: ${({ label }) => (label === 'topic' ? colors.black : colors.white)};
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
