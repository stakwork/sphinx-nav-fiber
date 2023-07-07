import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import { useRef } from 'react'
import { DirectionalLight, PointLight } from 'three'
import { GRAPH_FOG_COLOR, GRAPH_GROUND_COLOR, GRAPH_LIGHT_INTENSITY } from '~/constants'
import { colors } from '~/utils/colors'
import { UNIVERSE_SCALE } from '../Graph/constant'

export const Lights = () => {
  const { fogColor } = useControls('universe', {
    fogColor: GRAPH_FOG_COLOR,
  })

  const pLightRefAmbient = useRef<PointLight | null>(null)
  const cameraLightRef = useRef<PointLight | null>(null)
  const dLightRef = useRef<DirectionalLight | null>(null)

  useFrame(({ camera, clock }) => {
    const elapsedTime = clock.getElapsedTime()

    if (pLightRefAmbient.current) {
      const sinValue = Math.sin(elapsedTime / 8)

      const z = sinValue * 1000

      pLightRefAmbient.current.position.setZ(z)
    }

    if (cameraLightRef.current) {
      cameraLightRef.current.position.lerp(camera.position, 0.5)
    }

    if (dLightRef.current) {
      const value = elapsedTime * 0.5
      const x = Math.sin(value) * UNIVERSE_SCALE
      const z = Math.cos(value) * UNIVERSE_SCALE

      dLightRef.current.position.set(x, 0, z)
    }
  })

  return (
    <>
      {/* static lights */}
      <hemisphereLight args={[colors.white, GRAPH_GROUND_COLOR, GRAPH_LIGHT_INTENSITY]} />
      <ambientLight color={colors.white} intensity={1} />

      {/* moving lights */}
      <pointLight ref={cameraLightRef} color={colors.white} distance={4000} intensity={5} position={[0, 0, 0]} />
      <directionalLight ref={dLightRef} color={colors.white} intensity={8} position={[UNIVERSE_SCALE, 0, 0]} />
      <pointLight ref={pLightRefAmbient} color={colors.white} distance={4000} intensity={8} position={[0, 0, 0]} />

      <fog args={[fogColor, 5, 18000]} attach="fog" />
    </>
  )
}
