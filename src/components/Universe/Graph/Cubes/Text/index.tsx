import { Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useMemo, useRef } from 'react'
import { Mesh } from 'three'
import { useSelectedNode } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'
import { selectedNodeRelatives } from '../constants'

const fontProps = {
  font: '/Inter-Bold.woff',
  fontSize: 2.5,
  letterSpacing: -0.05,
  lineHeight: 1,
  'material-toneMapped': false,
}

type Props = {
  node: NodeExtended
}

export const TextNode = memo(({ node }: Props) => {
  const ref = useRef<Mesh | null>(null)

  const selectedNode = useSelectedNode()

  const isSelected = !!selectedNode && selectedNode?.id === node.id

  useFrame(({ camera }) => {
    if (ref?.current) {
      // Make text face the camera
      ref.current.quaternion.copy(camera.quaternion)
    }
  })

  const transparent = useMemo(
    () => selectedNode && !isSelected && !selectedNodeRelatives.find((f) => (f?.ref_id || '') === node.ref_id),
    [selectedNode, selectedNodeRelatives, node.ref_id],
  )

  return (
    <Text
      ref={ref}
      anchorX="center"
      anchorY="middle"
      color={isSelected ? 'white' : 'lightgray'}
      fillOpacity={transparent ? 0.1 : 0.5}
      position={[node.x, node.y, node.z]}
      scale={transparent ? node.scale || 1 : (node.scale || 1) * 4}
      userData={node}
      {...fontProps}
    >
      {node.label}
    </Text>
  )
})

TextNode.displayName = 'Text'
