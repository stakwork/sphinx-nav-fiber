import { useFrame } from '@react-three/fiber'
import React, { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { colorsArray, particleCount, radiusLimit } from './constants'

export const Particles: React.FC = () => {
  const ref = useRef<THREE.Points>(null)

  useFrame(() => {
    const positions = (ref.current?.geometry.getAttribute('position') as THREE.BufferAttribute).array as Float32Array
    const velocities = (ref.current?.geometry.getAttribute('velocity') as THREE.BufferAttribute).array as Float32Array

    if (positions && velocities) {
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i]
        const y = positions[i + 1]
        const z = positions[i + 2]

        const vx = velocities[i]
        const vy = velocities[i + 1]
        const vz = velocities[i + 2]

        positions[i] += vx
        positions[i + 1] += vy
        positions[i + 2] += vz

        const radius = Math.sqrt(x * x + y * y + z * z)
        const radiusSquared = radius * radius

        if (radiusSquared > radiusLimit * radiusLimit) {
          const theta = Math.random() * Math.PI * 2
          const phi = Math.random() * Math.PI * 2
          const newRadius = Math.random() * radiusLimit

          positions[i] = Math.sin(theta) * Math.cos(phi) * newRadius
          positions[i + 1] = Math.sin(theta) * Math.sin(phi) * newRadius
          positions[i + 2] = Math.cos(theta) * newRadius
        }
      }

      ;(ref.current?.geometry.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true
    }
  })

  const positions = useMemo(() => new Float32Array(particleCount * 3), [])
  const velocities = useMemo(() => new Float32Array(particleCount * 3), [])

  useEffect(() => {
    const radius = radiusLimit // Adjust the radius of the sphere here

    for (let i = 0; i < particleCount; i += 1) {
      const index = i * 3

      const latitude = Math.acos(1 - (i / particleCount) * 2) // Distribute particles evenly on the sphere
      const longitude = (Math.PI * 2 * i) / particleCount // Distribute particles uniformly

      positions[index] = Math.sin(latitude) * Math.cos(longitude) * radius
      positions[index + 1] = Math.sin(latitude) * Math.sin(longitude) * radius
      positions[index + 2] = Math.cos(latitude) * radius

      velocities[index] = Math.random() - 0.5
      velocities[index + 1] = Math.random() - 0.5
      velocities[index + 2] = Math.random() - 0.5
    }
  }, [positions, velocities])

  const geometry = useRef<THREE.BufferGeometry>(null)

  useEffect(() => {
    if (geometry.current && ref.current) {
      geometry.current.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.current.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3))
      ref.current.geometry = geometry.current
    }
  }, [positions, velocities])

  useEffect(() => {
    if (geometry.current) {
      const colors = []

      for (let i = 0; i < particleCount; i += 1) {
        const index = Math.floor(Math.random() * colorsArray.length)
        const colorHex = colorsArray[index]
        const color = new THREE.Color(colorHex)

        color.multiplyScalar(2)

        colors.push(color.r, color.g, color.b)
      }

      geometry.current.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colors), 3))
    }
  }, [])

  return (
    <points ref={ref} frustumCulled={false}>
      <bufferGeometry ref={geometry} />
      <pointsMaterial opacity={0.8} size={4} transparent vertexColors />
    </points>
  )
}
