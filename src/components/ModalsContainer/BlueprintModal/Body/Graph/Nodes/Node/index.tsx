import { Html, Text } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { Select } from '@react-three/postprocessing'
import { useDrag } from '@use-gesture/react'
import clsx from 'clsx'
import { memo, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { BoxGeometry, Mesh, Vector3 } from 'three'
import { SchemaExtended } from '~/components/ModalsContainer/BlueprintModal/types'
import { fontProps } from '~/components/Universe/Graph/Cubes/Text/constants'
import { Flex } from '~/components/common/Flex'
import { colors } from '~/utils'

// type SchemaNode = {
//   x: number
//   y: number
//   z: number
//   id: string
//   type: string
// }

type Props = {
  node: SchemaExtended
  setSelectedNode: () => void
  isSelected: boolean
}

export const boxGeometry = new BoxGeometry(2, 2, 2)

export const Node = memo(({ node, setSelectedNode, isSelected }: Props) => {
  const [geometry] = useState(boxGeometry)
  const meshRef = useRef<Mesh | null>(null)

  console.log(setSelectedNode)

  const { size, viewport } = useThree()

  const aspect = size.width / viewport.width

  const bind = useDrag(({ direction: [x, y], down }) => {
    if (down && meshRef.current) {
      // Move the mesh to the new position
      node.x += x / aspect
      node.y += -y / aspect
    }
  })

  useEffect(
    () =>
      function cleanup() {
        geometry.dispose()
      },
    [geometry],
  )

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.set(node.x, node.y, node.z)
    }
  })

  return (
    <Select>
      {true && (
        <mesh ref={meshRef} position={new Vector3(node.x, node.y, node.z)}>
          <Html center sprite zIndexRange={[0, 0]}>
            <NodeView className={clsx({ selected: isSelected })} {...bind()}>
              {node.type}
            </NodeView>
          </Html>
        </mesh>
      )}
      {false && (
        <Text
          onClick={setSelectedNode}
          {...fontProps}
          fontSize={1}
          position={new Vector3(node.x, node.y, node.z)}
          scale={20}
        >
          {node.type}
        </Text>
      )}
    </Select>
  )
})

Node.displayName = 'Node'

const NodeView = styled(Flex)`
  width: 100px;
  height: 100px;
  background: ${colors.green300};
  border-radius: 50%;
  color: ${colors.white};
  border: 3px solid rgba(225, 225, 225, 0.6);
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.selected {
    font-size: 20px;
  }
`
