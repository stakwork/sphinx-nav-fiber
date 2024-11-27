import { Plane } from '@react-three/drei'
import { useTexture } from '~/components/Universe/Graph/Cubes/Text/hooks/useTexture'

type Props = {
  url: string
  width: number
  height: number
}

export const Image = ({ url, width, height }: Props) => {
  const { texture } = useTexture(url || '')

  const uniforms = {
    u_texture: { value: texture },
    u_radius: { value: 0.5 }, // Radius of the circular mask
  }

  return (
    <>
      <mesh position={[0, 0, 0]} visible>
        <circleGeometry args={[width, 32]} />
        <meshBasicMaterial color="blue" opacity={0.5} transparent />
      </mesh>
      <Plane args={[width, height]} scale={1}>
        <shaderMaterial
          fragmentShader={`
          uniform sampler2D u_texture;
          uniform float u_radius;
          varying vec2 vUv;

          void main() {
            vec2 center = vec2(0.5, 0.5); // Center of the circle
            float dist = distance(vUv, center);
            if (dist < u_radius) {
              gl_FragColor = texture2D(u_texture, vUv);
            } else {
              discard; // Discard pixels outside the circle
            }
          }
        `}
          uniforms={uniforms}
          vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        />
      </Plane>
    </>
  )
}
