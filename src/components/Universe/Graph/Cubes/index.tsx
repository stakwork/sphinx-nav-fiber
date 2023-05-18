import { Select } from '@react-three/drei'
import { ThreeEvent } from '@react-three/fiber'
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
import { isMainTopic } from './constants'

export const Cubes = memo(() => {
  const data = useGraphData()
  const nearbyNodeIds = useDataStore((s) => s.nearbyNodeIds)
  const setHoveredNode = useDataStore((s) => s.setHoveredNode)
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

  const onPointerOut = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      e.stopPropagation()
      setHoveredNode(null)
    },
    [setHoveredNode],
  )

  const onPointerIn = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      e.stopPropagation()

      const objects = e.intersections.map((i) => i.object)
      const object = objects[0]

      if (object?.userData?.ref_id) {
        const node = object.userData as NodeExtended

        setHoveredNode(node)
      }
    },
    [setHoveredNode],
  )

  return (
    <Select
      filter={(selected) => selected.filter((f) => !!f.userData?.id)}
      onChange={handleSelect}
      onPointerOut={onPointerOut}
      onPointerOver={onPointerIn}
    >
      <BlurryInstances />
      {data.nodes.map((node) => {
        if (node.node_type === 'topic') {
          return (
            <TextNode
              key={node.ref_id || node.id}
              node={node}
              visible={nearbyNodeIds.includes(node.ref_id || '') || isMainTopic(node)}
            />
          )
        }

        if (nearbyNodeIds.includes(node.ref_id || '')) {
          return <Cube key={node.ref_id || node.id} node={node} visible />
        }

        return null
      })}

      <Highlights />
      <RelevanceBadges />
    </Select>
  )
})

Cubes.displayName = 'Cubes'
