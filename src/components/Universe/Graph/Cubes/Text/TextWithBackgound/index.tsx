import { Text } from '@react-three/drei'
import { forwardRef, memo, useMemo, useRef, useState } from 'react'
import { Box3, Group, Mesh, Shape, Vector3 } from 'three'
import { nodeSize } from '../../constants'
import { fontProps } from '../constants'

type RoundedRectProps = {
  width: number
  height: number
  radius: number
  color: string
}

const FONT_SIZE = nodeSize / 3

const RoundedRect = forwardRef<Mesh, RoundedRectProps>(({ width, height, radius, color }, ref) => {
  const rectShape = useMemo(() => {
    const shape = new Shape()

    shape.moveTo(-width / 2, -height / 2)
    shape.lineTo(width / 2 - radius, -height / 2)
    shape.quadraticCurveTo(width / 2, -height / 2, width / 2, -height / 2 + radius)
    shape.lineTo(width / 2, height / 2 - radius)
    shape.quadraticCurveTo(width / 2, height / 2, width / 2 - radius, height / 2)
    shape.lineTo(-width / 2, height / 2)
    shape.lineTo(-width / 2, -height / 2)

    return shape
  }, [width, height, radius])

  return (
    <mesh ref={ref} name="background">
      <shapeGeometry args={[rectShape]} />
      <meshBasicMaterial color={color} opacity={0.95} transparent />
    </mesh>
  )
})

RoundedRect.displayName = 'RoundedRect'

type TextWithBackgroundProps = {
  text: string
  id?: string
}

const TextWithBackgroundComponent = ({ text, id }: TextWithBackgroundProps, ref: React.Ref<Group>) => {
  const textRef = useRef<Mesh>(null)
  const cubeRef = useRef<Mesh>(null)

  const [bgWidth, setBgWidth] = useState(1)
  const bgHeight = nodeSize
  const bgRadius = 6
  const padding = 10
  const sizeHalf = nodeSize / 2

  const updateBgWidth = () => {
    if (textRef.current) {
      textRef.current.updateMatrixWorld()

      const box = new Box3().setFromObject(textRef.current)
      const size = new Vector3()

      box.getSize(size)
      setBgWidth(size.x + padding * 2)
    }
  }

  const afterRenderHandler = () => {
    if (bgWidth <= FONT_SIZE * 0.2 * text.length) {
      updateBgWidth()
    }
  }

  return (
    <group ref={ref}>
      <mesh name="evt-handle" position={[bgWidth / 2 + sizeHalf, 0, 0]}>
        <mesh name="background" position={[0, 0, 2]} userData={{ ref_id: id }}>
          <boxGeometry args={[bgWidth, bgHeight, 1]} />
          <meshBasicMaterial color="yellow" depthWrite={false} opacity={0} transparent />
        </mesh>
        <RoundedRect ref={cubeRef} color="#23252F" height={bgHeight} radius={bgRadius} width={bgWidth} />
      </mesh>
      <Text
        ref={textRef}
        color="white"
        position={[sizeHalf + padding, 0, 1]}
        {...fontProps}
        anchorX="left"
        fontSize={FONT_SIZE}
        name="text"
        onAfterRender={afterRenderHandler}
        onSync={updateBgWidth}
      >
        {text}
      </Text>
    </group>
  )
}

// ✅ Wrap the component with `forwardRef` AFTER defining it
export const TextWithBackground = memo(forwardRef(TextWithBackgroundComponent))
TextWithBackground.displayName = 'TextWithBackground'
