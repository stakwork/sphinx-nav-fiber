/* eslint-disable no-param-reassign */
import type { CameraControls } from '@react-three/drei'
import gsap from 'gsap'
import { MathUtils } from 'three'

import { useFrame } from '@react-three/fiber'
import { RefObject, useCallback, useEffect } from 'react'

import { useControlStore } from '~/stores/useControlStore'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { getNearbyNodeIds } from '../constants'
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
  const disableCameraRotation = useDataStore((s) => s.disableCameraRotation)

  const data = useDataStore((s) => s.data)
  const graphStyle = useDataStore((s) => s.graphStyle)
  const graphRadius = useDataStore((s) => s.graphRadius)
  const setNearbyNodeIds = useDataStore((s) => s.setNearbyNodeIds)

  useEffect(() => {
    if (!enabled) {
      cameraAnimation?.kill()
      cameraAnimation = null
    }
  }, [enabled])

  const doIntroAnimation = useCallback(() => {
    cameraAnimation?.kill()

    const animationProgress = { value: -244 }

    const moveCycle = gsap.to(animationProgress, {
      duration: 5,
      keyframes: {
        '0%': { value: 10 },
        '100%': { delay: 2, ease: 'Power4.easeIn', value: -200 },
      },
      onComplete: () => {
        cameraAnimation = null
      },
      onInterrupt() {
        moveCycle.kill()
      },
      onUpdate: () => {
        const { value } = animationProgress

        if (cameraControlsRef.current) {
          const nearbyNodesIds = getNearbyNodeIds(data?.nodes || [], cameraControlsRef.current.camera)

          if (nearbyNodesIds) {
            setNearbyNodeIds(nearbyNodesIds)
          }

          cameraControlsRef.current?.dolly(value, false)
        }
      },
    })

    moveCycle.play()
    cameraAnimation = moveCycle
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (cameraControlsRef.current && graphRadius) {
      if (graphStyle === 'sphere') {
        cameraControlsRef.current.maxDistance = 8000
        cameraControlsRef.current.minDistance = 200
        cameraControlsRef.current.setTarget(0, 0, 500, true)
      } else {
        cameraControlsRef.current.maxDistance = cameraControlsRef.current.getDistanceToFitSphere(graphRadius + 200)
      }
    }

    if (enabled) {
      doIntroAnimation()
    }
  }, [graphRadius, graphStyle, cameraControlsRef, enabled, doIntroAnimation])

  useEffect(() => {
    if (!selectedNode && cameraControlsRef.current) {
      cameraControlsRef.current.setLookAt(
        initialCameraPosition.x,
        initialCameraPosition.y,
        initialCameraPosition.z,
        0,
        0,
        0,
        true,
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNode])

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
