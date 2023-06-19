import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useEffect, useMemo, useRef } from 'react'
import { MdHub } from 'react-icons/md'
import styled from 'styled-components'
import { Group, Vector3 } from 'three'
import { usePathway } from '~/components/DataRetriever'
import { nodesAreRelatives } from '~/components/Universe/constants'
import { Flex } from '~/components/common/Flex'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'
import { colors } from '~/utils/colors'
import { getNodeColorByType } from '../constants'

type BadgeProps = {
  color: string
  position: Vector3
  userData: NodeExtended
  // eslint-disable-next-line react/no-unused-prop-types
  relativeIds: string[]
}

const PathwayBadge = ({ color, position, relativeIds, userData }: BadgeProps) => {
  const setSelectedNode = useDataStore((s) => s.setSelectedNode)
  const setHoveredNode = useDataStore((s) => s.setHoveredNode)
  const selectedNode = useSelectedNode()
  const hoveredNode = useDataStore((s) => s.hoveredNode)
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

  const score = (userData.weight || 0) * 100

  return (
    <group ref={ref} position={position}>
      <Html center sprite>
        <Tag
          color={color}
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
          {`${score.toFixed()}%`}
          <BadgeIconWrapper>
            <Counter color={color}>
              <MdHub style={{ marginRight: 4 }} />
              {relativeIds.length}
            </Counter>
          </BadgeIconWrapper>
        </Tag>
      </Html>
    </group>
  )
}

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
          size={isTopic ? 100 : 66}
        >
          {isTopic ? userData?.label : <Image src={userData?.image_url || 'noimage.jpeg'} />}

          <BadgeIconWrapper>
            <Counter color={color}>
              <MdHub style={{ marginRight: 4 }} />
              {relativeIds.length}
            </Counter>
            <Percentage color={color}>{((userData.weight || 0) * 100).toFixed()}%</Percentage>
          </BadgeIconWrapper>
        </Tag>
      </Html>
    </group>
  )
}

export const RelevanceBadges = memo(() => {
  const { badges } = usePathway()
  const data = useDataStore((s) => s.data)
  const selectedNode = useSelectedNode()
  const showSelectionGraph = useDataStore((s) => s.showSelectionGraph)
  const selectionGraphData = useDataStore((s) => s.selectionGraphData)
  const selectedNodeRelativeIds = useDataStore((s) => s.selectedNodeRelativeIds)

  const pathwayBadges = useMemo(
    () =>
      badges.map((b) => {
        if (b.userData?.ref_id !== selectedNode?.ref_id) {
          const relativeIds =
            (data?.nodes || [])
              .filter((f) => f.ref_id && nodesAreRelatives(f, b.userData))
              .map((nd) => nd?.ref_id || '') || []

          return (
            <PathwayBadge
              key={`relevance-badge-${b.userData.ref_id}`}
              color={colors.transparentWhite}
              position={b.position}
              relativeIds={relativeIds}
              userData={b.userData}
            />
          )
        }

        return null
      }),
    [badges, selectedNode, data?.nodes],
  )

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

  return (
    <>
      {pathwayBadges}
      {nodeBadges}
    </>
  )
})

RelevanceBadges.displayName = 'RelevanceBadges'

type TagProps = {
  selected: boolean
  color: string
  fontColor: string
  size: number
  fontSize: number
  scale: number
}

const Tag = styled(Flex)<TagProps>`
  text-align: center;
  width: ${(p: TagProps) => `${p.size}px`};
  height: ${(p: TagProps) => `${p.size}px`};
  background: ${colors.transparentBlack};
  border: 3px solid ${(p: TagProps) => p.color};
  color: ${(p: TagProps) => p.fontColor};
  border-radius: 100%;
  font-size: ${(p: TagProps) => `${p.fontSize}px`};
  cursor: pointer;
  transition: opacity 0.4s;
  transform: scale(${(p: TagProps) => p.scale});
`

type ImageProps = {
  src?: string
}

const Image = styled.img<ImageProps>`
  background-image: ${({ src }) => `url(${src})`};
  background-size: contain;
  background-repeat: no-repeat;
  width: 60px;
  height: 60px;
  border-radius: 100%;
`

type CounterProps = {
  color: string
  top?: number
  bottom?: number
  left?: number
  right?: number
}

const BadgeIconWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: -14px;
  left: -5px;
  width: auto;
  justify-content: center;
  align-items: center;
`

const Counter = styled.div<CounterProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.transparentBlack};
  border: 2px solid ${(p) => p.color};
  color: #fff;
  padding: 0 4px;
  min-width: 30px;
  height: 26px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 6px;
  margin-right: 5px;
`

const Percentage = styled.div<CounterProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${(p) => p.color}44;
  background: ${colors.transparentBlack};
  padding: 0 4px;
  color: ${(p) => p.color};
  min-width: 30px;
  height: 26px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 6px;
  margin-right: 5px;
`
