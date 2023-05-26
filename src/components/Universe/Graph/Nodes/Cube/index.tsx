import { useFrame } from '@react-three/fiber'
import { Select } from '@react-three/postprocessing'
import { memo, useEffect, useRef, useState } from 'react'
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
  const [geometry] = useState(boxGeometry)
  const selectedNode = useSelectedNode()
  const selectedNodeRelativeIds = useDataStore((s) => s.selectedNodeRelativeIds)
  const showSelectionGraph = useDataStore((s) => s.showSelectionGraph)
  const isSelected = selectedNode && node.ref_id === selectedNode.ref_id
  const transparent = !selectedNode
    ? false
    : !isSelected && !selectedNodeRelativeIds.includes(selectedNode?.ref_id || '')
  const material = useMaterial(node.image_url || 'noimage.jpeg', transparent)

  useFrame(() => {
    if (animated && ref.current) {
      ref.current.position.set(node.x, node.y, node.z)
      if (isSelected) {
        ref.current.rotation.y += 0.01
      }
    }
  })

  useEffect(() => {
    return function () {
      geometry.dispose()
    }
  }, [geometry])

  return (
    <Select enabled={!!isSelected}>
      <mesh
        visible={!hide}
        ref={ref}
        geometry={boxGeometry}
        material={material}
        name={node.id}
        position={[node.x, node.y, node.z]}
        scale={showSelectionGraph && isSelected ? 30 : node.scale}
        userData={node}
      />
    </Select>
  )
})

Cube.displayName = 'Cube'
