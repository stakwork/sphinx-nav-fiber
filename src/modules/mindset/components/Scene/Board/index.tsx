// @ts-nocheck
// @ts-ignore
/* eslint-disable react/prop-types */
import { Canvas } from '@react-three/fiber'
import { useRef, useState } from 'react'
import * as THREE from 'three'

export const Board = () => {
  const data = Array.from({ length: 20 }, (_, i) => ({
    position: [i * 3, 0, 0], // Layered left to right
    color: i % 2 === 0 ? 'red' : 'blue',
  }))

  const groupRef = useRef()
  const cameraRef = useRef()
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const isDragging = useRef(false)
  const dragStart = useRef({ x: 0, y: 0 })
  const raycaster = new THREE.Raycaster()
  const pointer = new THREE.Vector2()

  const handleWheel = (event) => {
    event.nativeEvent.preventDefault()

    // Convert pointer position to normalized device coordinates
    const rect = event.nativeEvent.target.getBoundingClientRect()

    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

    // Use raycaster to find the point in the world space
    raycaster.setFromCamera(pointer, cameraRef.current)

    const intersects = raycaster.intersectObjects(groupRef.current.children, true)

    if (intersects.length > 0) {
      const targetPoint = intersects[0].point

      const zoomFactor = event.deltaY > 0 ? 1.1 : 0.9 // Adjust zoom sensitivity

      setScale((prevScale) => Math.min(Math.max(prevScale * zoomFactor, 0.5), 5)) // Clamp scale between 0.5 and 5

      // Update position to zoom toward target point
      setPosition((prevPosition) => ({
        x: prevPosition.x + (targetPoint.x - prevPosition.x) * (1 - zoomFactor),
        y: prevPosition.y + (targetPoint.y - prevPosition.y) * (1 - zoomFactor),
      }))
    }
  }

  const handlePointerDown = (event) => {
    isDragging.current = true

    dragStart.current = {
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    }
  }

  const handlePointerMove = (event) => {
    if (isDragging.current) {
      setPosition({
        x: event.clientX - dragStart.current.x,
        y: event.clientY - dragStart.current.y,
      })
    }
  }

  const handlePointerUp = () => {
    isDragging.current = false
  }

  return (
    <Canvas>
      {/* Add an Orthographic camera for 2D interaction */}
      <orthographicCamera ref={cameraRef} makeDefault position={[0, 0, 10]} zoom={100} />
      <ambientLight intensity={0.5} />
      <group
        ref={groupRef}
        onPointerDown={handlePointerDown}
        onPointerLeave={handlePointerUp}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onWheel={handleWheel}
        position={[position.x / scale, -position.y / scale, 0]}
        scale={[scale, scale, 1]}
      >
        <Nodes data={data} />
      </group>
    </Canvas>
  )
}

const Nodes = ({ data }) => (
  <group>
    {data.map((node, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Node key={index} color={node.color} position={node.position} />
    ))}
  </group>
)

const Node = ({ position, color }) => (
  <mesh position={position}>
    <circleGeometry args={[5, 32]} />
    <meshStandardMaterial color={color} />
  </mesh>
)
