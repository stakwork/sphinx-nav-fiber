import { Billboard, Line, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import { memo, useEffect, useRef } from 'react'
import { Group } from 'three'
import { Line2 } from 'three-stdlib'
import { useDataStore } from '~/stores/useDataStore'
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
  const groupRef = useRef<Group | null>(null)
  const nodesNormalized = useDataStore((s) => s.nodesNormalized)

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
  }, [lineRef, sourceX])

  useFrame(() => {
    const sourceNode = nodesNormalized.get(source)
    const targetNode = nodesNormalized.get(target)

    if (!lineRef.current || !groupRef.current || !sourceNode || !targetNode) {
      return
    }

    const { hoveredNode, searchQuery, selectedNodeTypes, selectedLinkTypes, selectedNode } = useGraphStore.getState()
    const line = lineRef.current
    const activeNode = hoveredNode || selectedNode

    const activeLink =
      selectedLinkTypes.includes(label) ||
      (selectedNodeTypes.includes(sourceNode?.node_type) && selectedNodeTypes.includes(targetNode.node_type))

    if (!activeLink && !activeNode && !searchQuery) {
      groupRef.current.visible = false

      return
    }

    line.visible = false
    groupRef.current.visible = false

    if (activeLink) {
      line.visible = true
      groupRef.current.visible = true
    }

    if (activeNode?.ref_id === source || activeNode?.ref_id === target) {
      line.visible = true
      groupRef.current.visible = true

      // Increase line width
      gsap.to(line.material, {
        linewidth: 1, // Target line width
        duration: 0.5, // Smooth increase
        ease: 'power1.out',
      })
    } else {
      // Decrease line width back to default
      gsap.to(line.material, {
        linewidth: 1, // Default line width
        duration: 0.5,
        ease: 'power1.out',
      })
    }

    // Animate dashOffset to create a moving dash effect
    if (line.material) {
      line.material.dashOffset += 0.55
    }
  })

  return (
    <group ref={groupRef}>
      <Line
        ref={lineRef}
        color="white" // Ensure strong contrast
        dashed
        dashOffset={1}
        dashScale={1} // Reduce the gap between dashes for better visibility
        dashSize={10} // Increase dash length
        gapSize={10} // Adjust the spacing between dashes
        isLine2
        lineWidth={1} // Increase the thickness
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
