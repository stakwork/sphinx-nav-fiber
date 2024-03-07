/* eslint-disable no-param-reassign */
import { useFrame } from '@react-three/fiber'
import { RefObject, useCallback, useEffect, useMemo, useState } from 'react'
import * as THREE from 'three'
import { variableVector3 } from '~/components/Universe/constants'
import { NodeExtendedNew } from '~/network/fetchGraphDataNew/types'
import { useSelectedNode } from '~/stores/useGraphStore'

export const useNavigation = (thisNodeRef: RefObject<THREE.Mesh | null>) => {
  const selectedNode = useSelectedNode()
  const [sleep, setSleep] = useState(true)
  const [distanceReached, setDistanceReached] = useState(false)

  const [offsets, setOffsets] = useState(variableVector3.set(0, 0, 0))

  // cube movement to selection params
  const [minDistanceToTarget] = useState(80)
  const [minDistanceToHome] = useState(10)

  const childIsSelected = useMemo(() => {
    const isFloater = thisNodeRef?.current?.userData?.node_type !== 'show'
    const selectedIsChild = thisNodeRef?.current?.userData?.children?.includes(selectedNode?.ref_id || '')

    return isFloater && selectedIsChild
  }, [selectedNode, thisNodeRef])

  useFrame(() => {
    if (thisNodeRef?.current && thisNodeRef?.current?.userData?.node_type === 'guest') {
      // do movement animation
      if (selectedNode && childIsSelected && !distanceReached) {
        moveToNode(thisNodeRef.current, selectedNode)
      } else if (!childIsSelected && !sleep) {
        moveHome(thisNodeRef.current)
      }
    }
  })

  useEffect(() => {
    if (childIsSelected) {
      setDistanceReached(false)

      if (selectedNode) {
        const biasX = Math.random() - 0.5 < 0 ? -1 : 1
        const biasY = Math.random() - 0.5 < 0 ? -1 : 1
        const biasZ = Math.random() - 0.5 < 0 ? -1 : 1
        const xOffset = 100 * biasX
        const yOffset = 100 * biasY
        const zOffset = 100 * biasZ
        const newOffsets = variableVector3.set(xOffset, yOffset, zOffset)

        setOffsets(newOffsets)
      }
    } else if (!childIsSelected) {
      setSleep(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNode])

  const moveToNode = useCallback(
    (thisNode: THREE.Mesh, toNode: NodeExtendedNew) => {
      const mesh = variableVector3.set(toNode.x + offsets.x, toNode.y + offsets.y, toNode.z + offsets.z)

      const distance = thisNode.position.distanceTo(mesh)

      // stop 200 before colliding with cube
      if (distance < minDistanceToTarget) {
        setDistanceReached(true)
      } else {
        thisNode.position.lerp(mesh, 0.04)
      }
    },
    [minDistanceToTarget, setDistanceReached, offsets],
  )

  const moveHome = useCallback(
    (thisNode: THREE.Mesh) => {
      const mesh = variableVector3.set(thisNode.userData.x, thisNode.userData.y, thisNode.userData.z)

      const distance = thisNode.position.distanceTo(mesh)

      // stop 200 before colliding with cube
      if (distance < minDistanceToHome) {
        setSleep(true)
      } else {
        thisNode.position.lerp(mesh, 0.04)
      }
    },
    [minDistanceToHome, setSleep],
  )

  return null
}
