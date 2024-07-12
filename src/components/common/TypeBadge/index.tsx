import styled from 'styled-components'
import { colors } from '~/utils/colors'
import { Flex } from '../Flex'
import { useSchemaStore } from '~/stores/useSchemaStore'

type Props = {
  type: string
}

type BadgeProps = {
  iconStart: string
  color: string
  label: string
}

export const TypeBadge = ({ type }: Props) => {
  let badgeProps: Omit<BadgeProps, 'label'>
  const [getPrimaryColorByType] = useSchemaStore((s) => [s.getPrimaryColorByType])
  const nodeType = type.toLowerCase()

  const primaryColor = getPrimaryColorByType(type)

  switch (nodeType) {
    case 'video':
    case 'twitter_space':
    case 'podcast':
    case 'clip':
      badgeProps = {
        iconStart: 'video_badge.svg',
        color: primaryColor ?? colors.CLIP,
      }

      break

    case 'show':
      badgeProps = {
        iconStart: 'show_badge.svg',
        color: primaryColor ?? colors.SHOW,
      }

      break

    case 'tweet':
      badgeProps = {
        iconStart: 'twitter_badge.svg',
        color: primaryColor ?? colors.TWEET,
      }

      break

    case 'episode':
      badgeProps = {
        iconStart: 'audio_badge.svg',
        color: primaryColor ?? colors.EPISODE,
      }

      break

    case 'document':
      badgeProps = {
        iconStart: 'notes_badge.svg',
        color: primaryColor ?? colors.TEXT,
      }

      break

    case 'organization':
      badgeProps = {
        iconStart: 'organization_badge.svg',
        color: primaryColor ?? colors.ORGANIZATION,
      }

      break

    case 'person':
    case 'guest':
    case 'host':
      badgeProps = {
        iconStart: 'person_badge.svg',
        color: primaryColor ?? colors.PERSON,
      }

      break

    case 'event':
      badgeProps = {
        iconStart: 'event_badge.svg',
        color: primaryColor ?? colors.EVENT,
      }

      break

    case 'topic':
      badgeProps = {
        iconStart: 'topic_badge.svg',
        color: primaryColor ?? colors.TOPIC,
      }

      break

    default:
      badgeProps = {
        iconStart: 'thing_badge.svg',
        color: primaryColor ?? colors.THING,
      }

      break
  }

  return <Badge {...badgeProps} label={type} />
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
    color: ${({ label }) => (label.toLowerCase() === 'topic' ? colors.black : colors.white)};
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
