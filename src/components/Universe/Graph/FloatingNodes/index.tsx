import { useRef } from 'react'
import { Group } from 'three'
import { useSimulationStore } from '~/stores/useSimulationStore'
import { NodeExtended } from '~/types'
import { HtmlNode } from './HtmlNode'

export const FloatingNodes = () => {
  const simulation = useSimulationStore((s) => s.simulation)

  const groupRef = useRef<Group>(null!)

  return (
    <group ref={groupRef}>
      {simulation
        .nodes()
        .slice(-5)
        .map((node: NodeExtended) => (
          <HtmlNode key={node.ref_id} node={node} />
        ))}
    </group>
  )
}
