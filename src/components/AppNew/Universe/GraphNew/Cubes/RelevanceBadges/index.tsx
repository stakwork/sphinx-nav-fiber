import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import clsx from 'clsx'
import { Fragment, memo, useEffect, useMemo, useRef } from 'react'
import styled from 'styled-components'
import { Group, Vector3 } from 'three'
import { getNodeColorByType } from '~/components/Universe/Graph/constant'
import { maxChildrenDisplayed } from '~/components/Universe/constants'
import { useGraphStore, useSelectedNode } from '~/stores/useGraphStore'
import { colors } from '~/utils/colors'
import { Tag } from './styles'
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

const NodeBadge = ({ position, userData, color }: BadgeProps) => {
  const ref = useRef<Group | null>(null)

  const [selectedNode, nodeTypes, setSelectedNode] = useGraphStore((s) => [
    s.selectedNode,
    s.nodeTypes,
    s.setSelectedNode,
  ])

  const setHoveredNode = useGraphStore((s) => s.setHoveredNode)
  const hoveredNode = useGraphStore((s) => s.hoveredNode)
  const showSelectionGraph = useGraphStore((s) => s.showSelectionGraph)

  const isTopic = (userData?.node_type || '') === 'Topic'

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

  const isHovered = useMemo(() => hoveredNode?.ref_id === userData?.ref_id, [hoveredNode?.ref_id, userData?.ref_id])
  const isSelected = selectedNode?.ref_id === userData?.ref_id

  return isTopic || (isSelected && showSelectionGraph) || !isSelected ? (
    <group ref={ref} position={position}>
      <Html center sprite zIndexRange={[0, 0]}>
        <Tag
          className={clsx(userData?.node_type, { selected: isSelected })}
          color={color}
          fontColor={colors.white}
          fontSize={isTopic ? 64 : 20}
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
          selected={false}
          size={isSelected ? 100 : 68}
          type={userData?.node_type || ''}
        >
          {userData?.name}
        </Tag>
        <TypeWrapper bgColor={backgroundColors[Math.max(nodeTypes.indexOf(userData.node_type), 0)]}>
          {userData.node_type}
        </TypeWrapper>
      </Html>
    </group>
  ) : null
}

export const RelevanceBadges = memo(() => {
  const data = useGraphStore((s) => s.data)
  const selectedNode = useSelectedNode()
  const showSelectionGraph = useGraphStore((s) => s.showSelectionGraph)
  const selectionGraphData = useGraphStore((s) => s.selectionGraphData)
  const selectedNodeRelativeIds = useGraphStore((s) => s.selectedNodeRelativeIds)

  const nodeBadges = useMemo(() => {
    const nodes = showSelectionGraph ? selectionGraphData.nodes : data?.nodes || []

    const childIds = nodes
      .filter((f) => selectedNodeRelativeIds.includes(f?.ref_id || '') || selectedNode?.ref_id === f?.ref_id)
      .slice(0, maxChildrenDisplayed)

    const badgesToRender = childIds.map((n) => {
      const color = getNodeColorByType(n.node_type || '', true) as string
      const position = new Vector3(n?.x || 0, n?.y || 0, n?.z || 0)

      const relativeIds: string[] = []

      return (
        <NodeBadge
          key={`node-badge-${n.ref_id}`}
          color={color}
          position={position}
          relativeIds={relativeIds}
          userData={n}
        />
      )
    })

    return badgesToRender
  }, [selectedNodeRelativeIds, data?.nodes, showSelectionGraph, selectionGraphData, selectedNode])

  return <Fragment key="node-badges">{nodeBadges.length ? nodeBadges : null}</Fragment>
})

RelevanceBadges.displayName = 'RelevanceBadges'

const TypeWrapper = styled.div<{ bgColor: string }>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 4px;
  height: 14px;
  background: ${(props) => props.bgColor};
  color: ${colors.BG1};
  font-size: 8px;
  font-style: normal;
  font-weight: 800;
  line-height: 14px;
`
