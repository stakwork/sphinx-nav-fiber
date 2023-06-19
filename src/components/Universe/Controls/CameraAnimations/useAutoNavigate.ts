/* eslint-disable no-param-reassign */
import type { CameraControls } from '@react-three/drei'
import { Camera, useFrame, useThree } from '@react-three/fiber'
import { RefObject, useEffect, useMemo, useState } from 'react'
import { Vector3 } from 'three'
import { playInspectSound } from '~/components/common/Sounds'
import { useControlStore } from '~/stores/useControlStore'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { getNearbyNodeIds } from '../constants'
import { arriveDistance, selectionGraphCameraPosition, selectionGraphDistance, topicArriveDistance } from './constants'

let lookAtAnimationTimer: ReturnType<typeof setTimeout>
let departAnimationTimer: ReturnType<typeof setTimeout>
const departAnimationTimerLength = 4000
const lookAtAnimationTimerLength = 2000

export const useAutoNavigate = (cameraControlsRef: RefObject<CameraControls | null>) => {
  const selectedNode = useSelectedNode()
  const cameraFocusTrigger = useDataStore((s) => s.cameraFocusTrigger)
  const graphStyle = useDataStore((s) => s.graphStyle)

  const isUserDragging = useControlStore((s) => s.isUserDragging)
  const isUserScrolling = useControlStore((s) => s.isUserScrolling)
  const setUserMovedCamera = useControlStore((s) => s.setUserMovedCamera)

  const setNearbyNodeIds = useDataStore((s) => s.setNearbyNodeIds)
  const showSelectionGraph = useDataStore((s) => s.showSelectionGraph)
  const graphData = useDataStore((s) => s.data)

  const { camera } = useThree()

  const [distanceReached, setDistanceReached] = useState(false)
  const [lookAtReached, setLookAtReached] = useState(false)

  // camera movement to selection params
  const [minDistance, setMinDistance] = useState(arriveDistance)

  const destination = useMemo(() => {
    if (showSelectionGraph) {
      return new Vector3(0, 0, 0)
    }

    const selected = graphData?.nodes.find((f) => f.ref_id === selectedNode?.ref_id)

    return new Vector3(selected?.x || 0, selected?.y || 0, selected?.z || 0)
  }, [showSelectionGraph, selectedNode, graphData])

  useEffect(() => {
    if (showSelectionGraph) {
      // explicitly set camera position
      cameraControlsRef.current?.setLookAt(
        selectionGraphCameraPosition.x,
        selectionGraphCameraPosition.y,
        selectionGraphCameraPosition.z,
        0,
        0,
        0,
        false,
      )
    }

    depart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showSelectionGraph])

  useEffect(() => {
    if (showSelectionGraph) {
      setMinDistance(selectionGraphDistance)
    } else if (selectedNode?.node_type === 'topic') {
      setMinDistance(topicArriveDistance)
    } else {
      setMinDistance(arriveDistance)
    }
  }, [selectedNode, setMinDistance, showSelectionGraph])

  useEffect(() => {
    startAnimation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cameraFocusTrigger, graphStyle])

  useEffect(() => {
    // stop navigation when user interacts
    if (isUserDragging || isUserScrolling) {
      setDistanceReached(true)
      setLookAtReached(true)
    }
  }, [isUserDragging, isUserScrolling, setDistanceReached, setLookAtReached])

  useEffect(() => {
    if (selectedNode) {
      if (lookAtAnimationTimer) {
        clearTimeout(lookAtAnimationTimer)
      }

      lookAtAnimationTimer = setTimeout(() => {
        setLookAtReached(true)
        clearTimeout(lookAtAnimationTimer)
      }, lookAtAnimationTimerLength)

      depart()
    }

    return () => {
      if (lookAtAnimationTimer) {
        clearTimeout(lookAtAnimationTimer)
      }

      if (departAnimationTimer) {
        clearTimeout(departAnimationTimer)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNode])

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

  const depart = () => {
    if (selectedNode) {
      const distance = camera.position.distanceTo(destination)

      playInspectSound(distance)
    }

    startAnimation()
  }

  const startAnimation = () => {
    setDistanceReached(false)
    setLookAtReached(false)
    setUserMovedCamera(false)

    if (departAnimationTimer) {
      clearTimeout(departAnimationTimer)
    }

    departAnimationTimer = setTimeout(() => {
      setDistanceReached(true)
      setLookAtReached(true)
    }, departAnimationTimerLength)
  }

  const moveCameraToNode = (dest: Vector3, cam: Camera) => {
    const distance = cam.position.distanceTo(dest)

    // stop before colliding with cube
    if (distance < minDistance) {
      setDistanceReached(true)
    } else {
      cam.position.lerp(dest, 0.5)

      const nearbyNodesIds = getNearbyNodeIds(graphData?.nodes || [], camera)

      if (nearbyNodesIds) {
        setNearbyNodeIds(nearbyNodesIds)
      }
    }
  }

  const turnCameraToNode = (dest: Vector3, cam: Camera) => {
    cameraControlsRef?.current?.setLookAt(cam.position.x, cam.position.y, cam.position.z, dest.x, dest.y, dest.z, true)
  }

  return null
}
