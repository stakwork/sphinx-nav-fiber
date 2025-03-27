// @ts-nocheck

import * as d3 from 'd3'
import React, { useEffect, useRef } from 'react'

type TreeNode = {
  name: string
  children?: TreeNode[]
}

type RadialTreeProps = {
  data: TreeNode | TreeNode[]
  width?: number
  height?: number
}

function wrapTextFn(textEl: SVGTextElement, wrapWidth: number) {
  const text = d3.select(textEl)
  const words = text.text().split(/\s+/)
  const lineHeight = 1.1
  const x = 0
  const dy = 0
  let line: string[] = []

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

export const Tree: React.FC<RadialTreeProps> = ({ data, width = 1400, height = 1200 }) => {
  const svgRef = useRef<SVGSVGElement | null>(null)
  const gRef = useRef<SVGGElement | null>(null)

  useEffect(() => {
    if (!data || !svgRef.current || !gRef.current) {
      return
    }

    const svg = d3.select(svgRef.current)
    const g = d3.select(gRef.current)

    svg.selectAll('g.render-group').remove()

    const wrappedData = Array.isArray(data) ? { name: '__FAKE_ROOT__', children: data } : data

    const root = d3.hierarchy<TreeNode>(wrappedData)
    const treeLayout = d3.tree<TreeNode>().size([2 * Math.PI, Math.min(width, height) / 2 - 120])

    treeLayout(root)

    const contentGroup = g
      .append('g')
      .attr('class', 'render-group')
      .attr('transform', `translate(${width / 2},${height / 2})`)

    const radialPoint = (x, y) => [y * Math.cos(x - Math.PI / 2), y * Math.sin(x - Math.PI / 2)]

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
          .linkRadial()
          .angle((d) => d.x)
          .radius((d) => d.y),
      )

    const nodesToRender = root.descendants().filter((d) => d.data.name !== '__FAKE_ROOT__')

    const node = contentGroup
      .selectAll('.node')
      .data(nodesToRender)
      .join('g')
      .attr('class', 'node')
      .attr('transform', (d) => `translate(${radialPoint(d.x, d.y)})`)

    node.append('circle').attr('r', 5).attr('fill', '#69b3a2')

    node
      .append('text')
      .attr('fill', 'white')
      .attr('font-size', 6)
      .attr('dy', '0.35em')
      .attr('text-anchor', (d) => (d.x < Math.PI ? 'start' : 'end'))
      .text((d) => d.data.name)
      .each(function () {
        // eslint-disable-next-line @typescript-eslint/no-invalid-this
        wrapTextFn(this, 80)
      })
      .attr(
        'transform',
        (d) => `
          rotate(${(d.x * 180) / Math.PI - 90})
          translate(${d.x < Math.PI ? 8 : -8},0)
          ${d.x >= Math.PI ? 'rotate(180)' : ''}
        `,
      )

    const bbox = contentGroup.node().getBBox()

    svg.attr('viewBox', `${bbox.x - 100} ${bbox.y - 100} ${bbox.width + 200} ${bbox.height + 200}`)

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
