import { Segments } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useEffect } from 'react'
import { EdgeExtendedNew, NodeExtendedNew } from '~/network/fetchGraphDataNew/types'
import { useGraphStore, useSelectedNode } from '~/stores/useGraphStore'
import { ForceSimulation } from '~/transformers/forceSimulation'
import { runForceSimulationNew } from '~/transformers/forceSimulationNew'
import { GraphData } from '~/types'
import { Segment } from '../../Segment'
import { TextNode } from '../Text'

let simulation2d: ForceSimulation | null = null

export const SelectionDataNodes = memo(() => {
  const selectedNode = useSelectedNode()

  const [data, selectedNodeRelativeIds] = useGraphStore((s) => [s.data, s.selectedNodeRelativeIds])

  const selectionGraphData = useGraphStore((s) => s.selectionGraphData)
  const setSelectionData = useGraphStore((s) => s.setSelectionData)

  useEffect(() => {
    const links: EdgeExtendedNew[] =
      data?.links.filter((i) => i.source === selectedNode?.ref_id || i.target === selectedNode?.ref_id) || []

    const nodes: NodeExtendedNew[] =
      data?.nodes.filter((i) => links.some((l) => l.source === i.ref_id || l.target === i.ref_id)) || []

    setSelectionData({ nodes, links })
  }, [data, selectedNode, selectedNodeRelativeIds, setSelectionData])

  useEffect(() => {
    simulation2d = runForceSimulationNew(selectionGraphData.nodes, selectionGraphData.links, {
      numDimensions: 2,
      forceLinkStrength: 0.01,
      forceCenterStrength: 0.85,
      forceChargeStrength: -20,
      velocityDecay: 0.9,
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectionGraphData])

  useFrame(() => {
    if (simulation2d) {
      simulation2d.tick()
    }
  })

  console.log(selectionGraphData)

  return (
    <>
      {selectionGraphData?.nodes.map((node) => (
        <TextNode key={`${node.ref_id || node.ref_id}-compact`} node={node} />
      ))}

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
    </>
  )
})

SelectionDataNodes.displayName = 'SelectionDataNodes'
