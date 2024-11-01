import { Instances } from '@react-three/drei'
import { memo, useMemo } from 'react'
import { BufferGeometry, TorusGeometry } from 'three'
import { useDataStore, useNodeTypes } from '~/stores/useDataStore'
import { useSelectedNode } from '~/stores/useGraphStore'
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
  const data = useDataStore((s) => s.dataInitial)
  const { normalizedSchemasByType } = useSchemaStore((s) => s)
  const nodeTypes = useNodeTypes()
  const ringGeometry = useMemo(() => new TorusGeometry(30, 2, 16, 100), [])

  return (
    <>
      <Instances
        geometry={ringGeometry as BufferGeometry}
        limit={1000} // Optional: max amount of items (for calculating buffer size)
        range={1000}
        visible={!selectedNode}
      >
        <meshBasicMaterial />
        {data?.nodes.map((node: NodeExtended) => {
          const primaryColor = normalizedSchemasByType[node.node_type]?.primary_color
          const color = primaryColor ?? (COLORS_MAP[nodeTypes.indexOf(node.node_type)] || colors.white)

          return <Point key={node.ref_id} color={color} scale={node.scale || 1} />
        })}
      </Instances>
    </>
  )
}

export const NodePoints = memo(_NodePoints)
