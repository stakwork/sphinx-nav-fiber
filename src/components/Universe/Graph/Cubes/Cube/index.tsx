import { Select } from '@react-three/postprocessing'
import { memo, useRef } from 'react'
import { Mesh } from 'three'
import { useSelectedNode } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'
import { boxGeometry } from '../constants'
import { useMaterial } from './hooks/useMaterial'

type Props = {
  node: NodeExtended
}
export const Cube = memo(({ node }: Props) => {
  const ref = useRef<Mesh | null>(null)

  const material = useMaterial(node.image_url || 'noimage.jpeg')
  const selectedNode = useSelectedNode()

  const isSelected = selectedNode?.ref_id === node?.ref_id

  return (
    <Select enabled={isSelected}>
      <mesh
        ref={ref}
        geometry={boxGeometry}
        material={material}
        name={node.id}
        position={[node.x, node.y, node.z]}
        scale={node.scale}
        userData={node}
      />
    </Select>
  )
})

Cube.displayName = 'Cube'
