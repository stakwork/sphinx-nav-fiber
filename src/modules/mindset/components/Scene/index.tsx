import { OrbitControls, OrthographicCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Board } from './Board'

export const Scene = () => (
  <>
    {false && (
      <Canvas>
        <OrthographicCamera makeDefault position={[0, 0, 10]} />
        <OrbitControls enablePan enableRotate={false} />
        <ambientLight intensity={0.5} />
        <Board />
      </Canvas>
    )}
    <Board />
  </>
)
