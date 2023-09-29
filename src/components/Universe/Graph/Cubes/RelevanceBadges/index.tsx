import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Fragment, memo, useEffect, useMemo, useRef } from 'react'
import { MdHub } from 'react-icons/md'
import { Group, Vector3 } from 'three'
import { nodesAreRelatives } from '~/components/Universe/constants'
import { getNodeColorByType } from '~/components/Universe/Graph/constant'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { colors } from '~/utils/colors'
import { getPercentageFromWeight } from './PathwayBadge'
import { BadgeIconWrapper, Counter, Image, Percentage, Tag } from './styles'
import { BadgeProps } from './types'

const variableVector3 = new Vector3()

const NodeBadge = ({ position, userData, color, relativeIds }: BadgeProps) => {
  const ref = useRef<Group | null>(null)
  const setSelectedNode = useDataStore((s) => s.setSelectedNode)
  const setHoveredNode = useDataStore((s) => s.setHoveredNode)
  const hoveredNode = useDataStore((s) => s.hoveredNode)
  const showSelectionGraph = useDataStore((s) => s.showSelectionGraph)

  const isTopic = (userData?.node_type || '') === 'topic'

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

  const score = getPercentageFromWeight(userData.weight)

  return (
    <group ref={ref} position={position}>
      <Html center sprite>
        <Tag
          color={color}
          fontColor={colors.white}
          fontSize={isTopic ? 14 : 20}
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
          selected={false}
          size={isTopic ? 100 : 52}
        >
          {isTopic ? userData?.label : <Image size={46} src={userData?.image_url || 'noimage.jpeg'} />}

          <BadgeIconWrapper>
            <Counter color={color}>
              <MdHub style={{ marginRight: 4 }} />
              {relativeIds.length}
            </Counter>
            <Percentage color={color}>{score}%</Percentage>
          </BadgeIconWrapper>
        </Tag>
      </Html>
    </group>
  )
}

export const RelevanceBadges = memo(() => {
  const data = useDataStore((s) => s.data)
  const selectedNode = useSelectedNode()
  const showSelectionGraph = useDataStore((s) => s.showSelectionGraph)
  const selectionGraphData = useDataStore((s) => s.selectionGraphData)
  const selectedNodeRelativeIds = useDataStore((s) => s.selectedNodeRelativeIds)

  const nodeBadges = useMemo(() => {
    const nodes = showSelectionGraph ? selectionGraphData.nodes : data?.nodes || []

    const badgesToRender = nodes
      .filter((f) => selectedNodeRelativeIds.includes(f?.ref_id || '') || selectedNode?.ref_id === f?.ref_id)
      .map((n) => {
        const color = getNodeColorByType(n.node_type || '', true) as string
        const position = new Vector3(n?.x || 0, n?.y || 0, n?.z || 0)

        const relativeIds =
          (data?.nodes || []).filter((f) => f.ref_id && nodesAreRelatives(f, n)).map((nd) => nd?.ref_id || '') || []

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
