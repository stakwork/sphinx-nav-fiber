import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useLayoutEffect, useMemo, useRef } from 'react'
import { DoubleSide, Mesh, MeshStandardMaterial, Vector3 } from 'three'
import { useDataStore } from '~/stores/useDataStore'
import { useRefStore } from '~/stores/useRefStore'
import { EARTH_RADIUS } from '~/transformers/earthGraph'
import { CurvedLine } from '../CurvedLine'

const center = new Vector3(0, 0, 0)

export const Earth = () => {
  const ref = useRef<Mesh | null>(null)
  const lightRef = useRef<THREE.DirectionalLight | null>(null)

  const graphStyle = useDataStore((s) => s.graphStyle)

  const showSelectionGraph = useDataStore((s) => s.showSelectionGraph)

  const data = useDataStore((s) => s.data)

  const setEarthRef = useRefStore((s) => s.setEarthRef)

  const galaxyMapTexture = useTexture('textures/earth/galaxy.png')
  const cloudsMapTexture = useTexture('textures/earth/clouds2.png')

  useFrame(({ camera }) => {
    if (lightRef.current) {
      lightRef.current.position.copy(camera.getWorldPosition(center))
    }
  })

  useLayoutEffect(() => {
    if (ref.current) {
      setEarthRef(ref)
    }
  }, [])

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
      <mesh ref={ref} userData={{ type: 'earth' }}>
        <sphereGeometry args={[EARTH_RADIUS, 200, 200]} />
        <EarthMaterial />
      </mesh>

      <mesh>
        <sphereGeometry args={[EARTH_RADIUS + 2, 200, 200]} />
        <meshStandardMaterial alphaMap={cloudsMapTexture} map={cloudsMapTexture} transparent />
      </mesh>

      <mesh>
        <sphereGeometry args={[EARTH_RADIUS * 4, 200, 200]} />
        <meshStandardMaterial side={DoubleSide} map={galaxyMapTexture} transparent opacity={0.2} />
      </mesh>

      <directionalLight ref={lightRef} position={[0, 0, EARTH_RADIUS * 3]} intensity={0.9} />

      {data?.links.map((link, i) => {
        return <CurvedLine key={`curved-${link.index}-${i}`} link={link} />
      })}
    </>
  )
}

const EarthMaterial = () => {
  // Load the textures
  const earthMapTexture = useTexture('textures/earth/earth.jpeg')
  const bumpMapTexture = useTexture('textures/earth/bump.jpeg')
  const waterMapTexture = useTexture('textures/earth/water.png')
  const cloudsMapTexture = useTexture('textures/earth/clouds.png')

  // Create the material
  const material = useMemo(() => {
    const material = new MeshStandardMaterial({
      map: earthMapTexture, // Earth color map
      bumpMap: bumpMapTexture, // Bump map for surface details
      aoMap: bumpMapTexture, // Ambient occlusion map for shading
      roughnessMap: bumpMapTexture, // Specular map for shininess
      metalnessMap: waterMapTexture,
      toneMapped: true,
      roughness: 35, // Adjust roughness as needed
      metalness: 0.1, // Adjust metalness as needed
    })

    return material
  }, [earthMapTexture, bumpMapTexture, cloudsMapTexture, waterMapTexture])

  return <meshStandardMaterial {...material} />
}
