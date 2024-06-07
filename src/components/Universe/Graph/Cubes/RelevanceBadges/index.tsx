import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import clsx from 'clsx'
import { Fragment, memo, useEffect, useMemo, useRef } from 'react'
import { Group, Vector3 } from 'three'
import { getNodeColorByType } from '~/components/Universe/Graph/constant'
import { maxChildrenDisplayed, nodesAreRelatives } from '~/components/Universe/constants'
import { Avatar } from '~/components/common/Avatar'
import { TypeBadge } from '~/components/common/TypeBadge'
import { useGraphStore } from '~/stores/useGraphStore'
import { NodeExtended } from '~/types'
import { colors } from '~/utils/colors'
import { Tag } from './styles'
import { BadgeProps } from './types'

const variableVector3 = new Vector3()

const NodeBadge = ({ position, userData, color }: BadgeProps) => {
  const ref = useRef<Group | null>(null)

  const { selectedNode, setSelectedNode, showSelectionGraph, hoveredNode, setHoveredNode } = useGraphStore((s) => s)

  const isTopic = (userData?.node_type || '') === 'Topic'
  const isPerson = (userData?.node_type || '') === 'Guest' || (userData?.node_type || '') === 'Person'

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
          {!isPerson && !isTopic ? (
            <div className="badge-wrapper">
              <TypeBadge type={userData?.node_type || ''} />
            </div>
          ) : null}
          {isTopic ? (
            userData?.name
          ) : (
            <Avatar
              rounded={isPerson}
              size={isSelected ? 60 : 52}
              src={userData?.image_url || 'audio_default.svg'}
              type={userData?.node_type}
            />
          )}
        </Tag>
      </Html>
    </group>
  ) : null
}

export const RelevanceBadges = memo(() => {
  const { simulation, showSelectionGraph, selectedNode, selectionGraphData, selectedNodeRelativeIds } = useGraphStore(
    (s) => s,
  )

  const nodeBadges = useMemo(() => {
    const nodesData = simulation?.nodes() || []
    const nodes = showSelectionGraph ? selectionGraphData.nodes : nodesData

    const childIds = nodes
      .filter(
        (f: NodeExtended) => selectedNodeRelativeIds.includes(f?.ref_id || '') || selectedNode?.ref_id === f?.ref_id,
      )
      .slice(0, maxChildrenDisplayed)

    const badgesToRender = childIds.map((n: NodeExtended) => {
      const color = getNodeColorByType(n.node_type || '', true) as string
      const position = new Vector3(n?.x || 0, n?.y || 0, n?.z || 0)

      const relativeIds =
        nodesData
          .filter((f: NodeExtended) => f.ref_id && nodesAreRelatives(f, n))
          .map((nd: NodeExtended) => nd?.ref_id || '') || []

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
  }, [simulation, showSelectionGraph, selectionGraphData.nodes, selectedNodeRelativeIds, selectedNode?.ref_id])

  return <Fragment key="node-badges">{nodeBadges.length ? nodeBadges : null}</Fragment>
})

RelevanceBadges.displayName = 'RelevanceBadges'
