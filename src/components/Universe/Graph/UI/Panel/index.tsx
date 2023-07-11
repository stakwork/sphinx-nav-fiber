import { Float, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Color, Group, Mesh, MeshStandardMaterial, Vector3 } from 'three'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { fontProps } from '../../Cubes/Text/constants'

// The Panel component, will always stay at the top of the screen

const width = 40
const height = 10

export const Panel = () => {
  const panelRef = useRef<Group>(null)
  const panelBoardRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)

  const showSelectionGraph = useDataStore((s) => s.showSelectionGraph)

  const offset = useMemo(() => {
    const y = showSelectionGraph ? 40 : 26
    return new Vector3(0, y, -100)
  }, [showSelectionGraph]) // Offset from the camera's position

  const selectedNode = useSelectedNode()

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  useFrame(({ camera }) => {
    if (panelRef.current) {
      // Create a new copy of the offset
      const offsetCopy = offset.clone()

      // Apply the camera's rotation to the offset copy
      offsetCopy.applyQuaternion(camera.quaternion)

      // Copy the camera's position and rotation to the panel
      panelRef.current.position.copy(camera.position)
      panelRef.current.quaternion.copy(camera.quaternion)

      // Add the rotated offset to the panel's position
      panelRef.current.position.add(offsetCopy)
    }
  })

  return (
    <group ref={panelRef} visible={!!selectedNode}>
      <Float floatIntensity={10} speed={6}>
        <mesh
          ref={panelBoardRef}
          receiveShadow
          onPointerEnter={() => {
            setHovered(true)
            if (panelBoardRef.current) {
              const meshMaterial = panelBoardRef.current.material as MeshStandardMaterial
              meshMaterial.color = new Color('red') // Set to red color
            }
          }}
          onPointerLeave={() => {
            setHovered(false)
            if (panelBoardRef.current) {
              const meshMaterial = panelBoardRef.current.material as MeshStandardMaterial
              meshMaterial.color = new Color('blue') // Set to red color
            }
          }}
          onPointerDown={() => {
            console.log('do search!')
          }}
        >
          <planeGeometry attach="geometry" args={[width, height]} />
          <meshStandardMaterial attach="material" color="red" transparent opacity={0.6} />
        </mesh>

        <Text {...fontProps} fontSize={4} position-z={2} position-y={-0.1} castShadow>
          {hovered ? 'SEARCH' : selectedNode?.label}
        </Text>
      </Float>
    </group>
  )
}
