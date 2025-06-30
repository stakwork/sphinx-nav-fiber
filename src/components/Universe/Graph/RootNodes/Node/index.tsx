/* eslint-disable @typescript-eslint/no-empty-function */
import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { Flex } from '~/components/common/Flex'
import { Common } from './Common'
import { User } from './User'

type NodeSphereProps = {
  /** World-space radius (must match the value used in forceCollide) */
  radius: number
  /** Display name */
  name: string
  imageUrl: string
  /** THREE position vector - *do not mutate* */
  /** Marks a fixed root node for styling or pointer logic */
  isRoot?: boolean
  nodeType: string
  /** Pointer callbacks (optional) */
  onPointerOver?: () => void
  onPointerOut?: () => void
  onClick?: () => void
}

export const NodeSphere = memo(
  ({
    radius,
    imageUrl,
    name,
    nodeType,
    isRoot = false,
    onPointerOver = () => {},
    onPointerOut = () => {},
    onClick = () => {},
  }: NodeSphereProps) => {
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
        visible={false}
      >
        {/* <meshBasicMaterial color="blue" /> */}
        {/* Centered HTML label */}
        <Html center>
          <Flex onClick={onClick} style={{ cursor: 'pointer' }}>
            {['User', 'Person'].includes(nodeType) ? (
              <User imageUrl={imageUrl} name={name} />
            ) : (
              <Common isRoot={isRoot} name={name} radius={isRoot ? radius / 3 : radius} />
            )}
          </Flex>
        </Html>
      </mesh>
    )
  },
)

NodeSphere.displayName = 'NodeSphere'
