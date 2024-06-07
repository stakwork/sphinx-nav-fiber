/* eslint-disable no-param-reassign */
import { type CameraControls } from '@react-three/drei'
import { Camera, useFrame, useThree } from '@react-three/fiber'
import { RefObject, useEffect, useMemo, useState } from 'react'
import { Vector3 } from 'three'
import { playInspectSound } from '~/components/common/Sounds'
import { useControlStore } from '~/stores/useControlStore'
import { useGraphStore, useSelectedNode } from '~/stores/useGraphStore'
import { getPointAbove } from '~/transformers/earthGraph'
import { NodeExtended } from '~/types'
import { getNearbyNodeIds } from '../constants'
import { arriveDistance, selectionGraphCameraPosition, selectionGraphDistance, topicArriveDistance } from './constants'

let lookAtAnimationTimer: ReturnType<typeof setTimeout>
let departAnimationTimer: ReturnType<typeof setTimeout>
const departAnimationTimerLength = 4000
const lookAtAnimationTimerLength = 2000

export const useAutoNavigate = (cameraControlsRef: RefObject<CameraControls | null>) => {
  const selectedNode = useSelectedNode()

  const isUserDragging = useControlStore((s) => s.isUserDragging)
  const isUserScrolling = useControlStore((s) => s.isUserScrolling)
  const setUserMovedCamera = useControlStore((s) => s.setUserMovedCamera)

  const {
    data: graphData,
    graphStyle,
    showSelectionGraph,
    setNearbyNodeIds,
    cameraFocusTrigger,
  } = useGraphStore((s) => s)

  const { camera } = useThree()

  const [distanceReached, setDistanceReached] = useState(false)
  const [lookAtReached, setLookAtReached] = useState(false)

  // camera movement to selection params
  const [minDistance, setMinDistance] = useState(arriveDistance)

  // find the target position for the camera
  const destination = useMemo(() => {
    if (showSelectionGraph) {
      return new Vector3(0, 0, 0)
    }

    const selected = graphData?.nodes.find((f) => f.ref_id === selectedNode?.ref_id)

    let pos = new Vector3(2000, 2000, 3000)

    if (selected && graphData) {
      // find all node children ... is there a better way?
      const children: NodeExtended[] = graphData?.nodes.filter((node) =>
        selected.children?.find((str) => str === node.id),
      )

      // position of node
      const spos = new Vector3(selected.x, selected.y, selected.z)
      // average positioon of children
      let avgDir = new Vector3(0, 0, 0)

      children.map((child: NodeExtended) => {
        avgDir = avgDir.add(new Vector3(child.x, child.y, child.z).normalize())

        return child
      })

      // offset from node based on children
      const sizeOffset = selected.scale ? 1 - 1 / (selected.scale + 10) : 1
      const offset = spos.sub(avgDir).multiplyScalar(0.8 * sizeOffset)

      pos = spos.add(offset)
    }

    return pos
  }, [showSelectionGraph, selectedNode, graphData])

  // find the node that the camera should look at
  const lookat = useMemo(() => {
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
  }, [cameraFocusTrigger])

  useEffect(() => {
    // stop navigation when user interacts
    if (isUserDragging || isUserScrolling) {
      setDistanceReached(true)
      setLookAtReached(true)
    }
  }, [isUserDragging, isUserScrolling, setDistanceReached, setLookAtReached])

  useEffect(() => {
    if (selectedNode) {
      if (!showSelectionGraph && graphStyle === 'earth' && cameraControlsRef?.current) {
        const distanceFromCenter = cameraControlsRef.current.camera.position.distanceTo(new Vector3())
        const newPosition = getPointAbove(lookat, -distanceFromCenter / 2)

        cameraControlsRef.current.setLookAt(newPosition.x, newPosition.y, newPosition.z, 0, 0, 0, true)
      } else {
        if (lookAtAnimationTimer) {
          clearTimeout(lookAtAnimationTimer)
        }

        lookAtAnimationTimer = setTimeout(() => {
          setLookAtReached(true)
          clearTimeout(lookAtAnimationTimer)
        }, lookAtAnimationTimerLength)

        depart()
      }
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
      if (!distanceReached) {
        moveCameraToNode(destination, state.camera)
      }

      if (!lookAtReached) {
        turnCameraToNode(lookat, state.camera)
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
