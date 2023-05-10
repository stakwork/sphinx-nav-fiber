import { Html } from '@react-three/drei'
import styled from 'styled-components'
import { Vector3 } from 'three'
import { usePathway } from '~/components/DataRetriever'
import { Flex } from '~/components/common/Flex'
import { useDataStore } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'

type TagProps = {
  show: boolean
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
  ${(p) => !p.show && 'opacity:0;'}
`

type Props = {
  show: boolean
  value?: number | string
  position?: Vector3
  userData?: NodeExtended
}

const PathwayBadge = ({ show, position, value, userData }: Props) => {
  const setSelectedNode = useDataStore((s) => s.setSelectedNode)

  return (
    <mesh position={position} userData={userData}>
      <boxGeometry />
      <meshStandardMaterial />
      <Html center sprite={true}>
        <Tag
          justify="center"
          show={show}
          onClick={() => {
            if (userData) {
              setSelectedNode(userData)
            }
          }}
        >
          {value}
        </Tag>
      </Html>
    </mesh>
  )
}

export const RelevanceBadges = () => {
  const { badges } = usePathway()
  const show = !!badges[0]

  // explicitly never rerender these between clicks, teardown takes too long
  return (
    <>
      <PathwayBadge
        userData={badges[0]?.userData}
        show={show}
        value={badges[0]?.value}
        position={badges[0]?.position}
      />
      <PathwayBadge
        userData={badges[1]?.userData}
        show={show}
        value={badges[1]?.value}
        position={badges[1]?.position}
      />
      <PathwayBadge
        userData={badges[2]?.userData}
        show={show}
        value={badges[2]?.value}
        position={badges[2]?.position}
      />
      <PathwayBadge
        userData={badges[3]?.userData}
        show={show}
        value={badges[3]?.value}
        position={badges[3]?.position}
      />
      <PathwayBadge
        userData={badges[4]?.userData}
        show={show}
        value={badges[4]?.value}
        position={badges[4]?.position}
      />
      <PathwayBadge
        userData={badges[5]?.userData}
        show={show}
        value={badges[5]?.value}
        position={badges[5]?.position}
      />
      <PathwayBadge
        userData={badges[6]?.userData}
        show={show}
        value={badges[6]?.value}
        position={badges[6]?.position}
      />
      <PathwayBadge
        userData={badges[7]?.userData}
        show={show}
        value={badges[7]?.value}
        position={badges[7]?.position}
      />
      <PathwayBadge
        userData={badges[8]?.userData}
        show={show}
        value={badges[8]?.value}
        position={badges[8]?.position}
      />
      <PathwayBadge
        userData={badges[9]?.userData}
        show={show}
        value={badges[9]?.value}
        position={badges[9]?.position}
      />
    </>
  )
}
