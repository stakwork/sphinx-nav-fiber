import { Billboard, Line, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import { memo, useEffect, useRef } from 'react'
import { Vector3 } from 'three'
import { Line2 } from 'three-stdlib'
import { useGraphStore } from '~/stores/useGraphStore'
import { LinkPosition } from '..'
import { LINE_WIDTH } from '../../constants'

type LineComponentProps = {
  isSelected: boolean
  position: LinkPosition
  label: string
  target: string
  source: string
}

// eslint-disable-next-line no-underscore-dangle
const _LineComponent = ({ isSelected, position, label, target, source }: LineComponentProps) => {
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

  useFrame(() => {
    const { selectedNode, hoveredNode } = useGraphStore.getState()

    if (lineRef.current) {
      const line = lineRef.current
      const activeNode = selectedNode || hoveredNode

      if (activeNode?.ref_id === source || activeNode?.ref_id === target) {
        line.visible = true

        // Increase line width
        gsap.to(line.material, {
          linewidth: 6, // Target line width
          duration: 0.5, // Smooth increase
          ease: 'power1.out',
        })
      } else {
        // Decrease line width back to default
        gsap.to(line.material, {
          linewidth: 1, // Default line width
          duration: 0.5, // Smooth decrease
          ease: 'power1.out',
        })
      }
    }
  })

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
