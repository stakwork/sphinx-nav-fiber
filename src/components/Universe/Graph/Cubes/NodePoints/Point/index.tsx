import { Billboard, Instance } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

type Props = {
  color: string
  scale: number
  shouldPulsate?: boolean
}

export const Point = ({ color, scale, shouldPulsate }: Props) => {
  const instanceRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (instanceRef.current && shouldPulsate) {
      // Pulsate between 0.9 and 1.1 of the base scale
      const pulsateScale = scale * (0.9 + 0.2 * Math.sin(clock.elapsedTime * 2))

      instanceRef.current.scale.set(pulsateScale, pulsateScale, pulsateScale)
    }
  })

  return (
    <Billboard follow lockX={false} lockY={false} lockZ={false}>
      <Instance ref={instanceRef} color={color} scale={scale} />
    </Billboard>
  )
}
