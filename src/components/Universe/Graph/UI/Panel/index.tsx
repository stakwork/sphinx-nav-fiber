import { Float, Text, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Color, Group, Mesh, Vector3 } from 'three'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { fontProps } from '../../Cubes/Text/constants'
import { getNodeSearchableName } from './constants'

// The Panel component, will always stay at the top of the screen

const width = 40
const height = 10

// Define custom layer IDs as constants
const TOP_LAYER = 1 << 10 // Custom layer ID for the top layer

const renderOrder = Infinity

const panelColor = new Color('blue')
const white = new Color('white')
const boostColor = new Color('#49c998')

export const Panel = () => {
  const panelRef = useRef<Group>(null)

  const panelTextRef = useRef<Mesh>(null)
  const boostIconRef = useRef<Mesh>(null)

  const panelBoardRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [boostHovered, setBoostHovered] = useState(false)

  const showSelectionGraph = useDataStore((s) => s.showSelectionGraph)
  const setCurrentSearch = useAppStore((s) => s.setCurrentSearch)
  const setGuiRef = useDataStore((s) => s.setGuiRef)

  const offset = useMemo(() => {
    const y = 40
    return new Vector3(0, y, -100)
  }, [showSelectionGraph]) // Offset from the camera's position

  const selectedNode = useSelectedNode()

  const boltTexture = useTexture('icons/bolt_white.svg')
  const closeTexture = useTexture('icons/close_white.svg')

  useLayoutEffect(() => {
    setGuiRef(panelRef)
  }, [])

  useEffect(() => {
    document.body.style.cursor = hovered || boostHovered ? 'pointer' : 'auto'
  }, [hovered, boostHovered])

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
    if (boostHovered) {
      text = 'boost node'
    } else if (hovered) {
      text = 'search'
    }

    return text.toUpperCase()
  }, [selectedNode, hovered, boostHovered])

  return (
    <group ref={panelRef} visible={!!selectedNode}>
      <Float floatIntensity={10} speed={6}>
        <mesh
          renderOrder={renderOrder}
          ref={panelBoardRef}
          receiveShadow
          onPointerEnter={() => {
            setHovered(true)
          }}
          onPointerLeave={() => {
            setHovered(false)
          }}
          onPointerDown={() => {
            setCurrentSearch(searchableName || '')
          }}
        >
          <planeGeometry args={[width, height]} />
          <meshStandardMaterial color={panelColor} transparent opacity={hovered ? 0.9 : 0.4} />
        </mesh>

        <group position-z={2}>
          <group position-y={-0.1}>
            <Text renderOrder={renderOrder} {...fontProps} lineHeight={0.5} fontSize={4}>
              {searchableName}
            </Text>
          </group>

          <group position-y={9}>
            <Text position-y={-0.2} ref={panelTextRef} renderOrder={renderOrder} {...fontProps} fontSize={2.5}>
              {panelText}
            </Text>

            <group position-x={width / 2 - 4} scale={2}>
              <mesh>
                <circleGeometry args={[1.5, 40]} />
                <meshBasicMaterial color={white} map={closeTexture} alphaMap={closeTexture} transparent />
              </mesh>
            </group>

            <group position-x={-(width / 2) + 4} scale={2}>
              <mesh visible={boostHovered}>
                <circleGeometry args={[1.8, 30]} />
                <meshBasicMaterial color={boostColor} />
              </mesh>

              <mesh
                renderOrder={renderOrder}
                ref={boostIconRef}
                onPointerEnter={() => {
                  setBoostHovered(true)
                }}
                onPointerLeave={() => {
                  setBoostHovered(false)
                }}
              >
                <circleGeometry args={[1.5, 40]} />
                <meshBasicMaterial
                  color={boostHovered ? white : boostColor}
                  map={boltTexture}
                  alphaMap={boltTexture}
                  transparent
                />
              </mesh>
            </group>
          </group>
        </group>
      </Float>
    </group>
  )
}
