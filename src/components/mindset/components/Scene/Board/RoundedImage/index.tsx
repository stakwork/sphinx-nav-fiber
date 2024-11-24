import { Image } from '@react-three/drei'

type Props = {
  position: [number, number, number]
  scale: [number, number, number]
  url: string
}

export const RoundedImage = ({ position, scale, url }: Props) => (
  <group position={position}>
    {/* Circle mask */}
    <mesh scale={scale}>
      <circleGeometry args={[0.75, 32]} /> {/* Adjust radius as needed */}
      <meshBasicMaterial color="white" />
    </mesh>

    {/* Image */}
    <Image
      position={[0, 0, 0.01]} // Slightly above the circle mask
      url={url}
    />
  </group>
)
