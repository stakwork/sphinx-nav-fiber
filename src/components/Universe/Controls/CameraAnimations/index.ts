/* eslint-disable no-param-reassign */

import { useEffect } from 'react'

import { useControlStore } from '~/stores/useControlStore'
import { useGraphStore, useSelectedNode } from '~/stores/useGraphStore'
import { initialCameraPosition } from './constants'
import { useAutoNavigate } from './useAutoNavigate'

let cameraAnimation: gsap.core.Tween | null = null

export const useCameraAnimations = ({ enabled }: { enabled: boolean }) => {
  const selectedNode = useSelectedNode()
  const cameraControlsRef = useControlStore((s) => s.cameraControlsRef)

  const cameraFocusTrigger = useGraphStore((s) => s.cameraFocusTrigger)

  useAutoNavigate()

  const graphRadius = useGraphStore((s) => s.graphRadius)

  useEffect(() => {
    if (!enabled) {
      cameraAnimation?.kill()
      cameraAnimation = null
    }
  }, [enabled])

  useEffect(() => {
    console.log('updateGraphRadius', graphRadius)

    if (!selectedNode && cameraControlsRef) {
      cameraControlsRef.setLookAt(initialCameraPosition.x, initialCameraPosition.y, graphRadius + 200, 0, 0, 0, true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNode, graphRadius, cameraFocusTrigger])

  return null
}
