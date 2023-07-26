import { Instance, Instances } from '@react-three/drei'
import { useMemo } from 'react'
import { useGraphData } from '~/components/DataRetriever'
import { getNodeColorByType } from '~/components/Universe/Graph/constant'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { boxGeometry, isMainTopic } from '../constants'
import { blurryMaterial, maxInstances } from './constants'

type InstanceProps = {
  hide?: boolean
}

export const BlurryInstances = ({ hide }: InstanceProps) => {
  const data = useGraphData()
  const selectedNode = useSelectedNode()

  const graphStyle = useDataStore((s) => s.graphStyle)

  const nearbyNodeIds = useDataStore((s) => s.nearbyNodeIds)

  const instances = useMemo(
    () =>
      data.nodes
        .filter((f) => {
          const isNotSelected = f.ref_id !== selectedNode?.ref_id
          const isNearbyOrPersistent = nearbyNodeIds.includes(f.ref_id || '')

          return isNotSelected && !isNearbyOrPersistent
        })
        .map((node, i) => {
          const visible = !isMainTopic(node)
          const color = getNodeColorByType(node.node_type || '', true) as string

          return (
            <Instance
              // eslint-disable-next-line react/no-array-index-key
              key={`${node.ref_id || node.id}-instanced-node-${i}-${graphStyle}`}
              color={color}
              name={node.id}
              position={[node.x, node.y, node.z]}
              scale={visible ? (node.scale || 1) * 0.9 : 0}
              userData={node}
            />
          )
        }),
    [data.nodes, graphStyle, nearbyNodeIds, selectedNode],
  )

  return (
    <Instances geometry={boxGeometry} limit={maxInstances} material={blurryMaterial} visible={!hide}>
      {instances}
    </Instances>
  )
}
