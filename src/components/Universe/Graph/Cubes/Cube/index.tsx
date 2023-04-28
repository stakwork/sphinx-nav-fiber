import { ThreeEvent, useFrame, extend } from '@react-three/fiber'
import { Select } from '@react-three/postprocessing'
import { memo, useMemo, useCallback, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Transcript } from '~/components/App/SideBar/Transcript'
import { View } from '~/components/App/SideBar/View'
import { usePathway } from '~/components/DataRetriever'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'
import { HtmlPanel } from './components/HtmlPanel'
import { PathwayBadge } from './components/PathwayBadge'
import { Portal } from './components/Portal'
import { Tooltip } from './components/Tooltip'
import { useMaterial } from './hooks/useMaterial'

const geometryXs = new THREE.BoxGeometry(10, 10, 10)
const geometryS = new THREE.BoxGeometry(20, 20, 20)
const geometryM = new THREE.BoxGeometry(35, 35, 35)

const getGeometry = (node: NodeExtended) => {
  switch (node.node_type) {
    case 'guest':
    case 'episode':
      return geometryS
    case 'show':
      return geometryM
    case 'topic':
      return geometryXs
    default:
      return geometryXs
  }
}

type Props = {
  node: NodeExtended
  highlight: boolean
  highlightColor: string
}

export const Cube = memo(({ node, highlight, highlightColor }: Props) => {
  const ref = useRef<THREE.Mesh | null>(null)
  const [hovered, setHovered] = useState(false)

  const [categoryFilter, graphStyle] = useDataStore((s) => [s.categoryFilter, s.graphStyle])

  const transcriptIsOpen = useAppStore((s) => s.transcriptIsOpen)

  const selectedNode = useSelectedNode()

  const material = useMaterial(node.image_url || 'noimage.jpeg', highlight, highlightColor)
  const geometry = useMemo(() => getGeometry(node), [node])

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

  const onPointerIn = useCallback((e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()
    setHovered(true)
  }, [])

  const onPointerOut = useCallback((e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()
    setHovered(false)
  }, [])

  const { currentNodeIndex } = usePathway()

  const scale = useMemo(() => {
    if (graphStyle === 'split' && node.scale) {
      return node.scale
    }
    return hovered ? 1.1 : 1
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[graphStyle, hovered])

  return (
    <>
      <Select enabled={selectedNode ? isSelected : isSelectedCategory}>
        <mesh
          ref={ref}
          geometry={geometry}
          material={material}
          name={node.id}
          onPointerOut={onPointerOut}
          onPointerOver={onPointerIn}
          scale={scale}
          userData={node}
          position={[node.x,node.y,node.z]}
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
