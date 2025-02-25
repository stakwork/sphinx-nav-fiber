import { Html } from '@react-three/drei'
import { useMemo } from 'react'
import { distributeNodesOnSphere } from '~/stores/useGraphStore'
import { Node } from '~/types'

type Props = {
  chapters: Node[]
}

export const Neighbourhoods = ({ chapters }: Props) => {
  const neighbourhoodsWithPosition = useMemo(() => Object.values(distributeNodesOnSphere(chapters, 1000)), [chapters])

  return (
    <group>
      {neighbourhoodsWithPosition.map((n, index) => (
        <mesh key={n.x} position={[n.x, n.y, n.z]}>
          <boxGeometry args={[400, 400, 400]} />
          <meshBasicMaterial color="orange" opacity={0} transparent />
          <Html position={[0, 200, 0]}>
            <div
              style={{
                color: 'white',
                display: 'flex',
                whiteSpace: 'nowrap',
                transform: 'translateX(-50%)',
                fontWeight: '600',
              }}
            >
              {chapters[index].properties?.name}
            </div>
          </Html>
        </mesh>
      ))}
    </group>
  )
}
