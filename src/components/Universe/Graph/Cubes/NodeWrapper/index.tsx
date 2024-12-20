import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import { memo, useRef } from 'react'
import { Mesh, Vector3 } from 'three'
import { useGraphStore } from '~/stores/useGraphStore'
import { NodeExtended } from '~/types'
import { TextNode } from '../Text/index'

type Props = {
  node: NodeExtended
  color: string
  scale: number
  index: number
  stopFrames: boolean
}

const offset = { x: 20, y: 20 }

export const NodeWrapper = memo(
  (props: Props) => {
    const { node, color, index, stopFrames } = props
    const simulation = useGraphStore((s) => s.simulation)

    const finishedSimulationCircle = useRef<boolean>(false)

    const wrapperRef = useRef<Mesh | null>(null)

    useFrame(({ camera, size }) => {
      if (stopFrames) {
        return
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
          const worldPosition = ndc.unproject(camera)

          // Maintain a fixed distance from the camera
          const distanceFromCamera = 5
          const direction = worldPosition.sub(camera.position).normalize()
          const fixedPosition = camera.position.clone().add(direction.multiplyScalar(distanceFromCamera))

          wrapperRef.current.position.copy(fixedPosition)

          // Store the largest dimension as the "size" of the mesh

          wrapperRef.current.scale.set(0.1, 0.1, 0.1)

          wrapperRef.current.visible = false
        }

        if (simulationNode.fx && !finishedSimulationCircle.current) {
          wrapperRef.current.visible = true
          finishedSimulationCircle.current = true

          gsap.to(wrapperRef.current.position, {
            x: simulationNode.fx, // Destination X coordinate
            y: simulationNode.fy, // Destination Y coordinate
            z: simulationNode.fz, // Destination Z coordinate
            duration: 4, // Animation duration in seconds
            ease: 'power2.in', // Easing function
          })

          gsap.to(wrapperRef.current.scale, {
            x: 1, // Destination X coordinate
            y: 1, // Destination Y coordinate
            z: 1, // Destination Z coordinate
            duration: 4.5, // Animation duration in seconds
            ease: 'power2.in', // Easing function
          })
        }
      }
    })

    return (
      <mesh key={node.ref_id} ref={wrapperRef} name="wr2" scale={node.scale || 1} userData={node}>
        <boxGeometry args={[40, 40, 40]} />
        <meshStandardMaterial opacity={0} transparent />
        <TextNode key={node.ref_id} color={color} ignoreDistance={false} node={node} scale={node.scale || 1} />
      </mesh>
    )
  },
  (prevProps, nextProps) => prevProps.node.ref_id === nextProps.node.ref_id,
)

NodeWrapper.displayName = 'NodeWrapper'
