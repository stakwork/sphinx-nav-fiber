import { Html } from '@react-three/drei'
import clsx from 'clsx'
import { truncateText } from '~/utils/truncateText'
import { Counter, TagWrapper } from '../styles'
import { BadgeProps } from '../types'

export const GroupBadge = ({ position, name, count, onClick, isActive }: BadgeProps) => (
  <group position={position}>
    <Html center distanceFactor={250} sprite transform zIndexRange={[0, 0]}>
      <TagWrapper
        className={clsx({ 'is-active': isActive })}
        direction="column"
        onClick={(e) => {
          e.stopPropagation()
          onClick()
        }}
        onPointerOut={(e) => {
          e.stopPropagation()
        }}
        onPointerOver={(e) => {
          e.stopPropagation()
        }}
      >
        {name ? <span>{truncateText(name, 20)}</span> : null}
        <Counter>{count}</Counter>
      </TagWrapper>
    </Html>
  </group>
)
