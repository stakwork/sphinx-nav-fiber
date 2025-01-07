import { Billboard, Line, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import { memo, useEffect, useRef } from 'react'
import { Line2 } from 'three-stdlib'
import { useGraphStore } from '~/stores/useGraphStore'
import { LINE_WIDTH } from '../../constants'
import { fontProps } from '../Cubes/Text/constants'

type LineComponentProps = {
  label: string
  target: string
  source: string
  sourceX: number
  sourceY: number
  sourceZ: number
  targetX: number
  targetY: number
  targetZ: number
}

// eslint-disable-next-line no-underscore-dangle
const _LineComponent = (props: LineComponentProps) => {
  const lineRef = useRef<Line2 | null>(null)

  const { label, source, target, sourceX, sourceY, sourceZ, targetX, targetY, targetZ } = props

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
  }, [lineRef])

  useFrame(() => {
    // @todo-useframe
    const { selectedNode, hoveredNode } = useGraphStore.getState()

    if (lineRef.current) {
      const line = lineRef.current
      const activeNode = selectedNode || hoveredNode

      line.visible = !activeNode

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
        lineWidth={2}
        name="line"
        points={[sourceX, sourceY, sourceZ, targetX, targetY, targetZ]}
      />
      <Billboard>
        <Text anchorX="center" anchorY="middle" color="white" {...fontProps} fontSize={10}>
          {label}
        </Text>
      </Billboard>
    </group>
  )
}

_LineComponent.displayName = 'LineComponent'

export const LineComponent = memo(_LineComponent)
