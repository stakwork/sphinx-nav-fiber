import { Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useMemo, useRef } from 'react'
import { Mesh } from 'three'
import { useNodeTypes } from '~/stores/useDataStore'
import { useGraphStore, useSelectedNode } from '~/stores/useGraphStore'
import { NodeExtended } from '~/types'
import { colors } from '~/utils/colors'
import { fontProps } from './constants'

const COLORS_MAP = [
  '#fff',
  '#9747FF',
  '#00887A',
  '#0098A6',
  '#0288D1',
  '#33691E',
  '#465A65',
  '#512DA7',
  '#5C6BC0',
  '#5D4038',
  '#662C00',
  '#689F39',
  '#6B1B00',
  '#750000',
  '#78909C',
  '#7E57C2',
  '#8C6E63',
  '#AA47BC',
  '#BF360C',
  '#C2175B',
  '#EC407A',
  '#EF6C00',
  '#F5511E',
  '#FF9696',
  '#FFC064',
  '#FFCD29',
  '#FFEA60',
]

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
  const nodeTypes = useNodeTypes()

  useFrame(({ camera }) => {
    if (ref?.current) {
      // Make text face the camera
      ref.current.quaternion.copy(camera.quaternion)
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

  const color = COLORS_MAP[nodeTypes.indexOf(node.node_type)] || colors.white

  return (
    <>
      <Text
        ref={ref}
        anchorX="center"
        anchorY="middle"
        color={color}
        fillOpacity={fillOpacity}
        scale={20 || textScale}
        userData={node}
        visible={!hide}
        {...fontProps}
      >
        {node.name}
      </Text>
    </>
  )
})

TextNode.displayName = 'TextNode'
