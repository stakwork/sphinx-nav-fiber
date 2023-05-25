import { Html } from '@react-three/drei'
import { memo, useMemo } from 'react'
import styled from 'styled-components'
import { Vector3 } from 'three'
import { usePathway } from '~/components/DataRetriever'
import { Flex } from '~/components/common/Flex'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'

type BadgeProps = {
  color: string
  position: Vector3
  userData: NodeExtended
  // eslint-disable-next-line react/no-unused-prop-types
  value?: number | string | null
}

const getBadgeColor = (nodeType: string) => {
  let color = 'lime'

  switch (nodeType) {
    case 'clip':
    case 'show':
    case 'episode':
      color = 'lime'
      break
    case 'guest':
      color = '#ff94ff'
      break
    case 'topic':
      color = '#5078f2'
      break
    default:
  }

  return color
}

const PathwayBadge = ({ color, position, value, userData }: BadgeProps) => {
  const setSelectedNode = useDataStore((s) => s.setSelectedNode)
  const setHoveredNode = useDataStore((s) => s.setHoveredNode)
  const selectedNode = useSelectedNode()
  const selected = userData?.ref_id === selectedNode?.ref_id

  return (
    <mesh position={position}>
      <boxGeometry />
      <meshStandardMaterial />
      <Html center sprite>
        <Tag
          color={color}
          fontSize={18}
          justify="center"
          onClick={(e) => {
            e.stopPropagation()

            if (userData) {
              setSelectedNode(userData)
            }
          }}
          onPointerOut={() => {
            setHoveredNode(null)
          }}
          onPointerOver={() => {
            setHoveredNode(userData || null)
          }}
          selected={selected}
          size={56}
        >
          {value}
        </Tag>
      </Html>
    </mesh>
  )
}

const NodeBadge = ({ position, userData, color }: BadgeProps) => {
  const setSelectedNode = useDataStore((s) => s.setSelectedNode)

  const isTopic = (userData?.node_type || '') === 'topic'

  return (
    <mesh position={position} userData={userData}>
      <Html center sprite>
        <Tag
          color={color}
          fontSize={isTopic ? 14 : 20}
          justify="center"
          onClick={(e) => {
            e.stopPropagation()

            if (userData) {
              setSelectedNode(userData)
            }
          }}
          selected={false}
          size={isTopic ? 100 : 66}
        >
          {isTopic ? userData?.label : <Image src={userData?.image_url || 'noimage.jpeg'} />}
        </Tag>
      </Html>
    </mesh>
  )
}

export const RelevanceBadges = memo(() => {
  const { badges } = usePathway()
  const data = useDataStore((s) => s.data)
  const showSelectionGraph = useDataStore((s) => s.showSelectionGraph)
  const selectionGraphData = useDataStore((s) => s.selectionGraphData)
  const selectedNodeRelativeIds = useDataStore((s) => s.selectedNodeRelativeIds)

  const pathwayBadges = useMemo(
    () =>
      badges.map((b) => (
        <PathwayBadge
          key={`relevance-badge-${b.userData.ref_id}`}
          color="#ffffff88"
          position={b.position}
          userData={b.userData}
          value={b.value}
        />
      )),
    [badges],
  )

  const nodeBadges = useMemo(() => {
    const nodes = showSelectionGraph ? selectionGraphData.nodes : data?.nodes || []

    const badges = nodes
      .filter((f) => selectedNodeRelativeIds.includes(f?.ref_id || ''))
      .map((n) => {
        const color = getBadgeColor(n.node_type || '')
        const position = new Vector3(n?.x || 0, n?.y || 0, n?.z || 0)

        return <NodeBadge key={`node-badge-${n.ref_id}`} color={color} position={position} userData={n} />
      })

    return badges
  }, [selectedNodeRelativeIds, data, showSelectionGraph, selectionGraphData])

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
  size: number
  fontSize: number
}

const Tag = styled(Flex)<TagProps>`
  text-align: center;
  width: ${(p: TagProps) => `${p.size}px`};
  height: ${(p: TagProps) => `${p.size}px`};
  background: #000000bb;
  border: 3px solid ${(p: TagProps) => p.color};
  color: #ffffff;
  border-radius: 100%;
  font-size: ${(p: TagProps) => `${p.fontSize}px`};
  cursor: pointer;
  transition: opacity 0.4s;
  ${(p: TagProps) =>
    p.selected &&
    `
    opacity: 0.8;
    background: #5078f2;
  `}
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
