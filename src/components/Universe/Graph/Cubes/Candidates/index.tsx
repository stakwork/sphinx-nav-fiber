import { memo, useRef, useState } from 'react'
import { useGraphStore } from '~/stores/useGraphStore'
import { useSimulationStore } from '~/stores/useSimulationStore'
import { NodeExtended } from '~/types'
import { CandidateWrapper } from './CandidateWrapper'

export const Candidates = memo(() => {
  const { activeNode } = useGraphStore((s) => s)
  const simulation = useSimulationStore((s) => s.simulation)
  const candidateIds = useRef<string[]>([''])
  const [updater, setUpdater] = useState(0)

  const center = { x: activeNode?.fx || 0, y: activeNode?.fy || 0, z: activeNode?.fz || 0 } // Center position
  const radius = 200 // Radius of the circle

  const handleRemoveNode = (refId: string) => {
    candidateIds.current = candidateIds.current.filter((i) => i !== refId)
    setUpdater(updater + 1)
  }

  return (
    <>
      {simulation
        .nodes()
        .slice(-5)
        .filter((node: NodeExtended) => node.fx === undefined || candidateIds.current.some((id) => id === node.ref_id))
        .map((node: NodeExtended, index: number, arr: NodeExtended[]) => {
          const theta = 0
          const x = node.fx || center.x + Math.cos(theta) * radius
          const y = node.fy || center.y + Math.sin(theta) * radius
          const z = node.fz || center.z

          if (!candidateIds.current.includes(node.ref_id)) {
            candidateIds.current.push(node.ref_id)
          }

          return (
            <CandidateWrapper
              key={node.ref_id}
              isFixed={typeof node.fx === 'number'}
              isLast={index === arr.length - 1}
              iX={center.x}
              iY={center.y}
              iZ={center.z}
              node={node}
              onRemove={handleRemoveNode}
              x={x}
              y={y}
              z={z}
            />
          )
        })}
    </>
  )
})

Candidates.displayName = 'Candidates'
