import { memo } from 'react'
import { useGraphStore } from '~/stores/useGraphStore'
import { Link } from '~/types'
import { LinkPosition } from '../../..'
import { Connection } from './Connection'

type Props = {
  linksPosition: Map<string, LinkPosition>
}

export const Connections = memo(({ linksPosition }: Props) => {
  const { selectionGraphData } = useGraphStore((s) => s)

  return (
    <group name="simulation-3d-group__connections">
      {selectionGraphData?.links.map((l: Link) => {
        const position = linksPosition.get(l.ref_id) || {
          sx: 0,
          sy: 0,
          sz: 0,
          tx: 0,
          ty: 0,
          tz: 0,
        }

        return (
          <Connection
            key={l.ref_id}
            label={l.edge_type}
            sourceX={position.sx}
            sourceY={position.sy}
            sourceZ={position.sz}
            targetX={position.tx}
            targetY={position.ty}
            targetZ={position.tz}
          />
        )
      })}
    </group>
  )
})

Connections.displayName = 'Connections'
