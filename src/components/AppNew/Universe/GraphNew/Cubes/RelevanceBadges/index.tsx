import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Fragment, memo, useEffect, useMemo, useRef } from 'react'
import styled from 'styled-components'
import { Group, Vector3 } from 'three'
import { maxChildrenDisplayed } from '~/components/Universe/constants'
import { useGraphStore } from '~/stores/useGraphStore'
import { colors } from '~/utils/colors'
import { BadgeProps } from './types'

const backgroundColors = [
  '#ffffff',
  '#ffffcc',
  '#ccffcc',
  '#ffccff',
  '#ccccff',
  '#ffd699',
  '#c2f0c2',
  '#ff6666',
  '#99ccff',
  '#ffb3b3',
]

const variableVector3 = new Vector3()

const NodeBadge = ({ position, userData }: BadgeProps) => {
  const ref = useRef<Group | null>(null)

  const [selectedNode, nodeTypes] = useGraphStore((s) => [s.selectedNode, s.nodeTypes])

  const showSelectionGraph = useGraphStore((s) => s.showSelectionGraph)

  useFrame(() => {
    if (showSelectionGraph && ref.current) {
      const newPosition = variableVector3.set(userData?.x || 0, userData?.y || 0, userData?.z || 0)

      ref.current.position.copy(newPosition)
    }
  })

  useEffect(
    () =>
      function cleanup() {
        if (ref.current) {
          ref.current.clear()
        }
      },
    [ref],
  )

  const isSelected = selectedNode?.ref_id === userData?.ref_id

  return !isSelected ? (
    <group ref={ref} position={position}>
      <Html center sprite zIndexRange={[0, 0]}>
        <TypeWrapper bgColor={backgroundColors[Math.max(nodeTypes.indexOf(userData.node_type), 0)]}>
          {userData.node_type}
        </TypeWrapper>
      </Html>
    </group>
  ) : null
}

export const RelevanceBadges = memo(() => {
  const data = useGraphStore((s) => s.data)
  // const selectedNode = useSelectedNode()
  const showSelectionGraph = useGraphStore((s) => s.showSelectionGraph)
  const selectionGraphData = useGraphStore((s) => s.selectionGraphData)
  const selectedNodeRelativeIds = useGraphStore((s) => s.selectedNodeRelativeIds)

  const nodeBadges = useMemo(() => {
    const nodes = showSelectionGraph ? selectionGraphData.nodes : data?.nodes || []

    const childIds = nodes
      .filter((f) => selectedNodeRelativeIds.includes(f?.ref_id || ''))
      .slice(0, maxChildrenDisplayed)

    const badgesToRender = childIds.map((n) => {
      const position = new Vector3(n?.x || 0, n?.y || 0, n?.z || 0)

      const relativeIds: string[] = []

      return <NodeBadge key={`node-badge-${n.ref_id}`} position={position} relativeIds={relativeIds} userData={n} />
    })

    return badgesToRender
  }, [selectedNodeRelativeIds, data?.nodes, showSelectionGraph, selectionGraphData])

  return <Fragment key="node-badges">{nodeBadges.length ? nodeBadges : null}</Fragment>
})

RelevanceBadges.displayName = 'RelevanceBadges'

const TypeWrapper = styled.div<{ bgColor: string }>`
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%) translateY(200%);
  padding: 0 4px;
  height: 14px;
  background: ${(props) => props.bgColor};
  color: ${colors.BG1};
  font-size: 8px;
  font-style: normal;
  font-weight: 800;
  line-height: 14px;
`
