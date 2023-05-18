import { Select } from '@react-three/drei'
import { memo, useCallback } from 'react'
import { Object3D } from 'three'
import { useGraphData } from '~/components/DataRetriever'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'
import { BlurryInstances } from './BlurryInstances'
import { Cube } from './Cube'
import { Highlights } from './Highlights'
import { RelevanceBadges } from './RelevanceBadges'
import { TextNode } from './Text'
import { onPointerIn, onPointerOut } from './constants'

export const Cubes = memo(() => {
  const data = useGraphData()
  const nearbyNodeIds = useDataStore((s) => s.nearbyNodeIds)
  const setTranscriptOpen = useAppStore((s) => s.setTranscriptOpen)

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

  // const bigTopics = useMemo(()=>{

  // },[data])

  return (
    <Select
      filter={(selected) => selected.filter((f) => !!f.userData?.id)}
      onPointerOver={onPointerIn}
      onPointerOut={onPointerOut}
      onChange={handleSelect}
    >
      <BlurryInstances />
      {data.nodes
        .filter((f) => nearbyNodeIds.includes(f.ref_id || ''))
        .map((node) => {
          if (node.node_type === 'topic') {
            return <TextNode key={node.ref_id || node.id} node={node} />
          } else {
            return <Cube key={node.ref_id || node.id} node={node} />
          }
        })}

      <Highlights />
      <RelevanceBadges />
    </Select>
  )
})
