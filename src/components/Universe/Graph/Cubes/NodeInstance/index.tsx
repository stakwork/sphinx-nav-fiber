import { Instance } from '@react-three/drei'
import { ThreeEvent } from '@react-three/fiber'
import { memo, useCallback, useRef } from 'react'
import * as THREE from 'three'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { useSomeModalIsOpen } from '~/stores/useModalStore'
import { NodeExtended } from '~/types'
import { getHighlighter } from '../constants'

type Props = {
  node: NodeExtended
}

export const NodeInstance = memo(({ node }: Props) => {
  const ref = useRef<THREE.Mesh | null>(null)

  const isSomeModalOpened = useSomeModalIsOpen()

  const selectedNode = useSelectedNode()
  const setHoveredNode = useDataStore((s) => s.setHoveredNode)
  const setSelectedNode = useDataStore((s) => s.setSelectedNode)
  const categoryFilter = useDataStore((s) => s.categoryFilter)
  const searchTerm = useAppStore((s) => s.currentSearch)
  const isSelectedCategory = node.node_type === categoryFilter
  const isSelected = selectedNode?.id === node.id

  const onPointerIn = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      e.stopPropagation()

      if (isSomeModalOpened) {
        return
      }

      setHoveredNode(node)
    },
    [isSomeModalOpened, node, setHoveredNode],
  )

  const onPointerOut = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      e.stopPropagation()
      setHoveredNode(null)
    },
    [setHoveredNode],
  )

  const scale = node.scale || 2

  const { highlight, highlightColor } = getHighlighter({
    node,
    selectedNode,
    searchTerm,
  })

  return (
    <>
      <Instance
        ref={ref}
        name={node.id}
        onPointerOut={onPointerOut}
        onPointerOver={onPointerIn}
        position={[node.x || 0, node.y || 0, node.z || 0]}
        scale={scale}
        userData={node}
      />

      <Glow
        highlight={highlight}
        position={new THREE.Vector3(node?.x || 0, node?.y || 0, node?.z || 0)}
        scale={(node?.scale || 5) * 2}
        color={highlightColor}
        onClick={() => setSelectedNode(node)}
      />
    </>
  )
})

type GlowProps = {
  highlight: boolean
  color: string
  scale: number
  position: THREE.Vector3
  onClick: () => void
}

const padding = 0.4

const Glow = ({ position, highlight, color = 'green', scale = 0.5, onClick }: GlowProps) => {
  if (!highlight) {
    return null
  }

  return (
    <mesh position={position} onClick={onClick}>
      <boxGeometry args={[2 * scale + padding, 2 * scale + padding, 2 * scale + padding]} />
      <meshStandardMaterial emissive={color} emissiveIntensity={30} opacity={0.1} toneMapped={false} transparent />
    </mesh>
  )
}

NodeInstance.displayName = 'NodeInstance'
