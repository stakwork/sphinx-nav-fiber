import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { colors } from '~/utils/colors'

type Props = {
  type: string
}

type BadgeProps = {
  iconStart: string
  color: string
  label: string
}

export const Marker = ({ type }: Props) => {
  const [normalizedSchemasByType] = useSchemaStore((s) => [s.normalizedSchemasByType])

  const primaryColor = normalizedSchemasByType[type]?.primary_color
  const primaryIcon = normalizedSchemasByType[type]?.icon

  const icon = primaryIcon ? `svg-icons/${primaryIcon}.svg` : null

  const badgeProps: Omit<BadgeProps, 'label'> = {
    iconStart: icon ?? 'thing_badge.svg',
    color: primaryColor ?? colors.THING,
  }

  return <Badge {...badgeProps} label={type} />
}

const Badge = ({ iconStart, color, label }: BadgeProps) => (
  <EpisodeWrapper color={color}>
    <img alt={label} className="badge__img" src={iconStart} />
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

  .badge__img {
    width: 10px;
    height: 10px;
    object-fit: contain;
  }
`
