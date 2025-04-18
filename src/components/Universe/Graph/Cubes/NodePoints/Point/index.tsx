import { Billboard, Instance } from '@react-three/drei'
import { memo, useRef } from 'react'
import { Group, Mesh } from 'three'
import { NodeExtended } from '~/types'
import { generatePalette } from '~/utils/palleteGenerator'
import { nodeSize } from '../../constants'

type Props = {
  color: string
  node: NodeExtended
}

export const Point = memo(({ color, node }: Props) => {
  const nodeRef = useRef<Group | null>(null)
  const helperRef = useRef<Mesh | null>(null)

  const newColor = generatePalette(color, 3, 10)

  return (
    <Billboard ref={nodeRef} follow lockX={false} lockY={false} lockZ={false} name="group-name" visible={false}>
      <mesh ref={helperRef} name="instance-helper" userData={node}>
        <sphereGeometry args={[nodeSize / 2, 16, 16]} />
        <meshBasicMaterial color="white" opacity={1} transparent={false} />
      </mesh>
      <Instance color={newColor.at(3)} name="instance" />
    </Billboard>
  )
})

Point.displayName = 'Point'
