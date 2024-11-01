import { Billboard, Instance } from '@react-three/drei'

type Props = {
  color: string
  scale: number
}

export const Point = ({ color, scale }: Props) => (
  <Billboard follow lockX={false} lockY={false} lockZ={false}>
    <Instance color={color} scale={scale} />
  </Billboard>
)
