import { Text } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import { Group, Vector3 } from 'three'
import { colors } from '~/utils/colors'
import { fontProps } from '../../../Cubes/Text/constants'
import { stopBubbling } from '../../constants'

const bottomLeftCorner = {
  x: 1000,
  y: 1000,
  z: -300,
}

const variableVector3 = new Vector3()

export const DetailsPanel = () => {
  const panelRef = useRef<Group>(null)

  const { viewport } = useThree()

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
      <Text {...fontProps} color={colors.white} fontSize={9} lineHeight={0.5}>
        Hello
      </Text>
    </group>
  )
}
