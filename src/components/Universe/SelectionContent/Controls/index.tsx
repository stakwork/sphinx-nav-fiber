import { CameraControls } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import { useGraphStore } from '~/stores/useGraphStore'
import { selectionGraphCameraPosition } from '../../Controls/CameraAnimations/constants'

export const Controls = () => {
  const cameraControlsRef = useRef<CameraControls | null>(null)
  const selectionGraphRadius = useGraphStore((s) => s.selectionGraphRadius)

  const [smoothTime] = useState(0.8)

  useEffect(() => {
    if (cameraControlsRef.current) {
      cameraControlsRef.current.setLookAt(
        selectionGraphCameraPosition.x,
        selectionGraphCameraPosition.y,
        selectionGraphRadius * 2,
        0,
        0,
        0,
        true,
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectionGraphRadius])

  return (
    <CameraControls
      ref={cameraControlsRef}
      azimuthRotateSpeed={0} // Disable horizontal rotation
      boundaryEnclosesCamera
      makeDefault
      maxDistance={12000}
      minDistance={100}
      polarRotateSpeed={0}
      smoothTime={smoothTime}
    />
  )
}
