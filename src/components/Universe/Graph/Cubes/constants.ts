import * as THREE from 'three';
import { NodeExtended } from '~/types';

const createRoundedBoxGeometry = (width:number, height:number, depth:number, radius:number, segments:number) => {
  const shape = new THREE.Shape();
  const eps = 0.00001;
  shape.absarc(eps, eps, eps, -Math.PI / 2, -Math.PI, true);
  shape.absarc(eps, height - radius * 2, eps, Math.PI, Math.PI / 2, true);
  shape.absarc(width - radius * 2, height - radius * 2, eps, Math.PI / 2, 0, true);
  shape.absarc(width - radius * 2, eps, eps, 0, -Math.PI / 2, true);

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: depth - radius * 2,
    bevelEnabled: true,
    bevelSegments: segments,
    steps: 2,
    bevelSize: radius,
    bevelThickness: radius,
    curveSegments: segments,
  });

  geometry.center();

  // Manually setting UVs
  const uvs = [];
  const normals = geometry.getAttribute("normal");
  const positions = geometry.getAttribute("position");

  for (let i = 0; i < positions.count; i++) {
    const normal = new THREE.Vector3(
      (normals as THREE.BufferAttribute).getX(i),
      (normals as THREE.BufferAttribute).getY(i),
      (normals as THREE.BufferAttribute).getZ(i)
    );
    const position = new THREE.Vector3(
      (positions as THREE.BufferAttribute).getX(i),
      (positions as THREE.BufferAttribute).getY(i),
      (positions as THREE.BufferAttribute).getZ(i)
    );

    let u = 0, v = 0;
    if (Math.abs(normal.y) > 0.9) {
      u = (position.x / width) + 0.5;
      v = 1 - ((position.z / depth) + 0.5);
    } else if (Math.abs(normal.x) > 0.9) {
      u = (-position.z / depth) + 0.5;
      v = 1 - ((-position.y / height) + 0.5);
    } else if (Math.abs(normal.z) > 0.9) {
      u = (position.x / width) + 0.5;
      v = 1 - ((-position.y / height) + 0.5);
    }

    uvs.push(u, v);
  }

  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));

  return geometry;
};

export const boxGeometry = createRoundedBoxGeometry(10,10,10,2,10)
// new BoxGeometry(10, 10, 10)

export const isMainTopic = (node: NodeExtended) => node.node_type === 'topic' && (node.scale || 1) > 5

export const meshRenderLimit = 500

export const meshRenderRadius = 1000



export const getNodeColorByType = (nodeType: string, returnString?: boolean) => {
  let color = '0xF8F8FF'

  switch (nodeType) {
    case 'show':
      color = '0xFF4500'
      break
    case 'clip':
      color = '0xFFFF00'
      break
    case 'episode':
      color = '0xFF7F50'
      break
    case 'guest':
      color = '0xE066FF'
      break
    case 'topic':
      color = '0xF8F8FF'
      break
    default:
  }

  if (returnString) {
    return color.replace('0x', '#')
  }

  return parseInt(color, 16)
}
