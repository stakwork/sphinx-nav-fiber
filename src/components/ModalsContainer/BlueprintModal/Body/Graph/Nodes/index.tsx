import { useSchemaStore } from '~/stores/useSchemaStore'
import { ForceSimulation } from '~/transformers/forceSimulation'
import { SchemaExtended } from '../../../types'
import { Node } from './Node'

type Props = {
  setSelectedSchemaId: (id: string) => void
  selectedId: string
  simulation: ForceSimulation
  setIsAddEdgeNode: (b: boolean) => void
}

export const Nodes = ({ simulation, setSelectedSchemaId, selectedId, setIsAddEdgeNode }: Props) => {
  const [schemaAll] = useSchemaStore((s) => [s.schemas])

  const onSimulationUpdate = () => {
    if (simulation) {
      simulation.alpha(0.05)
      simulation.restart()
    }
  }

  // `schemaAll` ordering can change when schemas are edited/added.
  // Avoid index-based lookup into simulation nodes to prevent mismatches that can break dragging.
  const simNodes = simulation.nodes() as unknown as SchemaExtended[]
  const nodesById = new Map(simNodes.filter((n) => Boolean(n.ref_id)).map((n) => [n.ref_id as string, n] as const))

  return (
    <>
      {schemaAll.map((schema: SchemaExtended) => {
        if (!schema.ref_id) {
          return null
        }

        const node = nodesById.get(schema.ref_id)

        return node?.ref_id ? (
          <Node
            key={node.ref_id}
            isSelected={node.ref_id === selectedId}
            node={node}
            onSimulationUpdate={onSimulationUpdate}
            setSelectedNode={() => {
              setIsAddEdgeNode(false)
              setSelectedSchemaId(node.ref_id as string)
            }}
          />
        ) : null
      })}
    </>
  )
}
