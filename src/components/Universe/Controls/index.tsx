import { CameraControls } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import { useControlStore } from '~/stores/useControlStore'
import { useGraphStore } from '~/stores/useGraphStore'
import { useCameraAnimations } from './CameraAnimations'

type Props = {
  disableAnimations?: boolean
}

export const Controls = ({ disableAnimations }: Props) => {
  const cameraControlsRef = useRef<CameraControls | null>(null)
  const { setDisableCameraRotation } = useGraphStore((s) => s)

  const [smoothTime] = useState(0.8)

  const [isUserDragging, setIsUserDragging, isUserScrolling, isUserScrollingOnHtmlPanel] = useControlStore((s) => [
    s.isUserDragging,
    s.setIsUserDragging,
    s.isUserScrolling,
    s.isUserScrollingOnHtmlPanel,
  ])

  useCameraAnimations(cameraControlsRef, { enabled: !disableAnimations && !isUserScrolling && !isUserDragging })

  useEffect(() => {
    if (isUserDragging) {
      setDisableCameraRotation(true)
    }
  }, [isUserDragging, setDisableCameraRotation])

  return (
    <CameraControls
      ref={cameraControlsRef}
      boundaryEnclosesCamera
      dollyToCursor
      enabled={!isUserScrollingOnHtmlPanel}
      makeDefault
      maxDistance={12000}
      minDistance={100}
      onEnd={() => setIsUserDragging(false)}
      onStart={() => setIsUserDragging(true)}
      smoothTime={smoothTime}
    />
  )
}
