import { Html } from '@react-three/drei'
import { truncateText } from '~/utils/truncateText'
import { TagWrapper } from '../styles'
import { BadgeProps } from '../types'

export const GroupBadge = ({ position, name, count }: BadgeProps) => (
  <group position={position}>
    <Html center sprite zIndexRange={[0, 0]}>
      <TagWrapper
        direction="column"
        onClick={(e) => {
          e.stopPropagation()
        }}
        onPointerOut={(e) => {
          e.stopPropagation()
        }}
        onPointerOver={(e) => {
          e.stopPropagation()
        }}
      >
        {name ? <span>{truncateText(name, 20)}</span> : null}
        {count}
      </TagWrapper>
    </Html>
  </group>
)
