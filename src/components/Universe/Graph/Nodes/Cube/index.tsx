import { useFrame } from '@react-three/fiber'
import { memo, useRef } from 'react'
import { Mesh } from 'three'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'
import { boxGeometry } from '../constants'
import { useMaterial } from './hooks/useMaterial'

type Props = {
  node: NodeExtended
  hide?: boolean
  animated?: boolean
}
export const Cube = memo(({ node, hide, animated }: Props) => {
  const ref = useRef<Mesh | null>(null)
  const selectedNode = useSelectedNode()
  const selectedNodeRelativeIds = useDataStore((s) => s.selectedNodeRelativeIds)
  const isSelected = selectedNode && node.ref_id === selectedNode.ref_id
  const transparent = !selectedNode
    ? false
    : !isSelected && !selectedNodeRelativeIds.includes(selectedNode?.ref_id || '')
  const material = useMaterial(node.image_url || 'noimage.jpeg', transparent)

  useFrame(() => {
    if (animated && ref.current) {
      ref.current.position.set(node.x, node.y, node.z)
    }
  })

  return (
    <mesh
      visible={!hide}
      ref={ref}
      geometry={boxGeometry}
      material={material}
      name={node.id}
      position={[node.x, node.y, node.z]}
      scale={node.scale}
      userData={node}
    />
  )
})

Cube.displayName = 'Cube'
