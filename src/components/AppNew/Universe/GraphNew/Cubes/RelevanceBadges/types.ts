import { Vector3 } from 'three'
import { NodeExtendedNew } from '~/network/fetchGraphDataNew/types'

export type BadgeProps = {
  color: string
  position: Vector3
  userData: NodeExtendedNew
  // eslint-disable-next-line react/no-unused-prop-types
  relativeIds: string[]
}
