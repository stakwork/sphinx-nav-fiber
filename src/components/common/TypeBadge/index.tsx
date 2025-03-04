import React from 'react'
import styled from 'styled-components'
import { Icons } from '~/components/Icons'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { colors } from '~/utils/colors'
import { Flex } from '../Flex'

type Props = {
  type: string
}

export const TypeBadge = ({ type }: Props) => {
  const [normalizedSchemasByType] = useSchemaStore((s) => [s.normalizedSchemasByType])
  const schema = normalizedSchemasByType[type]

  const primaryColor = schema?.primary_color ?? colors.THING
  const secondaryColor = schema?.secondary_color ?? colors.white
  const primaryIcon = schema?.icon ?? 'NodesIcon'

  return <Badge backgroundColor={primaryColor} iconColor={secondaryColor} iconStart={primaryIcon} label={type} />
}

type BadgeProps = {
  iconStart: string
  backgroundColor: string
  iconColor: string
  label: string
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
    <IconWrapper iconColor={iconColor}>{React.createElement(Icons[iconStart] || Icons.NodesIcon)}</IconWrapper>
    <div className="badge__label">{label}</div>
  </EpisodeWrapper>
)
