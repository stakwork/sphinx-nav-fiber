/* eslint-disable no-param-reassign */
import { Line, ScreenSpace } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { forceCenter, forceCollide, forceLink, forceManyBody, forceSimulation } from 'd3-force-3d'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

import { useGraphStore } from '~/stores/useGraphStore'
import { useRootNodesStore } from '~/stores/useRootNodesStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { Link, Node } from '~/types'
import { useNodeNavigation } from '../../useNodeNavigation'
import { NodeSphere } from './Node'
import { SelectionList } from './SelectionList'

export const radius = 90

const padding = 10

const nodeRadius = (n: Node) => (n.ref_id.endsWith('-root') ? radius * 2 : radius)

export const RootNodes = () => {
  const rootStoreData = useRootNodesStore((s) => s.rootStoreData)
  const activeView = useRootNodesStore((s) => s.activeView)
  const setActiveView = useRootNodesStore((s) => s.setActiveView)
  const { nodes, links: edges } = rootStoreData || { nodes: [], links: [] }

  const setHoveredNode = useGraphStore((s) => s.setHoveredNode)

  const { navigateToNode } = useNodeNavigation()

  const [selectedGroup, setSelectedGroup] = useState<Node | null>(null)
  const [connectedNodeIds, setConnectedNodeIds] = useState<Set<string>>(new Set())

  const { size: viewPortSize } = useThree()

  const positionsRef = useRef<Map<string, THREE.Vector3>>(new Map())
  const simulationRef = useRef<d3.Simulation<Node, Link> | null>(null)
  const nodesGroupRef = useRef<THREE.Group>(null!)

  const { getNodeKeysByType } = useSchemaStore((s) => s)

  const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(max, val))

  // Initialize simulation
  useEffect(() => {
    const simNodes: Node[] = nodes.map((n) => ({ ...n }))

    const simEdges: Link[] = edges.map((e) => ({
      ...e,
      source: typeof e.source === 'string' ? e.source : (e.source as Node).ref_id,
      target: typeof e.target === 'string' ? e.target : (e.target as Node).ref_id,
    }))

    const sim = forceSimulation(simNodes)
      .stop()
      .alphaTarget(0.05)
      .force('center', forceCenter(0, 0).strength(1))
      .force('charge', forceManyBody().strength(-10))
      .force(
        'collision',
        forceCollide()
          .radius((n: Node) => nodeRadius(n) + padding)
          .strength(1),
      )
      .force(
        'link',
        forceLink()
          .links(simEdges)
          .id((d: Node) => d.ref_id)
          .distance((l: Link<Node>) => nodeRadius(l.source) + nodeRadius(l.target) + padding)
          .strength(1),
      )
      .alpha(1)
      .restart()

    simulationRef.current = sim
  }, [nodes, edges])

  // Regular simulation update (only when no node is selected)
  useFrame(({ size }) => {
    const sim = simulationRef.current

    if (!sim || activeView === 'list') {
      return // Don't update positions when a node is selected
    }

    sim.nodes().forEach((node, index) => {
      node.x = clamp(node.x!, -size.width + radius, size.width - radius)
      node.y = clamp(node.y!, -size.height + radius, size.height - radius)

      const pos = new THREE.Vector3(node.x!, node.y!, node.z!)

      positionsRef.current.set(node.ref_id, pos)

      if (nodesGroupRef.current.children[index]) {
        nodesGroupRef.current.children[index].position.set(pos.x, pos.y, pos.z)
      }
    })
  })

  const handleNodeClick = (node: Node) => {
    if (!simulationRef.current) {
      return
    }

    setActiveView('list')

    if (node?.node_type.endsWith('-root')) {
      setSelectedGroup(node)

      return
    }

    navigateToNode(node.ref_id)
  }

  const resetLayout = () => {
    if (!simulationRef.current || !selectedGroup) {
      return
    }

    const sim = simulationRef.current

    // Clear selected state
    setSelectedGroup(null)
    setConnectedNodeIds(new Set())

    // Restart simulation
    sim.alpha(1).restart()
  }

  return (
    <ScreenSpace depth={1000}>
      {activeView === 'list' && (
        <group
          position={[-viewPortSize.width + 100, viewPortSize.height - 100, 0]}
          // rotation={[0, THREE.MathUtils.degToRad(90), 0]}
        >
          <SelectionList handleNodeClick={handleNodeClick} onClose={resetLayout} selectedGroup={selectedGroup} />
        </group>
      )}
      {activeView === 'graph' && (
        <group>
          <mesh>
            <planeGeometry args={[viewPortSize.width * 2, viewPortSize.height * 2, 100]} />
            <meshStandardMaterial color="black" opacity={0.7} transparent />
          </mesh>
          <group>
            {edges.map((e) => {
              const sourceId = e.source
              const targetId = e.target

              const shouldRender =
                !selectedGroup || selectedGroup.ref_id === sourceId || selectedGroup.ref_id === targetId

              if (!shouldRender) {
                return null
              }

              const s = positionsRef.current.get(sourceId)
              const t = positionsRef.current.get(targetId)

              if (!s || !t) {
                return null
              }

              return (
                <Line
                  key={`${sourceId}-${targetId}`}
                  color={e.edge_type === 'chapter' ? '#888' : '#fff'}
                  lineWidth={1}
                  opacity={0.5}
                  points={[s, t]}
                  transparent
                  visible={false}
                />
              )
            })}
          </group>

          <group ref={nodesGroupRef}>
            {nodes.map((n) => {
              const isVisible = !selectedGroup || n.ref_id === selectedGroup.ref_id || connectedNodeIds.has(n.ref_id)

              if (!isVisible) {
                return null
              }

              const keyProperty = getNodeKeysByType(n.node_type) || ''
              const imageUrl = n?.properties?.image_url || ''
              const name = keyProperty && n?.properties ? String(n?.properties[keyProperty] || '') : n.name || ''
              const truncatedName = name.length > 100 ? `${name.slice(0, 100)}...` : name

              const p = positionsRef.current.get(n.ref_id)

              if (!p) {
                return null
              }

              return (
                <mesh key={n.ref_id} position={p}>
                  <NodeSphere
                    imageUrl={imageUrl}
                    isRoot={n.ref_id.endsWith('-root')}
                    name={truncatedName}
                    nodeType={n.node_type}
                    onClick={() => handleNodeClick(n)}
                    onPointerOut={() => setHoveredNode(null)}
                    onPointerOver={() => !n.ref_id.endsWith('-root') && setHoveredNode(n)}
                    radius={nodeRadius(n)}
                  />
                </mesh>
              )
            })}
          </group>
        </group>
      )}
    </ScreenSpace>
  )
}
