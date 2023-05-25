import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Color, Material, Mesh } from 'three'
import { useGraphData } from '~/components/DataRetriever'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'
import { boxGeometry } from '../constants'
import { getHighlighter, highlightMaterial } from './constants'

const materials: Record<string, Material> = {}

export const AnimatedHighlights = () => {
  const data = useGraphData()
  const selectionGraphData = useDataStore((s) => s.selectionGraphData)
  const showSelectionGraph = useDataStore((s) => s.showSelectionGraph)
  const selectedNode = useSelectedNode()
  const searchTerm = useAppStore((s) => s.currentSearch)

  const nodeData = showSelectionGraph ? selectionGraphData.nodes : data.nodes

  const highlights = () => {
    return nodeData.map((node: NodeExtended) => {
      const { highlight, highlightColor } = getHighlighter({ node, selectedNode, searchTerm })

      if (!highlight) {
        return null
      }

      if (!materials[highlightColor]) {
        const hMaterial = highlightMaterial.clone()

        hMaterial.emissive = new Color(highlightColor)
        materials[highlightColor] = hMaterial
      }

      return (
        <HighlightMesh
          color={highlightColor}
          userData={node}
          scale={node.scale || 1}
          key={`highlight-${node.ref_id}`}
          position={[node?.x || 0, node?.y || 0, node?.z || 0]}
        />
      )
    })
  }

  return <>{highlights}</>
}

type HMesh = {
  color: string
  position: number[]
  scale: number
  userData: NodeExtended
}

const HighlightMesh = ({ color, position, scale, userData }: HMesh) => {
  const ref = useRef<Mesh | null>(null)
  useFrame(() => {
    if (ref.current) {
      ref.current.position.set(position[0], position[1], position[2])
    }
  })

  return <mesh ref={ref} userData={userData} material={materials[color]} geometry={boxGeometry} scale={scale} />
}

type HProps = {
  scale: number
  userData: NodeExtended
  color: string
  animated?: boolean
}

type HighlightProps = {
  position: number[]
  scale: number
  userData: NodeExtended
  color: string
  animated?: boolean
}
