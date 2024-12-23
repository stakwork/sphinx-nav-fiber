import { Select } from '@react-three/drei'
import { ThreeEvent } from '@react-three/fiber'
import { memo, useCallback, useRef } from 'react'
import { Object3D } from 'three'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore, useNodeTypes } from '~/stores/useDataStore'
import { useGraphStore, useHoveredNode, useSelectedNode } from '~/stores/useGraphStore'
import { NodeExtended } from '~/types'
import { colors } from '~/utils'
import { COLORS_MAP } from '../constant'
import { NodePoints } from './NodePoints'
import { NodeWrapper } from './NodeWrapper'

const POINTER_IN_DELAY = 200

export const Cubes = memo(() => {
  const selectedNode = useSelectedNode()
  const hoveredNode = useHoveredNode()

  const { selectionGraphData, showSelectionGraph, setHoveredNode, setIsHovering } = useGraphStore((s) => s)
  const nodeTypes = useNodeTypes()

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

  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const onPointerOut = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      e.stopPropagation()

      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
        hoverTimeoutRef.current = null
      }

      if (!hoveredNode) {
        return
      }

      setIsHovering(false)
      setHoveredNode(null)
    },
    [setIsHovering, setHoveredNode, hoveredNode],
  )

  const onPointerIn = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      const objects = e.intersections.map((i) => i.object)
      const object = objects[0]

      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
        hoverTimeoutRef.current = null
      }

      if (object?.userData?.ref_id) {
        const node = object.userData as NodeExtended

        if (!ignoreNodeEvent(node)) {
          e.stopPropagation()

          hoverTimeoutRef.current = setTimeout(() => {
            setIsHovering(true)
            setHoveredNode(node)
          }, POINTER_IN_DELAY)
        }
      }
    },
    [setHoveredNode, ignoreNodeEvent, setIsHovering],
  )

  const hideUniverse = showSelectionGraph && !!selectedNode

  return (
    <>
      <Select
        filter={(selected) => selected.filter((f) => !!f.userData?.ref_id)}
        onChange={handleSelect}
        onPointerOut={onPointerOut}
        onPointerOver={onPointerIn}
      >
        <group name="simulation-3d-group__nodes" visible={!hideUniverse}>
          {data?.nodes.map((node: NodeExtended, index: number) => {
            const color = COLORS_MAP[nodeTypes.indexOf(node.node_type)] || colors.white

            return (
              <NodeWrapper
                key={node.ref_id}
                color={color}
                index={index}
                node={node}
                scale={node.scale || 1}
                stopFrames={hideUniverse}
              />
            )
          })}
        </group>

        <group name="simulation-3d-group__node-points">
          <NodePoints />
        </group>
      </Select>
    </>
  )
})

Cubes.displayName = 'Cubes'
