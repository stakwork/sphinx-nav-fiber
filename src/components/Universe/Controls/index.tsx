import { CameraControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { useControlStore } from '~/stores/useControlStore'
import { useDataStore } from '~/stores/useDataStore'
import { useCameraAnimations } from './CameraAnimations'
import { introAnimationTargetPosition } from './CameraAnimations/constants'
import { getNearbyNodeIds } from './constants'

type Props = {
  disableAnimations?: boolean
}

export const Controls = ({ disableAnimations }: Props) => {
  const cameraControlsRef = useRef<CameraControls | null>(null)
  const graphStyle = useDataStore((s) => s.graphStyle)
  const data = useDataStore((s) => s.data)
  const setNearbyNodeIds = useDataStore((s) => s.setNearbyNodeIds)
  const [smoothTime] = useState(0.8)
  const { camera } = useThree()

  const [isUserDragging, setIsUserDragging, isUserScrolling, isUserScrollingOnHtmlPanel] = useControlStore((s) => [
    s.isUserDragging,
    s.setIsUserDragging,
    s.isUserScrolling,
    s.isUserScrollingOnHtmlPanel,
  ])

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
    if (!isUserDragging) {
      const nearbyNodesIds = getNearbyNodeIds(data?.nodes || [], camera)

      if (nearbyNodesIds) {
        setNearbyNodeIds(nearbyNodesIds)
      }
    }
  }, [
    camera,
    camera.position,
    camera.position.x,
    camera.position.y,
    camera.position.z,
    data?.nodes,
    setNearbyNodeIds,
    isUserDragging,
  ])

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
      onEnd={() => setIsUserDragging(false)}
      onStart={() => setIsUserDragging(true)}
      smoothTime={smoothTime}
    />
  )
}
