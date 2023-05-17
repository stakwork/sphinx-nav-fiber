import { useMemo } from 'react'
import { Vector3 } from 'three'
import { useGraphData } from '~/components/DataRetriever'
import { useAppStore } from '~/stores/useAppStore'
import { useSelectedNode } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'
import { boxGeometry } from '../Cube/constants'
import { HighlightProps, getHighlighter, highlightMaterial } from './constants'

const highlightDefaultCount = 20

export const Highlights = () => {
  const data = useGraphData()
  const selectedNode = useSelectedNode()
  const searchTerm = useAppStore((s) => s.currentSearch)

  const highlights = useMemo(() => {
    const h: HighlightProps[] = []

    data.nodes.forEach((node: NodeExtended) => {
      const { highlight, highlightColor } = getHighlighter({ node, selectedNode, searchTerm })

      if (highlight) {
        h.push({
          color: highlightColor,
          userData: node,
          position: new Vector3(node.x || 0, node.y || 0, node.z || 0),
          scale: node.scale || 1,
        })
      }
    })

    return h
  }, [selectedNode, searchTerm, data.nodes])

  const renderedInstances = useMemo(() => {
    const renders = []

    // render more highlight nodes if needed, but always keep 10 alive
    const count = highlights.length < highlightDefaultCount ? highlightDefaultCount : highlights.length

    for (let i = 0; i < count; i += 1) {
      renders.push(
        <mesh
          geometry={boxGeometry}
          material={highlightMaterial}
          visible={!!highlights[i]?.position}
          key={`highlight-${i}`}
          position={highlights[i]?.position}
          userData={highlights[i]?.userData}
          scale={highlights[i]?.scale * 1.5}
        />,
      )
    }

    return renders
  }, [highlights])

  // prevent highlight dismount between clicks, teardown takes too long, hide instead
  return <>{renderedInstances}</>
}
