import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useEffect, useMemo, useRef } from 'react'
import styled from 'styled-components'
import { Group, Vector3 } from 'three'
import { usePathway } from '~/components/DataRetriever'
import { nodesAreRelatives } from '~/components/Universe/constants'
import { Flex } from '~/components/common/Flex'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'
import { getNodeColorByType } from '../constants'

type BadgeProps = {
  color: string
  position: Vector3
  userData: NodeExtended
  // eslint-disable-next-line react/no-unused-prop-types
  relativeIds: string[]
  // eslint-disable-next-line react/no-unused-prop-types
  value?: number | string | null
}

const PathwayBadge = ({ color, position, value, userData }: BadgeProps) => {
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

  return (
    <group ref={ref} position={position}>
      <Html center sprite>
        <Tag
          color={color}
          fontColor="#ffffff"
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
          {value}
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
          fontColor="#fff"
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

          <Counter color={color}>{relativeIds.length}</Counter>
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
      badges.map(
        (b) =>
          b.userData?.ref_id !== selectedNode?.ref_id && (
            <PathwayBadge
              key={`relevance-badge-${b.userData.ref_id}`}
              color="#ffffff88"
              position={b.position}
              relativeIds={[]}
              userData={b.userData}
              value={b.value}
            />
          ),
      ),
    [badges, selectedNode],
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
  }, [selectedNodeRelativeIds, data, showSelectionGraph, selectionGraphData, selectedNode])

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
  background: #000000bb;
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
}

const Counter = styled.div<CounterProps>`
  display: flex;
  position: absolute;
  bottom: -12px;
  left: -5px;
  justify-content: center;
  align-items: center;
  background: #000000bb;
  border: 2px solid ${(p) => p.color};
  color: #fff;
  width: 30px;
  height: 30px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 100%;
`
