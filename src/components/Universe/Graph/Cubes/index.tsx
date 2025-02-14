import { Select } from '@react-three/drei'
import { ThreeEvent } from '@react-three/fiber'
import { memo, useCallback, useRef } from 'react'
import { Group, Object3D } from 'three'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore, useNodeTypes } from '~/stores/useDataStore'
import { useGraphStore, useHoveredNode, useSelectedNode } from '~/stores/useGraphStore'
import { NodeExtended } from '~/types'
import { colors } from '~/utils'
import { useNodeNavigation } from '../../useNodeNavigation'
import { COLORS_MAP } from '../constant'
import { Candidates } from './Candidates'
import { NodePoints } from './NodePoints'
import { NodeWrapper } from './NodeWrapper'

const POINTER_IN_DELAY = 200

export const Cubes = memo(() => {
  const selectedNode = useSelectedNode()
  const hoveredNode = useHoveredNode()
  const nodesWrapperRef = useRef<Group | null>(null)
  const instancesRef = useRef<Group | null>(null)

  const { selectionGraphData, showSelectionGraph, setHoveredNode, setIsHovering, simulation } = useGraphStore((s) => s)
  const nodeTypes = useNodeTypes()

  const dataInitial = useDataStore((s) => s.dataInitial)
  const nodesNormalized = useDataStore((s) => s.nodesNormalized)

  const setTranscriptOpen = useAppStore((s) => s.setTranscriptOpen)

  const { navigateToNode } = useNodeNavigation()

  const ignoreNodeEvent = useCallback(
    (node: NodeExtended) => {
      if (showSelectionGraph && !selectionGraphData.nodes.find((n) => n.ref_id === node.ref_id)) {
        return false
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
            navigateToNode(node.userData.ref_id)
          }
        }
      }
    },
    [setTranscriptOpen, ignoreNodeEvent, navigateToNode],
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
        const node = nodesNormalized.get(object.userData.ref_id) as NodeExtended

        if (!ignoreNodeEvent(node)) {
          e.stopPropagation()

          hoverTimeoutRef.current = setTimeout(() => {
            setIsHovering(true)
            setHoveredNode(node)
          }, POINTER_IN_DELAY)
        }
      }
    },
    [setHoveredNode, ignoreNodeEvent, setIsHovering, nodesNormalized],
  )

  const hideUniverse = showSelectionGraph && !!selectedNode && false

  return (
    <>
      <Select
        filter={(selected) => selected.filter((f) => !!f.userData?.ref_id)}
        onChange={handleSelect}
        onPointerOut={onPointerOut}
        onPointerOver={onPointerIn}
      >
        <group ref={nodesWrapperRef} name="simulation-3d-group__nodes" visible={!hideUniverse}>
          {dataInitial?.nodes.map((node: NodeExtended, index) => {
            const color = COLORS_MAP[nodeTypes.indexOf(node.node_type)] || colors.white
            const simulationNode = simulation.nodes()[index]
            const isFixed = typeof simulationNode?.fx === 'number'
            const normalizedNode = nodesNormalized.get(node.ref_id)

            return normalizedNode ? (
              <NodeWrapper
                key={node.ref_id}
                color={color}
                isFixed={isFixed}
                node={normalizedNode}
                scale={node.scale || 1}
              />
            ) : null
          })}
        </group>

        <group ref={instancesRef} name="simulation-3d-group__node-points">
          <NodePoints />
        </group>
      </Select>
      <Candidates />
    </>
  )
})

Cubes.displayName = 'Cubes'
