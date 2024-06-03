import { Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useMemo, useRef } from 'react'
import { Mesh } from 'three'
import { useGraphStore, useSelectedNode } from '~/stores/useGraphStoreLatest'
import { NodeExtended } from '~/types'
import { colors } from '~/utils/colors'
import { fontProps } from './constants'

type Props = {
  node: NodeExtended
  hide?: boolean
}

export const TextNode = memo(({ node, hide }: Props) => {
  const ref = useRef<Mesh | null>(null)
  const selectedNode = useSelectedNode()
  const selectedNodeRelativeIds = useGraphStore((s) => s.selectedNodeRelativeIds)
  const isRelative = selectedNodeRelativeIds.includes(node?.ref_id || '')
  const isSelected = !!selectedNode && selectedNode?.ref_id === node.ref_id
  const showSelectionGraph = useGraphStore((s) => s.showSelectionGraph)

  useFrame(({ camera }) => {
    if (ref?.current) {
      // Make text face the camera
      ref.current.quaternion.copy(camera.quaternion)

      if (showSelectionGraph) {
        ref.current.position.set(node.x, node.y, node.z)
      }
    }
  })

  const textScale = useMemo(() => {
    let scale = (node.edge_count || 30) * 4

    if (showSelectionGraph && isSelected) {
      scale = 40
    } else if (!isSelected && isRelative) {
      scale = 0
    }

    return scale
  }, [node.edge_count, isSelected, isRelative, showSelectionGraph])

  const fillOpacity = useMemo(() => {
    if (selectedNode && selectedNode.node_type === 'Topic' && !isSelected) {
      return 0.2
    }

    return 1
  }, [isSelected, selectedNode])

  return (
    <>
      <Text
        ref={ref}
        anchorX="center"
        anchorY="middle"
        color={colors.white}
        fillOpacity={fillOpacity}
        // position={[node.x, node.y, node.z]}
        scale={20 || textScale}
        userData={node}
        visible={!hide && !isSelected}
        {...fontProps}
      >
        {node.name}
      </Text>

      {/* <sphereBufferGeometry args={[2, 10, 10]} />
      <meshStandardMaterial color="#f1c40f" /> */}
    </>
  )
})

TextNode.displayName = 'TextNode'
