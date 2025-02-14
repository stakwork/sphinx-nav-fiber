import { memo } from 'react'
import { NodeExtended } from '~/types'
import { TextNode } from '../Text/index'

type Props = {
  node: NodeExtended
  color: string
  scale: number
  isFixed: boolean
}

export const NodeWrapper = memo(
  (props: Props) => {
    const { node, color, isFixed } = props

    return (
      <mesh key={node.ref_id} name="wr2" scale={node.scale || 1} userData={node}>
        <mesh name="text-node-wrapper" visible={isFixed}>
          <TextNode key={node.ref_id} color={color} ignoreDistance={false} node={node} scale={node.scale || 1} />
        </mesh>
      </mesh>
    )
  },
  (prevProps, nextProps) => prevProps.isFixed === nextProps.isFixed,
)

NodeWrapper.displayName = 'NodeWrapper'
