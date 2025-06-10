import { Text } from '@react-three/drei'
import { forwardRef, memo, useRef } from 'react'
import { Group, Mesh } from 'three'
import { NodePillGeometry, nodeSize } from '../../constants'
import { fontProps } from '../constants'

type RoundedRectProps = {
  color: string
}

const fontSize = nodeSize / 10

const RoundedRect = forwardRef<Mesh, RoundedRectProps>(({ color }, ref) => (
  <mesh ref={ref} geometry={NodePillGeometry} name="background">
    <meshBasicMaterial color={color} opacity={0.95} transparent />
  </mesh>
))

RoundedRect.displayName = 'RoundedRect'

type TextWithBackgroundProps = {
  text: string
  id?: string
}

const TextWithBackgroundComponent = ({ text, id }: TextWithBackgroundProps, ref: React.Ref<Group>) => {
  const textRef = useRef<Mesh>(null)
  const cubeRef = useRef<Mesh>(null)

  const bgWidth = nodeSize * 2
  const bgHeight = nodeSize
  const padding = nodeSize / 4
  const sizeHalf = nodeSize / 2

  return (
    <group ref={ref} name="background-wrapper">
      <mesh name="evt-handle" position={[bgWidth / 2 - 1.5, 0, -2]}>
        <mesh name="background" position={[0, 0, 2]} userData={{ ref_id: id }}>
          <boxGeometry args={[bgWidth, bgHeight, 1]} />
          <meshBasicMaterial color="yellow" depthWrite={false} opacity={0} transparent />
        </mesh>
        <RoundedRect ref={cubeRef} color="#23252F" />
      </mesh>
      <Text
        ref={textRef}
        color="white"
        position={[sizeHalf + padding, 0, 1]}
        {...fontProps}
        anchorX="left"
        fontSize={fontSize}
        maxWidth={nodeSize}
        name="text"
      >
        {text}
      </Text>
    </group>
  )
}

// ✅ Wrap the component with `forwardRef` AFTER defining it
export const TextWithBackground = memo(forwardRef(TextWithBackgroundComponent))
TextWithBackground.displayName = 'TextWithBackground'
