import { Text } from '@react-three/drei'
import { Select } from '@react-three/postprocessing'
import { memo, useEffect, useRef, useState } from 'react'
import { BoxGeometry, Mesh } from 'three'
import { colors } from '~/utils'

type SchemaNode = {
  x: number
  y: number
  z: number
  id: string
}

type Props = {
  node: SchemaNode
  hide?: boolean
}

export const boxGeometry = new BoxGeometry(10, 10, 10)

export const Node = memo(({ node, hide }: Props) => {
  const ref = useRef<Mesh | null>(null)
  const [geometry] = useState(boxGeometry)

  useEffect(
    () =>
      function cleanup() {
        geometry.dispose()
      },
    [geometry],
  )

  return (
    <Select>
      <mesh
        ref={ref}
        geometry={boxGeometry}
        name={node.id}
        position={[node.x, node.y, node.z]}
        userData={node}
        visible={!hide}
      />
      <Text
        anchorX="center"
        anchorY="middle"
        color={colors.white}
        fillOpacity={1}
        position={[node.x, node.y, node.z]}
        scale={200}
        userData={node}
      >
        node.label
      </Text>
    </Select>
  )
})

Node.displayName = 'Node'
