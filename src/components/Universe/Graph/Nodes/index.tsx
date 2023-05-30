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
import { SelectionDataNodes } from './SelectionDataNodes'
import { TextNode } from './Text'
import { isMainTopic } from './constants'

export const Nodes = memo(() => {
  const data = useGraphData()
  const selectedNode = useSelectedNode()
  const nearbyNodeIds = useDataStore((s) => s.nearbyNodeIds)
  const setHoveredNode = useDataStore((s) => s.setHoveredNode)
  const showSelectionGraph = useDataStore((s) => s.showSelectionGraph)
  const selectionGraphData = useDataStore((s) => s.selectionGraphData)
  const setTranscriptOpen = useAppStore((s) => s.setTranscriptOpen)

  const handleSelect = useCallback(
    (nodes: Object3D[]) => {
      const node = nodes?.[0]

      if (node) {
        // always close transcript when switching nodes
        setTranscriptOpen(false)

        if (node.userData) {
          if (!ignoreNodeEvent(node.userData as NodeExtended)) {
            useDataStore.getState().setSelectedNode((node?.userData as NodeExtended) || null)
          }
        }
      }
    },
    [setTranscriptOpen, showSelectionGraph, selectionGraphData],
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
      const objects = e.intersections.map((i) => i.object)
      const object = objects[0]

      if (object?.userData?.ref_id) {
        const node = object.userData as NodeExtended

        if (!ignoreNodeEvent(node)) {
          e.stopPropagation()
          setHoveredNode(node)
        }
      }
    },
    [setHoveredNode],
  )

  const ignoreNodeEvent = useCallback(
    (node: NodeExtended) => {
      if (showSelectionGraph && !selectionGraphData.nodes.find((n) => n.ref_id === node.ref_id)) {
        return true
      }
      return false
    },
    [showSelectionGraph, selectionGraphData],
  )

  const hideUniverse = showSelectionGraph && !!selectedNode

  return (
    <Select
      filter={(selected) => selected.filter((f) => !!f.userData?.id)}
      onChange={handleSelect}
      onPointerOut={onPointerOut}
      onPointerOver={onPointerIn}
    >
      <BlurryInstances hide={hideUniverse} />

      {data.nodes
        .filter((f) => {
          const isNearbyOrPersistent = nearbyNodeIds.includes(f.ref_id || '') || isMainTopic(f)

          return isNearbyOrPersistent
        })
        .map((node) => {
          if (node.node_type === 'topic') {
            return <TextNode hide={hideUniverse} key={node.ref_id || node.id} node={node} />
          }

          return <Cube hide={hideUniverse} key={node.ref_id || node.id} node={node} />
        })}

      {hideUniverse ? <SelectionDataNodes /> : <Highlights />}

      <RelevanceBadges />
    </Select>
  )
})
