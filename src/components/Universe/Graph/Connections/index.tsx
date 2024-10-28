import { memo } from 'react'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore, useSelectedNode } from '~/stores/useGraphStore'
import { Link } from '~/types'
import { LineComponent } from './LineComponent'

export const Connections = memo(() => {
  const data = useDataStore((s) => s.dataInitial)
  const { showSelectionGraph } = useGraphStore((s) => s)
  const selectedNode = useSelectedNode()

  console.log('connection')

  return (
    <group name="simulation-3d-group__connections">
      {data?.links.map((l: Link) => {
        const isSelected = selectedNode?.ref_id === l.source || selectedNode?.ref_id === l.target

        const lineWidth = selectedNode ? 0 : 1

        return (
          <LineComponent key={l.ref_id} isSelected={isSelected} lineWidth={lineWidth} visible={!showSelectionGraph} />
        )
      })}
    </group>
  )
})

Connections.displayName = 'Connections'
