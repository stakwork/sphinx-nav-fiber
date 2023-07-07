import { Instance, Instances } from '@react-three/drei'
import { useMemo } from 'react'
import { BoxGeometry } from 'three'
import { useGraphData } from '~/components/DataRetriever'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { getNodeColorByType, isMainTopic } from '../constants'
import { blurryMaterial } from './constants'

type InstanceProps = {
  hide?: boolean
}

const instanceGeometry = new BoxGeometry(10, 10, 10)

export const BlurryInstances = ({ hide }: InstanceProps) => {
  const data = useGraphData()
  const nearbyNodeIds = useDataStore((s) => s.nearbyNodeIds)
  const selectedNode = useSelectedNode()

  const instances = useMemo(
    () =>
      data.nodes.map((node, i) => {
        const isSelectedNode = node?.ref_id === selectedNode?.ref_id
        const visible = !nearbyNodeIds.includes(node.ref_id || '') && !isMainTopic(node) && !isSelectedNode
        const color = getNodeColorByType(node.node_type || '', true) as string

        return (
          <Instance
            // eslint-disable-next-line react/no-array-index-key
            key={`${node.ref_id || node.id}-instanced-node-${i}`}
            color={color}
            name={node.id}
            position={[node.x, node.y, node.z]}
            scale={visible ? (node.scale || 1) * 0.8 : 0}
            userData={node}
            visible={visible}
          />
        )
      }),
    [nearbyNodeIds, data.nodes, selectedNode],
  )


  return (
    <Instances geometry={instanceGeometry} material={blurryMaterial} visible={!hide}>
      {instances}
    </Instances>
  )
}
