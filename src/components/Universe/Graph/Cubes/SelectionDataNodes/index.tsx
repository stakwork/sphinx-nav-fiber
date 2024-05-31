import { Segments } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useEffect } from 'react'
import { useGraphData } from '~/components/DataRetriever'
import { generateLinksFromNodeData } from '~/network/fetchGraphData/helpers/generateLinksFromNodeData'
import { useGraphStore, useSelectedNode } from '~/stores/useGraphStoreLatest'
import { ForceSimulation, runForceSimulation } from '~/transformers/forceSimulation'
import { GraphData } from '~/types'
import { Segment } from '../../Segment'
import { Cube } from '../Cube'
import { TextNode } from '../Text'

let simulation2d: ForceSimulation | null = null

export const SelectionDataNodes = memo(() => {
  const data = useGraphData()
  const selectedNode = useSelectedNode()

  const { selectedNodeRelativeIds, selectionGraphData, setSelectionData } = useGraphStore((s) => s)

  useEffect(() => {
    const nodes = data?.nodes
      .filter((f) => f.ref_id === selectedNode?.ref_id || selectedNodeRelativeIds.includes(f?.ref_id || ''))
      .map((n) => {
        const fixedPosition =
          n.ref_id === selectedNode?.ref_id && n.node_type !== 'topic' ? { fx: 0, fy: 0, fz: 0 } : {}

        return { ...n, x: 0, y: 0, z: 0, ...fixedPosition }
      })

    if (nodes) {
      const links = generateLinksFromNodeData(nodes, false, false)

      setSelectionData({ nodes, links })
    }
  }, [data, selectedNode, selectedNodeRelativeIds, setSelectionData])

  useEffect(() => {
    simulation2d = runForceSimulation(selectionGraphData.nodes, selectionGraphData.links, {
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
      {selectionGraphData?.nodes.map((node) => {
        if (node.node_type === 'topic') {
          return <TextNode key={`${node.ref_id || node.id}-compact`} hide node={node} />
        }

        return <Cube key={`${node.ref_id || node.id}-compact`} animated hide node={node} />
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
    </>
  )
})

SelectionDataNodes.displayName = 'SelectionDataNodes'
