import styled from 'styled-components'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { colors } from '~/utils/colors'
import { Flex } from '../Flex'
import { Icons } from '~/components/Icons'

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
  const nodeType = type.toLowerCase()

  const primaryColor = normalizedSchemasByType[type]?.primary_color
  const primaryIcon = normalizedSchemasByType[type]?.icon

  const isIconPresent = primaryIcon && primaryIcon in Icons

  const icon = isIconPresent ? `svg-icons/${primaryIcon}.svg` : 'svg-icons/NodesIcon.svg'

  switch (nodeType) {
    case 'video':
    case 'twitter_space':
    case 'podcast':
    case 'clip':
      badgeProps = {
        iconStart: icon,
        color: primaryColor ?? colors.CLIP,
      }

      break

    case 'show':
      badgeProps = {
        iconStart: icon,
        color: primaryColor ?? colors.SHOW,
      }

      break

    case 'tweet':
      badgeProps = {
        iconStart: icon,
        color: primaryColor ?? colors.TWEET,
      }

      break

    case 'episode':
      badgeProps = {
        iconStart: icon,
        color: primaryColor ?? colors.EPISODE,
      }

      break

    case 'document':
      badgeProps = {
        iconStart: icon,
        color: primaryColor ?? colors.TEXT,
      }

      break

    case primaryIcon ?? 'organization':
      badgeProps = {
        iconStart: icon,
        color: primaryColor ?? colors.ORGANIZATION,
      }

      break

    case 'person':
    case 'guest':
    case 'host':
      badgeProps = {
        iconStart: icon,
        color: primaryColor ?? colors.PERSON,
      }

      break

    case 'event':
      badgeProps = {
        iconStart: icon,
        color: primaryColor ?? colors.EVENT,
      }

      break

    case 'topic':
      badgeProps = {
        iconStart: icon,
        color: primaryColor ?? colors.TOPIC,
      }

      break

    default:
      badgeProps = {
        iconStart: icon,
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
