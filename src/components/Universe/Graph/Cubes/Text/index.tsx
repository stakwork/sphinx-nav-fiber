import { Billboard, Plane, Svg, Text } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { memo, useRef } from 'react'
import { Mesh, MeshBasicMaterial, Vector3 } from 'three'
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
  index: number
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

const offset = { x: 20, y: 20 }

export const TextNode = memo(
  (props: Props) => {
    const { node, hide, ignoreDistance, color, index } = props
    const simulation = useGraphStore((s) => s.simulation)
    const positionAnimationRef = useRef<GSAPTween | null>(null)
    const scaleAnimationRef = useRef<GSAPTween | null>(null)

    const finishedSimulationCircle = useRef<boolean>(false)

    const svgRef = useRef<Mesh | null>(null)
    const ringRef = useRef<Mesh | null>(null)
    const circleRef = useRef<Mesh | null>(null)
    const wrapperRef = useRef<Mesh | null>(null)
    const { camera: perspectiveCamera, size } = useThree()

    useTraceUpdate(props)

    const nodePositionRef = useRef(new Vector3())

    const { texture } = useTexture(node.properties?.image_url || '')

    const { normalizedSchemasByType, getNodeKeysByType } = useSchemaStore((s) => s)

    useFrame(({ camera, clock }) => {
      const { selectedNode, hoveredNode, activeEdge } = useGraphStore.getState()

      const checkDistance = () => {
        const nodePosition = nodePositionRef.current.setFromMatrixPosition(ringRef.current!.matrixWorld)

        if (ringRef.current) {
          ringRef.current.visible = ignoreDistance ? true : nodePosition.distanceTo(camera.position) < 1500
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
        circleRef.current.visible = true
      }

      if (finishedSimulationCircle.current) {
        checkDistance()
      }

      if (wrapperRef.current && simulation) {
        const simulationNode = simulation.nodes()[index]

        if (!simulationNode) {
          return
        }

        if (!finishedSimulationCircle.current) {
          // Define the NDC coordinates for the fixed position
          const ndc = new Vector3(
            -1 + (offset.x * 2) / size.width, // Adjust for left offset
            1 - (offset.y * 2) / size.height, // Adjust for top offset
            0, // Near clipping plane
          )

          // Convert NDC to world space
          const worldPosition = ndc.unproject(perspectiveCamera)

          // Maintain a fixed distance from the camera
          const distanceFromCamera = 5
          const direction = worldPosition.sub(perspectiveCamera.position).normalize()
          const fixedPosition = perspectiveCamera.position.clone().add(direction.multiplyScalar(distanceFromCamera))

          wrapperRef.current.position.copy(fixedPosition)

          // Store the largest dimension as the "size" of the mesh

          wrapperRef.current.scale.set(0.1, 0.1, 0.1)

          wrapperRef.current.visible = false
        }

        if (simulationNode.fx && !finishedSimulationCircle.current) {
          wrapperRef.current.visible = true
          finishedSimulationCircle.current = true
          positionAnimationRef?.current?.kill()
          scaleAnimationRef?.current?.kill()

          positionAnimationRef.current = gsap.to(wrapperRef.current.position, {
            x: simulationNode.fx, // Destination X coordinate
            y: simulationNode.fy, // Destination Y coordinate
            z: simulationNode.fz, // Destination Z coordinate
            duration: 4, // Animation duration in seconds
            ease: 'power2.in', // Easing function
          })

          scaleAnimationRef.current = gsap.to(wrapperRef.current.scale, {
            x: 1, // Destination X coordinate
            y: 1, // Destination Y coordinate
            z: 1, // Destination Z coordinate
            duration: 4.5, // Animation duration in seconds
            ease: 'power2.in', // Easing function
          })
        }
      }
    })

    const primaryColor = normalizedSchemasByType[node.node_type]?.primary_color
    const primaryIcon = normalizedSchemasByType[node.node_type]?.icon

    const nodeColor = primaryColor ?? color

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
      <mesh key={node.ref_id} ref={wrapperRef} name="wr2" scale={node.scale || 1} userData={node}>
        <boxGeometry args={[40, 40, 40]} />
        <meshStandardMaterial opacity={0} transparent />
        <Billboard follow lockX={false} lockY={false} lockZ={false} name="billboard" userData={node}>
          <mesh ref={ringRef} name={node.ref_id} userData={node} visible={!hide}>
            <mesh ref={circleRef} position={[0, 0, -2]} visible={false}>
              <circleGeometry args={[30, 32]} />
              <meshBasicMaterial color={nodeColor} opacity={0.5} transparent />
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
      </mesh>
    )
  },
  (prevProps, nextProps) =>
    prevProps.hide === nextProps.hide &&
    prevProps.ignoreDistance === nextProps.ignoreDistance &&
    prevProps.node.ref_id === nextProps.node.ref_id,
)

TextNode.displayName = 'TextNode'
