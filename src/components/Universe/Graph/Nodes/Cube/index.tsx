import { memo, useRef } from 'react'
import { Mesh } from 'three'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'
import { boxGeometry } from '../constants'
import { useMaterial } from './hooks/useMaterial'

type Props = {
  node: NodeExtended
  hide?: boolean
}
export const Cube = memo(({ node, hide }: Props) => {
  const ref = useRef<Mesh | null>(null)
  const selectedNode = useSelectedNode()
  const selectedNodeRelativeIds = useDataStore((s) => s.selectedNodeRelativeIds)
  const isSelected = selectedNode && node.ref_id === selectedNode.ref_id
  const transparent = !!(selectedNode && !isSelected && !selectedNodeRelativeIds.includes(selectedNode?.ref_id || ''))
  const material = useMaterial(node.image_url || 'noimage.jpeg', transparent)

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
