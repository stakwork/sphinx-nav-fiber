import { Instances } from '@react-three/drei'
import { memo } from 'react'
import { useDataStore, useNodeTypes } from '~/stores/useDataStore'
import { useSelectedNode, useSelectedNodeRelativeIds } from '~/stores/useGraphStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { NodeExtended } from '~/types'
import { colors } from '~/utils'
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
  const relativeIds = useSelectedNodeRelativeIds()
  const data = useDataStore((s) => s.dataInitial)
  const { normalizedSchemasByType } = useSchemaStore((s) => s)
  const nodeTypes = useNodeTypes()

  return (
    <>
      <Instances
        limit={1000} // Optional: max amount of items (for calculating buffer size)
        range={1000} // Optional: draw-range
      >
        <boxGeometry />
        <meshStandardMaterial />
        {data?.nodes.map((node: NodeExtended) => {
          const hide = !!selectedNode && (relativeIds.includes(node.ref_id) || selectedNode.ref_id === node.ref_id)

          console.log(hide)

          const primaryColor = normalizedSchemasByType[node.node_type]?.primary_color
          const color = primaryColor ?? (COLORS_MAP[nodeTypes.indexOf(node.node_type)] || colors.white)

          return <Point key={node.ref_id} color={color} />
        })}
      </Instances>
    </>
  )
}

export const NodePoints = memo(_NodePoints)
