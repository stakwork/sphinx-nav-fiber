import { CameraControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { useControlStore } from '~/stores/useControlStore'
import { useDataStore } from '~/stores/useDataStore'
import { meshRenderLimit, meshRenderRadius } from '../Graph/Cubes/constants'
import { variableVector3 } from '../constants'
import { useCameraAnimations } from './CameraAnimations'
import { introAnimationTargetPosition } from './CameraAnimations/constants'

type Props = {
  disableAnimations?: boolean
}

type NearbyRenderProps = {
  id: string
  distance: number
}

let nearbyNodeTimeout: ReturnType<typeof setTimeout> | null = null

export const Controls = ({ disableAnimations }: Props) => {
  const cameraControlsRef = useRef<CameraControls | null>(null)
  const graphStyle = useDataStore((s) => s.graphStyle)
  const data = useDataStore((s) => s.data)
  const setNearbyNodeIds = useDataStore((s) => s.setNearbyNodeIds)
  const [smoothTime] = useState(0.8)
  const { camera } = useThree()

  const { isUserDragging, isUserScrolling, isUserScrollingOnHtmlPanel } = useControlStore()

  useCameraAnimations(cameraControlsRef, { enabled: !disableAnimations && !isUserScrolling && !isUserDragging })

  useEffect(() => {
    // reset camera on graph style change
    if (cameraControlsRef.current) {
      cameraControlsRef.current.setLookAt(
        introAnimationTargetPosition.x,
        introAnimationTargetPosition.y,
        introAnimationTargetPosition.z,
        0,
        0,
        0,
        true,
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [graphStyle])

  useEffect(() => {
    if (!nearbyNodeTimeout) {
      // throttle event to prevent excessive rerendering
      nearbyNodeTimeout = setTimeout(() => {
        if (nearbyNodeTimeout) {
          clearTimeout(nearbyNodeTimeout)
          nearbyNodeTimeout = null
        }
      }, 80)

      const nearbyNodesIdsAndDistance: NearbyRenderProps[] = []

      data?.nodes.forEach((n) => {
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

      setNearbyNodeIds(nearbyNodesIds)
    }

    return () => {
      if (nearbyNodeTimeout) {
        clearTimeout(nearbyNodeTimeout)
        nearbyNodeTimeout = null
      }
    }
  }, [camera.position, camera.position.x, camera.position.y, camera.position.z, data?.nodes, setNearbyNodeIds])

  return (
    <CameraControls
      ref={cameraControlsRef}
      boundaryEnclosesCamera
      dampingFactor={0.1}
      dollySpeed={0.2}
      dollyToCursor
      enabled={!isUserScrollingOnHtmlPanel}
      infinityDolly
      maxDistance={12000}
      minDistance={1}
      onEnd={() => useControlStore.setState({ isUserDragging: false })}
      onStart={() => useControlStore.setState({ isUserDragging: true })}
      smoothTime={smoothTime}
    />
  )
}
