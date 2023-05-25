import { Vector3 } from 'three'
import { Guests, NodeExtended } from '~/types'

export const variableVector3 = new Vector3(0, 0, 0)

export const nodesAreRelatives = (a: NodeExtended | null, b: NodeExtended | null) => {
  if (!a || !b) {
    return false
  }

  let isRelative = false

  const guests = a.guests as Guests[]
  const selectedNodeGuests = b.guests as Guests[]

  if (a.children?.includes(b?.ref_id || '') || b?.children?.includes(a?.ref_id || '')) {
    isRelative = true
  }

  if (guests?.find((g) => g.ref_id === b?.ref_id) || selectedNodeGuests?.find((g) => g?.ref_id === a?.ref_id)) {
    isRelative = true
  }

  return isRelative
}
