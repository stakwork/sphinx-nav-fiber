import { Camera } from '@react-three/fiber'
import { NodeExtended } from '~/types'
import { meshRenderLimit, meshRenderRadius } from '../Graph/Cubes/constants'
import { variableVector3 } from '../constants'

type NearbyRenderProps = {
  id: string
  distance: number
}

let nearbyNodeTimeout: ReturnType<typeof setTimeout> | null = null

const nearbyNodeTimeoutCycle = 100

export const getNearbyNodeIds = (nodes: NodeExtended[], camera: Camera) => {
  const nearbyNodesIdsAndDistance: NearbyRenderProps[] = []

  if (nearbyNodeTimeout) {
    return null
  }

  nearbyNodeTimeout = setTimeout(() => {
    if (nearbyNodeTimeout) {
      clearTimeout(nearbyNodeTimeout)
      nearbyNodeTimeout = null
    }
  }, nearbyNodeTimeoutCycle)

  nodes.forEach((n) => {
    const distance = camera.position.distanceTo(variableVector3.set(n.x, n.y, n.z))

    // get nodes within distance
    if (distance < meshRenderRadius) {
      nearbyNodesIdsAndDistance.push({
        id: n.ref_id || '',
        distance,
      })
    }
  })

  // sort by distance and limit mesh count
  const nearbyNodesIds: string[] = nearbyNodesIdsAndDistance
    .sort((a, b) => a.distance - b.distance)
    .slice(0, meshRenderLimit)
    .map((n) => n.id)

  return nearbyNodesIds
}
