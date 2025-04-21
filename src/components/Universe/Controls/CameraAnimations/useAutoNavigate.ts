/* eslint-disable no-param-reassign */
import { useEffect } from 'react'
import { Sphere, Vector3 } from 'three'
import { useControlStore } from '~/stores/useControlStore'
import { useSelectedNode } from '~/stores/useGraphStore'

export const useAutoNavigate = () => {
  const selectedNode = useSelectedNode()
  const cameraControlsRef = useControlStore((s) => s.cameraControlsRef)

  useEffect(() => {
    if (selectedNode && cameraControlsRef) {
      const center = new Vector3(selectedNode.x, selectedNode.y, selectedNode.z)
      const radius = 150

      const sphere = new Sphere(center, radius)

      cameraControlsRef.fitToSphere(sphere, true)
    }
  }, [selectedNode, cameraControlsRef])

  return null
}
