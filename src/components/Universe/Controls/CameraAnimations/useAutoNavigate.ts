/* eslint-disable no-param-reassign */
import { type CameraControls } from '@react-three/drei'
import { RefObject, useEffect } from 'react'
import { Sphere, Vector3 } from 'three'
import { useGraphStore, useSelectedNode } from '~/stores/useGraphStore'

export const useAutoNavigate = (cameraControlsRef: RefObject<CameraControls | null>) => {
  const selectedNode = useSelectedNode()

  const { showSelectionGraph } = useGraphStore((s) => s)

  useEffect(() => {
    if (showSelectionGraph && selectedNode && cameraControlsRef.current) {
      const center = new Vector3(selectedNode.x, selectedNode.y, selectedNode.z)
      const radius = 500 // or any radius you want

      const sphere = new Sphere(center, radius)

      cameraControlsRef.current.fitToSphere(sphere, true)
    }
  }, [showSelectionGraph, selectedNode, cameraControlsRef])

  return null
}
