import { useFrame } from '@react-three/fiber'
import { Select } from '@react-three/postprocessing'
import { memo, useEffect, useMemo, useRef, useState } from 'react'
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
  const isSelected = !!selectedNode && node.ref_id === selectedNode.ref_id

  const transparent = !selectedNode
    ? false
    : !isSelected && !selectedNodeRelativeIds.includes(selectedNode?.ref_id || '')

  const material = useMaterial(node.image_url || 'noimage.jpeg', transparent)

  useFrame((_, delta) => {
    if (animated && ref.current) {
      ref.current.position.set(node.x, node.y, node.z)

      if (isSelected) {
        ref.current.rotation.y += delta * 1
        ref.current.rotation.x -= delta * 0.6
      }
    }
  })

  useEffect(
    () =>
      function cleanup() {
        geometry.dispose()
      },
    [geometry],
  )

  const scale = useMemo(() => {
    if (showSelectionGraph && isSelected) {
      return 20
    } else if (isSelected) {
      return (node.scale || 1) * 1.2
    }
    return node.scale
  }, [node, isSelected, showSelectionGraph])

  return (
    <Select enabled={!!isSelected}>
      <mesh
        ref={ref}
        geometry={boxGeometry}
        material={material}
        name={node.id}
        position={[node.x, node.y, node.z]}
        scale={scale}
        userData={node}
        visible={!hide}
      />
    </Select>
  )
})

Cube.displayName = 'Cube'
