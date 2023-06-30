import { MutableRefObject } from 'react'
import { Event, Group, Mesh, Object3D, Raycaster, Vector3 } from 'three'
import { Guests, NodeExtended } from '~/types'

export const variableVector3 = new Vector3(0, 0, 0)

export const outlineEffectColor = 0xffffff

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

const reuseableVector3 = new Vector3()

type VisibleOrNotProps = {
  objectRef: MutableRefObject<Group | Mesh | null> | null
  cameraPosition: Vector3
  sceneChildren: Object3D<Event>[]
}

export const calculateVisibility = ({ objectRef, cameraPosition, sceneChildren }: VisibleOrNotProps) => {
  if (!objectRef?.current) {
    return false
  }

  const position = objectRef.current.getWorldPosition(reuseableVector3)
  const direction = position.sub(cameraPosition).normalize()
  const raycaster = new Raycaster(cameraPosition, direction)

  const intersections = raycaster.intersectObjects(sceneChildren, true)

  return intersections.length === 0 || intersections[0].object === objectRef.current
}
