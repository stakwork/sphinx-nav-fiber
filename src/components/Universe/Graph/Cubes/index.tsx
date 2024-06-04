import { Select } from '@react-three/drei'
import { ThreeEvent } from '@react-three/fiber'
import { memo, useCallback } from 'react'
import { Object3D } from 'three'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore, useSelectedNode } from '~/stores/useGraphStoreLatest'
import { NodeExtended } from '~/types'
import { BlurryInstances } from './BlurryInstances'
import { Cube } from './Cube'
import { RelevanceBadges } from './RelevanceBadges'
import { SelectionDataNodes } from './SelectionDataNodes'
import { TextNode } from './Text'
import { isMainTopic } from './constants'

export const Cubes = memo(() => {
  const selectedNode = useSelectedNode()
  const nearbyNodeIds = useGraphStore((s) => s.nearbyNodeIds)
  const setHoveredNode = useGraphStore((s) => s.setHoveredNode)
  const showSelectionGraph = useGraphStore((s) => s.showSelectionGraph)
  const selectionGraphData = useGraphStore((s) => s.selectionGraphData)
  // const data = useGraphStore((s) => s.data)
  const data = useDataStore((s) => s.dataInitial)
  const setTranscriptOpen = useAppStore((s) => s.setTranscriptOpen)

  const ignoreNodeEvent = useCallback(
    (node: NodeExtended) => {
      if (showSelectionGraph && !selectionGraphData.nodes.find((n) => n.ref_id === node.ref_id)) {
        return true
      }

      return false
    },
    [showSelectionGraph, selectionGraphData],
  )

  const handleSelect = useCallback(
    (nodes: Object3D[]) => {
      const node = nodes?.[0]

      if (node) {
        // always close transcript when switching nodes
        setTranscriptOpen(false)

        if (node.userData) {
          if (!ignoreNodeEvent(node.userData as NodeExtended)) {
            useGraphStore.getState().setSelectedNode((node?.userData as NodeExtended) || null)
          }
        }
      }
    },
    [setTranscriptOpen, ignoreNodeEvent],
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
    [setHoveredNode, ignoreNodeEvent],
  )

  const hideUniverse = showSelectionGraph && !!selectedNode

  return (
    <Select
      filter={(selected) => selected.filter((f) => !!f.userData?.ref_id)}
      onChange={handleSelect}
      onPointerOut={onPointerOut}
      onPointerOver={onPointerIn}
    >
      <BlurryInstances hide={hideUniverse} />
      <RelevanceBadges />
      <group name="simulation-3d-group">
        {data?.nodes
          .filter((f: NodeExtended) => {
            const isSelected = f?.ref_id === selectedNode?.ref_id
            const isNearbyOrPersistent = nearbyNodeIds.includes(f.ref_id || '') || isMainTopic(f)

            return true || isNearbyOrPersistent || isSelected
          })
          .map((node: NodeExtended) => (
            <mesh key={node.ref_id}>
              {node.node_type ? (
                <TextNode key={node.ref_id || node.id} hide={hideUniverse} node={node} />
              ) : (
                <Cube key={node.ref_id || node.id} hide={hideUniverse} node={node} />
              )}
            </mesh>
          ))}
      </group>

      {hideUniverse && <SelectionDataNodes />}
    </Select>
  )
})

Cubes.displayName = 'Cubes'
