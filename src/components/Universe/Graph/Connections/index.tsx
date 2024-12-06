import { memo } from 'react'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore, useSelectedNode } from '~/stores/useGraphStore'
import { Link } from '~/types'
import { LinkPosition } from '..'
import { LineComponent } from './LineComponent'

type Props = {
  linksPosition: Map<string, LinkPosition>
}

export const Connections = memo(({ linksPosition }: Props) => {
  const data = useDataStore((s) => s.dataInitial)
  const { showSelectionGraph } = useGraphStore((s) => s)
  const selectedNode = useSelectedNode()

  return (
    <group name="simulation-3d-group__connections" visible={!showSelectionGraph || true}>
      {data?.links.map((l: Link) => {
        const isSelected = selectedNode?.ref_id === l.source || selectedNode?.ref_id === l.target // Adjust to match link with its position

        const position = linksPosition.get(l.ref_id) || {
          sx: 0,
          sy: 0,
          sz: 0,
          tx: 0,
          ty: 0,
          tz: 0,
        }

        return <LineComponent key={l.ref_id} isSelected={isSelected} position={position} />
      })}
    </group>
  )
})

Connections.displayName = 'Connections'
