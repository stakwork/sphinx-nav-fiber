import { Shape } from 'three'

type Props = {
  width: number
  height: number
  radius: number
  color: string
}

const createRoundedRect = (width: number, height: number, radius: number) => {
  const shape = new Shape()

  shape.moveTo(-width / 2 + radius, -height / 2)
  shape.lineTo(width / 2 - radius, -height / 2)
  shape.quadraticCurveTo(width / 2, -height / 2, width / 2, -height / 2 + radius)
  shape.lineTo(width / 2, height / 2 - radius)
  shape.quadraticCurveTo(width / 2, height / 2, width / 2 - radius, height / 2)
  shape.lineTo(-width / 2 + radius, height / 2)
  shape.quadraticCurveTo(-width / 2, height / 2, -width / 2, height / 2 - radius)
  shape.lineTo(-width / 2, -height / 2 + radius)
  shape.quadraticCurveTo(-width / 2, -height / 2, -width / 2 + radius, -height / 2)

  return shape
}

export const RoundedRectangle = ({ width, height, radius, color }: Props) => {
  const roundedRectShape = createRoundedRect(width, height, radius)

  return (
    <mesh>
      <shapeGeometry args={[roundedRectShape]} />
      <meshBasicMaterial color={color} opacity={0.9} transparent />
    </mesh>
  )
}
