import { Instances } from '@react-three/drei'
import { memo, useMemo } from 'react'
import { BufferGeometry, Shape, ShapeGeometry } from 'three'
import { useDataStore, useNodeTypes } from '~/stores/useDataStore'
import { useFeatureFlagStore } from '~/stores/useFeatureFlagStore'
import { useSelectedNode } from '~/stores/useGraphStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { NodeExtended } from '~/types'
import { colors } from '~/utils'
import { nodeSize } from '../constants'
import { Point } from './Point'

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

// eslint-disable-next-line no-underscore-dangle
const _NodePoints = () => {
  const selectedNode = useSelectedNode()
  const dataInitial = useDataStore((s) => s.dataInitial)
  const { normalizedSchemasByType } = useSchemaStore((s) => s)
  const nodeTypes = useNodeTypes()
  const nodesNormalized = useDataStore((s) => s.nodesNormalized)

  const scaleFeature = useFeatureFlagStore((s) => s.scaleFeature)

  // Create a rounded rectangle geometry: rounded left border, sharp right border
  const roundedRectGeometry = useMemo(() => {
    const width = nodeSize
    const height = nodeSize
    const radius = nodeSize / 2

    const shape = new Shape()
    // Start at top-center of the left semicircle
    shape.moveTo(0, -height / 2)
    // Draw the left semicircle (top half)
    shape.absarc(0, 0, radius, -Math.PI / 2, Math.PI / 2, false)
    // Line to top-right corner (sharp)
    shape.lineTo(width / 2, -height / 2)
    // Line to bottom-right corner (sharp)
    shape.lineTo(width / 2, height / 2)
    // Line back to bottom-center of left semicircle
    shape.lineTo(0, height / 2)
    // Close the shape
    shape.closePath()

    return new ShapeGeometry(shape)
  }, [])

  return (
    <Instances
      geometry={roundedRectGeometry as BufferGeometry}
      limit={1000} // Optional: max amount of items (for calculating buffer size)
      range={1000}
      visible={!selectedNode || true}
    >
      <meshBasicMaterial />
      {dataInitial?.nodes.map((node: NodeExtended, index) => {
        const normalizedNode = nodesNormalized.get(node.ref_id)
        const scale = index || normalizedNode?.weight || normalizedNode?.properties?.weight || 1
        const scaleNormalized = Math.cbrt(scale)
        const scaleToFixed = Number(scaleNormalized.toFixed(0))

        const secondaryColor = normalizedSchemasByType[node.node_type]?.secondary_color
        const color = secondaryColor ?? (COLORS_MAP[nodeTypes.indexOf(node.node_type)] || colors.white)

        return <Point key={node.ref_id} color={color} node={node} scale={!scaleFeature ? 1 : scaleToFixed} />
      })}
    </Instances>
  )
}

export const NodePoints = memo(_NodePoints)
