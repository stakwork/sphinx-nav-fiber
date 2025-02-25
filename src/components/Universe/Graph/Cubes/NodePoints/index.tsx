import { Instances } from '@react-three/drei'
import { memo, useMemo } from 'react'
import { BufferGeometry, Shape, ShapeGeometry } from 'three'
import { useDataStore, useNodeTypes } from '~/stores/useDataStore'
import { useGraphStore, useSelectedNode } from '~/stores/useGraphStore'
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

const nodeMatchesFollowerFilter = (node: NodeExtended, value: string | null): boolean => {
  if (!value || node.node_type !== 'User') {
    return true
  }

  const followers = node.properties?.followers

  if (followers === undefined) {
    return true
  }

  switch (value) {
    case 'lt_1000':
      return followers < 1000
    case '1000_10000':
      return followers >= 1000 && followers <= 10000
    case 'gt_10000':
      return followers > 10000
    default:
      return true
  }
}

// eslint-disable-next-line no-underscore-dangle
const _NodePoints = () => {
  const selectedNode = useSelectedNode()
  const dataInitial = useDataStore((s) => s.dataInitial)
  const nodesNormalized = useDataStore((s) => s.nodesNormalized)
  const { normalizedSchemasByType } = useSchemaStore((s) => s)
  const nodeTypes = useNodeTypes()

  // Create a rounded rectangle geometry
  const roundedRectGeometry = useMemo(() => {
    // Set your desired dimensions and corner radius
    const width = nodeSize
    const height = nodeSize
    const radius = 6

    // Create a shape and draw the rectangle
    const shape = new Shape()

    // Start at the bottom left, but offset to account for the left rounding.
    // This will be the end point of the bottom-left corner curve.
    shape.moveTo(-width / 2 + radius, -height / 2)

    // Bottom edge: Draw a straight line to the bottom-right corner (sharp corner)
    shape.lineTo(width / 2, -height / 2)

    // Right edge: Draw a straight line upward to the top-right corner (sharp corner)
    shape.lineTo(width / 2, height / 2)

    // Top edge: Draw a straight line from the top-right corner to a point near the top-left.
    // We stop at (-width/2 + radius, height/2) so that we can later round the top-left corner.
    shape.lineTo(-width / 2 + radius, height / 2)

    // Top-left corner: Round this corner with a quadratic curve.
    // The control point is at the actual corner (-width/2, height/2) and the curve ends
    // at (-width/2, height/2 - radius).
    shape.quadraticCurveTo(-width / 2, height / 2, -width / 2, height / 2 - radius)

    // Left edge: Draw a straight line downward to a point just above the bottom-left corner,
    // where the rounding should begin.
    shape.lineTo(-width / 2, -height / 2 + radius)

    // Bottom-left corner: Round this corner with a quadratic curve.
    // The control point is at (-width/2, -height/2) and the curve ends at our starting point.
    shape.quadraticCurveTo(-width / 2, -height / 2, -width / 2 + radius, -height / 2)

    // Create geometry from the shape
    return new ShapeGeometry(shape)
  }, [])

  const { getNodeKeysByType } = useSchemaStore((s) => s)

  return (
    <>
      <Instances
        geometry={roundedRectGeometry as BufferGeometry}
        limit={1000} // Optional: max amount of items (for calculating buffer size)
        range={1000}
        visible={!selectedNode || true}
      >
        <meshBasicMaterial />
        {dataInitial?.nodes.map((node: NodeExtended, index) => {
          const primaryColor = normalizedSchemasByType[node.node_type]?.primary_color
          const color = primaryColor ?? (COLORS_MAP[nodeTypes.indexOf(node.node_type)] || colors.white)

          const normalizedNode = nodesNormalized.get(node.ref_id)
          const scale = normalizedNode?.weight || normalizedNode?.properties?.weight || 1
          const scaleNormalized = Math.sqrt(scale)
          const scaleToFixed = Number(scaleNormalized.toFixed(1))

          const keyProperty = getNodeKeysByType(node.node_type) || ''

          const name = keyProperty && node?.properties ? node?.properties[keyProperty] || '' : ''

          if (!nodeMatchesFollowerFilter(node, useGraphStore.getState().followersFilter)) {
            return null
          }

          return (
            <Point
              key={node.ref_id}
              color={color}
              index={index}
              name={name}
              node={node}
              nodeType={node.node_type}
              scale={scaleToFixed}
            />
          )
        })}
      </Instances>
    </>
  )
}

export const NodePoints = memo(_NodePoints)
