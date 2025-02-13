import styled from 'styled-components'
import { useSchemaStore } from '~/stores/useSchemaStore'
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
  let badgeProps: Omit<BadgeProps, 'label'>
  const [normalizedSchemasByType] = useSchemaStore((s) => [s.normalizedSchemasByType])
  const nodeType = type

  const primaryColor = normalizedSchemasByType[type]?.primary_color
  const primaryIcon = normalizedSchemasByType[type]?.icon

  const icon = primaryIcon ? `svg-icons/${primaryIcon}.svg` : null

  switch (nodeType) {
    case 'video':
    case 'twitter_space':
    case 'podcast':
    case 'clip':
      badgeProps = {
        iconStart: icon ?? 'video_badge.svg',
        color: primaryColor ?? colors.CLIP,
      }

      break

    case 'show':
      badgeProps = {
        iconStart: icon ?? 'show_badge.svg',
        color: primaryColor ?? colors.SHOW,
      }

      break

    case 'tweet':
      badgeProps = {
        iconStart: icon ?? 'twitter_badge.svg',
        color: primaryColor ?? colors.TWEET,
      }

      break

    case 'episode':
      badgeProps = {
        iconStart: icon ?? 'audio_badge.svg',
        color: primaryColor ?? colors.EPISODE,
      }

      break

    case 'document':
      badgeProps = {
        iconStart: icon ?? 'notes_badge.svg',
        color: primaryColor ?? colors.TEXT,
      }

      break

    case primaryIcon ?? 'organization':
      badgeProps = {
        iconStart: icon ?? 'organization_badge.svg',
        color: primaryColor ?? colors.ORGANIZATION,
      }

      break

    case 'person':
    case 'guest':
    case 'host':
      badgeProps = {
        iconStart: icon ?? 'person_badge.svg',
        color: primaryColor ?? colors.PERSON,
      }

      break

    case 'event':
      badgeProps = {
        iconStart: icon ?? 'event_badge.svg',
        color: primaryColor ?? colors.EVENT,
      }

      break

    default:
      badgeProps = {
        iconStart: icon ?? 'thing_badge.svg',
        color: primaryColor ?? colors.THING,
      }

      break
  }

  return <Badge {...badgeProps} label={type} />
}

const Badge = ({ iconStart, color, label }: BadgeProps) => (
  <EpisodeWrapper color={color}>
    <img alt={label} className="badge__img" src={`/${iconStart}`} />
    <div className="badge__label">{label}</div>
  </EpisodeWrapper>
)

const EpisodeWrapper = styled(Flex).attrs({
  direction: 'row',
})<{ color: string }>`
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
    color: ${colors.white};
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
