import { memo } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { colors } from '~/utils/colors'

type Props = {
  type: string
  left: number
  img: string
}

type BadgeProps = {
  iconStart: string
  color: string
  label: string
}

export const Marker = memo(({ type, left, img }: Props) => {
  const normalizedSchemasByType = useSchemaStore((s) => s.normalizedSchemasByType)

  const primaryColor = normalizedSchemasByType[type]?.primary_color
  const primaryIcon = normalizedSchemasByType[type]?.icon

  const icon = primaryIcon ? `/svg-icons/${primaryIcon}.svg` : ''

  const badgeProps: Omit<BadgeProps, 'label'> = {
    iconStart: img || icon,
    color: primaryColor ?? colors.THING,
  }

  return (
    <MarkerWrapper style={{ left: `${left}%` }}>
      <Badge {...badgeProps} label={type} />
    </MarkerWrapper>
  )
})

Marker.displayName = 'Marker'

const Badge = memo(({ iconStart, color, label }: BadgeProps) => (
  <EpisodeWrapper color={color}>
    {iconStart && <img alt={label} className="badge__img" onError={console.log} src={iconStart} />}
  </EpisodeWrapper>
))

Badge.displayName = 'Badge'

const EpisodeWrapper = styled(Flex).attrs({
  direction: 'row',
})<{ color: string }>`
  cursor: pointer;
  background: ${({ color }) => color};
  border-radius: 3px;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  .badge__img {
    width: 10px;
    height: 10px;
    object-fit: contain;
  }
`

const MarkerWrapper = styled.div`
  position: absolute;
  color: white;
  top: -6px;
  width: 12px;
  height: 12px;
  border-radius: 4px;
  background-color: ${colors.white};
  transform: translateX(-50%);
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`
