import { Select } from '@react-three/drei'
import { memo, useCallback } from 'react'
import { Object3D } from 'three'
import { useGraphData } from '~/components/DataRetriever'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'
import { Cube } from './Cube'
import { RelevanceBadges } from './RelevanceBadges'
import { getHighlighter } from './constants'

export const Cubes = memo(() => {
  const data = useGraphData()
  const selectedNode = useSelectedNode()
  const setTranscriptOpen = useAppStore((s) => s.setTranscriptOpen)
  const searchTerm = useAppStore((s) => s.currentSearch)

  const handleSelect = useCallback(
    (nodes: Object3D[]) => {
      const node = nodes?.[0]

      if (node) {
        // always close transcript when switching nodes
        setTranscriptOpen(false)

        if (node.userData) {
          useDataStore.getState().setSelectedNode((node?.userData as NodeExtended) || null)
        }
      }
    },
    [setTranscriptOpen],
  )

  return (
    <Select filter={(selected) => selected.filter((f) => !!f.userData?.id)} onChange={handleSelect}>
      {data.nodes.map((node) => {
        const { highlight, highlightColor } = getHighlighter({ node, selectedNode, searchTerm })

        return <Cube key={node.ref_id} highlight={highlight} highlightColor={highlightColor} node={node} />
      })}
      <RelevanceBadges />
    </Select>
  )
})

Cubes.displayName = 'Cubes'
