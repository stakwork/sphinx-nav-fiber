import { Text } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { Group, Vector3 } from 'three'
import { useSelectedNode } from '~/stores/useDataStore'
import { fontProps } from '../../../Cubes/Text/constants'
import { setPointerHoverStyle, stopBubbling } from '../../constants'

const padding = 0.1
const bottomLeftCorner = {
  x: 1000,
  y: 1000,
  z: -300,
}

const variableVector3 = new Vector3()

export const DetailsPanel = () => {
  const panelRef = useRef<Group>(null)

  const [hovered, setHovered] = useState('')

  const { viewport } = useThree()

  const selectedNode = useSelectedNode()

  useEffect(() => {
    setPointerHoverStyle(!!hovered)
  }, [hovered])

  useFrame(({ camera }) => {
    if (panelRef.current) {
      const { width, height } = viewport

      const { x, y, z } = bottomLeftCorner

      // Calculate the adjusted x and y values based on viewport dimensions
      const adjustedX = -width / 2 + width / x
      const adjustedY = -height / 2 + height / y

      const offset = variableVector3.set(adjustedX, adjustedY, z)

      offset.applyQuaternion(camera.quaternion)
      panelRef.current.position.copy(camera.position)
      panelRef.current.quaternion.copy(camera.quaternion)
      panelRef.current.position.add(offset)
    }
  })

  return (
    <group ref={panelRef} onClick={stopBubbling} onPointerDown={stopBubbling} onPointerUp={stopBubbling}>
      <Text {...fontProps} color={'#ffffff'} lineHeight={0.5} fontSize={9}>
        Hello
      </Text>
    </group>
  )
}
