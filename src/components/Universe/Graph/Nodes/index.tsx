import { Select } from '@react-three/drei'
import { ThreeEvent } from '@react-three/fiber'
import { memo, useCallback } from 'react'
import { Object3D } from 'three'
import { useGraphData } from '~/components/DataRetriever'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'
import { BlurryInstances } from './BlurryInstances'
import { Cube } from './Cube'
import { Highlights } from './Highlights'
import { RelevanceBadges } from './RelevanceBadges'
import { SelectionDataGraph } from './SelectionDataGraph'
import { TextNode } from './Text'
import { isMainTopic } from './constants'

export const Nodes = memo(() => {
  const data = useGraphData()
  const selectedNode = useSelectedNode()
  const nearbyNodeIds = useDataStore((s) => s.nearbyNodeIds)
  const setHoveredNode = useDataStore((s) => s.setHoveredNode)
  const showSelectionGraph = useDataStore((s) => s.showSelectionGraph)
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

  const compact = !!selectedNode && showSelectionGraph

  return (
    <>
      <Select
        filter={(selected) => selected.filter((f) => !!f.userData?.id)}
        onChange={handleSelect}
        onPointerOut={onPointerOut}
        onPointerOver={onPointerIn}
      >
        <BlurryInstances hide={compact} />

        {data.nodes
          .filter((f) => {
            const isNearbyOrPersistent = nearbyNodeIds.includes(f.ref_id || '') || isMainTopic(f)

            return isNearbyOrPersistent
          })
          .map((node) => {
            if (node.node_type === 'topic') {
              return <TextNode hide={compact} key={node.ref_id || node.id} node={node} />
            }

            return <Cube hide={compact} key={node.ref_id || node.id} node={node} />
          })}

        {!compact && <Highlights />}

        <RelevanceBadges />
      </Select>

      {compact && (
        <Select
          filter={(selected) => selected.filter((f) => !!f.userData?.id)}
          onChange={handleSelect}
          onPointerOut={onPointerOut}
          onPointerOver={onPointerIn}
        >
          <SelectionDataGraph />
        </Select>
      )}
    </>
  )
})

Nodes.displayName = 'Nodes'
