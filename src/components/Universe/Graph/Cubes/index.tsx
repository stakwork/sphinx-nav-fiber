import { Select } from '@react-three/drei'
import { memo, useCallback } from 'react'

import { Object3D } from 'three'
import { useGraphData } from '~/components/DataRetriever'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'
import { RelevanceBadges } from './RelevanceBadges'

import { Cube } from './Cube'

export const Cubes = memo(() => {
  const data = useGraphData()

  const setTranscriptOpen = useAppStore((s) => s.setTranscriptOpen)

  const handleSelect = useCallback(
    (nodes: Object3D[]) => {
      console.log(nodes)
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
    <Select onChange={handleSelect} filter={(selected) => selected.filter((f) => !!f.userData?.id)}>
      {data.nodes.map((node) => (
        <Cube key={node.ref_id} node={node} />
      ))}
      <RelevanceBadges />
    </Select>
  )
})

Cubes.displayName = 'Cubes'
