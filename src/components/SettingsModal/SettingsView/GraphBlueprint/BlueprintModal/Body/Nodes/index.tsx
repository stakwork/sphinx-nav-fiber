import { SchemaExtended } from '../../types'
import { Node } from './Node'

type Props = {
  nodes: SchemaExtended[]
}

export const Nodes = ({ nodes }: Props) => (
  <>
    {nodes.map((schema) => (
      <Node
        key={schema.ref_id}
        node={{ x: schema.x, y: schema.y, z: schema.z, id: schema.ref_id || '', type: schema.type || '' }}
      />
    ))}
  </>
)
