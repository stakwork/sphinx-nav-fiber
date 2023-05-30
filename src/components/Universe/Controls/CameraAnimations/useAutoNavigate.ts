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
const selectionGraphDistance = 2000

const selectionGraphCameraPosition = {
  x: 172.7392402058252,
  y: -239.04675366094037,
  z: -2000,
}

export const useAutoNavigate = (cameraControlsRef: RefObject<CameraControls | null>) => {
  const selectedNode = useSelectedNode()
  const cameraFocusTrigger = useDataStore((s) => s.cameraFocusTrigger)

  const isUserDragging = useControlStore((s) => s.isUserDragging)
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

  const moveCameraToNode = (dest: Vector3, cam: Camera) => {
    const distance = cam.position.distanceTo(dest)

    // stop before colliding with cube
    if (distance < minDistance) {
      arrive()
    } else {
      cam.position.lerp(dest, 0.5)
      cam.updateProjectionMatrix()

      const nearbyNodesIds = getNearbyNodeIds(graphData?.nodes || [], camera)

      if (nearbyNodesIds) {
        setNearbyNodeIds(nearbyNodesIds)
      }
    }
  }

  const turnCameraToNode = (dest: Vector3, cam: Camera) => {
    cameraControlsRef?.current?.setLookAt(cam.position.x, cam.position.y, cam.position.z, dest.x, dest.y, dest.z, true)
  }

  // console.log('cameraControlsRef', cameraControlsRef.current?.camera.position)

  return null
}
