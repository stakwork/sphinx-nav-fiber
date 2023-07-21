import { Float, Text, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useMemo, useRef, useState } from 'react'
import { BufferGeometry, Group, Mesh, Shape, Vector3 } from 'three'

import { useAppStore } from '~/stores/useAppStore'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'

import { colors } from '~/utils/colors'
import { fontProps } from '../../Cubes/Text/constants'
import { setPointerHoverStyle, stopBubbling } from '../constants'
import { AudioPlayer } from './AudioPlayer'
import { Boost } from './Boost'
import { VideoPlayer } from './VideoPlayer'
import { getNodeSearchableName, panelHeight, panelWidth } from './constants'

export const Panel = () => {
  const panelRef = useRef<Group>(null)

  const panelTextRef = useRef<Mesh>(null)

  const [hovered, setHovered] = useState('')

  const setSelectedNode = useDataStore((s) => s.setSelectedNode)

  const setCurrentSearch = useAppStore((s) => s.setCurrentSearch)

  const offset = useMemo(() => new Vector3(0, 40, -100), []) // Offset from the camera's position

  const selectedNode = useSelectedNode()

  const closeTexture = useTexture('icons/close_white.svg')

  useEffect(() => {
    console.error('hovered', hovered)
    setPointerHoverStyle(!!hovered)
  }, [hovered])

  useFrame(({ camera }) => {
    if (panelRef.current) {
      // Create a new copy of the offset
      const offsetCopy = offset.clone()

      // Apply the camera's rotation to the offset copy
      offsetCopy.applyQuaternion(camera.quaternion)

      // Copy the camera's position and rotation to the panel
      panelRef.current.position.copy(camera.position)
      panelRef.current.quaternion.copy(camera.quaternion)

      // Add the rotated offset to the panel's position
      panelRef.current.position.add(offsetCopy)
    }
  })

  const searchableName = useMemo(() => {
    if (selectedNode) {
      return getNodeSearchableName(selectedNode)
    }

    return ''
  }, [selectedNode])

  const panelText = useMemo(() => {
    let text = selectedNode?.node_type || ''

    if (hovered === 'boost') {
      text = 'boost node'
    } else if (hovered === 'search') {
      text = 'search'
    }

    return text.toUpperCase()
  }, [selectedNode, hovered])

  const cornerRadius = 0.2

  const roundedRectangleGeometry = useMemo(() => {
    const shape = new Shape()

    const halfWidth = panelWidth / 2
    const halfHeight = panelHeight / 2
    const x = -halfWidth
    const y = -halfHeight

    shape.moveTo(x + cornerRadius, y)
    shape.lineTo(x + panelWidth - cornerRadius, y)
    shape.quadraticCurveTo(x + panelWidth, y, x + panelWidth, y + cornerRadius)
    shape.lineTo(x + panelWidth, y + panelHeight - cornerRadius)
    shape.quadraticCurveTo(x + panelWidth, y + panelHeight, x + panelWidth - cornerRadius, y + panelHeight)
    shape.lineTo(x + cornerRadius, y + panelHeight)
    shape.quadraticCurveTo(x, y + panelHeight, x, y + panelHeight - cornerRadius)
    shape.lineTo(x, y + cornerRadius)
    shape.quadraticCurveTo(x, y, x + cornerRadius, y)

    return new BufferGeometry().setFromPoints(shape.getPoints())
  }, [])

  return (
    <group
      ref={panelRef}
      onClick={stopBubbling}
      onPointerDown={stopBubbling}
      onPointerUp={stopBubbling}
      scale={selectedNode ? 1 : 0}
    >
      <group position-y={-80}>
        <VideoPlayer />
      </group>

      <Float floatIntensity={2} speed={6}>
        {/* outline */}
        <lineSegments geometry={roundedRectangleGeometry}>
          <lineBasicMaterial color={colors.white} linewidth={2} />
        </lineSegments>

        <mesh>
          <planeGeometry args={[panelWidth, panelHeight]} />
          <meshBasicMaterial color={colors.black} opacity={0.8} transparent />
        </mesh>

        <mesh
          onPointerDown={() => {
            setCurrentSearch(searchableName || '')
          }}
          onPointerEnter={() => {
            setHovered('search')
          }}
          onPointerLeave={() => {
            setHovered('')
          }}
          position-z={3}
        >
          <planeGeometry args={[panelWidth, panelHeight]} />
          <meshBasicMaterial depthTest={false} opacity={0} transparent />
        </mesh>

        <group position-y={-12}>
          <AudioPlayer />
        </group>

        <group position-z={1.5}>
          <group position-y={-0.1}>
            <Text
              {...fontProps}
              fontSize={4}
              lineHeight={0.9}
              maxWidth={60}
              outlineWidth={0.1}
              scale={hovered === 'search' ? 1.04 : 1}
              textAlign="center"
            >
              {searchableName}
            </Text>
          </group>

          <group position-y={9}>
            <Text ref={panelTextRef} {...fontProps} fontSize={2.5} position-y={-0.2}>
              {panelText}
            </Text>

            <group position-x={panelWidth / 2 - 4} scale={2}>
              <mesh
                onClick={(e) => e.stopPropagation()}
                onPointerDown={() => {
                  setSelectedNode(null)
                }}
                onPointerEnter={() => {
                  setHovered('close')
                }}
                onPointerLeave={() => {
                  setHovered('')
                }}
                onPointerUp={(e) => e.stopPropagation()}
              >
                <circleGeometry args={[1.5, 40]} />
                <meshBasicMaterial alphaMap={closeTexture} color={colors.white} map={closeTexture} transparent />
              </mesh>
            </group>
            <Boost setHovered={(h) => (h ? setHovered('boost') : setHovered(''))} />
          </group>
        </group>
      </Float>
    </group>
  )
}
