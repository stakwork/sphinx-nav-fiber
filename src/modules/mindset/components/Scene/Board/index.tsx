import { useThree } from '@react-three/fiber'
import { useEffect, useMemo } from 'react'
import { edges, edgesMention, maxTimestamp, minTimestamp, nodes, normalizeTimestamp } from '~/modules/mindset/data'
import { Node } from './Node'

type Props = {
  w: number
}

const totalDuration = 185

export const Board = ({ w = 1 }: Props) => {
  const state = useThree()

  console.log(state)

  const { width } = state.viewport
  const { camera } = state
  const xW = w

  useEffect(() => {
    const orthoCamera = camera as THREE.OrthographicCamera

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault() // Prevent default scrolling behavior

      if (event.ctrlKey) {
        // Zoom the camera when ctrlKey is pressed
        orthoCamera.zoom += event.deltaY * -0.01 // Adjust zoom level
        orthoCamera.zoom = Math.max(0.5, Math.min(orthoCamera.zoom, 5)) // Clamp zoom
      } else {
        // Move the camera left/right when ctrlKey is NOT pressed
        orthoCamera.position.x += event.deltaX * 0.01 // Horizontal movement
      }

      orthoCamera.updateProjectionMatrix() // Update projection matrix
    }

    // Add the event listener
    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      // Cleanup event listener
      window.removeEventListener('wheel', handleWheel)
    }
  }, [camera])

  console.log(width, xW)

  const rangeMin = 0
  const rangeMax = 97.52 * 10

  const positions = useMemo(
    () =>
      edges
        .filter((edge) => edge?.properties?.start && edge?.properties?.end)
        .map((edge) => {
          const st: number = (edge?.properties?.start || 0) as number
          const ed: number = (edge?.properties?.end || 0) as number

          return {
            source: edge.source,
            target: edge.target,
            xStart: normalizeTimestamp(st, minTimestamp, maxTimestamp, rangeMin, rangeMax),
            xEnd: normalizeTimestamp(ed, minTimestamp, maxTimestamp, rangeMin, rangeMax),
          }
        }),
    [rangeMin, rangeMax],
  )

  console.log(-width)

  return (
    true && (
      <>
        {nodes.map((node, i) => {
          const hasTimeStamp = positions.some((p) => p.source === nodes[i].ref_id)

          const position = hasTimeStamp ? positions.find((p) => p.source === nodes[i].ref_id)?.xStart || 0 : i * 35

          const y = hasTimeStamp ? 0 : 15

          return true ? null : (
            <Node
              key={node.ref_id}
              color="#353A46"
              height={1}
              name={node.name}
              onButtonClick={console.log}
              position={[position, y, 0]}
              type={node.node_type}
              url="logo.png"
              width={w}
            />
          )
        })}
        {edgesMention.map((e) => {
          const node = nodes.find((i) => i.ref_id === e.source)

          const x = (e.start / totalDuration) * width

          console.log(x)

          const y = -5

          return node ? (
            <Node
              key={node.ref_id}
              color="red"
              height={10}
              name={node.name}
              onButtonClick={console.log}
              position={[x, y, 0]}
              type={node.node_type}
              url="logo.png"
              width={5}
            />
          ) : null
        })}
        <mesh position={[-13, 0, 0]}>
          <circleGeometry args={[3, 64]} /> {/* Radius: Half of viewport width */}
          <meshBasicMaterial color="blue" />
        </mesh>
      </>
    )
  )
}
