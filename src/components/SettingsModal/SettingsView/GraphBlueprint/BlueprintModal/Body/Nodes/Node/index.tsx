import { Html, Text } from '@react-three/drei'
import { Select } from '@react-three/postprocessing'
import { memo, useEffect, useState } from 'react'
import styled from 'styled-components'
import { BoxGeometry, Vector3 } from 'three'
import { Flex } from '~/components/common/Flex'
import { colors } from '~/utils'

type SchemaNode = {
  x: number
  y: number
  z: number
  id: string
  type: string
}

type Props = {
  node: SchemaNode
}

export const boxGeometry = new BoxGeometry(4, 4, 4)

export const Node = memo(({ node }: Props) => {
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
      {false && (
        <Text
          anchorX="center"
          anchorY="middle"
          color={colors.white}
          fillOpacity={1}
          position={[node.x, node.y, node.z]}
          scale={10}
          userData={node}
        >
          {node.type}
        </Text>
      )}
      <group position={new Vector3(node.x, node.y, node.z)}>
        <Html center sprite zIndexRange={[0, 0]}>
          <NodeView>{node.type}</NodeView>
        </Html>
      </group>
    </Select>
  )
})

Node.displayName = 'Node'

const NodeView = styled(Flex)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: ${colors.white};
  border: 1px solid ${colors.white};
  align-items: center;
  justify-content: center;
`
