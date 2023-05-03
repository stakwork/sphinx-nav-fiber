import { ThreeEvent, useFrame } from '@react-three/fiber'
import { Select } from '@react-three/postprocessing'
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { Mesh } from 'three'
import { Transcript } from '~/components/App/SideBar/Transcript'
import { View } from '~/components/App/SideBar/View'
import { usePathway } from '~/components/DataRetriever'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { useSomeModalIsOpen } from '~/stores/useModalStore'
import { NodeExtended } from '~/types'
import { HtmlPanel } from './components/HtmlPanel'
import { PathwayBadge } from './components/PathwayBadge'
import { Portal } from './components/Portal'
import { Tooltip } from './components/Tooltip'
import { boxGeometry } from './constants'
import { useMaterial } from './hooks/useMaterial'

const getScale = (node: NodeExtended) => {
  switch (node.node_type) {
    case 'guest':
    case 'episode':
      return 2
    case 'show':
      return 3
    default:
      return 1
  }
}

type Props = {
  node: NodeExtended
  highlight: boolean
  highlightColor: string
}

export const Cube = memo(({ node, highlight, highlightColor }: Props) => {
  const ref = useRef<Mesh | null>(null)
  const [hovered, setHovered] = useState(false)
  const [scale] = useState(node.scale ? node.scale : getScale(node))

  const isSomeModalOpened = useSomeModalIsOpen()

  const categoryFilter = useDataStore((s) => s.categoryFilter)

  const transcriptIsOpen = useAppStore((s) => s.transcriptIsOpen)

  const selectedNode = useSelectedNode()

  const material = useMaterial(node.image_url || 'noimage.jpeg', highlight, highlightColor)

  const isSelected = selectedNode?.id === node.id
  const isSelectedCategory = node.node_type === categoryFilter

  useFrame(() => {
    if (selectedNode) {
      material.toneMapped = false
    }

    ref.current?.position.set(node.x || 0, node.y || 0, node.z || 0)
  })

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

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

  const { currentNodeIndex } = usePathway()

  return (
    <>
      <Select enabled={selectedNode ? isSelected : isSelectedCategory}>
        <mesh
          ref={ref}
          geometry={boxGeometry}
          material={material}
          name={node.id}
          onPointerOut={onPointerOut}
          onPointerOver={onPointerIn}
          scale={scale}
          userData={node}
        >
          {isSelected && (
            <HtmlPanel>
              <View isSelectedView />
            </HtmlPanel>
          )}

          {isSelected && transcriptIsOpen && (
            <HtmlPanel intensity={2} speed={4} withTransacript>
              <Transcript />
            </HtmlPanel>
          )}

          <PathwayBadge show={currentNodeIndex >= 0} value={currentNodeIndex + 1} />

          {hovered && (
            <Portal>
              <Tooltip node={node} />
            </Portal>
          )}
        </mesh>
      </Select>
    </>
  )
})

Cube.displayName = 'Cube'
