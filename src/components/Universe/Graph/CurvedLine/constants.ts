import { CatmullRomCurve3, Quaternion, Vector3 } from 'three'
import { EARTH_DATA_PADDING, EARTH_RADIUS } from '~/transformers/earthGraph'

export const getPointBetweenPointsByPercent = (pointA: Vector3, pointB: Vector3, percentage: number) => {
  const displacement = pointB.clone().sub(pointA)
  const distance = displacement.length() * percentage
  const desiredPoint = pointA.clone().add(displacement.normalize().multiplyScalar(distance))

  return desiredPoint
}

export const getCurvedLineFromStartAndEnd = (start: Vector3, end: Vector3) => {
  // Create quaternions from the vectors
  const quaternionA = new Quaternion().setFromUnitVectors(new Vector3(0, 1, 0), start.clone().normalize())
  const quaternionB = new Quaternion().setFromUnitVectors(new Vector3(0, 1, 0), end.clone().normalize())

  // Set up a quaternion-based interpolation
  const quaternion = new Quaternion()
  const divisions = 50 // Number of divisions along the curve

  // Calculate the points along the curved line using slerp
  const curvePoints = []
  for (let i = 0; i <= divisions; i++) {
    const t = i / divisions
    quaternion.slerpQuaternions(quaternionA, quaternionB, t)
    const pointOnCurve = new Vector3(0, 1, 0)
      .applyQuaternion(quaternion)
      .multiplyScalar(EARTH_RADIUS + EARTH_DATA_PADDING)
    curvePoints.push(pointOnCurve)
  }

  // Create a Three.js curve from the points
  const curve = new CatmullRomCurve3(curvePoints)

  return curve.getPoints(divisions)
}
