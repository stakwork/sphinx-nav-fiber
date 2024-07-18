import { useMemo, useState } from 'react'
import { Color, Material, Vector3 } from 'three'
import { useGraphData } from '~/components/DataRetriever'
import { useAppStore } from '~/stores/useAppStore'
import { useSelectedNode } from '~/stores/useGraphStore'
import { NodeExtended } from '~/types'
import { boxGeometry } from '../constants'
import { HighlightProps, getHighlighter, highlightMaterial } from './constants'

export const Highlights = () => {
  const data = useGraphData()
  const [materials, setMaterials]: [Record<string, Material>, (m: Record<string, Material>) => void] = useState({})
  const selectedNode = useSelectedNode()
  const searchTerm = useAppStore((s) => s.currentSearch)

  const highlights = useMemo(() => {
    const h: HighlightProps[] = []

    if (!data?.nodes?.length) {
      return h
    }

    data?.nodes.forEach((node: NodeExtended) => {
      const { highlight, highlightColor } = getHighlighter({ node, selectedNode, searchTerm })

      if (highlight) {
        if (!materials[highlightColor]) {
          const hMaterial = highlightMaterial.clone()

          hMaterial.emissive = new Color(highlightColor)
          setMaterials({ ...materials, [highlightColor]: hMaterial })
        }

        h.push({
          color: highlightColor,
          userData: node,
          position: new Vector3(node.x || 0, node.y || 0, node.z || 0),
          scale: node.scale || 1,
        })
      }
    })

    return h
  }, [selectedNode, searchTerm, data?.nodes, materials])

  return (
    <>
      {highlights.map((h, i) => (
        <mesh
          // eslint-disable-next-line react/no-array-index-key
          key={`highlight-${h.userData.ref_id}-${i}`}
          geometry={boxGeometry}
          material={materials[h.color]}
          position={h.position}
          scale={(h.scale || 1) * 1.02}
          userData={h.userData}
          visible={!!h.position}
        />
      ))}
    </>
  )
}
