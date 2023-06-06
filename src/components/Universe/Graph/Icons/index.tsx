import { Float, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { FetchLoaderText } from '~/components/common/Loader'

const spin = 8

export const GraphLoadingIcon = () => {
  const ref = useRef<THREE.Mesh | null>(null)
  const textRef = useRef<THREE.Mesh | null>(null)

  useFrame(({ camera }, delta) => {
    if (ref.current) {
      ref.current.rotation.z += spin * delta
    }

    if (textRef.current) {
      textRef.current.quaternion.copy(camera.quaternion)
    }
  })

  return (
    <>
      <Float speed={2}>
        <Text ref={textRef} color={0xffffff} position={[0, 1000, 0]} scale={180} strokeColor="#fff">
          {FetchLoaderText()}
        </Text>
      </Float>
      <mesh ref={ref} position={[0, -100, 0]} rotation-y={Math.PI * 0.5} rotation-z={Math.PI * 0.5} scale={90}>
        <boxGeometry args={[10, 10, 10]} />
        <meshStandardMaterial color={0xffffff} metalness={1.4} wireframe />
      </mesh>
    </>
  )
}
