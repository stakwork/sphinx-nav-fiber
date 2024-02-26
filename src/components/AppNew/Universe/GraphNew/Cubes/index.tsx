import { Select } from '@react-three/drei'
import { ThreeEvent } from '@react-three/fiber'
import { memo, useCallback } from 'react'
import { Object3D } from 'three'
import { NodeExtendedNew } from '~/network/fetchGraphDataNew/types'
import { useGraphStore } from '~/stores/useGraphStore'
import { BlurryInstances } from './BlurryInstances'
import { Cube } from './Cube'
import { RelevanceBadges } from './RelevanceBadges'
import { SelectionDataNodes } from './SelectionDataNodes'
import { TextNode } from './Text'

export const Cubes = memo(() => {
  const [data, selectedNode, setHoveredNode, showSelectionGraph, selectionGraphData, setSelectedNode] = useGraphStore(
    (s) => [s.data, s.selectedNode, s.setHoveredNode, s.showSelectionGraph, s.selectionGraphData, s.setSelectedNode],
  )

  // const nearbyNodeIds = useDataStore((s) => s.nearbyNodeIds)

  const ignoreNodeEvent = useCallback(
    (node: NodeExtendedNew) => {
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

      console.log(node)

      if (node) {
        // always close transcript when switching nodes

        if (node.userData) {
          if (!ignoreNodeEvent(node.userData as NodeExtendedNew)) {
            setSelectedNode((node?.userData as NodeExtendedNew) || null)
          }
        }
      }
    },
    [ignoreNodeEvent, setSelectedNode],
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
        const node = object.userData as NodeExtendedNew

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
      {data?.nodes
        // .filter((f) => {
        //   const isSelected = f?.ref_id === selectedNode?.ref_id
        //   const isNearbyOrPersistent = nearbyNodeIds.includes(f.ref_id || '') || isMainTopic(f)

        //   return isNearbyOrPersistent || isSelected
        // })
        .map((node) => {
          if (node.node_type === 'Topic') {
            return <TextNode key={node.ref_id} hide={hideUniverse} node={node} />
          }

          return <Cube key={node.ref_id} hide={hideUniverse} node={node} />
        })}

      {hideUniverse && <SelectionDataNodes />}
    </Select>
  )
})

Cubes.displayName = 'Cubes'
