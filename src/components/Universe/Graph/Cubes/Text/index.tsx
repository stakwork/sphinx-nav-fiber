import { Billboard, Svg, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useMemo, useRef } from 'react'
import { Mesh, MeshBasicMaterial, Vector3 } from 'three'
import { Icons } from '~/components/Icons'
import { useNodeTypes } from '~/stores/useDataStore'
import { useGraphStore, useSelectedNode, useSelectedNodeRelativeIds } from '~/stores/useGraphStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { NodeExtended } from '~/types'
import { colors } from '~/utils/colors'
import { removeEmojis } from '~/utils/removeEmojisFromText'
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
  isHovered: boolean
}

function splitStringIntoThreeParts(text: string): string {
  const truncatedText = truncateText(text, 30)
  const words = truncatedText.split(' ')

  if (words.length <= 5) {
    return truncatedText
  }

  const third = Math.ceil(words.length / 3)
  const twoThirds = third * 2

  const firstPart = words.slice(0, third).join(' ')
  const secondPart = words.slice(third, twoThirds).join(' ')
  const thirdPart = words.slice(twoThirds).join(' ')

  return `${firstPart}\n${secondPart}\n${thirdPart}`
}

export const TextNode = memo(({ node, hide, isHovered }: Props) => {
  const svgRef = useRef<Mesh | null>(null)
  const ringRef = useRef<Mesh | null>(null)
  const selectedNode = useSelectedNode()

  const nodePositionRef = useRef(new Vector3())

  const selectedNodeRelativeIds = useSelectedNodeRelativeIds()
  const isRelative = selectedNodeRelativeIds.includes(node?.ref_id || '')
  const isSelected = !!selectedNode && selectedNode?.ref_id === node.ref_id
  const showSelectionGraph = useGraphStore((s) => s.showSelectionGraph)
  const { normalizedSchemasByType } = useSchemaStore((s) => s)

  useFrame(({ camera }) => {
    const checkDistance = () => {
      const nodePosition = nodePositionRef.current.setFromMatrixPosition(ringRef.current!.matrixWorld)

      if (ringRef.current) {
        ringRef.current.visible = nodePosition.distanceTo(camera.position) < 2500
      }

      // Set visibility based on distance
    }

    checkDistance()
  })

  const nodeTypes = useNodeTypes()

  const textScale = useMemo(() => {
    if (!node.name) {
      return 0
    }

    let scale = (node.edge_count || 1) * 20

    if (showSelectionGraph && isSelected) {
      scale = 40
    } else if (!isSelected && isRelative) {
      scale = 0
    }

    const nodeScale = scale / Math.sqrt(node.name.length)

    return Math.min(Math.max(nodeScale, 20), 30)
  }, [node.edge_count, node.name, isSelected, isRelative, showSelectionGraph])

  const fillOpacity = useMemo(() => {
    if (selectedNode && !isSelected) {
      return 0.2
    }

    if (!isHovered) {
      return 0.2
    }

    return 1
  }, [isSelected, selectedNode, isHovered])

  const primaryColor = normalizedSchemasByType[node.node_type]?.primary_color
  const primaryIcon = normalizedSchemasByType[node.node_type]?.icon

  const color = primaryColor ?? (COLORS_MAP[nodeTypes.indexOf(node.node_type)] || colors.white)

  const Icon = primaryIcon ? Icons[primaryIcon] : null
  const iconName = Icon ? primaryIcon : 'NodesIcon'
  const sanitizedNodeName = removeEmojis(String(node.name))

  return (
    <Billboard follow lockX={false} lockY={false} lockZ={false} name="billboard" userData={node}>
      <mesh ref={ringRef} name={node.id} userData={node} visible={!hide}>
        <Svg
          ref={svgRef}
          name="svg"
          onUpdate={(svg) => {
            svg.traverse((child) => {
              if (child instanceof Mesh) {
                // Apply dynamic color to meshes
                // eslint-disable-next-line no-param-reassign
                child.material = new MeshBasicMaterial({ color })
              }
            })
          }}
          position={[-15, 15, 0]}
          scale={2}
          src={`svg-icons/${iconName}.svg`}
          strokeMaterial={{ color: 'yellow' }}
          userData={node}
        />

        {node.name && (
          <Text
            color={color}
            fillOpacity={1 || fillOpacity}
            name="text"
            position={[0, -65, 0]}
            scale={textScale}
            userData={node}
            {...fontProps}
          >
            {splitStringIntoThreeParts(sanitizedNodeName)}
          </Text>
        )}
      </mesh>
    </Billboard>
  )
})

TextNode.displayName = 'TextNode'
