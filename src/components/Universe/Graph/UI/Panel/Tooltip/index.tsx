import { Float, Text } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { Group, Mesh, Vector3 } from 'three'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { formatDescription } from '~/utils/formatDescription'
import { fontProps } from '../../../Cubes/Text/constants'

const labelKeys = ['description', 'show_title', 'episode_title', 'name', 'label']
const headingTypes = ['clip', 'episode']

const shift = 120

export const Tooltip = () => {
  const hoveredNode = useDataStore((s) => s.hoveredNode)
  const selectedNode = useSelectedNode()
  const textRef = useRef<Mesh>(null)
  const panelRef = useRef<Group>(null)
  const { mouse } = useThree()

  const position = useMemo(() => new Vector3(mouse.x * shift, mouse.y * shift, 0), [mouse.x, mouse.y])

  const offset = useMemo(() => new Vector3(mouse.x * -10, mouse.y * -20, -114), [mouse.x, mouse.y]) // Offset from the camera's position

  const [text, heading] = useMemo(() => {
    let t = ''
    let h = ''

    if (hoveredNode) {
      Object.keys(hoveredNode).forEach((key) => {
        if (!t && labelKeys.includes(key)) {
          let value = hoveredNode[key as keyof typeof hoveredNode] as string

          if (key === 'description') {
            value = formatDescription(value)
          }

          t = value
        }
      })

      const showHeader = selectedNode?.show_title !== hoveredNode?.show_title

      if (showHeader && hoveredNode?.show_title && headingTypes.includes(hoveredNode.node_type)) {
        h = hoveredNode.show_title
      }
    }

    return [t, h]
  }, [hoveredNode, selectedNode])

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

  const visible = useMemo(() => !!hoveredNode && hoveredNode.node_type !== 'topic', [hoveredNode])

  return (
    <group ref={panelRef}>
      <Float position={position} scale={visible ? 1 : 0}>
        <mesh>
          <planeGeometry args={[46, 16]} />
          <meshBasicMaterial color="#000" opacity={0.8} transparent />
        </mesh>
        <Text ref={textRef} {...fontProps} fontSize={3} maxWidth={40} outlineWidth={0.1} textAlign="center">
          {heading && `${heading}\n\n`}
          {text}
        </Text>
      </Float>
    </group>
  )
}
