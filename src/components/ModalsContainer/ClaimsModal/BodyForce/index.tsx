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
  const claimsData = await getPathway(id, ['Claim'], [], '', true, 0, 3, 500)
  const supportClaimsData = await getPathway(id, ['Claim'], [], '', true, 1, 3, 500)

  // Filter out duplicate nodes by ref_id
  const uniqueNodes = [
    ...new Map([...claimsData.nodes, ...supportClaimsData.nodes].map((node) => [node.ref_id, node])).values(),
  ]

  // Get all edges
  const allEdges = [...claimsData.edges, ...supportClaimsData.edges]

  // ✅ Find nodes that are the target of RELATED_TO edges
  const nodesWithRelatedTo = new Set(
    allEdges.filter((edge) => edge.edge_type === 'RELATED_TO').map((edge) => edge.target),
  )

  // ✅ Filter edges - remove HAS_CLAIM if the target has a RELATED_TO
  const filteredEdges = allEdges.filter((edge) => {
    if (edge.edge_type === 'HAS_CLAIM' && nodesWithRelatedTo.has(edge.target)) {
      return false
    }

    return true
  })

  // Remove duplicate edges (by source-target)
  const uniqueEdges = [...new Map(filteredEdges.map((edge) => [`${edge.source}-${edge.target}`, edge])).values()]

  return {
    nodes: uniqueNodes,
    edges: uniqueEdges,
  }
}

