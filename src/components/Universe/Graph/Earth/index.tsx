import { useTexture } from '@react-three/drei'
import { useRef } from 'react'
import { useDataStore } from '~/stores/useDataStore'
import { EARTH_RADIUS } from '~/transformers/earthGraph'

export const Earth = () => {
  const ref = useRef<THREE.Mesh | null>(null)

  const graphStyle = useDataStore((s) => s.graphStyle)

  const map = useTexture('textures/earth_texture.jpeg')

  if (graphStyle !== 'earth') {
    return null
  }

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <sphereGeometry args={[EARTH_RADIUS, 200, 200]} />
      <meshStandardMaterial map={map} />
    </mesh>
  )
}
