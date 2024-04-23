import { Segment } from '@react-three/drei'
import { Vector3 } from 'three'

type Props = {
  start: {
    x: number
    y: number
    z: number
  }
  end: {
    x: number
    y: number
    z: number
  }
}

export const NodesLink = ({ start, end }: Props) => {
  const startPoint = new Vector3(start.x, start.y, start.z)
  const endPoint = new Vector3(end.x, end.y, end.z)

  return <Segment color="0xFFFFFF" end={endPoint} start={startPoint} />
}
