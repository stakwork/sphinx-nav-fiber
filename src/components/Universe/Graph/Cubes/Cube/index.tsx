import { Text } from '@react-three/drei'
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
      return 1.5
  }
}

type Props = {
  node: NodeExtended
  highlight: boolean
  highlightColor: string
}

const fontProps = {
  font: '/Inter-Bold.woff',
  fontSize: 2.5,
  letterSpacing: -0.05,
  lineHeight: 1,
  'material-toneMapped': false,
}

export const Cube = memo(({ node, highlight, highlightColor }: Props) => {
  const ref = useRef<Mesh | null>(null)
  const [hovered, setHovered] = useState(false)
  const [scale] = useState(node.scale ? node.scale : getScale(node))

  const [categoryFilter, selectedTimestamp] = useDataStore((s) => [s.categoryFilter, s.selectedTimestamp])

  const isSomeModalOpened = useSomeModalIsOpen()

  const transcriptIsOpen = useAppStore((s) => s.transcriptIsOpen)

  const selectedNode = useSelectedNode()

  const material = useMaterial(node.image_url || 'noimage.jpeg', highlight, highlightColor)

  const isSelected = selectedNode?.id === node.id
  const isSelectedCategory = node.node_type === categoryFilter

  useFrame(({ camera }) => {
    if (ref?.current && node.node_type === 'topic') {
      // Make text face the camera
      ref.current.quaternion.copy(camera.quaternion)
    }
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

  if (node.node_type === 'topic') {
    return (
      <Text
        ref={ref}
        anchorX="center"
        anchorY="middle"
        color={isSelected ? 'white' : 'lightgray'}
        onPointerOut={onPointerOut}
        onPointerOver={onPointerIn}
        position={[node.x, node.y, node.z]}
        scale={scale * 4}
        userData={node}
        {...fontProps}
      >
        {node.label}
      </Text>
    )
  }

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
          position={[node.x, node.y, node.z]}
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
              <Transcript node={selectedTimestamp} />
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
