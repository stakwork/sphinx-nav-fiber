import { Instance } from '@react-three/drei'
import { ThreeEvent } from '@react-three/fiber'
import { memo, useCallback, useRef, useState } from 'react'
import * as THREE from 'three'
import { useSelectedNode } from '~/stores/useDataStore'
import { useSomeModalIsOpen } from '~/stores/useModalStore'
import { NodeExtended } from '~/types'

type Props = {
  node: NodeExtended
  highlight: boolean
  highlightColor: string
}

export const CubeInstance = memo(({ node, highlight, highlightColor }: Props) => {
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

  return (
    <Instance
      ref={ref}
      name={node.id}
      onPointerOut={onPointerOut}
      onPointerOver={onPointerIn}
      position={[node.x || 0, node.y || 0, node.z || 0]}
      scale={hovered && !isSelected ? 1.5 : 1}
      userData={node}
    />
  )
})

CubeInstance.displayName = 'CubeInstance'
