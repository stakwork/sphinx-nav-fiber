import { Select } from '@react-three/drei'
import { ThreeEvent, useFrame } from '@react-three/fiber'
import { memo, useCallback, useRef } from 'react'
import { Group, Mesh, MeshStandardMaterial, Object3D } from 'three'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore, useHoveredNode, useSelectedNode } from '~/stores/useGraphStore'
import { useSimulationStore } from '~/stores/useSimulationStore'
import { NodeExtended } from '~/types'
import { useNodeNavigation } from '../../useNodeNavigation'
import { Candidates } from './Candidates'
import { NodePoints } from './NodePoints'
import { NodeWrapper } from './NodeWrapper'
import { nodeBackground } from './constants'
import { nodesMatchesDateRangeFilter } from './utils/nodesMatchesDateRangeFilter '
import { nodeMatchesFollowerFilter } from './utils/nodesMatchsFollowesFilter'

const POINTER_IN_DELAY = 100

export const Cubes = memo(() => {
  const selectedNode = useSelectedNode()
  const hoveredNode = useHoveredNode()
  const nodesWrapperRef = useRef<Group | null>(null)
  const instancesRef = useRef<Group | null>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const frameIndex = useRef(0)
  const chunkSize = 50

  const downPosition = useRef<{ x: number; y: number } | null>(null)
  const upPosition = useRef<{ x: number; y: number } | null>(null)

  const { selectionGraphData, showSelectionGraph, setHoveredNode, setIsHovering } = useGraphStore((s) => s)
  const simulation = useSimulationStore((s) => s.simulation)
  const dataInitial = useDataStore((s) => s.dataInitial)
  const nodesNormalized = useDataStore((s) => s.nodesNormalized)
  const setTranscriptOpen = useAppStore((s) => s.setTranscriptOpen)

  const { navigateToNode } = useNodeNavigation()

  const group = nodesWrapperRef.current
  const instances = instancesRef.current

  const scaleUp = 1.1
  const scaleDefault = 1
  const scaleDown = 0.1

  useFrame(({ camera }) => {
    const nodes = dataInitial?.nodes

    //    const primaryColor = normalizedSchemasByType[node.node_type]?.primary_color

    if (!instances || !group || !nodes || nodes.length === 0) {
      return
    }

    const { searchQuery, selectedLinkTypes, selectedNodeTypes, hoveredNodeSiblings, followersFilter, dateRangeFilter } =
      useGraphStore.getState()

    const dynamicMode =
      searchQuery ||
      selectedLinkTypes.length > 0 ||
      selectedNodeTypes.length > 0 ||
      hoveredNode ||
      selectedNode ||
      followersFilter ||
      dateRangeFilter

    const selectedNodeNormalized = selectedNode ? nodesNormalized.get(selectedNode.ref_id) : null

    const selectedSiblings = selectedNodeNormalized
      ? [...(selectedNodeNormalized?.targets || []), ...(selectedNodeNormalized.sources || [])]
      : []

    const start = frameIndex.current * chunkSize
    const end = Math.min(start + chunkSize, nodes.length)
    const points = instances.children[0].children
    const objects = group.children

    for (let i = start; i < end; i += 1) {
      const object = objects[i] as Mesh & { userData: NodeExtended }
      const background = object.getObjectByName('background') as Mesh | null
      const node = object.userData
      const point = points[i]

      if (dynamicMode) {
        const isHovered = hoveredNode?.ref_id === node.ref_id
        const isSelected = selectedNode?.ref_id === node.ref_id
        const isHoveredSibling = hoveredNodeSiblings.includes(node.ref_id)
        const isSelectedSibling = selectedSiblings.includes(node.ref_id)
        const isFollowersMatch = nodeMatchesFollowerFilter(node, followersFilter)
        const isDateRangeMatch = nodesMatchesDateRangeFilter(node, dateRangeFilter)

        const highlight =
          isHovered || isSelected || isHoveredSibling || isSelectedSibling || isFollowersMatch || isDateRangeMatch

        const name = node.name?.toLowerCase() || ''
        const searchMatch = searchQuery && name.includes(searchQuery.toLowerCase())
        const typeMatch = selectedNodeTypes.includes(node.node_type)
        const linkMatch = node.edgeTypes?.some((t) => selectedLinkTypes.includes(t))

        const shouldBeVisible = highlight || searchMatch || typeMatch || linkMatch

        if (shouldBeVisible) {
          object.visible = true
          object.scale.setScalar(highlight ? 1.1 : 1)

          if (background) {
            background.visible = true

            const material = background.material as MeshStandardMaterial

            material.color.set(highlight ? node.primary_color || nodeBackground : nodeBackground)
          }

          if (point) {
            point.scale.set(scaleUp, scaleUp, scaleUp)
          }
        } else {
          object.visible = false

          if (background) {
            background.visible = false
          }

          if (point) {
            point.scale.set(scaleDown, scaleDown, scaleDown)
          }
        }
      } else {
        const distance = object.position.distanceTo(camera.position)
        const visible = distance < 1500

        object.visible = visible

        if (background) {
          background.visible = visible
        }

        if (point) {
          point.scale.set(scaleDefault, scaleDefault, scaleDefault)
        }

        if (object) {
          object.scale.setScalar(scaleDefault)
        }
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
          return
        }
      }

      const node = nodes[0]

      if (node?.userData && !ignoreNodeEvent(node.userData as NodeExtended)) {
        setTranscriptOpen(false)
        navigateToNode(node.userData.ref_id)
      }
    },
    [setTranscriptOpen, ignoreNodeEvent, navigateToNode],
  )

  const onPointerOut = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      e.stopPropagation()

      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
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
      const object = e.intersections[0]?.object

      if (!object?.visible || !object.userData?.ref_id) {
        return
      }

      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }

      const node = nodesNormalized.get(object.userData.ref_id)

      if (!node || ignoreNodeEvent(node)) {
        return
      }

      e.stopPropagation()

      hoverTimeoutRef.current = setTimeout(() => {
        setIsHovering(true)
        setHoveredNode(node)
      }, POINTER_IN_DELAY)
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
