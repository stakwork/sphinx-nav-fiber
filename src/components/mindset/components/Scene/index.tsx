import { OrthographicCamera } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { memo, useEffect } from 'react'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { Board } from './Board'

const CameraController = () => {
  const { camera, viewport } = useThree()
  const playerRef = usePlayerStore((s) => s.playerRef)

  useFrame(() => {
    if (playerRef) {
      const time = playerRef.getCurrentTime()

      camera.position.x = (time * viewport.width) / 10
    }
  })

  return null
}

const CanvasZoomHandler = () => {
  const { camera, gl } = useThree()

  useEffect(() => {
    const orthoCamera = camera as THREE.OrthographicCamera

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault()

      if (event.ctrlKey) {
        orthoCamera.zoom += event.deltaY * -0.1
        orthoCamera.zoom = Math.max(2, Math.min(orthoCamera.zoom, 20))
      }

      orthoCamera.position.x += event.deltaX * 0.1 //

      orthoCamera.updateProjectionMatrix()
    }

    const canvas = gl.domElement

    canvas.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      canvas.removeEventListener('wheel', handleWheel)
    }
  }, [camera, gl])

  return null
}

export const Scene = memo(() => {
  console.log('rerender')

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas orthographic>
        <CameraController />
        <OrthographicCamera far={2000} makeDefault near={1} position={[0, 0, 20]} zoom={10} />
        <Board />
        <CanvasZoomHandler />
      </Canvas>
    </div>
  )
})

Scene.displayName = 'Scene'
