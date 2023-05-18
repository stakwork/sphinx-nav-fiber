import { Instance, Instances } from '@react-three/drei'
import { useMemo } from 'react'
import { useGraphData } from '~/components/DataRetriever'
import { useDataStore } from '~/stores/useDataStore'
import { boxGeometry, isMainTopic } from '../constants'
import { blurryMaterial } from './constants'

export const BlurryInstances = () => {
  const data = useGraphData()
  const nearbyNodeIds = useDataStore((s) => s.nearbyNodeIds)

  const instances = useMemo(
    () =>
      data.nodes.map((node) => {
        const visible = !nearbyNodeIds.includes(node.ref_id || '') && !isMainTopic(node)

        return (
          <Instance
            key={node.id}
            name={node.id}
            position={[node.x, node.y, node.z]}
            scale={visible ? (node.scale || 1) * 0.9 : 0}
            userData={node}
            visible={visible}
            color={node.node_type === 'guest' ? 'orange' : 'lightgray'}
          />
        )
      }),
    [nearbyNodeIds, data.nodes],
  )

  return (
    <Instances geometry={boxGeometry} material={blurryMaterial}>
      {instances}
    </Instances>
  )
}
