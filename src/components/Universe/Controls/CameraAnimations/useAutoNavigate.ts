/* eslint-disable no-param-reassign */
import type { CameraControls } from '@react-three/drei'
import { Camera, useFrame, useThree } from '@react-three/fiber'
import { RefObject, useEffect, useMemo, useState } from 'react'
import { Vector3 } from 'three'
import { playInspectSound } from '~/components/common/Sounds'
import { useControlStore } from '~/stores/useControlStore'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
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
  const cameraFocusTrigger = useDataStore((s) => s.cameraFocusTrigger)

  const isUserDragging = useControlStore((s) => s.isUserDragging)
  const isUserScrolling = useControlStore((s) => s.isUserScrolling)
  const setUserMovedCamera = useControlStore((s) => s.setUserMovedCamera)

  const setNearbyNodeIds = useDataStore((s) => s.setNearbyNodeIds)
  const showSelectionGraph = useDataStore((s) => s.showSelectionGraph)
  const graphData = useDataStore((s) => s.data)

  const graphStyle = useDataStore((s) => s.graphStyle)

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

    let pos = new Vector3(0, 0, 0)

    if (selected && graphData) {
      // find all children ... is there a better way?
      const children: NodeExtended[] = graphData?.nodes.filter((node) =>
        selected.children?.find((str) => str === node.id),
      )

      let ax = 0
      let ay = 0
      let az = 0

      children.map((child: NodeExtended) => {
        ax += child.x
        ay += child.y
        az += child.z

        return child
      })

      const l = 1 / children.length

      pos = new Vector3(2 * selected.x - ax * l, 2 * selected.y - ay * l, 2 * selected.z - az * l)
    }

    // console.log('selected pos')
    // console.log(new Vector3(selected?.x, selected?.y, selected?.z))
    // console.log('calculated pos')
    // console.log(pos)

    return pos
  }, [showSelectionGraph, selectedNode, graphData])

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
      if (selectedNode) {
        if (!distanceReached) {
          moveCameraToNode(destination, state.camera)
        }

        if (!lookAtReached) {
          turnCameraToNode(lookat, state.camera)
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
