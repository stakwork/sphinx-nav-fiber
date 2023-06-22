import { useTexture } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useLayoutEffect, useRef } from 'react'
import { Mesh } from 'three'
import { useDataStore } from '~/stores/useDataStore'
import { useRefStore } from '~/stores/useRefStore'
import { EARTH_RADIUS } from '~/transformers/earthGraph'
import { CurvedLine } from '../CurvedLine'

export const Earth = () => {
  const ref = useRef<Mesh | null>(null)
  const lightRef = useRef<THREE.DirectionalLight | null>(null)

  const graphStyle = useDataStore((s) => s.graphStyle)

  const showSelectionGraph = useDataStore((s) => s.showSelectionGraph)

  const data = useDataStore((s) => s.data)

  const setEarthMesh = useRefStore((s) => s.setEarthMesh)

  const map = useTexture('textures/earth/earth.jpeg')
  const bump = useTexture('textures/earth/bump.jpeg')
  const water = useTexture('textures/earth/water.png')
  const clouds = useTexture('textures/earth/clouds.png')

  const { camera } = useThree()

  useLayoutEffect(() => {
    setEarthMesh(ref)
  }, [])

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

  const getInfo = async (lat: number, lng: number) => {
    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}`)
    const jsonData = await res.json()
    console.log(jsonData?.features[0]?.properties?.address?.state)
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
        />
      </mesh>

      <directionalLight ref={lightRef} position={camera.position} intensity={2} />

      {data?.links.map((link, i) => {
        return <CurvedLine key={`curved-${link.index}-${i}`} link={link} />
      })}
    </>
  )
}