export const BodyForce = () => {
  const svgRef = useRef(null)
  const { selectedEpisode } = useMindsetStore((s) => s)
  const [claims, setClaims] = useState<FetchDataResponse | null>(null)

  useEffect(() => {
    if (!selectedEpisode?.ref_id) {
      return
    }

    const fetchClaims = async () => {
      const response = await getClaims(selectedEpisode.ref_id)

      setClaims(response)
    }

    fetchClaims()
  }, [selectedEpisode?.ref_id])

  useEffect(() => {
    if (!svgRef.current || !claims) {
      return
    }

    const data = {
      nodes: claims.nodes || [],
      edges: claims.edges || [],
    }

    const width = 800
    const height = 600

    const svg = d3
      .select(svgRef.current)
      .attr('viewBox', [0, 0, width, height])
      .attr('width', '100%')
      .attr('height', '100%')

    svg.selectAll('*').remove()

    const g = svg.append('g').attr('class', 'everything')

    const zoom = d3
      .zoom()
      .scaleExtent([0.1, 4])
      .on('zoom', (event) => {
        g.attr('transform', event.transform)
      })

    svg.call(zoom)

    const nodeTypes = [...new Set(data.nodes.map((node) => node.node_type))]
    const color = d3.scaleOrdinal().domain(nodeTypes).range(d3.schemeCategory10)

    const edgeTypes = [...new Set(data.edges.map((edge) => edge.edge_type))]
    const edgeColor = d3.scaleOrdinal().domain(edgeTypes).range(['#999', '#666', '#333', '#ccc'])

    const simulation = d3
      .forceSimulation(data.nodes)
      .force(
        'link',
        d3
          .forceLink(data.edges)
          .id((d) => d.ref_id)
          .distance((d) => 100 + (d.weight || 1) * 20),
      )
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('x', d3.forceX(width / 2).strength(0.1))
      .force('y', d3.forceY(height / 2).strength(0.1))

    g.append('defs')
      .selectAll('marker')
      .data(edgeTypes)
      .enter()
      .append('marker')
      .attr('id', (d) => `arrow-${d}`)
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 20)
      .attr('refY', 0)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto')
      .append('path')
      .attr('fill', (d) => edgeColor(d))
      .attr('d', 'M0,-5L10,0L0,5')

    const link = g
      .append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(data.edges)
      .enter()
      .append('line')
      .attr('stroke', (d) => edgeColor(d.edge_type))
      .attr('stroke-opacity', 0.6)
      .attr('stroke-width', (d) => Math.sqrt(d.weight || 1) * 2)
      .attr('marker-end', (d) => `url(#arrow-${d.edge_type})`)

    const edgeLabels = g
      .append('g')
      .attr('class', 'edge-labels')
      .selectAll('text')
      .data(data.edges)
      .enter()
      .append('text')
      .attr('font-size', 10)
      .attr('text-anchor', 'middle')
      .attr('dy', -5)
      .text((d) => d.edge_type)
      .attr('fill', '#666')
      .attr('opacity', 0.7)

    const node = g
      .append('g')
      .attr('class', 'nodes')
      .selectAll('circle')
      .data(data.nodes)
      .enter()
      .append('circle')
      .attr('r', (d) => getNodeSize(d))
      .attr('fill', (d) => color(d.node_type))
      .attr('stroke', '#fff')
      .attr('stroke-width', 1.5)
      .call(drag(simulation))
      .on('mouseover', (event) => {
        d3.select(event.currentTarget).attr('stroke', '#000').attr('stroke-width', 2)
      })
      .on('mouseout', (event) => {
        d3.select(event.currentTarget).attr('stroke', '#fff').attr('stroke-width', 1.5)
      })

    const nodeLabels = g
      .append('g')
      .attr('class', 'node-labels')
      .selectAll('text')
      .data(data.nodes)
      .enter()
      .append('text')
      .text((d) => getNodeLabel(d))
      .attr('font-size', 10)
      .attr('dx', 12)
      .attr('dy', 4)
      .attr('fill', '#333')

    simulation.on('tick', () => {
      link
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y)

      node.attr('cx', (d) => d.x).attr('cy', (d) => d.y)

      nodeLabels.attr('x', (d) => d.x).attr('y', (d) => d.y)

      edgeLabels.attr('x', (d) => (d.source.x + d.target.x) / 2).attr('y', (d) => (d.source.y + d.target.y) / 2)
    })

    function getNodeSize(node) {
      switch (node.node_type) {
        case 'Episode':
          return 15
        case 'Person':
          return 12
        case 'Claim':
          return 10
        case 'Topic':
          return 14
        default:
          return 8
      }
    }

    function getNodeLabel(node) {
      switch (node.node_type) {
        case 'Episode':
          return node.properties.episode_title
            ? node.properties.episode_title.length > 25
              ? `${node.properties.episode_title.substring(0, 25)}...`
              : node.properties.episode_title
            : 'Episode'
        case 'Person':
          return node.properties.name || 'Person'
        case 'Claim':
          return node.properties.claim_text
            ? node.properties.claim_text.length > 25
              ? `${node.properties.claim_text.substring(0, 25)}...`
              : node.properties.claim_text
            : 'Claim'
        case 'Topic':
          return node.properties.topic_name || 'Topic'
        default:
          return node.node_type
      }
    }

    function drag(simulation) {
      function dragstarted(event, d) {
        if (!event.active) {
          simulation.alphaTarget(0.3).restart()
        }

        d.fx = d.x
        d.fy = d.y
      }

      function dragged(event, d) {
        d.fx = event.x
        d.fy = event.y
      }

      function dragended(event, d) {
        if (!event.active) {
          simulation.alphaTarget(0)
        }

        d.fx = null
        d.fy = null
      }

      return d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended)
    }

    return () => {
      simulation.stop()
      d3.select(svgRef.current).selectAll('*').remove()
    }
  }, [claims])

  return (
    <div className="w-full h-full p-4 bg-white rounded shadow relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Knowledge Graph Visualization</h2>
        <div className="flex space-x-2">
          {['Episode', 'Claim', 'Person', 'Topic'].map((type) => (
            <div key={type} className="flex items-center">
              <div
                className="w-4 h-4 rounded-full mr-1"
                style={{
                  backgroundColor: d3.schemeCategory10[['Episode', 'Claim', 'Person', 'Topic'].indexOf(type) % 10],
                }}
              />
              <span className="text-xs">{type}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-96 border border-gray-200 rounded">
        <svg ref={svgRef} className="w-full h-full" />
      </div>
    </div>
  )
}
