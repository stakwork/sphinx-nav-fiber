// @ts-nocheck

import * as d3 from 'd3'
import React, { useEffect, useRef } from 'react'

type TreeNode = {
  name: string
  children?: TreeNode[]
}

type TidyTreeProps = {
  data: TreeNode | TreeNode[]
  width?: number
  height?: number
}

function wrapTextFn(textEl: SVGTextElement, textStr: string, wrapWidth = 150) {
  const text = d3.select(textEl)
  const words = textStr.split(/\s+/)
  let line: string[] = []
  const lineHeight = 1.1
  const x = text.attr('x')
  const dy = parseFloat(text.attr('dy')) || 0

  text.text(null)

  let tspan = text.append('tspan').attr('x', x).attr('dy', `${dy}em`)

  words.forEach((word) => {
    line.push(word)
    tspan.text(line.join(' '))

    if (tspan.node().getComputedTextLength() > wrapWidth) {
      line.pop()
      tspan.text(line.join(' '))
      line = [word]
      tspan = text.append('tspan').attr('x', x).attr('dy', `${lineHeight}em`).text(word)
    }
  })
}

export const Tree: React.FC<TidyTreeProps> = ({ data, width = 1400, height = 1200 }) => {
  const svgRef = useRef<SVGSVGElement | null>(null)
  const gRef = useRef<SVGGElement | null>(null)

  useEffect(() => {
    if (!data || !svgRef.current || !gRef.current) {
      return
    }

    const svg = d3.select(svgRef.current)
    const g = d3.select(gRef.current)

    svg.selectAll('g.render-group').remove()

    const margin = { top: 20, right: 160, bottom: 30, left: 160 }

    const wrappedData = Array.isArray(data) ? { name: '__FAKE_ROOT__', children: data } : data

    const root = d3.hierarchy<TreeNode>(wrappedData)
    const treeLayout = d3.tree<TreeNode>().nodeSize([80, 300])

    treeLayout(root)

    const contentGroup = g
      .append('g')
      .attr('class', 'render-group')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    contentGroup
      .selectAll('.link')
      .data(root.links().filter((link) => link.source.data.name !== '__FAKE_ROOT__'))
      .join('path')
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

    const nodesToRender = root.descendants().filter((d) => d.data.name !== '__FAKE_ROOT__')

    const node = contentGroup
      .selectAll('.node')
      .data(nodesToRender)
      .join('g')
      .attr('class', 'node')
      .attr('transform', (d) => `translate(${d.y},${d.x})`)

    node.append('circle').attr('r', 6).attr('fill', '#69b3a2')

    node
      .append('text')
      .attr('fill', 'white')
      .attr('font-size', 6)
      .attr('x', (d) => (d.children ? -10 : 10))
      .attr('dy', '0.35em')
      .style('text-anchor', (d) => (d.children ? 'end' : 'start'))
      .each((d, i, nodes) => {
        wrapTextFn(nodes[i], d.data.name, 150)
      })

    // Auto-resize viewBox
    const bbox = contentGroup.node().getBBox()

    svg.attr('viewBox', `${bbox.x - 100} ${bbox.y - 100} ${bbox.width + 200} ${bbox.height + 200}`)

    // Add zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>().on('zoom', (event) => {
      g.attr('transform', event.transform)
    })

    svg.call(zoom)
  }, [data, width, height])

  return (
    <svg
      ref={svgRef}
      height={height}
      preserveAspectRatio="xMinYMin meet"
      style={{ width: '100%', height: '100%', background: '#111' }}
      width={width}
    >
      <g ref={gRef} />
    </svg>
  )
}
