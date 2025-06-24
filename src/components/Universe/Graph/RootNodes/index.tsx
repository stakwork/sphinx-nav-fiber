import { OrthographicCamera } from '@react-three/drei'
import { useMemo } from 'react'
import * as THREE from 'three'
import { Link, Node } from '~/types'

interface Graph2DProps {
  nodes: Node[]
  edges: Link[]
}

export const RootNodes = ({ nodes, edges }: Graph2DProps) => {
  const nodePositions = useMemo(() => {
    const spacing = 5

    return new Map(nodes.map((node, i) => [node.ref_id, new THREE.Vector3(i * spacing, 0, 0)]))
  }, [nodes])

  return (
    <>
      <OrthographicCamera makeDefault position={[0, 0, 100]} zoom={20} />
      <ambientLight intensity={1} />

      {/* Nodes */}
      {nodes.map((node) => {
        const position = nodePositions.get(node.ref_id)!

        return (
          <mesh key={node.ref_id} position={position}>
            <circleGeometry args={[0.3, 32]} />
            <meshBasicMaterial color="skyblue" />
          </mesh>
        )
      })}

      {/* Edges */}
      {edges.map((edge) => {
        const start = nodePositions.get(edge.source)
        const end = nodePositions.get(edge.target)

        if (!start || !end) {
          return null
        }

        const geometry = new THREE.BufferGeometry().setFromPoints([start, end])
        const material = new THREE.LineBasicMaterial({ color: 'black' })
        const line = new THREE.Line(geometry, material)

        return <primitive key={edge.ref_id} object={line} />
      })}
    </>
  )
}
