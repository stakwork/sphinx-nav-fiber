import { Segments } from '@react-three/drei'
import { memo } from 'react'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore } from '~/stores/useGraphStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { useSimulationStore } from '~/stores/useSimulationStore'
import { Link } from '~/types'
import { LinkPosition } from '..'
import { LineComponent } from './LineComponent'
import { LineInstance } from './LineInstance.tsx'

type Props = {
  linksPosition: Map<string, LinkPosition>
}

export const Connections = memo(({ linksPosition }: Props) => {
  const [dataInitial, nodesNormalized] = useDataStore((s) => [s.dataInitial, s.nodesNormalized])

  const [showSelectionGraph, searchQuery, selectedNodeTypes, highlightNodes, hoveredNode, selectedNode] = useGraphStore(
    (s) => [s.showSelectionGraph, s.searchQuery, s.selectedNodeTypes, s.highlightNodes, s.hoveredNode, s.selectedNode],
  )

  const simulationInProgress = useSimulationStore((s) => s.simulationInProgress)

  const normalizedSchemasByType = useSchemaStore((s) => s.normalizedSchemasByType)

  return (
    <>
      <group name="simulation-3d-group__connections" visible={!showSelectionGraph || true}>
        {dataInitial?.links?.length ? (
          <>
            {dataInitial?.links.map((l: Link) => {
              const position = linksPosition.get(l.ref_id) || {
                sx: 0,
                sy: 0,
                sz: 0,
                tx: 0,
                ty: 0,
                tz: 0,
              }

              return (
                <LineComponent
                  key={l.ref_id}
                  label={l.edge_type}
                  source={l.source}
                  sourceX={position.sx}
                  sourceY={position.sy}
                  sourceZ={position.sz}
                  target={l.target}
                  targetX={position.tx}
                  targetY={position.ty}
                  targetZ={position.tz}
                />
              )
            })}
          </>
        ) : null}
      </group>
      <group
        key={dataInitial?.links.length}
        visible={
          !simulationInProgress &&
          !searchQuery &&
          !selectedNodeTypes.length &&
          !highlightNodes.length &&
          !hoveredNode &&
          !selectedNode
        }
      >
        <Segments limit={1000} lineWidth={0.2}>
          {dataInitial?.links.map((l: Link) => {
            const position = linksPosition.get(l.ref_id) || {
              sx: 0,
              sy: 0,
              sz: 0,
              tx: 0,
              ty: 0,
              tz: 0,
            }

            const sourceNode = nodesNormalized.get(l.source) || ''

            const color = sourceNode ? normalizedSchemasByType[sourceNode.node_type]?.primary_color : 'white'

            const linkColor = 'rgba(97, 138, 255, 1)' || '#494C5A' || color || 'white'

            return (
              <LineInstance
                key={l.ref_id}
                color={linkColor}
                sourceX={position.sx}
                sourceY={position.sy}
                sourceZ={position.sz}
                targetX={position.tx}
                targetY={position.ty}
                targetZ={position.tz}
              />
            )
          })}
        </Segments>
      </group>
    </>
  )
})

Connections.displayName = 'Connections'
