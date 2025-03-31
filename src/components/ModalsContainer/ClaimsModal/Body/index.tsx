/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-loss-of-precision */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-nested-ternary */
// @ts-nocheck

import * as d3 from 'd3'
import { useEffect, useRef, useState } from 'react'
import { getPathway } from '~/network/fetchSourcesData'
import { useMindsetStore } from '~/stores/useMindsetStore'
import { FetchDataResponse } from '~/types'
import { colors } from '~/utils'

const getClaims = async (id: string) => {
  const { nodes, edges } = await getPathway(id, ['Claim'], [], '', true, 0, 3, 500)

  const uniqueNodes = [...new Map(nodes.map((node) => [node.ref_id, node])).values()].filter(
    (node) => node.node_type === 'Claim',
  )

  const uniqueEdges = [...new Map(edges.map((edge) => [`${edge.source}-${edge.target}`, edge])).values()].filter(
    (edge) => edge.edge_type !== 'HAS_CLAIM',
  )

  return { nodes: uniqueNodes, edges: uniqueEdges }
}

export const Body = () => {
  const svgRef = useRef<SVGSVGElement | null>(null)
  const { selectedEpisode } = useMindsetStore((s) => s)
  const [claims, setClaims] = useState<FetchDataResponse | null>(null)

  const estimateLabelWidth = (text: string) => Math.min(Math.max(text.length * 7 + 20, 60), 200)
  const labelHeight = 30

  useEffect(() => {
    if (!selectedEpisode?.ref_id) {
      return
    }

    getClaims(selectedEpisode.ref_id).then(setClaims)
  }, [selectedEpisode?.ref_id])

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
          .distance(120),
      )
      .force('charge', d3.forceManyBody().strength(-250))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force(
        'collide',
        d3
          .forceCollide()
          .radius((d) => estimateLabelWidth(d.properties?.name || 'Claim') / 2 + 10)
          .strength(0.7),
      )

    // Arrow marker
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

    // Add foreignObjects as the "nodes"
    const node = g
      .append('g')
      .selectAll('foreignObject')
      .data(claims.nodes)
      .enter()
      .append('foreignObject')
      .attr('width', (d) => estimateLabelWidth(d.properties?.name || 'Claim'))
      .attr('height', labelHeight)
      .html(
        (d) => `
        <div style="
          width: 100%;
          height: 100%;
          font-size: 6px;
          color: #333;
          background-color:  ${colors.BG2};
          border-radius: 6px;
          border: 1px solid #999;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          word-wrap: break-word;
          overflow: hidden;
          text-align: center;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 4px;
          box-sizing: border-box;
          cursor: move;
          color: white
        ">
          ${d.properties?.name || 'Claim'}
        </div>
      `,
      )
      .call(drag(simulation))

    // Lookup for sibling highlighting (optional)
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
      link
        .attr('x1', (d) => {
          const w = estimateLabelWidth(d.source.properties?.name || 'Claim')

          return d.source.x + w / 2
        })
        .attr('y1', (d) => d.source.y + labelHeight / 2)
        .attr('x2', (d) => {
          const sx = d.source.x + estimateLabelWidth(d.source.properties?.name || 'Claim') / 2
          const sy = d.source.y + labelHeight / 2
          const tx = d.target.x + estimateLabelWidth(d.target.properties?.name || 'Claim') / 2
          const ty = d.target.y + labelHeight / 2

          const dx = tx - sx
          const dy = ty - sy
          const len = Math.sqrt(dx * dx + dy * dy)

          const shrinkX = (dx / len) * (estimateLabelWidth(d.target.properties?.name || 'Claim') / 2 + 5)

          return tx - shrinkX
        })
        .attr('y2', (d) => {
          const sx = d.source.x + estimateLabelWidth(d.source.properties?.name || 'Claim') / 2
          const sy = d.source.y + labelHeight / 2
          const tx = d.target.x + estimateLabelWidth(d.target.properties?.name || 'Claim') / 2
          const ty = d.target.y + labelHeight / 2

          const dx = tx - sx
          const dy = ty - sy
          const len = Math.sqrt(dx * dx + dy * dy)

          const shrinkY = (dy / len) * (labelHeight / 2 + 5)

          return ty - shrinkY
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

          // Optional: Highlight siblings
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

          // Remove highlight
          node.select('div').style('border', '1px solid #999')
        })
    }

    return () => simulation.stop()
  }, [claims])

  return (
    <div className="w-full h-full p-4 bg-white rounded shadow relative">
      <div className="w-full h-96 border border-gray-200 rounded">
        <svg ref={svgRef} className="w-full h-full" />
      </div>
    </div>
  )
}
