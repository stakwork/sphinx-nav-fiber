import { Html } from '@react-three/drei'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'

const Tag = styled(Flex)`
  text-align: center;
  width: 300px;
  height: 300px;
  background: white;
  border-radius: 100%;
  font-size: 150pt;
  transform: translate3d(calc(50% + 300px), calc(50% + 300px), 0);
`

type Props = {
  show: boolean
  value: number | string
}

export const PathwayBadge = ({ show, value }: Props) => {
  if (!show) {
    return null
  }

  return (
    <Html distanceFactor={10}>
      <Tag justify="center">{value}</Tag>
    </Html>
  )
}
