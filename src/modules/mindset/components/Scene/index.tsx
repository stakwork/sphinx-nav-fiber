import { OrbitControls, OrthographicCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import { Vector3 } from 'three'
import { Board } from './Board'

export const Scene = () => {
  const [cameraX, setCameraX] = useState(0) // State for horizontal camera movement
  const cameraPosition = new Vector3(cameraX, 0, 50)

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCameraX(Number(event.target.value))
  }

  // Parameters for OrthographicCamera
  const frustumSize = 50
  const aspect = window.innerWidth / window.innerHeight
  const left = (-frustumSize * aspect) / 2
  const right = (frustumSize * aspect) / 2
  const top = frustumSize / 2
  const bottom = -frustumSize / 2

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      {/* Slider for controlling camera X-axis */}
      <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 10 }}>
        <input max={100} min={-100} onChange={handleSliderChange} step={1} type="range" value={cameraX} />
      </div>

      <Canvas dpr={[1, 1.5]} gl={{ antialias: false }} onPointerMissed={() => console.log('missed')}>
        {false && <OrbitControls enableRotate={false} enableZoom zoomSpeed={0.5} zoomToCursor={false} />}
        <OrthographicCamera
          bottom={bottom}
          far={1000}
          left={left}
          makeDefault
          near={0.1}
          position={cameraPosition}
          right={right}
          top={top}
        />
        <Board gap={6} w={16} />
        <gridHelper args={[100, 100, 'white', 'gray']} />
        <gridHelper args={[100, 100, 'white', 'gray']} rotation={[Math.PI / 2, 0, 0]} />

        {/* Add Axis Helper */}
        <axesHelper args={[5]} />
      </Canvas>
    </div>
  )
}
