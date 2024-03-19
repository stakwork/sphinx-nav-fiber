import { Html } from '@react-three/drei'
import { useEffect, useMemo, useRef } from 'react'
import { MdHub } from 'react-icons/md'
import { Group } from 'three'

import { useGraphStore, useSelectedNode } from '~/stores/useGraphStore'
import { colors } from '~/utils/colors'
import { BadgeIconWrapper, Counter, Tag } from './styles'
import { BadgeProps } from './types'

export const getPercentageFromWeight = (weight: number | undefined) => ((weight || 0) * 100).toFixed()

export const PathwayBadge = ({ position, relativeIds, userData }: BadgeProps) => {
  const setSelectedNode = useGraphStore((s) => s.setSelectedNode)
  const setHoveredNode = useGraphStore((s) => s.setHoveredNode)
  const selectedNode = useSelectedNode()
  const hoveredNode = useGraphStore((s) => s.hoveredNode)
  const selected = userData?.ref_id === selectedNode?.ref_id
  const ref = useRef<Group | null>(null)

  useEffect(
    () =>
      function cleanup() {
        if (ref.current) {
          ref.current.clear()
        }
      },
    [ref],
  )

  const isHovered = useMemo(() => hoveredNode?.ref_id === userData?.ref_id, [hoveredNode?.ref_id, userData?.ref_id])

  const score = getPercentageFromWeight(userData.edge_count)

  const isVisible = true

  return (
    <group ref={ref} position={position}>
      {isVisible && (
        <Html center sprite>
          <Tag
            color={colors.white}
            fontColor={colors.white}
            fontSize={18}
            justify="center"
            onClick={(e) => {
              e.stopPropagation()

              if (userData) {
                setSelectedNode(userData)
              }
            }}
            onPointerOut={(e) => {
              e.stopPropagation()
              setHoveredNode(null)
            }}
            onPointerOver={(e) => {
              e.stopPropagation()
              setHoveredNode(userData || null)
            }}
            scale={isHovered ? 1.05 : 1}
            selected={selected}
            size={56}
          >
            {`${score}%`}
            <BadgeIconWrapper>
              <Counter color={colors.white}>
                <MdHub style={{ marginRight: 4 }} />
                {relativeIds.length}
              </Counter>
            </BadgeIconWrapper>
          </Tag>
        </Html>
      )}
    </group>
  )
}
