import { ThreeEvent } from '@react-three/fiber'
import { BoxGeometry } from 'three'
import { useDataStore } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'

export const boxGeometry = new BoxGeometry(10, 10, 10)

export const onPointerOut = (e: ThreeEvent<PointerEvent>) => {
  e.stopPropagation()
  const { setHoveredNode } = useDataStore.getState()
  setHoveredNode(null)
}

export const onPointerIn = (e: ThreeEvent<PointerEvent>) => {
  e.stopPropagation()

  const intersection = e.intersections[0]

  if (intersection?.object?.userData?.ref_id) {
    const { setHoveredNode } = useDataStore.getState()

    const node = intersection?.object?.userData as NodeExtended
    setHoveredNode(node)
  }
}
