import { Billboard, Plane, Svg, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useRef } from 'react'
import { DoubleSide, Mesh, MeshBasicMaterial, Vector3 } from 'three'
import { Icons } from '~/components/Icons'
import { useTraceUpdate } from '~/hooks/useTraceUpdate'
import { useGraphStore } from '~/stores/useGraphStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { NodeExtended } from '~/types'
import { removeEmojis } from '~/utils/removeEmojisFromText'
import { truncateText } from '~/utils/truncateText'
import { fontProps } from './constants'
import { useTexture } from './hooks/useTexture'

type Props = {
  node: NodeExtended
  color: string
  hide?: boolean
  ignoreDistance: boolean
  scale: number
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

export const TextNode = memo(
  (props: Props) => {
    const { node, hide, ignoreDistance, color } = props

    const svgRef = useRef<Mesh | null>(null)
    const nodeRef = useRef<Mesh | null>(null)
    const eventHandlerRef = useRef<Mesh | null>(null)
    const circleRef = useRef<Mesh | null>(null)

    useTraceUpdate(props)

    const nodePositionRef = useRef(new Vector3())

    const { texture } = useTexture(node.properties?.image_url || '')

    const { normalizedSchemasByType, getNodeKeysByType } = useSchemaStore((s) => s)

    const keyProperty = getNodeKeysByType(node.node_type) || ''

    const sanitizedNodeName =
      keyProperty && node?.properties ? removeEmojis(String(node?.properties[keyProperty] || '')) : node.name || ''

    useFrame(({ camera, clock }) => {
      if (!nodeRef.current || !eventHandlerRef.current) {
        return
      }

      const {
        selectedNode,
        hoveredNode,
        activeEdge,
        searchQuery,
        selectedNodeTypes,
        selectedLinkTypes,
        hoveredNodeSiblings,
      } = useGraphStore.getState()

      const checkDistance = () => {
        const nodePosition = nodePositionRef.current.setFromMatrixPosition(nodeRef.current!.matrixWorld)

        if (nodeRef.current) {
          nodeRef.current.visible = ignoreDistance ? true : nodePosition.distanceTo(camera.position) < 1500
        }
      }

      if (searchQuery.length < 3 && !selectedNodeTypes.length && !selectedLinkTypes.length) {
        eventHandlerRef.current.visible = true
        checkDistance()
      } else {
        nodeRef.current.visible = false

        eventHandlerRef.current.visible = false
      }

      const isActive =
        node.ref_id === selectedNode?.ref_id ||
        node.ref_id === hoveredNode?.ref_id ||
        activeEdge?.target === node.ref_id ||
        activeEdge?.source === node.ref_id ||
        (searchQuery && sanitizedNodeName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        selectedNodeTypes.includes(node.node_type) ||
        hoveredNodeSiblings.includes(node.ref_id) ||
        node.edgeTypes?.some((i) => selectedLinkTypes.includes(i))

      if (isActive) {
        if (nodeRef.current && !nodeRef.current.visible) {
          nodeRef.current.visible = true
        }

        const elapsedTime = clock.getElapsedTime()
        const cycleTime = 2 // Duration of one cycle (in seconds)

        const t = (elapsedTime % cycleTime) / cycleTime // Normalize time to a 0-1 range within the cycle
        const scale = 1 + t * 2 // Grow from scale 3 to 8
        const opacity = 1 - t // Fade out as it grows

        if (circleRef.current && !circleRef.current.visible) {
          circleRef.current.visible = true
          circleRef.current.scale.set(scale, scale, scale)

          // Ensure the material is of the correct type and set the opacity
          const { material } = circleRef.current

          if (material instanceof MeshBasicMaterial) {
            material.opacity = opacity
          }
        }

        return
      }

      if (circleRef.current?.visible) {
        circleRef.current.visible = false
      }
    })

    const primaryColor = normalizedSchemasByType[node.node_type]?.primary_color
    const primaryIcon = normalizedSchemasByType[node.node_type]?.icon

    const nodeColor = primaryColor ?? color

    const Icon = primaryIcon ? Icons[primaryIcon] : null
    const iconName = Icon ? primaryIcon : 'NodesIcon'

    const uniforms = {
      u_texture: { value: texture },
      u_radius: { value: 0.5 }, // Radius of the circular mask
    }

    return (
      <Billboard follow lockX={false} lockY={false} lockZ={false} name="billboard" userData={node}>
        <mesh ref={nodeRef} name={node.ref_id} userData={node} visible={!hide}>
          <mesh ref={eventHandlerRef} name="event-handler">
            <boxGeometry args={[40, 40, 40]} />
            <meshStandardMaterial opacity={0} transparent />
          </mesh>
          <mesh ref={circleRef} position={[0, 0, -2]}>
            <ringGeometry args={[29, 30, 32]} /> {/* Inner radius, Outer radius, Segments */}
            <meshBasicMaterial
              color={nodeColor}
              opacity={0.5}
              side={DoubleSide} // Makes the ring visible from both sides
              transparent
            />
          </mesh>

          {node.properties?.image_url && texture ? (
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
                    child.material = new MeshBasicMaterial({ color: nodeColor })
                  }
                })
              }}
              position={[-15, 15, 0]}
              scale={2}
              src={`/svg-icons/${iconName}.svg`}
              userData={node}
            />
          )}

          {sanitizedNodeName && (
            <Text
              color={nodeColor}
              fillOpacity={1}
              name="text"
              position={[0, -65, 0]}
              scale={1}
              userData={node}
              {...fontProps}
              fontSize={20}
            >
              {splitStringIntoThreeParts(sanitizedNodeName)}
            </Text>
          )}
        </mesh>
      </Billboard>
    )
  },
  (prevProps, nextProps) =>
    prevProps.hide === nextProps.hide &&
    prevProps.ignoreDistance === nextProps.ignoreDistance &&
    prevProps.node.ref_id === nextProps.node.ref_id,
)

TextNode.displayName = 'TextNode'
