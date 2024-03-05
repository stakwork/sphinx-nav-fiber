import { Segments } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useEffect } from 'react'
import { EdgeExtendedNew, GraphDataNew, NodeExtendedNew } from '~/network/fetchGraphDataNew/types'
import { useGraphStore, useSelectedNode } from '~/stores/useGraphStore'
import { ForceSimulation } from '~/transformers/forceSimulation'
import { runForceSimulationNew } from '~/transformers/forceSimulationNew'
import { TextNode } from '../Text'
import { SelectionLink } from './Links'

let simulation2d: ForceSimulation | null = null

export const SelectionDataNodes = memo(() => {
  const selectedNode = useSelectedNode()

  const [data, selectedNodeRelativeIds] = useGraphStore((s) => [s.data, s.selectedNodeRelativeIds])

  const [selectionGraphData, setSelectionData] = useGraphStore((s) => [s.selectionGraphData, s.setSelectionData])

  useEffect(() => {
    const links: EdgeExtendedNew[] =
      data?.links.filter((i) => i.source === selectedNode?.ref_id || i.target === selectedNode?.ref_id) || []

    const nodes: NodeExtendedNew[] = (data?.nodes || [])
      .filter((i) => links.some((l) => l.source === i.ref_id || l.target === i.ref_id))
      .map((n) => {
        const fixedPosition =
          n.ref_id === selectedNode?.ref_id && n.node_type !== 'Topic' ? { fx: 0, fy: 0, fz: 0 } : {}

        return { ...n, x: 0, y: 0, z: 0, ...fixedPosition }
      })

    const selectionData = {
      nodes,
      links,
    }

    setSelectionData(structuredClone(selectionData))
  }, [data, selectedNode, selectedNodeRelativeIds, setSelectionData])

  useEffect(() => {
    simulation2d = runForceSimulationNew([...selectionGraphData.nodes], [...selectionGraphData.links], {
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

  return (
    <>
      {selectionGraphData?.nodes.map((node) => (
        <TextNode key={`${node.ref_id || node.ref_id}-compact`} hide node={node} />
      ))}

      <Segments
        key={`selection-links-${selectionGraphData?.links.length}`}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        fog
        lineWidth={0.9}
      >
        {(selectionGraphData?.links as unknown as GraphDataNew['links']).map((link, index) => (
          <SelectionLink
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
