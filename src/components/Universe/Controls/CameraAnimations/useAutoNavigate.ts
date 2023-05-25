/* eslint-disable no-param-reassign */
import type { CameraControls } from '@react-three/drei'
import { Camera, useFrame, useThree } from '@react-three/fiber'
import { RefObject, useEffect, useMemo, useState } from 'react'
import { Vector3 } from 'three'
import { playInspectSound } from '~/components/common/Sounds'
import { useControlStore } from '~/stores/useControlStore'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { getNearbyNodeIds } from '../constants'

let lookAtAnimationTimer: ReturnType<typeof setTimeout>

const arriveDistance = 300
const topicArriveDistance = 600

export const useAutoNavigate = (cameraControlsRef: RefObject<CameraControls | null>) => {
  const selectedNode = useSelectedNode()
  const cameraFocusTrigger = useDataStore((s) => s.cameraFocusTrigger)

  const isUserDragging = useControlStore((s) => s.isUserDragging)
  const setUserMovedCamera = useControlStore((s) => s.setUserMovedCamera)

  const setNearbyNodeIds = useDataStore((s) => s.setNearbyNodeIds)
  const showCompactGraph = useDataStore((s) => s.showCompactGraph)
  const data = useDataStore((s) => s.data)

  const { camera } = useThree()

  const [distanceReached, setDistanceReached] = useState(false)
  const [lookAtReached, setLookAtReached] = useState(false)

  // camera movement to selection params
  const [minDistance, setMinDistance] = useState(arriveDistance)

  const destination = useMemo(
    () => new Vector3(selectedNode?.x || 0, selectedNode?.y || 0, selectedNode?.z || 0),
    [showCompactGraph, selectedNode],
  )

  useEffect(() => {
    depart()
  }, [showCompactGraph])

  useEffect(() => {
    if (selectedNode?.node_type === 'topic') {
      setMinDistance(topicArriveDistance)
    } else {
      setMinDistance(arriveDistance)
    }
  }, [selectedNode, setMinDistance])

  const arrive = () => {
    setDistanceReached(true)
  }

  const depart = () => {
    if (selectedNode) {
      const distance = camera.position.distanceTo(destination)

      playInspectSound(distance)
    }

    setUserMovedCamera(false)
    setDistanceReached(false)
    setLookAtReached(false)
  }

  useEffect(() => {
    setDistanceReached(false)
    setLookAtReached(false)
    setUserMovedCamera(false)
  }, [cameraFocusTrigger, setUserMovedCamera, setLookAtReached, setDistanceReached])

  useEffect(() => {
    // stop navigation when user interacts
    if (isUserDragging && !distanceReached) {
      arrive()
      setLookAtReached(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserDragging])

  useFrame((state) => {
    if (cameraControlsRef.current) {
      // do movement animation
      if (selectedNode) {
        if (!distanceReached) {
          moveCameraToNode(destination, state.camera)
        }

        if (!lookAtReached) {
          turnCameraToNode(destination, state.camera)
        }
      }
    }
  })

  useEffect(() => {
    if (selectedNode) {
      clearTimeout(lookAtAnimationTimer)

      lookAtAnimationTimer = setTimeout(() => {
        setLookAtReached(true)
        clearTimeout(lookAtAnimationTimer)
      }, 2000)

      depart()
    }

    return () => clearTimeout(lookAtAnimationTimer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNode])

  const moveCameraToNode = (destination: Vector3, cam: Camera) => {
    const distance = cam.position.distanceTo(destination)

    // stop before colliding with cube
    if (distance < minDistance) {
      arrive()
    } else {
      cam.position.lerp(destination, 0.5)
      cam.updateProjectionMatrix()

      const nearbyNodesIds = getNearbyNodeIds(data?.nodes || [], camera)

      if (nearbyNodesIds) {
        setNearbyNodeIds(nearbyNodesIds)
      }
    }
  }

  const turnCameraToNode = (destination: Vector3, cam: Camera) => {
    cameraControlsRef?.current?.setLookAt(
      cam.position.x,
      cam.position.y,
      cam.position.z,
      destination.x,
      destination.y,
      destination.z,
      true,
    )
  }

  return null
}
