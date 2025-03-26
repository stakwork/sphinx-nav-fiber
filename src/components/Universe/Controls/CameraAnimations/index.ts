/* eslint-disable no-param-reassign */
import type { CameraControls } from '@react-three/drei'

import { RefObject, useEffect } from 'react'

import { useGraphStore, useSelectedNode } from '~/stores/useGraphStore'
import { initialCameraPosition } from './constants'
import { useAutoNavigate } from './useAutoNavigate'

let cameraAnimation: gsap.core.Tween | null = null

export const useCameraAnimations = (
  cameraControlsRef: RefObject<CameraControls | null>,
  { enabled }: { enabled: boolean },
) => {
  const selectedNode = useSelectedNode()

  const cameraFocusTrigger = useGraphStore((s) => s.cameraFocusTrigger)

  useAutoNavigate(cameraControlsRef)

  const graphRadius = useGraphStore((s) => s.graphRadius)

  useEffect(() => {
    if (!enabled) {
      cameraAnimation?.kill()
      cameraAnimation = null
    }
  }, [enabled])

  useEffect(() => {
    console.log('updateGraphRadius', graphRadius)

    if (!selectedNode && cameraControlsRef.current) {
      cameraControlsRef.current.setLookAt(
        initialCameraPosition.x,
        initialCameraPosition.y,
        graphRadius + 200,
        0,
        0,
        0,
        true,
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNode, graphRadius, cameraFocusTrigger])

  return null
}
