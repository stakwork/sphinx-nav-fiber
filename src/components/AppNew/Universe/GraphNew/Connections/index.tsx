import { Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh, Vector3 } from 'three'
import { EdgeExtendedNew } from '~/network/fetchGraphDataNew/types'
import { colors } from '~/utils/colors'
import { fontProps } from './constants'

type Props = {
  connections: EdgeExtendedNew[]
  hide?: boolean
}

export const Connections = ({ connections }: Props) => {
  const ref = useRef<Mesh | null>(null)

  useFrame(({ camera }) => {
    if (ref?.current) {
      // Make text face the camera
      ref.current.quaternion.copy(camera.quaternion)
    }
  })

  return (
    <>
      {connections.map((connection: EdgeExtendedNew) => {
        const vect = new Vector3(0, 0, 0)

        const midpoint = vect.addVectors(connection.sourcePosition, connection.targetPosition).divideScalar(2)

        return (
          <Text
            key={connection.source}
            ref={ref}
            anchorX="center"
            anchorY="middle"
            color={colors.white}
            fillOpacity={1}
            position={[midpoint.x, midpoint.y, midpoint.z]}
            scale={20}
            userData={connection}
            visible
            {...fontProps}
          >
            {connection.edge_type}
          </Text>
        )
      })}
    </>
  )
}

Connections.displayName = 'Connections'
