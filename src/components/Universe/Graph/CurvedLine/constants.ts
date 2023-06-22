import { Vector3 } from 'three'

export const getPointBetweenPointsByPercent = (pointA: Vector3, pointB: Vector3, percentage: number) => {
  const displacement = pointB.clone().sub(pointA)
  const distance = displacement.length() * percentage
  const desiredPoint = pointA.clone().add(displacement.normalize().multiplyScalar(distance))

  return desiredPoint
}
