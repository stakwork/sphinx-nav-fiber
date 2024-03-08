import { Text } from '@react-three/drei'
import { Float32BufferAttribute, Vector3 } from 'three'

interface LinkProps {
  start: [number, number, number]
  end: [number, number, number]
  title: string
}

export const NodeLink = ({ start, end, title }: LinkProps) => {
  const startPoint = new Vector3(...start)
  const endPoint = new Vector3(...end)

  // Calculate midpoints
  const midpoint1 = startPoint.clone().lerp(endPoint, 0.5)
  const midpoint2 = midpoint1.clone().lerp(startPoint, 0.5)

  // Define buffer attributes for line segments
  const points1 = new Float32BufferAttribute(
    [startPoint.x, startPoint.y, startPoint.z, midpoint1.x, midpoint1.y, midpoint1.z],
    3,
  )

  const points2 = new Float32BufferAttribute(
    [midpoint1.x, midpoint1.y, midpoint1.z, midpoint2.x, midpoint2.y, midpoint2.z],
    3,
  )

  const points3 = new Float32BufferAttribute(
    [midpoint2.x, midpoint2.y, midpoint2.z, endPoint.x, endPoint.y, endPoint.z],
    3,
  )

  return (
    <group>
      {/* Line from start to midpoint1 */}
      <line>
        <bufferGeometry attach="geometry" />
        <lineBasicMaterial attach="material" color={0x0095dd} />
        <bufferAttribute array={points1.array} attach="geometry" count={2} itemSize={3} />
      </line>
      {/* Line from midpoint1 to midpoint2 */}
      <line>
        <bufferGeometry attach="geometry" />
        <lineBasicMaterial attach="material" color={0x0095dd} />
        <bufferAttribute array={points2.array} attach="geometry" count={2} itemSize={3} />
      </line>
      {/* Line from midpoint2 to end */}
      <line>
        <bufferGeometry attach="geometry" />
        <lineBasicMaterial attach="material" color={0x0095dd} />
        <bufferAttribute array={points3.array} attach="geometry" count={2} itemSize={3} />
      </line>
      {/* Text at midpoint1 */}
      <Text anchorX="center" anchorY="middle" color="#000000" fontSize={0.2} position={midpoint1.toArray()}>
        {title}
      </Text>
    </group>
  )
}
