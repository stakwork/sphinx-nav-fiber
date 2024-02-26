import * as THREE from 'three'
import { NodeExtended } from '~/types'

const createRoundedBoxGeometry = (width: number, height: number, depth: number, radius: number, segments: number) => {
  const shape = new THREE.Shape()
  const eps = 0.00001

  shape.absarc(eps, eps, eps, -Math.PI / 2, -Math.PI, true)
  shape.absarc(eps, height - radius * 2, eps, Math.PI, Math.PI / 2, true)
  shape.absarc(width - radius * 2, height - radius * 2, eps, Math.PI / 2, 0, true)
  shape.absarc(width - radius * 2, eps, eps, 0, -Math.PI / 2, true)

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: depth - radius * 2,
    bevelEnabled: true,
    bevelSegments: segments,
    steps: 2,
    bevelSize: radius,
    bevelThickness: radius,
    curveSegments: segments,
  })

  geometry.center()

  // Manually setting UVs
  const uvs = []
  const normals = geometry.getAttribute('normal')
  const positions = geometry.getAttribute('position')

  for (let i = 0; i < positions.count; i += 1) {
    const normal = new THREE.Vector3(
      (normals as THREE.BufferAttribute).getX(i),
      (normals as THREE.BufferAttribute).getY(i),
      (normals as THREE.BufferAttribute).getZ(i),
    )

    const position = new THREE.Vector3(
      (positions as THREE.BufferAttribute).getX(i),
      (positions as THREE.BufferAttribute).getY(i),
      (positions as THREE.BufferAttribute).getZ(i),
    )

    let u = 0
    let v = 0

    if (Math.abs(normal.y) > 0.9) {
      u = position.x / width + 0.5
      v = 1 - (position.z / depth + 0.5)
    } else if (Math.abs(normal.x) > 0.9) {
      u = -position.z / depth + 0.5
      v = 1 - (-position.y / height + 0.5)
    } else if (Math.abs(normal.z) > 0.9) {
      u = position.x / width + 0.5
      v = 1 - (-position.y / height + 0.5)
    }

    uvs.push(u, v)
  }

  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2))

  return geometry
}

export const roundedBoxGeometry = createRoundedBoxGeometry(10, 10, 10, 2, 10)

export const boxGeometry = new THREE.BoxGeometry(10, 10, 10)

export const isMainTopic = (node: NodeExtended) => node.node_type === 'topic' && (node.scale || 1) > 5

export const meshRenderLimit = 500

export const meshRenderRadius = 800
