import { Billboard, Line, Text } from '@react-three/drei'
import gsap from 'gsap'
import { memo, useEffect, useRef } from 'react'
import { Vector3 } from 'three'
import { Line2 } from 'three-stdlib'
import { LinkPosition } from '..'
import { LINE_WIDTH } from '../../constants'

type LineComponentProps = {
  isSelected: boolean
  position: LinkPosition
  label: string
}

// eslint-disable-next-line no-underscore-dangle
const _LineComponent = ({ isSelected, position, label }: LineComponentProps) => {
  const lineRef = useRef<Line2 | null>(null)

  useEffect(() => {
    if (lineRef.current) {
      const line = lineRef.current

      gsap.fromTo(
        line.material,
        { linewidth: LINE_WIDTH * 15 },
        {
          linewidth: LINE_WIDTH,
          duration: 1,
        },
      )
    }
  }, [isSelected, lineRef])

  return (
    <group>
      <Line
        ref={lineRef}
        isLine2
        name="line"
        opacity={0.5}
        points={[
          new Vector3(position.sx, position.sy, position.sz),
          new Vector3(position.tx, position.ty, position.tz),
        ]}
      />
      <Billboard>
        <Text anchorX="center" anchorY="middle" color="white" fontSize={10}>
          {label}
        </Text>
      </Billboard>
    </group>
  )
}

_LineComponent.displayName = 'LineComponent'

export const LineComponent = memo(_LineComponent)
