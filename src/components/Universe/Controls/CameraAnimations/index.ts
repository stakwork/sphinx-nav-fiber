/* eslint-disable no-param-reassign */
import type { CameraControls } from '@react-three/drei'
import { MathUtils } from 'three'
import gsap from 'gsap'

import { useFrame } from '@react-three/fiber'
import { RefObject, useCallback, useEffect, useState } from 'react'

import * as THREE from 'three'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { useControlStore } from '~/stores/useControlStore'
import { useAutoNavigate } from './useAutoNavigate'
import { introAnimationTargetPosition } from './constants'

const autoRotateSpeed = 1

let cameraAnimation: gsap.core.Tween | null = null

export const useCameraAnimations = (
  cameraControlsRef: RefObject<CameraControls | null>,
  { enabled }: { enabled: boolean },
) => {
  const selectedNode = useSelectedNode()

  useAutoNavigate(cameraControlsRef)

  const { isUserDragging } = useControlStore()
  const disableCameraRotation = useDataStore((s) => s.disableCameraRotation)

  const data = useDataStore((s) => s.data)
  const graphRadius = useDataStore((s) => s.graphRadius)

  useEffect(() => {
    if (!enabled) {
      cameraAnimation?.kill()
      cameraAnimation = null
    }
  }, [enabled])

  const rotateWorld = useCallback(() => {
    cameraAnimation?.kill()

    const cameraControls = cameraControlsRef.current

    if (cameraControls) {
      const rotateCycle = gsap.to(cameraControls.camera, {
        azimuthAngle: (cameraControls.azimuthAngle || 0) + 360 * THREE.MathUtils.DEG2RAD,
        duration: 280,
        // https://greensock.com/ease-visualizer/
        ease: 'power',
        overwrite: true,
        paused: true,
      })

      rotateCycle.play(0)

      cameraAnimation = rotateCycle
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
        rotateWorld()
      },
      onInterrupt() {
        moveCycle.kill()
      },
      onUpdate: () => {
        const { value } = animationProgress

        cameraControlsRef.current?.dolly(value, false)
      },
    })

    moveCycle.play()
    cameraAnimation = moveCycle
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rotateWorld])

  useEffect(() => {
    // graphRadius is calculated from initial graph render
    if (cameraControlsRef.current && graphRadius) {
      cameraControlsRef.current.maxDistance = cameraControlsRef.current.getDistanceToFitSphere(graphRadius + 200)
      cameraControlsRef.current.minDistance = 1
      cameraControlsRef.current.minPolarAngle = -Math.PI
      cameraControlsRef.current.maxPolarAngle = Math.PI
      cameraControlsRef.current.dollySpeed = 0.2
      cameraControlsRef.current.dampingFactor = 0.1
      cameraControlsRef.current.infinityDolly = false
      cameraControlsRef.current.dollyToCursor = true
      cameraControlsRef.current.boundaryEnclosesCamera = true
    }

    if (enabled) {
      doIntroAnimation()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [graphRadius])

  useEffect(() => {
    if (enabled && !cameraAnimation) {
      rotateWorld()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  useEffect(() => {
    if (!selectedNode && cameraControlsRef.current) {
      cameraControlsRef.current.smoothTime = 0.7
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
