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
  const selectedNode = useSelectedNode()
  const selected = userData?.ref_id === selectedNode?.ref_id

  return (
    <mesh position={position} userData={userData}>
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
          selected={!!value && selected}
          visible={!!value}
        >
          {value}
        </Tag>
      </Html>
    </mesh>
  )
}

const PersonBadge = ({ userData }: Props) => {
  const setSelectedNode = useDataStore((s) => s.setSelectedNode)

  const position = new Vector3(userData?.x || 0, userData?.y || 0, userData?.z || 0)

  return (
    <mesh position={position} userData={userData}>
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
          selected={false}
          visible={true}
        >
          <Image src={userData?.image_url || 'noimage.jpeg'} />
        </Tag>
      </Html>
    </mesh>
  )
}

const ContentBadge = ({ userData }: Props) => {
  const setSelectedNode = useDataStore((s) => s.setSelectedNode)

  const position = new Vector3(userData?.x || 0, userData?.y || 0, userData?.z || 0)

  return (
    <mesh position={position} userData={userData}>
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
          selected={false}
          visible={true}
        >
          <Image src={userData?.image_url} />
        </Tag>
      </Html>
    </mesh>
  )
}

export const RelevanceBadges = memo(() => {
  const { badges } = usePathway()
  const selectedNodeRelatives = useDataStore((s) => s.selectedNodeRelatives)

  const pathwayBadges = useMemo(() => {
    const renders = []

    for (let i = 0; i < 10; i += 1) {
      renders.push(
        <PathwayBadge
          key={`relevance-badge-${i}`}
          position={badges[i]?.position}
          userData={badges[i]?.userData}
          value={badges[i]?.value}
        />,
      )
    }

    return renders
  }, [badges])

  const personBadges = useMemo(() => {
    return selectedNodeRelatives
      .filter((f) => f.node_type === 'guest' || f.node_type === 'person')
      .map((n, i) => <PersonBadge key={`person-badge-${i}`} userData={n} />)
  }, [selectedNodeRelatives])

  const contentBadges = useMemo(() => {
    return selectedNodeRelatives
      .filter((f) => f.node_type === 'clip' || f.node_type === 'show' || f.node_type === 'episode')
      .map((n, i) => <ContentBadge key={`content-badge-${i}`} userData={n} />)
  }, [selectedNodeRelatives])

  // prevent badge dismount between clicks, teardown takes too long
  return (
    <>
      {pathwayBadges}
      {personBadges}
      {contentBadges}
    </>
  )
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

type ImageProps = {
  src?: string
}

const Image = styled.img<ImageProps>`
  background-image: ${({ src }) => (src ? `url(${src})` : 'noimage.jpeg')};
  background-size: contain;
  background-repeat: no-repeat;
  width: 60px;
  height: 60px;
  border-radius: 100%;
`
