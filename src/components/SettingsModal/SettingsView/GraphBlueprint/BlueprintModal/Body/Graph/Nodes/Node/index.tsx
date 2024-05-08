import { Html } from '@react-three/drei'
import { Select } from '@react-three/postprocessing'
import clsx from 'clsx'
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
  setSelectedNode: () => void
  isSelected: boolean
}

export const boxGeometry = new BoxGeometry(2, 2, 2)

export const Node = memo(({ node, setSelectedNode, isSelected }: Props) => {
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
      <group onClick={setSelectedNode} position={new Vector3(node.x, node.y, node.z)}>
        <Html center sprite zIndexRange={[0, 0]}>
          <NodeView className={clsx({ selected: isSelected })} onClick={setSelectedNode}>
            {node.type}
          </NodeView>
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
  border: 3px solid rgba(225, 225, 225, 0.6);
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.selected {
    font-size: 20px;
  }
`
