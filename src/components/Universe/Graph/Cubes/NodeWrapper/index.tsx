import { memo } from 'react'
import { NodeExtended } from '~/types'
import { TextNode } from '../Text/index'

type Props = {
  node: NodeExtended
  color: string
  scale: number
}

export const NodeWrapper = memo(
  (props: Props) => {
    const { node, color } = props

    return (
      <mesh key={node.ref_id} name="wr2" scale={node.scale || 1} userData={node}>
        <boxGeometry args={[40, 40, 40]} />
        <meshStandardMaterial opacity={0} transparent />
        <TextNode key={node.ref_id} color={color} ignoreDistance={false} node={node} scale={node.scale || 1} />
      </mesh>
    )
  },
  (prevProps, nextProps) => prevProps.node.ref_id === nextProps.node.ref_id,
)

NodeWrapper.displayName = 'NodeWrapper'
