import { Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useMemo, useRef } from 'react'
import { Mesh } from 'three'
import { NodeExtendedNew } from '~/network/fetchGraphDataNew/types'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { colors } from '~/utils/colors'
import { fontProps } from './constants'

type Props = {
  node: NodeExtendedNew
  hide?: boolean
}

export const TextNode = memo(({ node, hide }: Props) => {
  const ref = useRef<Mesh | null>(null)
  const selectedNode = useSelectedNode()
  const selectedNodeRelativeIds = useDataStore((s) => s.selectedNodeRelativeIds)
  const isRelative = selectedNodeRelativeIds.includes(node?.ref_id || '')
  const isSelected = !!selectedNode && selectedNode?.ref_id === node.ref_id
  const showSelectionGraph = useDataStore((s) => s.showSelectionGraph)

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
    let scale = (node.edge_count || 1) * 4

    if (showSelectionGraph && isSelected) {
      scale = 40
    } else if (!isSelected && isRelative) {
      scale = 0
    }

    false && console.log(scale)

    return (node.edge_count || 1) * 4
  }, [node.edge_count, isSelected, isRelative, showSelectionGraph])

  const fillOpacity = useMemo(() => {
    if (selectedNode && selectedNode.node_type === 'Topic' && !isSelected) {
      return 0.2
    }

    return 1
  }, [isSelected, selectedNode])

  return (
    <Text
      ref={ref}
      anchorX="center"
      anchorY="middle"
      color={colors.white}
      fillOpacity={fillOpacity}
      position={[node.x, node.y, node.z]}
      scale={Math.min(textScale, 10)}
      userData={node}
      visible={!hide && !isSelected}
      {...fontProps}
    >
      {node.name}
    </Text>
  )
})

TextNode.displayName = 'TextNode'
