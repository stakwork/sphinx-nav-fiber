import { Billboard, Plane, Svg, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import { memo, useEffect, useRef } from 'react'
import { Mesh, MeshBasicMaterial, Vector3 } from 'three'
import { Icons } from '~/components/Icons'
import { useNodeTypes } from '~/stores/useDataStore'
import { useGraphStore } from '~/stores/useGraphStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { NodeExtended } from '~/types'
import { colors } from '~/utils/colors'
import { removeEmojis } from '~/utils/removeEmojisFromText'
import { truncateText } from '~/utils/truncateText'
import { fontProps } from './constants'
import { useTexture } from './hooks/useTexture'

const COLORS_MAP = [
  '#fff',
  '#9747FF',
  '#00887A',
  '#0098A6',
  '#0288D1',
  '#33691E',
  '#465A65',
  '#512DA7',
  '#5C6BC0',
  '#5D4038',
  '#662C00',
  '#689F39',
  '#6B1B00',
  '#750000',
  '#78909C',
  '#7E57C2',
  '#8C6E63',
  '#AA47BC',
  '#BF360C',
  '#C2175B',
  '#EC407A',
  '#EF6C00',
  '#F5511E',
  '#FF9696',
  '#FFC064',
  '#FFCD29',
  '#FFEA60',
]

type Props = {
  node: NodeExtended
  hide?: boolean
  ignoreDistance: boolean
}

function splitStringIntoThreeParts(text: string): string {
  const truncatedText = truncateText(text, 30)
  const words = truncatedText.split(' ')

  if (words.length <= 5) {
    return truncatedText
  }

  const third = Math.ceil(words.length / 3)
  const twoThirds = third * 2

  const firstPart = words.slice(0, third).join(' ')
  const secondPart = words.slice(third, twoThirds).join(' ')
  const thirdPart = words.slice(twoThirds).join(' ')

  return `${firstPart}\n${secondPart}\n${thirdPart}`
}

export const TextNode = memo(({ node, hide, ignoreDistance }: Props) => {
  const svgRef = useRef<Mesh | null>(null)
  const ringRef = useRef<Mesh | null>(null)
  const circleRef = useRef<Mesh | null>(null)

  const nodePositionRef = useRef(new Vector3())

  const { texture } = useTexture(node.properties?.image_url || '')

  const { normalizedSchemasByType, getNodeKeysByType } = useSchemaStore((s) => s)

  useFrame(({ camera, clock }) => {
    const { selectedNode, hoveredNode, activeEdge } = useGraphStore.getState()

    const checkDistance = () => {
      const nodePosition = nodePositionRef.current.setFromMatrixPosition(ringRef.current!.matrixWorld)

      if (ringRef.current) {
        ringRef.current.visible = ignoreDistance ? true : nodePosition.distanceTo(camera.position) < 2500
      }

      // Set visibility based on distance
    }

    const isActive =
      node.ref_id === selectedNode?.ref_id ||
      node.ref_id === hoveredNode?.ref_id ||
      activeEdge?.target === node.ref_id ||
      activeEdge?.source === node.ref_id

    if (isActive) {
      if (ringRef.current) {
        ringRef.current.visible = true
      }

      const scale = 3 + 0.2 * Math.sin(clock.getElapsedTime() * 2) // Adjust frequency and amplitude

      if (circleRef.current) {
        circleRef.current.visible = true
        circleRef.current.scale.set(scale, scale, scale)
      }

      return
    }

    if (circleRef.current) {
      circleRef.current.visible = false
    }

    checkDistance()
  })

  useEffect(() => {
    if (!ringRef.current) {
      return
    }

    gsap.fromTo(
      ringRef.current.scale, // Target
      { x: 1, y: 1, z: 1 }, // From values
      {
        x: 6,
        y: 6,
        z: 6, // To values
        duration: 1.5, // Animation duration
        yoyo: true,
        repeat: 1,
      },
    )
  }, [ringRef])

  const nodeTypes = useNodeTypes()

  const primaryColor = normalizedSchemasByType[node.node_type]?.primary_color
  const primaryIcon = normalizedSchemasByType[node.node_type]?.icon

  const color = primaryColor ?? (COLORS_MAP[nodeTypes.indexOf(node.node_type)] || colors.white)

  const Icon = primaryIcon ? Icons[primaryIcon] : null
  const iconName = Icon ? primaryIcon : 'NodesIcon'
  const keyProperty = getNodeKeysByType(node.node_type) || ''

  const sanitizedNodeName =
    keyProperty && node?.properties ? removeEmojis(String(node?.properties[keyProperty] || '')) : ''

  const uniforms = {
    u_texture: { value: texture },
    u_radius: { value: 0.5 }, // Radius of the circular mask
  }

  return (
    <Billboard follow lockX={false} lockY={false} lockZ={false} name="billboard" userData={node}>
      <mesh ref={ringRef} name={node.id} userData={node} visible={!hide}>
        <mesh ref={circleRef} position={[0, 0, -2]} visible={false}>
          <circleGeometry args={[30, 32]} />
          <meshBasicMaterial color={color} opacity={0.5} transparent />
        </mesh>

        {node.properties?.image_url && ['Person', 'Episode'].includes(node.node_type) && texture ? (
          <Plane args={[10 * 2, 10 * 2]} scale={2}>
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
        ) : (
          <Svg
            ref={svgRef}
            name="svg"
            onUpdate={(svg) => {
              svg.traverse((child) => {
                if (child instanceof Mesh) {
                  // Apply dynamic color to meshes
                  // eslint-disable-next-line no-param-reassign
                  child.material = new MeshBasicMaterial({ color })
                }
              })
            }}
            position={[-15, 15, 0]}
            scale={2}
            src={`svg-icons/${iconName}.svg`}
            strokeMaterial={{ color: 'yellow' }}
            userData={node}
          />
        )}

        {sanitizedNodeName && (
          <Text
            color={color}
            fillOpacity={1}
            name="text"
            position={[0, -65, 0]}
            scale={20}
            userData={node}
            {...fontProps}
          >
            {splitStringIntoThreeParts(sanitizedNodeName)}
          </Text>
        )}
      </mesh>
    </Billboard>
  )
})

TextNode.displayName = 'TextNode'
