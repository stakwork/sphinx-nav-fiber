import { Instance } from '@react-three/drei'
import { ThreeEvent } from '@react-three/fiber'
import { memo, useCallback, useRef } from 'react'
import * as THREE from 'three'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { useSomeModalIsOpen } from '~/stores/useModalStore'
import { NodeExtended } from '~/types'

type Props = {
  node: NodeExtended
  highlight: boolean
  highlightColor: string
}

export const NodeInstance = memo(({ node, highlight, highlightColor }: Props) => {
  const ref = useRef<THREE.Mesh | null>(null)

  const isSomeModalOpened = useSomeModalIsOpen()

  const selectedNode = useSelectedNode()
  const setHoveredNode = useDataStore((s) => s.setHoveredNode)

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

  return (
    <Instance
      ref={ref}
      color={highlight ? highlightColor : 'white'}
      name={node.id}
      onPointerOut={onPointerOut}
      onPointerOver={onPointerIn}
      position={[node.x || 0, node.y || 0, node.z || 0]}
      scale={node.scale || 2}
      userData={node}
    />
  )
})

NodeInstance.displayName = 'CubeInstance'
