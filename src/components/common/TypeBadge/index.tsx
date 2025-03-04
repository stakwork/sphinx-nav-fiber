import React from 'react'
import styled from 'styled-components'
import { Icons } from '~/components/Icons'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { colors } from '~/utils/colors'
import { Flex } from '../Flex'

type Props = {
  type: string
}

type BadgeProps = {
  iconStart: string
  backgroundColor: string
  iconColor: string
  label: string
}

export const TypeBadge = ({ type }: Props) => {
  let badgeProps: Omit<BadgeProps, 'label'>
  const [normalizedSchemasByType] = useSchemaStore((s) => [s.normalizedSchemasByType])
  const schema = normalizedSchemasByType[type]

  const primaryColor = schema?.primary_color
  const secondaryColor = schema?.secondary_color
  const primaryIcon = schema?.icon

  const icon = primaryIcon ? `svg-icons/${primaryIcon}.svg` : null

  switch (type) {
    case 'video':
    case 'twitter_space':
    case 'podcast':
    case 'clip':
      badgeProps = {
        iconStart: icon ?? 'video_badge.svg',
        backgroundColor: primaryColor ?? colors.CLIP,
        iconColor: secondaryColor ?? colors.white,
      }

      break

    case 'show':
      badgeProps = {
        iconStart: icon ?? 'show_badge.svg',
        backgroundColor: primaryColor ?? colors.SHOW,
        iconColor: secondaryColor ?? colors.white,
      }

      break

    case 'tweet':
      badgeProps = {
        iconStart: icon ?? 'twitter_badge.svg',
        backgroundColor: primaryColor ?? colors.TWEET,
        iconColor: secondaryColor ?? colors.white,
      }

      break

    case 'episode':
      badgeProps = {
        iconStart: icon ?? 'audio_badge.svg',
        backgroundColor: primaryColor ?? colors.EPISODE,
        iconColor: secondaryColor ?? colors.white,
      }

      break

    case 'document':
      badgeProps = {
        iconStart: icon ?? 'notes_badge.svg',
        backgroundColor: primaryColor ?? colors.TEXT,
        iconColor: secondaryColor ?? colors.white,
      }

      break

    case primaryIcon ?? 'organization':
      badgeProps = {
        iconStart: icon ?? 'organization_badge.svg',
        backgroundColor: primaryColor ?? colors.ORGANIZATION,
        iconColor: secondaryColor ?? colors.white,
      }

      break

    case 'person':
    case 'guest':
    case 'host':
      badgeProps = {
        iconStart: icon ?? 'person_badge.svg',
        backgroundColor: primaryColor ?? colors.PERSON,
        iconColor: secondaryColor ?? colors.white,
      }

      break

    case 'event':
      badgeProps = {
        iconStart: icon ?? 'event_badge.svg',
        backgroundColor: primaryColor ?? colors.EVENT,
        iconColor: secondaryColor ?? colors.white,
      }

      break

    default:
      badgeProps = {
        iconStart: icon ?? 'thing_badge.svg',
        backgroundColor: primaryColor ?? colors.THING,
        iconColor: secondaryColor ?? colors.white,
      }

      break
  }

  return <Badge {...badgeProps} label={type} />
}

const IconWrapper = styled.div<{ iconColor: string }>`
  width: 10px;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
    color: ${({ iconColor }) => iconColor};
  }
`

const EpisodeWrapper = styled(Flex).attrs({
  direction: 'row',
})<{ backgroundColor: string }>`
  cursor: pointer;
  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: 3px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  gap: 2px;

  .badge__label {
    color: ${colors.white};
    font-family: Barlow;
    font-size: 8px;
    font-style: normal;
    font-weight: 800;
    line-height: 14px;
    text-transform: uppercase;
    letter-spacing: 0.48px;
    padding: 0 4px;
  }
`

const Badge = ({ iconStart, backgroundColor, iconColor, label }: BadgeProps) => (
  <EpisodeWrapper backgroundColor={backgroundColor}>
    <IconWrapper iconColor={iconColor}>
      {React.createElement(Icons[iconStart.replace('svg-icons/', '').replace('.svg', '')] || Icons.NodesIcon)}
    </IconWrapper>
    <div className="badge__label">{label}</div>
  </EpisodeWrapper>
)
