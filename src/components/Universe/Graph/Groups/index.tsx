import { Billboard, Edges, Html } from '@react-three/drei'
import { useState } from 'react'
import * as THREE from 'three'
import { useControlStore } from '~/stores/useControlStore'

interface Shape3D {
  id: string
  label: string
  position: [number, number, number]
  geometry: 'box' | 'sphere' | 'cylinder'
  color: string
  size: [number, number, number]
}

export const Groups = () => {
  const [selectedShapeId, setSelectedShapeId] = useState<string | null>(null)
  const cameraControlsRef = useControlStore((s) => s.cameraControlsRef)

  const shapes: Shape3D[] = [
    {
      id: 'main-highlights',
      label: 'Main highlights',
      position: [-800, 200, 0],
      geometry: 'box',
      color: '#4a90e2',
      size: [100, 100, 100],
    },
    {
      id: 'controversial-views',
      label: 'Controversial views',
      position: [0, -400, 200],
      geometry: 'box',
      color: '#e24a4a',
      size: [100, 100, 100],
    },
    {
      id: 'people',
      label: 'People',
      position: [800, 100, -200],
      geometry: 'box',
      color: '#50c878',
      size: [100, 100, 100],
    },
  ]

  const handleClick = (shape: Shape3D) => {
    const center = new THREE.Vector3(...shape.position)
    const distance = Math.max(...shape.size) * 2
    const direction = new THREE.Vector3(1, 1, 1).normalize()
    const cameraPosition = new THREE.Vector3().copy(center).addScaledVector(direction, distance)

    cameraControlsRef?.setLookAt(
      cameraPosition.x,
      cameraPosition.y,
      cameraPosition.z,
      center.x,
      center.y,
      center.z,
      true,
    )

    setSelectedShapeId(shape.id)
  }

  const renderGeometry = (shape: Shape3D) => {
    switch (shape.geometry) {
      case 'box':
        return <boxGeometry args={shape.size} />
      case 'sphere':
        return <sphereGeometry args={[shape.size[0] / 2, 16, 16]} />
      case 'cylinder':
        return <cylinderGeometry args={[shape.size[0] / 2, shape.size[0] / 2, shape.size[1], 16]} />
      default:
        return <boxGeometry args={shape.size} />
    }
  }

  return (
    <group>
      {shapes.map((shape) => (
        <Billboard key={shape.id} position={shape.position}>
          <mesh>
            {renderGeometry(shape)}
            <meshBasicMaterial color={shape.color} opacity={selectedShapeId === shape.id ? 0.3 : 0.15} transparent />
            <Edges color="#8c6a97" />
            <Html center>
              <div
                onClick={() => handleClick(shape)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleClick(shape)
                  }
                }}
                role="button"
                style={{
                  color: 'white',
                  background: 'rgba(0, 0, 0, 0.8)',
                  borderRadius: '8px',
                  boxShadow: '0 0 12px rgba(0,0,0,0.6)',
                  fontWeight: '600',
                  fontSize: '12px',
                  border: `2px solid ${shape.color}`,
                  width: '120px',
                  padding: '8px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  transform: selectedShapeId === shape.id ? 'scale(1.1)' : 'scale(1)',
                }}
                tabIndex={0}
              >
                {shape.label}
              </div>
            </Html>
          </mesh>
        </Billboard>
      ))}
    </group>
  )
}
