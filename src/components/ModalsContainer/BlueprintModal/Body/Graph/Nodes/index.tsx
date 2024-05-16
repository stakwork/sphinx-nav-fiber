import { useFrame } from '@react-three/fiber'
import { useEffect } from 'react'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { ForceSimulation } from '~/transformers/forceSimulation'
import { SchemaExtended } from '../../../types'
import { Node } from './Node'

type Props = {
  setSelectedSchemaId: (id: string) => void
  selectedId: string
  simulation: ForceSimulation
}

export const Nodes = ({ simulation, setSelectedSchemaId, selectedId }: Props) => {
  const [schemaAll] = useSchemaStore((s) => [s.schemas])

  useEffect(() => {
    console.log('sim use effect')
  }, [simulation])

  const onSimulationUpdate = () => {
    if (simulation) {
      simulation.alpha(0.05)
      simulation.restart()
    }
  }

  const onSimulationStop = () => {
    if (simulation) {
      simulation.stop()
    }
  }

  console.log(onSimulationStop)

  useFrame(() => {
    if (simulation) {
      // simulation.tick()
      // setUpdate(!update)
    }
  })

  return (
    <>
      {schemaAll.map((schema: SchemaExtended, index: number) => {
        const node = simulation.nodes()[index]

        return node ? (
          <Node
            key={node.ref_id}
            isSelected={node.ref_id === selectedId}
            node={node}
            onSimulationUpdate={onSimulationUpdate}
            setSelectedNode={() => setSelectedSchemaId(node.ref_id)}
          />
        ) : null
      })}
    </>
  )
}
