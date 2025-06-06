import { Vector3 } from 'three'

export type BadgeProps = {
  position: Vector3
  name: string
  count: number
  onClick: () => void
  isActive: boolean
  // eslint-disable-next-line react/no-unused-prop-types
}
