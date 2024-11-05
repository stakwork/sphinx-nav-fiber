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
  linksPosition: LinkPosition[]
}

const LINE_TRANSFORM_DURATION = 0.5

export const Connections = memo(({ linksPosition }: Props) => {
  const data = useDataStore((s) => s.dataInitial)
  const { showSelectionGraph } = useGraphStore((s) => s)
  const selectedNode = useSelectedNode()
  const hoveredNode = useHoveredNode()
  const lineRefs = useRef<Line2[]>([])

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

    lineRefs.current.forEach((line, index) => {
      if (data?.links[index].source === activeNode?.ref_id || data?.links[index].target === activeNode?.ref_id) {
        gsap.to(line.material, {
          linewidth: LINE_WIDTH * 2,
          duration: LINE_TRANSFORM_DURATION,
        })
      } else {
        gsap.to(line.material, {
          linewidth: 0,
          duration: LINE_TRANSFORM_DURATION,
        })
      }
    })
  }, [data?.links, hoveredNode, selectedNode])

  return (
    <group name="simulation-3d-group__connections" visible={!showSelectionGraph || true}>
      {data?.links.map((l: Link, index: number) => {
        const isSelected = selectedNode?.ref_id === l.source || selectedNode?.ref_id === l.target

        // eslint-disable-next-line no-nested-ternary

        return (
          <LineComponent
            key={l.ref_id}
            ref={(el) => {
              lineRefs.current[index] = el as Line2
            }}
            isSelected={isSelected}
            position={linksPosition[index]}
          />
        )
      })}
    </group>
  )
})

Connections.displayName = 'Connections'
