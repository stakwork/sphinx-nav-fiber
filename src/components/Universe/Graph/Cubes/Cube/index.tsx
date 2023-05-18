import { memo, useRef } from 'react'
import { Mesh } from 'three'
import { NodeExtended } from '~/types'
import { boxGeometry } from '../constants'
import { useMaterial } from './hooks/useMaterial'

type Props = {
  node: NodeExtended
  visible: boolean
}
export const Cube = memo(({ node, visible }: Props) => {
  const ref = useRef<Mesh | null>(null)

  const material = useMaterial(node.image_url || 'noimage.jpeg')

  if (!visible) {
    return null
  }

  return (
    <mesh
      ref={ref}
      geometry={boxGeometry}
      material={material}
      name={node.id}
      position={[node.x, node.y, node.z]}
      scale={node.scale}
      userData={node}
    />
  )
})

Cube.displayName = 'Cube'
