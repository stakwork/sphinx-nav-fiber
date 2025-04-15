import { Select } from '@react-three/drei'
import { ThreeEvent, useFrame } from '@react-three/fiber'
import { memo, useCallback, useRef } from 'react'
import { Group, Object3D } from 'three'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore, useHoveredNode, useSelectedNode } from '~/stores/useGraphStore'
import { useSimulationStore } from '~/stores/useSimulationStore'
import { NodeExtended } from '~/types'
import { useNodeNavigation } from '../../useNodeNavigation'
import { Candidates } from './Candidates'
import { NodePoints } from './NodePoints'
import { NodeWrapper } from './NodeWrapper'

const POINTER_IN_DELAY = 100

export const Cubes = memo(() => {
  const selectedNode = useSelectedNode()
  const hoveredNode = useHoveredNode()
  const nodesWrapperRef = useRef<Group | null>(null)
  const instancesRef = useRef<Group | null>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const frameIndex = useRef(0)
  const chunkSize = 3

  const downPosition = useRef<{ x: number; y: number } | null>(null)
  const upPosition = useRef<{ x: number; y: number } | null>(null)

  const { selectionGraphData, showSelectionGraph, setHoveredNode, setIsHovering } = useGraphStore((s) => s)
  const simulation = useSimulationStore((s) => s.simulation)
  const dataInitial = useDataStore((s) => s.dataInitial)
  const nodesNormalized = useDataStore((s) => s.nodesNormalized)
  const setTranscriptOpen = useAppStore((s) => s.setTranscriptOpen)

  const { navigateToNode } = useNodeNavigation()

  const gr = nodesWrapperRef.current

  useFrame(({ camera }) => {
    const nodes = dataInitial?.nodes

    if (!gr || !nodes || nodes.length === 0) {
      return
    }

    const start = frameIndex.current * chunkSize
    const end = Math.min(start + chunkSize, nodes.length)

    for (let i = start; i < end; i += 1) {
      if (gr.children[i].position.distanceTo(camera.position) < 1500) {
        gr.children[i].visible = true
      } else {
        gr.children[i].visible = false
      }
    }

    frameIndex.current = (frameIndex.current + 1) % Math.ceil(nodes.length / chunkSize)
  })

  const ignoreNodeEvent = useCallback(
    (node: NodeExtended) => {
      if (showSelectionGraph && !selectionGraphData.nodes.find((n) => n.ref_id === node.ref_id)) {
        return false
      }

      return false
    },
    [showSelectionGraph, selectionGraphData],
  )

  const handlePointerDown = useCallback((e: ThreeEvent<PointerEvent>) => {
    downPosition.current = { x: e.clientX, y: e.clientY }
  }, [])

  const handlePointerUp = useCallback((e: ThreeEvent<PointerEvent>) => {
    upPosition.current = { x: e.clientX, y: e.clientY }
  }, [])

  const handleSelect = useCallback(
    (nodes: Object3D[]) => {
      if (!nodes.length) {
        return
      }

      if (downPosition.current && upPosition.current) {
        const dx = upPosition.current.x - downPosition.current.x
        const dy = upPosition.current.y - downPosition.current.y
        const distance = Math.hypot(dx, dy)

        if (distance > 5) {
          // Drag happened, not a click
          return
        }
      }

      const node = nodes?.[0]

      if (node) {
        setTranscriptOpen(false)

        if (node.userData && !ignoreNodeEvent(node.userData as NodeExtended)) {
          navigateToNode(node.userData.ref_id)
        }
      }
    },
    [setTranscriptOpen, ignoreNodeEvent, navigateToNode],
  )

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

      hoverTimeoutRef.current = setTimeout(() => {
        setIsHovering(false)
        setHoveredNode(null)
      }, POINTER_IN_DELAY)
    },
    [setIsHovering, setHoveredNode, hoveredNode],
  )

  const onPointerIn = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      const objects = e.intersections.map((i) => i.object)
      const object = objects[0]

      if (!object.visible) {
        return
      }

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
        onPointerDown={handlePointerDown}
        onPointerOut={onPointerOut}
        onPointerOver={onPointerIn}
        onPointerUp={handlePointerUp}
      >
        <group ref={nodesWrapperRef} name="simulation-3d-group__nodes" visible={!hideUniverse}>
          {dataInitial?.nodes.map((node: NodeExtended, index) => {
            const simulationNode = simulation.nodes()[index]
            const isFixed = true || typeof simulationNode?.fx === 'number'
            const normalizedNode = nodesNormalized.get(node.ref_id)
            const scale = normalizedNode?.weight || normalizedNode?.properties?.weight || 1
            const scaleNormalized = Math.sqrt(scale)
            const scaleToFixed = Number(scaleNormalized.toFixed(1))

            return normalizedNode ? (
              <NodeWrapper key={node.ref_id} isFixed={isFixed} node={normalizedNode} scale={scaleToFixed} />
            ) : null
          })}
        </group>

        <group ref={instancesRef} name="simulation-3d-group__node-points">
          <NodePoints />
        </group>
      </Select>
      {false && <Candidates />}
    </>
  )
})

Cubes.displayName = 'Cubes'
