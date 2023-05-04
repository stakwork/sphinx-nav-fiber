import { Instance, Select } from '@react-three/drei'
import { ThreeEvent } from '@react-three/fiber'
import { useCallback, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useSelectedNode } from '~/stores/useDataStore'
import { useSomeModalIsOpen } from '~/stores/useModalStore'
import { NodeExtended } from '~/types'

type Props = {
  node: NodeExtended
  highlight: boolean
  highlightColor: string
  handleSelect: (nodes: THREE.Object3D[]) => void
}

export const NodeInstance = ({ node, highlight, highlightColor, handleSelect }: Props) => {
  const ref = useRef<THREE.Mesh | null>(null)
  const [hovered, setHovered] = useState(false)

  const isSomeModalOpened = useSomeModalIsOpen()

  const selectedNode = useSelectedNode()

  const isSelected = selectedNode?.id === node.id

  const onPointerIn = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      e.stopPropagation()

      if (isSomeModalOpened) {
        return
      }

      setHovered(true)
    },
    [isSomeModalOpened],
  )

  const onPointerOut = useCallback((e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()

    setHovered(false)
  }, [])

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  return (
    <Select onChange={handleSelect}>
      <Instance
        ref={ref}
        color={highlight ? highlightColor : ''}
        name={node.id}
        onPointerOut={onPointerOut}
        onPointerOver={onPointerIn}
        position={[node.x || 0, node.y || 0, node.z || 0]}
        scale={node.scale || 2}
        userData={node}
      />
    </Select>
  )
}

NodeInstance.displayName = 'CubeInstance'
