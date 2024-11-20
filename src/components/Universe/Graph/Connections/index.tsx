import gsap from 'gsap'
import { memo, useEffect, useRef } from 'react'
import { Line2 } from 'three-stdlib'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore, useHoveredNode, useSelectedNode } from '~/stores/useGraphStore'
import { Link } from '~/types'
import { LinkPosition } from '..'
import { LINE_WIDTH } from '../../constants'
import { LineComponent } from './LineComponent'

type Props = {
  linksPosition: Map<string, LinkPosition>
}

const LINE_TRANSFORM_DURATION = 0.5

export const Connections = memo(({ linksPosition }: Props) => {
  const data = useDataStore((s) => s.dataInitial)
  const { showSelectionGraph } = useGraphStore((s) => s)
  const selectedNode = useSelectedNode()
  const hoveredNode = useHoveredNode()
  const lineRefs = useRef(new Map<string, Line2 | null>())

  useEffect(() => {
    const activeNode = hoveredNode || selectedNode

    if (!activeNode) {
      lineRefs.current.forEach((line) => {
        if (line) {
          gsap.to(line.material, {
            linewidth: LINE_WIDTH,
            duration: LINE_TRANSFORM_DURATION,
          })
        }
      })

      return
    }

    lineRefs.current.forEach((line, refId) => {
      if (line) {
        const link = data?.links.find((l) => l.ref_id === refId)
        const isActive = link && (link.source === activeNode.ref_id || link.target === activeNode.ref_id)

        gsap.to(line.material, {
          linewidth: isActive ? LINE_WIDTH * 2 : 0,
          duration: LINE_TRANSFORM_DURATION,
        })
      }
    })
  }, [data?.links, hoveredNode, selectedNode])

  return (
    <group name="simulation-3d-group__connections" visible={!showSelectionGraph || true}>
      {data?.links.map((l: Link) => {
        const isSelected = selectedNode?.ref_id === l.source || selectedNode?.ref_id === l.target // Adjust to match link with its position

        const position = linksPosition.get(l.ref_id) || {
          sx: 0,
          sy: 0,
          sz: 0,
          tx: 0,
          ty: 0,
          tz: 0,
        }

        return (
          <LineComponent
            key={l.ref_id}
            ref={(el) => {
              if (el) {
                lineRefs.current.set(l.ref_id, el as Line2)
              } else {
                lineRefs.current.delete(l.ref_id)
              }
            }}
            isSelected={isSelected}
            position={position}
          />
        )
      })}
    </group>
  )
})

Connections.displayName = 'Connections'
