import { memo, useRef } from 'react'
import { Mesh } from 'three'
import { useSelectedNode } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'
import { boxGeometry, selectedNodeRelatives } from '../constants'
import { useMaterial } from './hooks/useMaterial'

type Props = {
  node: NodeExtended
}
export const Cube = memo(({ node }: Props) => {
  const ref = useRef<Mesh | null>(null)
  const selectedNode = useSelectedNode()
  const isSelected = selectedNode && node.ref_id === selectedNode.ref_id
  const transparent = !!(
    selectedNode &&
    !isSelected &&
    !selectedNodeRelatives.find((f) => f.ref_id === selectedNode?.ref_id)
  )
  const material = useMaterial(node.image_url || 'noimage.jpeg', transparent)

  return (
    <mesh
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
