import { Html } from '@react-three/drei'
import { memo, useMemo } from 'react'
import styled from 'styled-components'
import { Vector3 } from 'three'
import { usePathway } from '~/components/DataRetriever'
import { Flex } from '~/components/common/Flex'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'

type Props = {
  value?: number | string
  position?: Vector3
  userData?: NodeExtended
}

const PathwayBadge = ({ position, value, userData }: Props) => {
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
          justify="center"
          onClick={() => {
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
          selected={!!value && selected}
          visible={!!value}
        >
          {value}
        </Tag>
      </Html>
    </mesh>
  )
}

export const RelevanceBadges = memo(() => {
  const { badges } = usePathway()

  const renderedBadges = useMemo(
    () =>
      badges.map((b) => (
        <PathwayBadge
          key={`relevance-badge-${b.userData.ref_id}`}
          position={b.position}
          userData={b.userData}
          value={b.value}
        />
      )),
    [badges],
  )

  return <>{renderedBadges}</>
})

RelevanceBadges.displayName = 'RelevanceBadges'

type TagProps = {
  visible: boolean
  selected: boolean
}

const Tag = styled(Flex)<TagProps>`
  text-align: center;
  width: 66px;
  height: 66px;
  background: #000000bb;
  border: 3px solid #ffffff88;
  color: #ffffff;
  border-radius: 100%;
  font-size: 20px;
  cursor: pointer;
  transition: opacity 0.4s;
  ${(p: TagProps) => !p.visible && 'opacity:0;'}
  ${(p: TagProps) =>
    p.selected &&
    `
    opacity: 0.8;
    background: #5078f2;
  `}
`
