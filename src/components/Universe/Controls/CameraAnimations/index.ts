/* eslint-disable no-param-reassign */
import type { CameraControls } from '@react-three/drei'
import { MathUtils } from 'three'

import { useFrame } from '@react-three/fiber'
import { RefObject, useEffect } from 'react'

import { useControlStore } from '~/stores/useControlStore'
import { useGraphStore, useSelectedNode } from '~/stores/useGraphStore'
import { initialCameraPosition } from './constants'
import { useAutoNavigate } from './useAutoNavigate'

const autoRotateSpeed = 1

let cameraAnimation: gsap.core.Tween | null = null

export const useCameraAnimations = (
  cameraControlsRef: RefObject<CameraControls | null>,
  { enabled }: { enabled: boolean },
) => {
  const selectedNode = useSelectedNode()

  useAutoNavigate(cameraControlsRef)

  const { graphRadius } = useGraphStore((s) => s)

  useEffect(() => {
    if (!enabled) {
      cameraAnimation?.kill()
      cameraAnimation = null
    }
  }, [enabled])

  // useEffect(() => {
  //   if (cameraControlsRef.current && graphRadius) {
  //     cameraControlsRef.current.maxDistance = cameraControlsRef.current.getDistanceToFitSphere(graphRadius + 200)
  //     cameraControlsRef.current.minDistance = 100
  //   }
  // }, [graphRadius, cameraControlsRef])

  useEffect(() => {
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
  }, [selectedNode, graphRadius])

  useFrame((_, delta) => {
    if (cameraControlsRef.current) {
      //  do camera rotation
      const { disableCameraRotation } = useGraphStore.getState()
      const { isUserDragging } = useControlStore.getState()

      if (!disableCameraRotation && !isUserDragging) {
        cameraControlsRef.current.azimuthAngle += autoRotateSpeed * delta * MathUtils.DEG2RAD
      }

      cameraControlsRef.current.update(delta)
    }
  })

  return null
}
