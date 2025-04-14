/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-loss-of-precision */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-nested-ternary */
// @ts-nocheck

// Graph.tsx
// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

import * as d3 from 'd3'
import { useEffect, useRef } from 'react'
import { useIsolatedGraphStore } from '~/stores/useIsolatedGraphStore'
import { colors } from '~/utils'

export const Graph = () => {
  const svgRef = useRef<SVGSVGElement | null>(null)
  const { data: claims, isolatedNodeIds } = useIsolatedGraphStore()

  const estimateSquareSize = (text: string) => {
    const base = Math.min(Math.max(text.length * 7 + 20, 60), 200)

    return base // square: width = height = base
  }

  const estimateFontSize = (text: string) => {
    const { length } = text

    // Option 1: Bucketed
    if (length <= 10) {
      return 14
    }

    if (length <= 20) {
      return 10
    }

    if (length <= 30) {
      return 8
    }

    return 6
    // Option 2: Math-based (alternative):
    // return Math.max(6, Math.min(boxSize / (length * 0.6), 18))
  }

  useEffect(() => {
    if (!svgRef.current || !claims) {
      return
    }

    const width = 800
    const height = 600

    const svg = d3
      .select(svgRef.current)
      .attr('viewBox', [0, 0, width, height])
      .attr('width', '100%')
      .attr('height', '100%')

    svg.selectAll('*').remove()

    const g = svg.append('g')

    const zoom = d3
      .zoom()
      .scaleExtent([0.1, 4])
      .on('zoom', (e) => g.attr('transform', e.transform))

    svg.call(zoom)

    const simulation = d3
      .forceSimulation(claims.nodes)
      .force(
        'link',
        d3
          .forceLink(claims.edges)
          .id((d) => d.ref_id)
          .distance(140),
      )
      .force('charge', d3.forceManyBody().strength(-200))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('forceRadial', d3.forceRadial(height))
      .force(
        'collide',
        d3
          .forceCollide()
          .radius((d) => (Math.SQRT2 * estimateSquareSize(d.properties?.name || 'Claim')) / 2 + 10)
          .strength(0.9),
      )

    if (isolatedNodeIds.length > 0 && isolatedNodeIds.length !== claims.nodes.length) {
      simulation.force(
        'isolate',
        d3
          .forceY((d) => (isolatedNodeIds.includes(d.ref_id) ? height - 100 : height / 2))
          .strength((d) => (isolatedNodeIds.includes(d.ref_id) ? 0.2 : 0)),
      )
    }

    g.append('defs')
      .append('marker')
      .attr('id', 'arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 15)
      .attr('refY', 0)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto')
      .append('path')
      .attr('fill', '#999')
      .attr('d', 'M0,-5L10,0L0,5')

    const link = g
      .append('g')
      .selectAll('line')
      .data(claims.edges)
      .enter()
      .append('line')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6)
      .attr('stroke-width', 2)
      .attr('marker-end', 'url(#arrow)')

    const node = g
      .append('g')
      .selectAll('foreignObject')
      .data(claims.nodes)
      .enter()
      .append('foreignObject')
      .attr('width', (d) => estimateSquareSize(d.properties?.name || 'Claim'))
      .attr('height', (d) => estimateSquareSize(d.properties?.name || 'Claim'))
      .html((d) => {
        const text = d.properties?.name || 'Claim'
        const size = estimateSquareSize(text)
        const fontSize = 2 * estimateFontSize(text)

        return `
        <div style="
          width: ${size}px;
          height: ${size}px;
          font-size: ${fontSize}px;
          background-color: ${colors.BG2};
          border-radius: 6px;
          border: 1px solid #999;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          overflow: hidden;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          box-sizing: border-box;
          cursor: move;
          color: white;
          word-break: break-word;
          text-overflow: ellipsis;
        ">
          ${text}
        </div>
      `
      })
      .call(drag(simulation))

    const siblingsMap = new Map()

    claims.edges.forEach(({ source, target }) => {
      if (!siblingsMap.has(source)) {
        siblingsMap.set(source, new Set())
      }

      if (!siblingsMap.has(target)) {
        siblingsMap.set(target, new Set())
      }

      siblingsMap.get(source).add(target)
      siblingsMap.get(target).add(source)
    })

    simulation.on('tick', () => {
      const getSize = (d) => estimateSquareSize(d.properties?.name || 'Claim')
      const getCenter = (d) => getSize(d) / 2

      link
        .attr('x1', (d) => d.source.x + getCenter(d.source))
        .attr('y1', (d) => d.source.y + getCenter(d.source))
        .attr('x2', (d) => {
          const sx = d.source.x + getCenter(d.source)
          const sy = d.source.y + getCenter(d.source)
          const tx = d.target.x + getCenter(d.target)
          const ty = d.target.y + getCenter(d.target)
          const dx = tx - sx
          const dy = ty - sy
          const len = Math.sqrt(dx * dx + dy * dy)

          return tx - (dx / len) * (getCenter(d.target) + 5)
        })
        .attr('y2', (d) => {
          const sx = d.source.x + getCenter(d.source)
          const sy = d.source.y + getCenter(d.source)
          const tx = d.target.x + getCenter(d.target)
          const ty = d.target.y + getCenter(d.target)
          const dx = tx - sx
          const dy = ty - sy
          const len = Math.sqrt(dx * dx + dy * dy)

          return ty - (dy / len) * (getCenter(d.target) + 5)
        })

      node.attr('x', (d) => d.x).attr('y', (d) => d.y)
    })

    function drag(simulation) {
      return d3
        .drag()
        .on('start', (event, d) => {
          if (!event.active) {
            simulation.alphaTarget(0.3).restart()
          }

          d.fx = d.x
          d.fy = d.y

          const siblingIds = siblingsMap.get(d.ref_id)

          if (siblingIds) {
            node
              .filter((n) => siblingIds.has(n.ref_id))
              .select('div')
              .style('border', '2px solid orange')
          }
        })
        .on('drag', (event, d) => {
          d.fx = event.x
          d.fy = event.y
        })
        .on('end', (event, d) => {
          if (!event.active) {
            simulation.alphaTarget(0)
          }

          d.fx = null
          d.fy = null
          node.select('div').style('border', '1px solid #999')
        })
    }

    return () => simulation.stop()
  }, [claims, isolatedNodeIds])

  return <svg ref={svgRef} className="w-full h-full" />
}
