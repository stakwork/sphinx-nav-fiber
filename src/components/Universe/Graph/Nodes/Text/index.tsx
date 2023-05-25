import { Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useMemo, useRef } from 'react'
import { Mesh } from 'three'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'

const fontProps = {
  font: '/Inter-Bold.woff',
  fontSize: 2.5,
  letterSpacing: -0.05,
  lineHeight: 1,
  'material-toneMapped': false,
}

type Props = {
  node: NodeExtended
  hide?: boolean
  animated?: boolean
}

export const TextNode = memo(({ node, hide, animated }: Props) => {
  const ref = useRef<Mesh | null>(null)

  const selectedNode = useSelectedNode()
  const selectedNodeRelativeIds = useDataStore((s) => s.selectedNodeRelativeIds)
  const isRelative = selectedNodeRelativeIds.includes(node?.ref_id || '')
  const isSelected = !!selectedNode && selectedNode?.id === node.id

  useFrame(({ camera }) => {
    if (ref?.current) {
      // Make text face the camera
      ref.current.quaternion.copy(camera.quaternion)

      if (animated) {
        ref.current.position.set(node.x, node.y, node.z)
      }
    }
  })

  const transparent = useMemo(
    () => selectedNode && !isSelected && !selectedNodeRelativeIds.includes(node?.ref_id || ''),
    [selectedNode, selectedNodeRelativeIds, node.ref_id],
  )

  return (
    <Text
      visible={!hide}
      ref={ref}
      anchorX="center"
      anchorY="middle"
      color={isSelected ? 'white' : 'lightgray'}
      fillOpacity={transparent ? 0.1 : 0.5}
      position={[node.x, node.y, node.z]}
      scale={isRelative ? 0 : (node.scale || 1) * 4}
      userData={node}
      {...fontProps}
    >
      {node.label}
    </Text>
  )
})

TextNode.displayName = 'Text'
