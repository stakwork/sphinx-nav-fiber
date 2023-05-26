import { Segments } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { forceCenter, forceCollide, forceLink, forceManyBody, forceSimulation } from 'd3-force-3d'
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
        // const targetType = d.target.node_type

        let distance = 50

        switch (sourceType) {
          case 'topic':
            distance = 20
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

        return distance * 20
      })
      .strength(0.01),
  )
  .force('center', forceCenter().strength(0.05))
  .force('charge', forceManyBody().strength(0.001))
  .force(
    'collide',
    forceCollide()
      .radius((n: NodeExtended) => (n.scale || 1) * 6 + 180)
      .iterations(1),
  )
  .force('dagRadial', null)
  .velocityDecay(0.1)
  .stop()

export const SelectionDataGraph = memo(() => {
  const data = useGraphData()
  const selectedNode = useSelectedNode()

  const selectedNodeRelativeIds = useDataStore((s) => s.selectedNodeRelativeIds)

  const selectionGraphData = useDataStore((s) => s.selectionGraphData)
  const setSelectionData = useDataStore((s) => s.setSelectionData)

  useEffect(() => {
    const nodes = data.nodes
      .filter((f) => f.ref_id === selectedNode?.ref_id || selectedNodeRelativeIds.includes(f?.ref_id || ''))
      .map((n) => ({ ...n, x: 0, y: 0, z: 0 }))
    const links = createLinks(nodes)

    setSelectionData({ nodes, links })
  }, [data, selectedNode, selectedNodeRelativeIds])

  useEffect(() => {
    console.log('run simulation')
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
          return <TextNode key={node.ref_id || node.id + '-compact'} node={node} />
        }

        return <Cube animated key={node.ref_id || node.id + '-compact'} node={node} />
      })}

      <Segments
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        fog
        key={`selection-links-${selectionGraphData?.links.length}`}
        lineWidth={0.9}
      >
        {(selectionGraphData?.links as unknown as GraphData['links']).map((link, index) => (
          <Segment
            animated
            // eslint-disable-next-line react/no-array-index-key
            key={index.toString()}
            link={link}
          />
        ))}
      </Segments>

      <AnimatedHighlights />
    </>
  )
})
