import { Instance, Instances } from '@react-three/drei'
import { useMemo } from 'react'
import { useGraphData } from '~/components/DataRetriever'
import { getNodeColorByType } from '~/components/Universe/Graph/constant'
import { useGraphStore } from '~/stores/useGraphStore'
import { NodeExtended } from '~/types'
import { boxGeometry, isMainTopic } from '../constants'
import { blurryMaterial } from './constants'

type InstanceProps = {
  hide?: boolean
}

export const BlurryInstances = ({ hide }: InstanceProps) => {
  const data = useGraphData()

  const graphStyle = useGraphStore((s) => s.graphStyle)

  const instances = useMemo(
    () =>
      data?.nodes.map((node: NodeExtended, i: number) => {
        if (node.node_type === 'Topic') {
          return true
        }

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [graphStyle, data],
  )

  return (
    <Instances geometry={boxGeometry} material={blurryMaterial} visible={!hide}>
      {instances}
    </Instances>
  )
}
