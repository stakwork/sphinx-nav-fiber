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

const getClaims = async (id: string) => {
  const { nodes, edges } = await getPathway(id, ['Claim'], [], '', true, 0, 3, 500)

  // Filter duplicate nodes by ref_id
  const uniqueNodes = [...new Map(nodes.map((node) => [node.ref_id, node])).values()].filter(
    (node) => node.node_type === 'Claim',
  )

  // Filter edges
  const uniqueEdges = [...new Map(edges.map((edge) => [`${edge.source}-${edge.target}`, edge])).values()].filter(
    (edge) => edge.edge_type !== 'HAS_CLAIM',
  )

  return { nodes: uniqueNodes, edges: uniqueEdges }
}

export const Body = () => {
  const svgRef = useRef<SVGSVGElement | null>(null)
  const { selectedEpisode } = useMindsetStore((s) => s)
  const [claims, setClaims] = useState<FetchDataResponse | null>(null)

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

    const color = d3.scaleOrdinal().domain(['Claim']).range(['#1f77b4'])

    const simulation = d3
      .forceSimulation(claims.nodes)
      .force(
        'link',
        d3
          .forceLink(claims.edges)
          .id((d) => d.ref_id)
          .distance(120),
      )
      .force('charge', d3.forceManyBody().strength(-50))
      .force('center', d3.forceCenter(width / 2, height / 2))

    g.append('defs')
      .append('marker')
      .attr('id', 'arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 18)
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
      .selectAll('circle')
      .data(claims.nodes)
      .enter()
      .append('circle')
      .attr('r', 10)
      .attr('fill', (d) => color(d.node_type))
      .attr('stroke', '#fff')
      .attr('stroke-width', 1.5)
      .call(drag(simulation))

    const nodeLabels = g
      .append('g')
      .selectAll('foreignObject')
      .data(claims.nodes)
      .enter()
      .append('foreignObject')
      .attr('width', 120) // adjust as needed
      .attr('height', 80) // adjust height for text wrapping
      .attr('x', -60) // centers the box horizontally around node
      .attr('y', 15) // places the box just below the node
      .html(
        (d) => `
    <div style="
      width: 120px;
      height: 100%;
      padding: 4px;
      font-size: 10px;
      color: #333;
      background-color: rgba(255,255,255,0.9);
      border-radius: 4px;
      border: 1px solid #ddd;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      word-wrap: break-word;
      overflow: hidden;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      ">
        ${d.properties?.name || 'Claim'}
    </div>
    `,
      )

    simulation.on('tick', () => {
      link
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y)

      node.attr('cx', (d) => d.x).attr('cy', (d) => d.y)

      nodeLabels.attr('x', (d) => d.x).attr('y', (d) => d.y)
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
        })
    }

    return () => simulation.stop()
  }, [claims])

  return (
    <div className="w-full h-full p-4 bg-white rounded shadow relative">
      <h2 className="text-xl font-bold mb-4">Claims Graph Visualization</h2>
      <div className="w-full h-96 border border-gray-200 rounded">
        <svg ref={svgRef} className="w-full h-full" />
      </div>
    </div>
  )
}
