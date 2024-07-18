import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useLayoutEffect, useMemo, useRef } from 'react'
import { DoubleSide, Mesh, MeshStandardMaterial, Vector3 } from 'three'
import { useGraphStore } from '~/stores/useGraphStore'
import { useRefStore } from '~/stores/useRefStore'
import { EARTH_RADIUS } from '~/transformers/earthGraph'

const center = new Vector3(0, 0, 0)

export const Earth = () => {
  const ref = useRef<Mesh | null>(null)
  const lightRef = useRef<THREE.DirectionalLight | null>(null)

  const { graphStyle, showSelectionGraph } = useGraphStore((s) => s)

  // const data = useDataStore((s) => s.data)

  const setEarthRef = useRefStore((s) => s.setEarthRef)

  const galaxyMapTexture = useTexture('textures/earth/galaxy.png')

  const cloudsMapTexture = useTexture('textures/earth/clouds.png')

  useFrame(({ camera }) => {
    if (lightRef.current) {
      lightRef.current.position.copy(camera.getWorldPosition(center))
    }
  })

  useLayoutEffect(() => {
    if (ref.current) {
      setEarthRef(ref)
    }
  }, [setEarthRef])

  if (graphStyle !== 'earth' || showSelectionGraph) {
    return null
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
        <meshStandardMaterial map={galaxyMapTexture} opacity={0.4} side={DoubleSide} transparent />
      </mesh>

      <directionalLight ref={lightRef} intensity={0.9} position={[0, 0, EARTH_RADIUS * 3]} />

      {/* {data?.links.map((link, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <CurvedLine key={`curved-${i}`} link={link} />
      ))} */}
    </>
  )
}

const EarthMaterial = () => {
  // Load the textures
  const earthMapTexture = useTexture('textures/earth/earth.jpeg')
  const bumpMapTexture = useTexture('textures/earth/bump.jpeg')
  const waterMapTexture = useTexture('textures/earth/water.png')

  // Create the material
  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        map: earthMapTexture, // Earth color map
        bumpMap: bumpMapTexture, // Bump map for surface details
        aoMap: bumpMapTexture, // Ambient occlusion map for shading
        roughnessMap: bumpMapTexture, // Specular map for shininess
        metalnessMap: waterMapTexture,
        toneMapped: true,
        roughness: 35, // Adjust roughness as needed
        metalness: 0, // Adjust metalness as needed
      }),
    [earthMapTexture, bumpMapTexture, waterMapTexture],
  )

  return <meshStandardMaterial {...material} />
}
