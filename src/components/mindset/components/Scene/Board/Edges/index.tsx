import { Text } from '@react-three/drei'
import { useMemo } from 'react'
import { Vector3 } from 'three'

type Props = {
  sourcePosition: { x: number; y: number; z: number }
  targetPosition: { x: number; y: number; z: number }
  color?: string
  arrowSize?: number
  label?: string // Добавляем текстовую метку
}

export const Edge = ({ sourcePosition, targetPosition, color = 'white', arrowSize = 1, label = 'label' }: Props) => {
  const { points, textPosition, textRotation } = useMemo(() => {
    const start = new Vector3(sourcePosition.x, sourcePosition.y, sourcePosition.z)
    const end = new Vector3(targetPosition.x, targetPosition.y, targetPosition.z)

    // Вычисляем направление и середину линии
    const direction = new Vector3().subVectors(end, start).normalize()
    const midpoint = new Vector3().addVectors(start, end).multiplyScalar(0.5)

    // Угол поворота текста относительно оси Z
    const angle = Math.atan2(direction.y, direction.x)

    // Вычисляем точки для линии и стрелок
    const arrowLeft = new Vector3()
      .copy(direction)
      .multiplyScalar(-arrowSize)
      .applyAxisAngle(new Vector3(0, 0, 1), Math.PI / 6)

    const arrowRight = new Vector3()
      .copy(direction)
      .multiplyScalar(-arrowSize)
      .applyAxisAngle(new Vector3(0, 0, 1), -Math.PI / 6)

    const pointsFinal = [start, end, end.clone(), end.clone().add(arrowLeft), end.clone(), end.clone().add(arrowRight)]

    return { points: pointsFinal, textPosition: midpoint, textRotation: angle }
  }, [sourcePosition, targetPosition, arrowSize])

  return (
    <>
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
      {label && (
        <Text
          anchorX="center"
          anchorY="middle"
          color={color}
          fontSize={1}
          position={textPosition}
          rotation={[0, 0, textRotation]} // Поворот текста
        >
          {label}
        </Text>
      )}
    </>
  )
}
