import { Html } from '@react-three/drei'
import styled from 'styled-components'
import { Vector3 } from 'three'
import { usePathway } from '~/components/DataRetriever'
import { Flex } from '~/components/common/Flex'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'

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
  background: #5078f2;

  `}
`

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
          selected={selected}
          visible={!!value}
        >
          {value}
        </Tag>
      </Html>
    </mesh>
  )
}

export const RelevanceBadges = () => {
  const { badges } = usePathway()

  // explicitly never rerender these between clicks, teardown takes too long
  return (
    <>
      <PathwayBadge position={badges[0]?.position} userData={badges[0]?.userData} value={badges[0]?.value} />
      <PathwayBadge position={badges[1]?.position} userData={badges[1]?.userData} value={badges[1]?.value} />
      <PathwayBadge position={badges[2]?.position} userData={badges[2]?.userData} value={badges[2]?.value} />
      <PathwayBadge position={badges[3]?.position} userData={badges[3]?.userData} value={badges[3]?.value} />
      <PathwayBadge position={badges[4]?.position} userData={badges[4]?.userData} value={badges[4]?.value} />
      <PathwayBadge position={badges[5]?.position} userData={badges[5]?.userData} value={badges[5]?.value} />
      <PathwayBadge position={badges[6]?.position} userData={badges[6]?.userData} value={badges[6]?.value} />
      <PathwayBadge position={badges[7]?.position} userData={badges[7]?.userData} value={badges[7]?.value} />
      <PathwayBadge position={badges[8]?.position} userData={badges[8]?.userData} value={badges[8]?.value} />
      <PathwayBadge position={badges[9]?.position} userData={badges[9]?.userData} value={badges[9]?.value} />
      <PathwayBadge position={badges[9]?.position} userData={badges[10]?.userData} value={badges[9]?.value} />
    </>
  )
}
