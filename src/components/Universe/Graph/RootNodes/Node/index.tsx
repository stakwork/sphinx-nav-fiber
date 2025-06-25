/* eslint-disable @typescript-eslint/no-empty-function */
import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

type NodeSphereProps = {
  /** World-space radius (must match the value used in forceCollide) */
  radius: number
  /** Display name */
  name: string
  /** THREE position vector - *do not mutate* */
  position: THREE.Vector3
  /** Marks a fixed root node for styling or pointer logic */
  isRoot?: boolean
  /** Pointer callbacks (optional) */
  onPointerOver?: () => void
  onPointerOut?: () => void
}

export const NodeSphere = memo(
  ({ radius, name, position, isRoot = false, onPointerOver = () => {}, onPointerOut = () => {} }: NodeSphereProps) => {
    const meshRef = useRef<THREE.Mesh>(null!)
    const [hovered, setHovered] = useState(false)

    /* Re-use geometry per-radius to avoid recreating on every render */
    const geometry = useMemo(() => new THREE.SphereGeometry(radius, 24, 24), [radius])

    useFrame(() => {
      if (!meshRef.current) {
        return
      }

      const target = hovered ? 1.3 : 1

      // Smoothly interpolate scale towards target
      meshRef.current.scale.lerp(new THREE.Vector3(target, target, target), 0.1)
    })

    return (
      <mesh
        ref={meshRef}
        geometry={geometry}
        onPointerOut={() => {
          setHovered(false)
          onPointerOut()
        }}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHovered(true)
          onPointerOver()
        }}
        position={position}
      >
        <meshStandardMaterial />
        {/* Centered HTML label */}
        <Html
          center
          style={{
            pointerEvents: 'none',
            fontSize: isRoot ? '12px' : '8px',
            fontWeight: isRoot ? 600 : 400,
            borderRadius: isRoot ? '50%' : '10px',
            border: !isRoot ? '1px solid #fff' : '2px solid #3da9ff',
            width: isRoot ? `${radius * 0.5}px` : `${radius * 0.8}px`,
            height: isRoot ? `${radius * 0.5}px` : `${radius * 0.8}px`,
            textAlign: 'center',
            color: '#eaeaea',
            backgroundColor: isRoot ? 'transparent' : 'rgba(53, 58, 70, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {name}
        </Html>
      </mesh>
    )
  },
)

NodeSphere.displayName = 'NodeSphere'
