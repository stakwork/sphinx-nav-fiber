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

  const isUserDragging = useControlStore((s) => s.isUserDragging)

  const { graphStyle, graphRadius, disableCameraRotation } = useGraphStore((s) => s)

  useEffect(() => {
    if (!enabled) {
      cameraAnimation?.kill()
      cameraAnimation = null
    }
  }, [enabled])

  useEffect(() => {
    if (cameraControlsRef.current && graphRadius) {
      if (graphStyle === 'sphere') {
        cameraControlsRef.current.maxDistance = 8000
        cameraControlsRef.current.minDistance = 200
        cameraControlsRef.current.setTarget(0, 0, 500, true)
      } else {
        cameraControlsRef.current.maxDistance = cameraControlsRef.current.getDistanceToFitSphere(graphRadius + 200)
        cameraControlsRef.current.minDistance = 100
      }
    }
  }, [graphRadius, graphStyle, cameraControlsRef])

  useEffect(() => {
    if (!selectedNode && cameraControlsRef.current) {
      cameraControlsRef.current.setLookAt(initialCameraPosition.x, initialCameraPosition.y, graphRadius, 0, 0, 0, true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNode, graphRadius])

  useFrame((_, delta) => {
    if (cameraControlsRef.current) {
      //  do camera rotation
      if (!disableCameraRotation && !isUserDragging) {
        cameraControlsRef.current.azimuthAngle += autoRotateSpeed * delta * MathUtils.DEG2RAD
      }

      cameraControlsRef.current.update(delta)
    }
  })

  return null
}
