/* eslint-disable no-param-reassign */
import type { CameraControls } from '@react-three/drei'
import { Camera, useFrame, useThree } from '@react-three/fiber'
import { RefObject, useEffect, useState } from 'react'
import { playInspectSound } from '~/components/common/Sounds'
import { useControlStore } from '~/stores/useControlStore'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'
import { variableVector3 } from '../../constants'

let lookAtAnimationTimer: ReturnType<typeof setTimeout>

export const useAutoNavigate = (cameraControlsRef: RefObject<CameraControls | null>) => {
  const selectedNode = useSelectedNode()
  const cameraFocusTrigger = useDataStore((s) => s.cameraFocusTrigger)
  const data = useDataStore((s) => s.data)
  const setNearbyNodeIds = useDataStore((s) => s.setNearbyNodeIds)

  const { isUserDragging } = useControlStore()

  const { camera } = useThree()

  const [distanceReached, setDistanceReached] = useState(false)
  const [lookAtReached, setLookAtReached] = useState(false)

  // camera movement to selection params
  const [minDistance, setMinDistance] = useState(130)

  useEffect(() => {
    const nearbyNodesIds: string[] = []

    data?.nodes.forEach((n) => {
      if (camera.position.distanceTo(variableVector3.set(n.x, n.y, n.z)) < 1200) {
        nearbyNodesIds.push(n.ref_id || '')
      }
    })

    setNearbyNodeIds(nearbyNodesIds)
  }, [camera.position.x, camera.position.y, camera.position.z, data?.nodes])

  useEffect(() => {
    if (selectedNode?.node_type === 'topic') {
      setMinDistance(600)
    } else {
      setMinDistance(130)
    }
  }, [selectedNode, setMinDistance])

  const arrive = () => {
    setDistanceReached(true)
  }

  const depart = () => {
    if (selectedNode) {
      const distance = camera.position.distanceTo(variableVector3.set(selectedNode.x, selectedNode.y, selectedNode.z))

      playInspectSound(distance)
    }

    useControlStore.setState({ userMovedCamera: false })
    setDistanceReached(false)
    setLookAtReached(false)
  }

  useEffect(() => {
    setDistanceReached(false)
    setLookAtReached(false)
    useControlStore.setState({ userMovedCamera: false })
  }, [cameraFocusTrigger])

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
          moveCameraToNode(selectedNode, state.camera)
        }

        if (!lookAtReached) {
          turnCameraToNode(selectedNode, state.camera)
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

  const moveCameraToNode = (node: NodeExtended, cam: Camera) => {
    const mesh = variableVector3.set(node.x, node.y, node.z)

    const distance = cam.position.distanceTo(mesh)

    // stop before colliding with cube
    if (distance < minDistance) {
      arrive()
    } else {
      cam.position.lerp(mesh, 0.5)
      cam.updateProjectionMatrix()
    }
  }

  const turnCameraToNode = (node: NodeExtended, cam: Camera) => {
    const mesh = variableVector3.set(node.x, node.y, node.z)

    cameraControlsRef?.current?.setLookAt(cam.position.x, cam.position.y, cam.position.z, mesh.x, mesh.y, mesh.z, true)
  }

  return null
}
