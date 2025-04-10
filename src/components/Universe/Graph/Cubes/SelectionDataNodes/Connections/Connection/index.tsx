import { Line, Text } from '@react-three/drei'
import { memo, useRef } from 'react'
import { Line2 } from 'three-stdlib'
import { fontProps } from '../../../Text/constants'

type LineComponentProps = {
  label: string
  sourceX: number
  sourceY: number
  sourceZ: number
  targetX: number
  targetY: number
  targetZ: number
}

// eslint-disable-next-line no-underscore-dangle
const _Connection = (props: LineComponentProps) => {
  const lineRef = useRef<Line2 | null>(null)

  const { label, sourceX, sourceY, sourceZ, targetX, targetY, targetZ } = props

  return (
    <group>
      <Line
        ref={lineRef}
        color="white"
        isLine2
        lineWidth={2}
        name="line"
        points={[sourceX, sourceY, sourceZ, targetX, targetY, targetZ]}
      />
      <mesh>
        <planeGeometry args={[label.length * 1, 2]} />
        <meshBasicMaterial color="black" />
        <Text anchorX="center" anchorY="middle" color="white" {...fontProps} scale={1.5}>
          {label}
        </Text>
      </mesh>
    </group>
  )
}

_Connection.displayName = 'Connection'

export const Connection = memo(_Connection)
