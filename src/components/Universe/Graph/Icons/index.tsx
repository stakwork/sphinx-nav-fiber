import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { BoxGeometry, MeshStandardMaterial } from 'three'

const geometry = new BoxGeometry(10, 10, 10, 4, 4, 4)
const material = new MeshStandardMaterial({})

material.opacity = 2
material.metalness = 1.4

const spin = 0.16

export const GraphLoadingIcon = () => {
  const ref = useRef<THREE.Mesh | null>(null)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.z += spin
    }
  })

  return (
    <>
      <mesh
        ref={ref}
        geometry={geometry}
        material={material}
        rotation-y={Math.PI * 0.5}
        rotation-z={Math.PI * 0.5}
        scale={80}
      />
    </>
  )
}
