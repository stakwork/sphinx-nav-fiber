import { Text } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import { BufferGeometry, LineSegments, Mesh, Vector3 } from 'three'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore } from '~/stores/useGraphStore'
import { useModal } from '~/stores/useModalStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { fontProps } from '../Cubes/Text/constants'

const MeshInCamera = ({ layer, index }: { layer: string; index: number }) => {
  const meshRef = useRef<Mesh>(null!)
  const lineRef = useRef<LineSegments>(null!)
  const { camera } = useThree()
  const setIsolatedView = useGraphStore((state) => state.setIsolatedView)
  const isolatedView = useGraphStore((state) => state.isolatedView)
  const { normalizedSchemasByType } = useSchemaStore((s) => s)

  const color = normalizedSchemasByType[layer]?.secondary_color

  const { open } = useModal('claim')

  const yOffset = Math.floor(index / 2) * 500

  const fy = index % 2 === 0 ? yOffset : -yOffset

  useFrame(() => {
    const offset = new Vector3(5, fy / 500, -10)
    const worldPosition = offset.clone().applyMatrix4(camera.matrixWorld)

    meshRef.current.position.copy(worldPosition)
    meshRef.current.quaternion.copy(camera.quaternion)

    // Convert world origin to mesh's local space
    const localOrigin = meshRef.current.worldToLocal(new Vector3(0, fy, 0))

    // Now we connect to the LEFT side of the static line
    const staticLineEnd = new Vector3(-0.5, -0.5, 0.5)

    const points = [
      // Static front bottom edge
      staticLineEnd,
      new Vector3(0.5, -0.5, 0.5),

      // Dynamic line from scene center to staticLineEnd
      localOrigin,
      staticLineEnd,
    ]

    if (lineRef.current) {
      const geometry = new BufferGeometry().setFromPoints(points)

      lineRef.current.geometry.dispose()
      lineRef.current.geometry = geometry
    }
  })

  return (
    <mesh ref={meshRef}>
      <lineSegments ref={lineRef}>
        <lineBasicMaterial color={color || 'white'} opacity={0.5} transparent />
      </lineSegments>
      <Text
        {...fontProps}
        fontSize={0.2}
        onClick={(e) => {
          e.stopPropagation()

          if (isolatedView !== layer) {
            open()
            setIsolatedView(layer)
          } else {
            setIsolatedView('')
          }

          console.log('Text clicked:', layer)
          // You can trigger a state update, show a modal, select a layer, etc.
        }}
      >
        {layer}
      </Text>
    </mesh>
  )
}

export const Layers = () => {
  const nodeTypes = useDataStore((state) => state.nodeTypes)

  return (
    <group>
      {nodeTypes.map((i, index) => (
        <MeshInCamera key={i} index={index + 1} layer={i} />
      ))}
    </group>
  )
}
