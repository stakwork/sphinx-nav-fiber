import { Html, OrbitControls } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import { Tooltip } from '~/components/common/ToolTip'
import { nodesWithTimestamp } from '~/components/mindset/data'
import { Marker } from '../../Marker'

type Props = {
  duration: number
  progress: number
}

const FullWidthZoom = ({ progressBarWidth }: { progressBarWidth: number }) => {
  const { size, camera } = useThree()
  const [minZoom, setMinZoom] = useState(camera.zoom)

  useEffect(() => {
    // Calculate the minimum zoom based on the progress bar width and viewport size
    const calculatedZoom = size.width / progressBarWidth

    setMinZoom(calculatedZoom)
    camera.zoom = calculatedZoom
    camera.updateProjectionMatrix()
  }, [size, camera, progressBarWidth])

  return <OrbitControls enableRotate={false} minZoom={minZoom} />
}

export const ProgressBarCanvas = ({ duration, progress }: Props) => {
  const progressBarWidth = 100 // Width of the progress bar in world units

  return (
    <Canvas
      camera={{ zoom: 1, position: [0, 0, 10] }} // Initial camera setup
      orthographic
      style={{ width: '100%', height: '100%' }}
    >
      <gridHelper args={[100, 100, 'white', 'gray']} />
      <gridHelper args={[100, 100, 'white', 'gray']} rotation={[Math.PI / 2, 0, 0]} />

      {/* Full Width Zoom Calculation */}
      <FullWidthZoom progressBarWidth={progressBarWidth} />

      {/* Progress Bar */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[progressBarWidth, 1]} /> {/* Full progress bar width */}
        <meshBasicMaterial color="gray" />
      </mesh>

      {/* Progress */}
      <mesh position={[(progress / duration) * progressBarWidth - progressBarWidth / 2, 0, 0]}>
        <planeGeometry args={[(progress / duration) * progressBarWidth, 1]} />
        <meshBasicMaterial color="blue" />
      </mesh>

      {/* Markers */}
      {nodesWithTimestamp.map((node) => {
        const position = ((node.start || 0) / duration) * progressBarWidth - progressBarWidth / 2
        const type = node?.node_type || ''

        return (
          <mesh key={node.ref_id} position={[position, 0, 0.1]}>
            <circleGeometry args={[0.5, 32]} /> {/* Marker size */}
            <meshBasicMaterial color={node.node_type === 'important' ? 'red' : 'white'} />
            {/* Tooltip */}
            <Html center>
              <div
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                  padding: '2px 5px',
                  borderRadius: '3px',
                  fontSize: '10px',
                }}
              >
                <Tooltip content={`${node?.name || ''}|${node?.start}`}>
                  <Marker type={type} />
                </Tooltip>
              </div>
            </Html>
          </mesh>
        )
      })}
    </Canvas>
  )
}
