import { Instances } from '@react-three/drei'
import { memo, useMemo } from 'react'
import { BufferGeometry, CircleGeometry } from 'three'
import { useDataStore, useNodeTypes } from '~/stores/useDataStore'
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

  // Create a rounded rectangle geometry
  const roundedRectGeometry = useMemo(
    () => new CircleGeometry(nodeSize / 2, 64), // 64 segments = smooth circle
    [],
  )

  return (
    <>
      <Instances
        geometry={roundedRectGeometry as BufferGeometry}
        limit={1000} // Optional: max amount of items (for calculating buffer size)
        range={1000}
        visible={!selectedNode || true}
      >
        <meshBasicMaterial />
        {dataInitial?.nodes.map((node: NodeExtended) => {
          const secondaryColor = normalizedSchemasByType[node.node_type]?.secondary_color
          const color = secondaryColor ?? (COLORS_MAP[nodeTypes.indexOf(node.node_type)] || colors.white)

          return <Point key={node.ref_id} color={color} node={node} />
        })}
      </Instances>
    </>
  )
}

export const NodePoints = memo(_NodePoints)
