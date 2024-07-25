import { Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useMemo, useRef } from 'react'
import { Mesh } from 'three'
import { useNodeTypes } from '~/stores/useDataStore'
import { useGraphStore, useHoveredNode, useSelectedNode, useSelectedNodeRelativeIds } from '~/stores/useGraphStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { NodeExtended } from '~/types'
import { colors } from '~/utils/colors'
import { truncateText } from '~/utils/truncateText'
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

function splitStringIntoThreeParts(text: string): string {
  // Split the string into an array of words

  const truncatedText = truncateText(text, 30)
  const words = truncatedText.split(' ')

  // If the word count is 5 or less, return the original text
  if (text.split(' ').length <= 5) {
    return truncatedText
  }

  // Determine the split points
  const third = Math.ceil(words.length / 3)
  const twoThirds = third * 2

  // Split the array into three parts
  const firstPart = words.slice(0, third).join(' ')
  const secondPart = words.slice(third, twoThirds).join(' ')
  const thirdPart = words.slice(twoThirds).join(' ')

  // Return the three parts as a single string with newline characters in between
  return `${firstPart}\n${secondPart}\n${thirdPart}`
}

export const TextNode = memo(({ node, hide }: Props) => {
  const ref = useRef<Mesh | null>(null)
  const selectedNode = useSelectedNode()
  const hoveredNode = useHoveredNode()
  const selectedNodeRelativeIds = useSelectedNodeRelativeIds()
  const isRelative = selectedNodeRelativeIds.includes(node?.ref_id || '')
  const isSelected = !!selectedNode && selectedNode?.ref_id === node.ref_id
  const isHovered = !!hoveredNode && hoveredNode?.ref_id === node.ref_id
  const showSelectionGraph = useGraphStore((s) => s.showSelectionGraph)
  const [getPrimaryColorByType] = useSchemaStore((s) => [s.getPrimaryColorByType])

  const nodeTypes = useNodeTypes()

  useFrame(({ camera }) => {
    if (ref?.current) {
      // Make text face the camera
      ref.current.quaternion.copy(camera.quaternion)
    }
  })

  const textScale = useMemo(() => {
    let scale = (node.edge_count || 1) * 20

    if (showSelectionGraph && isSelected) {
      scale = 40
    } else if (!isSelected && isRelative) {
      scale = 0
    }

    const nodeScale = scale / Math.sqrt(node.name.length)

    scale = Math.max(nodeScale, 20)

    return scale
  }, [node.edge_count, node.name, isSelected, isRelative, showSelectionGraph])

  const fillOpacity = useMemo(() => {
    if (selectedNode && !isSelected) {
      return 0.2
    }

    if (hoveredNode && !isHovered) {
      return 0.2
    }

    return 1
  }, [isSelected, selectedNode, isHovered, hoveredNode])

  const primaryColor = getPrimaryColorByType(node.node_type)

  const color = primaryColor ?? (COLORS_MAP[nodeTypes.indexOf(node.node_type)] || colors.white)

  return (
    <>
      <Text
        ref={ref}
        anchorX="center"
        anchorY="middle"
        color={color}
        fillOpacity={fillOpacity}
        scale={textScale}
        userData={node}
        visible={!hide}
        {...fontProps}
      >
        {splitStringIntoThreeParts(String(node.name))}
      </Text>
    </>
  )
})

TextNode.displayName = 'TextNode'
