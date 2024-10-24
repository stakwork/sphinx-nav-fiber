import { Billboard, Instance } from '@react-three/drei'

type Props = {
  color: string
}

export const Point = ({ color }: Props) => (
  <>
    <Billboard follow lockX={false} lockY={false} lockZ={false}>
      <Instance color={color} />
    </Billboard>
  </>
)
