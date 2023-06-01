import { Segments } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { forceCenter, forceCollide, forceLink, forceSimulation } from 'd3-force-3d'
import { memo, useEffect } from 'react'
import { useGraphData } from '~/components/DataRetriever'
import { createLinks } from '~/network/fetchGraphData/getGraphData'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { GraphData, NodeExtended } from '~/types'
import { Segment } from '../../Segment'
import { Cube } from '../Cube'
import { AnimatedHighlights } from '../Highlights/animated'
import { TextNode } from '../Text'

const simulation = forceSimulation()
  .numDimensions(2)
  .force(
    'link',
    forceLink()
      .distance((d: { source: NodeExtended; target: NodeExtended }) => {
        const sourceType = d.source.node_type

        let distance = 50

        switch (sourceType) {
          case 'topic':
            distance = 30
            break
          case 'guest':
            distance = 30
            break
          case 'clip':
            distance = 10
            break
          case 'episode':
            distance = 15
            break
          default:
        }

        return distance * 21
      })
      .strength(0.04),
  )
  .force('center', forceCenter().strength(0.85))
  .force(
    'collide',
    forceCollide()
      .radius((n: NodeExtended) => (n.scale || 1) * 6 + 180)
      .iterations(1),
  )
  .velocityDecay(0.9)
  .stop()

export const SelectionDataNodes = memo(() => {
  const data = useGraphData()
  const selectedNode = useSelectedNode()

  const selectedNodeRelativeIds = useDataStore((s) => s.selectedNodeRelativeIds)

  const selectionGraphData = useDataStore((s) => s.selectionGraphData)
  const setSelectionData = useDataStore((s) => s.setSelectionData)

  useEffect(() => {
    const nodes = data.nodes
      .filter((f) => f.ref_id === selectedNode?.ref_id || selectedNodeRelativeIds.includes(f?.ref_id || ''))
      .map((n) => {
        const fixedPosition =
          n.ref_id === selectedNode?.ref_id && n.node_type !== 'topic' ? { fx: 0, fy: 0, fz: 0 } : {}

        return { ...n, x: 0, y: 0, z: 0, ...fixedPosition }
      })

    const links = createLinks(nodes)

    setSelectionData({ nodes, links })
  }, [data, selectedNode, selectedNodeRelativeIds, setSelectionData])

  useEffect(() => {
    simulation.alpha(1).stop()
    simulation.stop().nodes(selectionGraphData?.nodes || [])

    simulation
      .force('link')
      .id((d: NodeExtended) => d.id)
      .links(selectionGraphData.links)

    simulation.alpha(1).restart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectionGraphData])

  useFrame(() => {
    simulation.tick()
  })

  return (
    <>
      {selectionGraphData?.nodes.map((node) => {
        if (node.node_type === 'topic') {
          return <TextNode key={`${node.ref_id || node.id}-compact`} node={node} />
        }

        return <Cube key={`${node.ref_id || node.id}-compact`} animated node={node} />
      })}

      <Segments
        key={`selection-links-${selectionGraphData?.links.length}`}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        fog
        lineWidth={0.9}
      >
        {(selectionGraphData?.links as unknown as GraphData['links']).map((link, index) => (
          <Segment
            // eslint-disable-next-line react/no-array-index-key
            key={index.toString()}
            animated
            link={link}
          />
        ))}
      </Segments>

      <AnimatedHighlights />
    </>
  )
})

SelectionDataNodes.displayName = 'SelectionDataNodes'
