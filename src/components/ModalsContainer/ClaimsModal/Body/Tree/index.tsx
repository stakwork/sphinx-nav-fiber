// @ts-nocheck

import * as d3 from 'd3'
import React, { useEffect, useRef } from 'react'

type TreeNode = {
  name: string
  children?: TreeNode[]
}

type TidyTreeProps = {
  data: TreeNode
  width?: number
  height?: number
}

export const Tree: React.FC<TidyTreeProps> = ({ data, width = 1200, height = 1200 }) => {
  const svgRef = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    if (!data || !svgRef.current) {
      return
    }

    const svg = d3.select(svgRef.current)

    svg.selectAll('*').remove() // Clear previous render

    const margin = { top: 20, right: 90, bottom: 30, left: 90 }

    const root = d3.hierarchy<TreeNode>(data)

    // Use nodeSize instead of size to avoid clipping
    const treeLayout = d3.tree<TreeNode>().nodeSize([20, 380])

    treeLayout(root)

    const g = svg.append('g').attr('transform', `translate(${margin.left},${height / 2})`) // center vertically

    // Draw links
    g.selectAll('.link')
      .data(root.links())
      .join('path')
      .attr('class', 'link')
      .attr('fill', 'none')
      .attr('stroke', '#555')
      .attr('stroke-opacity', 0.4)
      .attr('stroke-width', 1.5)
      .attr(
        'd',
        d3
          .linkHorizontal()
          .x((d) => d.y)
          .y((d) => d.x),
      )

    // Draw nodes
    const node = g
      .selectAll<SVGGElement, d3.HierarchyPointNode<TreeNode>>('.node')
      .data(root.descendants())
      .join('g')
      .attr('class', 'node')
      .attr('transform', (d) => `translate(${d.y},${d.x})`)

    node.append('circle').attr('r', 6).attr('fill', '#69b3a2')

    node
      .append('text')
      .attr('fill', 'white')
      .attr('dy', 3)
      .attr('x', (d) => (d.children ? -10 : 10))
      .style('text-anchor', (d) => (d.children ? 'end' : 'start'))
      .text((d) => (d.data.name.length > 30 ? `${d.data.name.slice(0, 30)}…` : d.data.name))
  }, [data, width, height])

  return (
    <svg
      ref={svgRef}
      height={height}
      preserveAspectRatio="xMinYMin meet"
      viewBox={`0 0 ${width} ${height}`}
      width={width}
    />
  )
}
