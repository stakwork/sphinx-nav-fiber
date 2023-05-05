import { CameraControls } from '@react-three/drei'
import { useRef, useState } from 'react'
import { useControlStore } from '~/stores/useControlStore'
import { useCameraAnimations } from './CameraAnimations'

type Props = {
  disableAnimations?: boolean
}

export const Controls = ({ disableAnimations }: Props) => {
  const cameraControlsRef = useRef<CameraControls | null>(null)

  const [smoothTime] = useState(1)

  const { isUserDragging, isUserScrolling, isUserScrollingOnHtmlPanel } = useControlStore()

  useCameraAnimations(cameraControlsRef, { enabled: !disableAnimations && !isUserScrolling && !isUserDragging })

  return (
    <CameraControls
      ref={cameraControlsRef}
      dollyToCursor
      enabled={!isUserScrollingOnHtmlPanel}
      infinityDolly
      onEnd={() => useControlStore.setState({ isUserDragging: false })}
      onStart={() => useControlStore.setState({ isUserDragging: true })}
      smoothTime={smoothTime}
    />
  )
}
