import { SchemaExtended } from '../../../types'
import { Node } from './Node'

type Props = {
  nodes: SchemaExtended[]
  setSelectedSchemaId: (id: string) => void
  selectedId: string
}

export const Nodes = ({ nodes, setSelectedSchemaId, selectedId }: Props) => (
  <>
    {nodes.map((schema) => (
      <Node
        key={schema.ref_id}
        isSelected={schema.ref_id === selectedId}
        node={{ x: schema.x, y: schema.y, z: schema.z, id: schema.ref_id || '', type: schema.type || '' }}
        setSelectedNode={() => schema.ref_id && setSelectedSchemaId(schema.ref_id)}
      />
    ))}
  </>
)
