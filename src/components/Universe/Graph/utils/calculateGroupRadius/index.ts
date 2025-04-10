import { Box3, Group, Sphere } from 'three'

export const calculateRadius = (gr: Group) => {
  const box = new Box3().setFromObject(gr)

  const sphere = new Sphere()

  box.getBoundingSphere(sphere)

  return sphere.radius
}
