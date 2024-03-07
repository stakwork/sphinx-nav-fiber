import { Vector3 } from 'three'
import { Guests, NodeExtended } from '~/types'

export const variableVector3 = new Vector3(0, 0, 0)

export const outlineEffectColor = 0xffffff

export const maxChildrenDisplayed = 20

export const nodesAreRelatives = (a: NodeExtended | null, b: NodeExtended | null) => {
  if (!a?.ref_id || !b?.ref_id) {
    return false
  }

  let isRelative = false

  const aGuests = a.guests as Guests[]
  const bGuests = b.guests as Guests[]

  if (a.children?.includes(b.ref_id) || b.children?.includes(a.ref_id)) {
    isRelative = true
  }

  if (aGuests?.find((g) => g.ref_id === b.ref_id) || bGuests?.find((g) => g.ref_id === a.ref_id)) {
    isRelative = true
  }

  return isRelative
}
