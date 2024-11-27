import { memo } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Tooltip } from '~/components/common/ToolTip'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { colors } from '~/utils/colors'

type Props = {
  type: string
  name: string
  left: number
}

type BadgeProps = {
  iconStart: string
  color: string
  label: string
}

export const Marker = memo(({ type, name, left }: Props) => {
  const [normalizedSchemasByType] = useSchemaStore((s) => [s.normalizedSchemasByType])

  const primaryColor = normalizedSchemasByType[type]?.primary_color
  const primaryIcon = normalizedSchemasByType[type]?.icon

  const icon = primaryIcon ? `svg-icons/${primaryIcon}.svg` : null

  const badgeProps: Omit<BadgeProps, 'label'> = {
    iconStart: icon ?? 'thing_badge.svg',
    color: primaryColor ?? colors.THING,
  }

  return (
    <MarkerWrapper style={{ left: `${left}%` }}>
      <Tooltip content={`${name || type}`}>
        <Badge {...badgeProps} label={type} />
      </Tooltip>
    </MarkerWrapper>
  )
})

Marker.displayName = 'Marker'

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

const MarkerWrapper = styled.div`
  position: absolute;
  top: -4px; /* Adjust as needed to center above the progress bar */
  width: 8px;
  height: 8px;
  background-color: ${colors.white};
  border-radius: 50%;
  transform: translateX(-50%); /* Center the marker horizontally */
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`
