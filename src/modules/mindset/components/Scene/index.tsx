import { Canvas, useThree } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import { Board } from './Board'

export const Scene = () => {
  const [cameraX, setCameraX] = useState(0) // State for horizontal camera movement

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCameraX(Number(event.target.value))
  }

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {/* Slider for controlling camera X-axis */}
      <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 10 }}>
        <input max={100} min={-100} onChange={handleSliderChange} step={1} type="range" value={cameraX} />
      </div>

      <Canvas orthographic>
        <DynamicOrthographicCamera x={cameraX} />
        <Board />
        <gridHelper args={[100, 100, 'white', 'gray']} />
        <gridHelper args={[100, 100, 'white', 'gray']} rotation={[Math.PI / 2, 0, 0]} />

        {/* Add Axis Helper */}
        <axesHelper args={[5]} />
      </Canvas>
    </div>
  )
}

// Custom camera component
const DynamicOrthographicCamera = ({ x }: { x: number }) => {
  const { size, viewport, camera } = useThree()
  const frustumSize = 50

  const aspect = size.width / size.height

  console.log(aspect, size.width)

  // Dynamically calculate camera bounds
  const left = (-frustumSize * aspect) / 2
  const right = (frustumSize * aspect) / 2
  const top = frustumSize / 2
  const bottom = -frustumSize / 2

  useEffect(() => {
    // Update camera bounds dynamically
    const orthoCamera = camera as THREE.OrthographicCamera

    orthoCamera.left = left
    orthoCamera.right = right
    orthoCamera.top = top
    orthoCamera.bottom = bottom
    orthoCamera.position.x = x
    orthoCamera.updateProjectionMatrix()
  }, [camera, left, right, top, bottom, x])

  useEffect(() => {
    console.log('Viewport Width in World Units:', viewport.width)
  }, [viewport.width])

  return null
}
