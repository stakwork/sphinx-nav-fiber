import { Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useMemo, useRef } from 'react'
import { Mesh } from 'three'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
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
  const selectedNodeRelativeIds = useDataStore((s) => s.selectedNodeRelativeIds)
  const isRelative = selectedNodeRelativeIds.includes(node?.ref_id || '')
  const isSelected = !!selectedNode && selectedNode?.id === node.id
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
    let scale = (node.scale || 1) * 4

    if (isSelected || isRelative) {
      scale = 0
    }

    return scale
  }, [node.scale, isSelected, isRelative, showSelectionGraph])

  const fillOpacity = useMemo(() => {
    if (selectedNode && selectedNode.node_type === 'topic' && !isSelected) {
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
      scale={textScale}
      userData={node}
      visible={!hide}
      {...fontProps}
    >
      {node.label}
    </Text>
  )
})

TextNode.displayName = 'TextNode'
