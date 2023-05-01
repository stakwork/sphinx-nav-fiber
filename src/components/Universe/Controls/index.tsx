import { CameraControls } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import { useControlStore } from '~/stores/useControlStore'
import { useDataStore } from '~/stores/useDataStore'
import { useCameraAnimations } from './CameraAnimations'
import { introAnimationTargetPosition } from './CameraAnimations/constants'

type Props = {
  disableAnimations?: boolean
}

export const Controls = ({ disableAnimations }: Props) => {
  const cameraControlsRef = useRef<CameraControls | null>(null)
  const graphStyle = useDataStore((s) => s.graphStyle)
  const [smoothTime] = useState(1)

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

  return (
    <CameraControls
      ref={cameraControlsRef}
      dollyToCursor
      enabled={!isUserScrollingOnHtmlPanel}
      infinityDolly
      onEnd={() => useControlStore.setState({ isUserDragging: false })}
      onStart={() => useControlStore.setState({ isUserDragging: true })}
      onUpdate={(e) => {
        console.log('e', e)
      }}
      smoothTime={smoothTime}
    />
  )
}
