import { useTexture } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import { useDataStore } from '~/stores/useDataStore'
import { EARTH_RADIUS } from '~/transformers/earthGraph'
import { CurvedLine } from '../CurvedLine'

export const Earth = () => {
  const ref = useRef<THREE.Mesh | null>(null)
  const lightRef = useRef<THREE.DirectionalLight | null>(null)

  const graphStyle = useDataStore((s) => s.graphStyle)
  const showSelectionGraph = useDataStore((s) => s.showSelectionGraph)
  const data = useDataStore((s) => s.data)

  const map = useTexture('textures/earth/earth.jpeg')
  const bump = useTexture('textures/earth/bump.jpeg')
  const water = useTexture('textures/earth/water.png')
  const clouds = useTexture('textures/earth/clouds.png')

  const { camera } = useThree()

  useFrame(() => {
    if (lightRef.current) {
      const { x, y, z } = camera.position
      lightRef.current.position.set(x, y, z)
      lightRef.current.matrixWorldNeedsUpdate = true
    }
  })

  if (graphStyle !== 'earth' || showSelectionGraph) {
    return null
  }

  return (
    <>
      <mesh ref={ref} position={[0, 0, 0]}>
        <sphereGeometry args={[EARTH_RADIUS, 200, 200]} />
        <meshStandardMaterial
          map={map}
          normalMap={bump}
          bumpMap={bump}
          bumpScale={10}
          emissiveMap={water}
          displacementMap={map}
          metalness={0.5}
          roughnessMap={water}
          // transparent
          // opacity={0.9}
        />
      </mesh>
      <directionalLight ref={lightRef} position={camera.position} intensity={2} />

      {data?.links.map((link, i) => {
        return <CurvedLine key={`curved-${link.index}-${i}`} link={link} />
      })}
    </>
  )
}
