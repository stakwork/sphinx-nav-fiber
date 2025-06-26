/* eslint-disable no-param-reassign */
import { Line, ScreenSpace } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { forceCenter, forceCollide, forceLink, forceManyBody, forceSimulation } from 'd3-force-3d'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

import { useRootNodesStore } from '~/stores/useRootNodesStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { Link, Node } from '~/types'
import { NodeSphere } from './Node'

export const radius = 90

const padding = 10

const nodeRadius = (n: Node) => (n.ref_id.endsWith('-root') ? radius * 2 : radius)

export const RootNodes = () => {
  const rootStoreData = useRootNodesStore((s) => s.rootStoreData)

  const { nodes, links: edges } = rootStoreData || { nodes: [], links: [] }
  const [hovered, setHovered] = useState<Node | null>(null)
  const positionsRef = useRef<Map<string, THREE.Vector3>>(new Map())
  const simulationRef = useRef<d3.Simulation<Node, Link> | null>(null)
  const movingToCenterRef = useRef<string | null>(null)
  const previousFixedRef = useRef<string | null>(null)
  const nodesGroupRef = useRef<THREE.Group>(null!)

  const { getNodeKeysByType } = useSchemaStore((s) => s)

  console.log(hovered)

  useEffect(() => {
    const simNodes: Node[] = [...nodes].map((n) => ({ ...n }))

    const simEdges: Link[] = edges.map((e) => ({
      ...e,
      source: typeof e.source === 'string' ? e.source : (e.source as Node).ref_id,
      target: typeof e.target === 'string' ? e.target : (e.target as Node).ref_id,
    }))

    const sim = forceSimulation(simNodes)
      .stop()
      .alphaTarget(0.05) // keep simulation active
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

  const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(max, val))

  useFrame(({ size }) => {
    const sim = simulationRef.current

    if (!sim) {
      return
    }

    // sim.tick()

    sim.nodes().forEach((node, index) => {
      // console.log(node.x, node.y)

      node.x = clamp(node.x!, -size.width + radius, size.width - radius)
      node.y = clamp(node.y!, -size.height + radius, size.height - radius)

      const id = node.ref_id
      const pos = new THREE.Vector3(node.x!, node.y!, node.z!)

      if (nodesGroupRef.current.children[index]) {
        nodesGroupRef.current.children[index].position.set(pos.x, pos.y, pos.z)
      }

      if (id === movingToCenterRef.current) {
        const target = new THREE.Vector3(0, 0, 0)

        pos.lerp(target, 0.5) // Lower = smoother

        // Update simulation node position
        node.x = pos.x
        node.y = pos.y
        node.z = pos.z

        // Stop when close
        if (pos.length() < 1) {
          node.fx = 0
          node.fy = 0
          node.fz = 0
          movingToCenterRef.current = null
        }
      }

      positionsRef.current.set(id, pos)
    })
  })

  const handleNodeClick = (node: Node) => {
    if (!node.ref_id.endsWith('-root') || !simulationRef.current) {
      return
    }

    const sim = simulationRef.current

    // Unfix previously fixed node
    if (previousFixedRef.current) {
      const prevNode = sim.nodes().find((n) => n.ref_id === previousFixedRef.current)

      if (prevNode) {
        // @ts-expect-error: fx, fy, fz are not defined in the Node type
        prevNode.fx = null
        // @ts-expect-error: fx, fy, fz are not defined in the Node type
        prevNode.fy = null
        // @ts-expect-error: fx, fy, fz are not defined in the Node type
        prevNode.fz = null
      }
    }

    // Set the new one to move
    movingToCenterRef.current = node.ref_id
    previousFixedRef.current = node.ref_id

    // sim.alpha(1).restart()
  }

  return (
    <ScreenSpace depth={1000}>
      <group>
        <mesh position={[-800, -800, 0]}>
          <boxGeometry args={[100, 100, 100]} />
          <meshBasicMaterial color="red" />
        </mesh>
        <group>
          {edges.map((e) => {
            const s = positionsRef.current.get((e.source as unknown as Node).ref_id)
            const t = positionsRef.current.get((e.target as unknown as Node).ref_id)

            if (!s || !t) {
              return null
            }

            return (
              <Line
                key={`${e.source}-${e.target}`}
                color={e.edge_type === 'chapter' ? '#888' : '#fff'}
                lineWidth={e.edge_type === 'chapter' ? 3.5 : 10}
                opacity={0.5}
                points={[s, t]}
                transparent
              />
            )
          })}
        </group>
        <group ref={nodesGroupRef}>
          {nodes.map((n) => {
            const keyProperty = getNodeKeysByType(n.node_type) || ''
            const imageUrl = n?.properties?.image_url || ''
            const name = keyProperty && n?.properties ? String(n?.properties[keyProperty] || '') : n.name || ''
            const truncatedName = name.length > 100 ? `${name.slice(0, 100)}...` : name

            console.log(name, truncatedName)

            const p = positionsRef.current.get(n.ref_id)

            if (!p) {
              return null
            }

            return (
              <mesh key={n.ref_id}>
                <NodeSphere
                  imageUrl={imageUrl}
                  isRoot={n.ref_id.endsWith('-root')}
                  name={truncatedName}
                  nodeType={n.node_type}
                  onClick={() => handleNodeClick(n)}
                  onPointerOut={() => setHovered(null)}
                  onPointerOver={() => setHovered(n)}
                  radius={nodeRadius(n)}
                />
              </mesh>
            )
          })}
        </group>
      </group>
    </ScreenSpace>
  )
}
