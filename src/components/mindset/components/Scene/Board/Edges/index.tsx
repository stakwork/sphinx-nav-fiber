import { useMemo } from 'react'
import { Vector3 } from 'three'

type Props = {
  sourcePosition: { x: number; y: number; z: number }
  targetPosition: { x: number; y: number; z: number }
  color?: string
  arrowSize?: number
}

export const Edge = ({ sourcePosition, targetPosition, color = 'white', arrowSize = 1 }: Props) => {
  const points = useMemo(() => {
    const start = new Vector3(sourcePosition.x, sourcePosition.y, sourcePosition.z)
    const end = new Vector3(targetPosition.x, targetPosition.y, targetPosition.z)
    const direction = new Vector3().subVectors(end, start).normalize()

    // Calculate arrowhead points
    const arrowLeft = new Vector3()
      .copy(direction)
      .multiplyScalar(-arrowSize)
      .applyAxisAngle(new Vector3(0, 0, 1), Math.PI / 6)

    const arrowRight = new Vector3()
      .copy(direction)
      .multiplyScalar(-arrowSize)
      .applyAxisAngle(new Vector3(0, 0, 1), -Math.PI / 6)

    // Return line points + arrowhead points
    return [start, end, end.clone(), end.clone().add(arrowLeft), end.clone(), end.clone().add(arrowRight)]
  }, [sourcePosition, targetPosition, arrowSize])

  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          array={new Float32Array(points.flatMap((p) => [p.x, p.y, p.z]))}
          attach="attributes-position"
          count={points.length}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color={color} />
    </line>
  )
}
