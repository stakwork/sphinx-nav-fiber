import { Select } from '@react-three/drei'
import { ThreeEvent } from '@react-three/fiber'
import { memo, useCallback, useRef } from 'react'
import { Object3D } from 'three'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore, useSelectedNode, useSelectedNodeRelativeIds } from '~/stores/useGraphStore'
import { NodeExtended } from '~/types'
import { BlurryInstances } from './BlurryInstances'
import { Cube } from './Cube'
import { RelevanceBadges } from './RelevanceBadges'
import { SelectionDataNodes } from './SelectionDataNodes'
import { TextNode } from './Text'
import { useAiSummaryStore } from '~/stores/useAiSummaryStore'

const POINTER_IN_DELAY = 200

export const Cubes = memo(() => {
  const selectedNode = useSelectedNode()
  const relativeIds = useSelectedNodeRelativeIds()
  const { selectionGraphData, showSelectionGraph, setHoveredNode, setIsHovering } = useGraphStore((s) => s)
  const { resetAiSummaryAnswer, setNewLoading } = useAiSummaryStore()

  const [data, abortFetchData] = useDataStore((s) => [s.dataInitial, s.abortFetchData])
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

        setNewLoading(null)
        abortFetchData()
        resetAiSummaryAnswer()

        if (node.userData) {
          if (!ignoreNodeEvent(node.userData as NodeExtended)) {
            useGraphStore.getState().setSelectedNode((node?.userData as NodeExtended) || null)
          }
        }
      }
    },
    [setTranscriptOpen, setNewLoading, abortFetchData, resetAiSummaryAnswer, ignoreNodeEvent],
  )

  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const onPointerOut = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      e.stopPropagation()
      setIsHovering(false)

      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
        hoverTimeoutRef.current = null
      }

      setHoveredNode(null)
    },
    [setHoveredNode, setIsHovering],
  )

  const onPointerIn = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      const objects = e.intersections.map((i) => i.object)
      const object = objects[0]

      if (object?.userData?.ref_id) {
        const node = object.userData as NodeExtended

        if (!ignoreNodeEvent(node)) {
          e.stopPropagation()
          setIsHovering(true)

          hoverTimeoutRef.current = setTimeout(() => {
            setHoveredNode(node)
          }, POINTER_IN_DELAY)
        }
      }
    },
    [setHoveredNode, ignoreNodeEvent, setIsHovering],
  )

  const hideUniverse = showSelectionGraph && !!selectedNode

  return (
    <Select
      filter={(selected) => selected.filter((f) => !!f.userData?.ref_id)}
      onChange={handleSelect}
      onPointerOut={onPointerOut}
      onPointerOver={onPointerIn}
    >
      {false && <BlurryInstances hide={hideUniverse} />}
      <RelevanceBadges />
      <group name="simulation-3d-group__nodes">
        {data?.nodes.map((node: NodeExtended) => {
          const hide = !!selectedNode && (relativeIds.includes(node.ref_id) || selectedNode.ref_id === node.ref_id)

          return (
            <mesh key={node.ref_id}>
              {node.name ? (
                <TextNode key={node.ref_id || node.id} hide={hideUniverse || hide} node={node} />
              ) : (
                <Cube key={node.ref_id || node.id} hide={hideUniverse} node={node} />
              )}
            </mesh>
          )
        })}
      </group>

      {hideUniverse && <SelectionDataNodes />}
    </Select>
  )
})

Cubes.displayName = 'Cubes'
