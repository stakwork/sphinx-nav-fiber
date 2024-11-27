import { OrthographicCamera } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { memo } from 'react'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { Board } from './Board'

const CameraController = () => {
  const { camera, viewport } = useThree() // Access the Three.js camera
  const playerRef = usePlayerStore((s) => s.playerRef) // Ref to store the current `playerRef`

  useFrame(() => {
    if (playerRef) {
      const time = playerRef.getCurrentTime()

      camera.position.x = (time * viewport.width) / 10
    }
  })

  return null // No React-rendered output
}

export const Scene = memo(() => {
  console.log('rerender')

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas orthographic>
        {/* <color args={['white']} attach="background" /> */}
        {/* Camera controller to manage GSAP animations */}
        <CameraController />
        <OrthographicCamera far={2000} makeDefault near={1} position={[0, 0, 20]} zoom={10} />
        <Board />
      </Canvas>
    </div>
  )
})

Scene.displayName = 'Scene'
