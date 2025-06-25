/* eslint-disable no-param-reassign */
import { Line } from '@react-three/drei'
import { forceCollide, forceLink, forceManyBody, forceSimulation } from 'd3-force-3d'
import { useMemo, useState } from 'react'
import * as THREE from 'three'

/* Your domain-specific types */
import { Link, Node } from '~/types'
import { NodeSphere } from './Node'

interface Graph3DProps {
  nodes: Node[]
  edges: Link[]
}

/* --- Helper utilities --------------------------------------------------- */

/** Convert "hh:mm:ss" string → seconds (for predictable ascending sort) */
const timestampToSec = (stamp?: string) => {
  if (!stamp) {
    return 0
  }

  const [hh, mm, ss] = stamp.split(':').map(Number)

  return (hh || 0) * 3600 + (mm || 0) * 60 + (ss || 0)
}

const radius = 90

/** Bubble radius rule — keep in sync with visuals */
const nodeRadius = (n: Node) =>
  // eslint-disable-next-line no-nested-ternary
  n.ref_id.endsWith('-root') ? radius * 2 : radius

const padding = 10 // gap between touching spheres

/* ----------------------------------------------------------------------- */

export const RootNodes = ({ nodes, edges }: Graph3DProps) => {
  const [hovered, setHovered] = useState<Node | null>(null)

  console.log(hovered)

  const { positions } = useMemo(() => {
    /* Clone & sort nodes (immutable input) */
    const simNodes: Node[] = [...nodes]
      .sort((a, b) => timestampToSec(a.properties?.timestamp) - timestampToSec(b.properties?.timestamp))
      .map((n) => ({ ...n }))

    /* Build the simulation */
    const sim = forceSimulation(simNodes)
      .alphaDecay(0.05)

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
          .links(
            edges.map((e) => ({
              ...e,
              source: typeof e.source === 'string' ? e.source : (e.source as unknown as Node).ref_id,
              target: typeof e.target === 'string' ? e.target : (e.target as unknown as Node).ref_id,
            })),
          )
          .id((d: unknown) => (d as Node).ref_id)
          .distance((l: Link<Node>) => nodeRadius(l.source) + nodeRadius(l.target) + padding)
          .strength(1),
      )
      .stop()

    /* Run a few hundred ticks to settle the layout */
    for (let i = 0; i < 400; i += 1) {
      sim.tick()
    }

    /* Pack final positions into a Map for O(1) lookup */
    const pos = new Map(simNodes.map((n) => [n.ref_id, new THREE.Vector3(n.x!, n.y!, n.z!)]))

    return { positions: pos }
  }, [nodes, edges])

  console.log(edges)

  /* ----------------------- JSX ----------------------------------------- */
  return (
    <group>
      {/* Edges */}
      {edges.map((e, i) => {
        /* After simulation, source & target are the node objects */
        const s = positions.get((e.source as unknown as Node).ref_id)
        const t = positions.get((e.target as unknown as Node).ref_id)

        if (!s || !t) {
          return null
        }

        return (
          <Line
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            color={e.edge_type === 'chapter' ? '#888' : '#fff'}
            lineWidth={e.edge_type === 'chapter' ? 3.5 : 10}
            opacity={0.5}
            points={[s, t]}
            transparent
          />
        )
      })}

      {/* Nodes */}
      {nodes.map((n) => {
        const p = positions.get(n.ref_id)

        if (!p) {
          return null
        }

        return (
          <NodeSphere
            key={n.ref_id}
            isRoot={n.ref_id.endsWith('-root')}
            name={n.properties?.name ?? ''}
            onPointerOut={() => setHovered(null)}
            onPointerOver={() => setHovered(n)}
            position={p}
            radius={nodeRadius(n)}
          />
        )
      })}
    </group>
  )
}
