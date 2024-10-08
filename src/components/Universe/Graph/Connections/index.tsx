import { memo, useRef } from 'react'
import { Vector3 } from 'three'
import { Line2 } from 'three-stdlib'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore, useSelectedNode } from '~/stores/useGraphStore'
import { Link } from '~/types'
import { LinkPosition } from '..'
import LineComponent from './LineComponent'

type Props = {
  linksPositions: LinkPosition[]
}

export const Connections = memo(({ linksPositions }: Props) => {
  const data = useDataStore((s) => s.dataInitial)
  const { showSelectionGraph } = useGraphStore((s) => s)
  const selectedNode = useSelectedNode()

  const lineRefs = useRef<Line2[]>([])

  return (
    <group name="simulation-3d-group__connections">
      {data?.links.map((l: Link, index) => {
        const source = new Vector3(
          linksPositions[index]?.sx || 0,
          linksPositions[index]?.sy || 0,
          linksPositions[index]?.sz || 0,
        )

        const target = new Vector3(
          linksPositions[index]?.tx || 0,
          linksPositions[index]?.ty || 0,
          linksPositions[index]?.tz || 0,
        )

        const isSelected = selectedNode?.ref_id === l.source || selectedNode?.ref_id === l.target

        const lineWidth = selectedNode ? 0 : 0.5

        return (
          <LineComponent
            key={l.ref_id}
            ref={(el) => {
              lineRefs.current[index] = el as Line2
            }}
            isSelected={isSelected}
            lineWidth={lineWidth}
            source={source}
            target={target}
            visible={!showSelectionGraph}
          />
        )
      })}
    </group>
  )
})

Connections.displayName = 'Connections'
