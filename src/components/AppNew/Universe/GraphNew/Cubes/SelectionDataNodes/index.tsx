import { Segments } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useEffect } from 'react'
import { EdgeExtendedNew, GraphDataNew, NodeExtendedNew } from '~/network/fetchGraphDataNew/types'
import { useGraphStore, useSelectedNode } from '~/stores/useGraphStore'
import { ForceSimulation } from '~/transformers/forceSimulation'
import { SelectionLink } from './Links'
import { SelectionNode } from './Text'
import { runForceSimulation } from './simulation'

let simulation2d: ForceSimulation | null = null

export const SelectionDataNodes = memo(() => {
  const selectedNode = useSelectedNode()

  const [data, selectedNodeRelativeIds] = useGraphStore((s) => [s.data, s.selectedNodeRelativeIds])

  const [selectionGraphData, setSelectionData] = useGraphStore((s) => [s.selectionGraphData, s.setSelectionData])

  useEffect(() => {
    const nodes: NodeExtendedNew[] = (data?.nodes || [])
      .filter((node) => selectedNodeRelativeIds.includes(node.ref_id) || node.ref_id === selectedNode?.ref_id)
      .map((n) => {
        const fixedPosition = n.ref_id === selectedNode?.ref_id ? { fx: 0, fy: 0, fz: 0 } : {}

        return { ...n, x: 0, y: 0, z: 0, ...fixedPosition }
      })

    const links: EdgeExtendedNew[] =
      data?.links.filter(
        (link) =>
          nodes.some((node) => node.ref_id === link.target) && nodes.some((node) => node.ref_id === link.source),
      ) || []

    const selectionData = {
      nodes,
      links,
    }

    setSelectionData(selectionData)
  }, [data, selectedNode, selectedNodeRelativeIds, setSelectionData])

  useEffect(() => {
    simulation2d = runForceSimulation([...selectionGraphData.nodes], [...selectionGraphData.links], {
      numDimensions: 2,
      forceLinkStrength: 0.01,
      forceCenterStrength: 0.85,
      forceChargeStrength: -20,
      velocityDecay: 0.9,
    })

    // graphData.current = structuredClone(selectionGraphData)

    // if (graphData.current) {
    //   simulation2d = forceSimulation()
    //     .stop()
    //     .alpha(1)
    //     .stop()
    //     .numDimensions(2)
    //     .velocityDecay(0.9)
    //     .force('charge', forceManyBody().strength(30)) // Repulsion between nodes
    //     .force('center', forceCenter()) // Attract nodes to the center
    //     .force('collide', forceCollide(10))
    //     .nodes(graphData.current.nodes)
    //     .alpha(1)
    //     .restart()
    // }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectionGraphData])

  useFrame(() => {
    if (simulation2d) {
      simulation2d.tick()
    }
  })

  return (
    <>
      <Segments
        key={`selection-links-${selectionGraphData?.links.length}`}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        fog
        lineWidth={0.9}
      >
        {(selectionGraphData.links as unknown as GraphDataNew['links']).map((link, index) => (
          <SelectionLink
            // eslint-disable-next-line react/no-array-index-key
            key={index.toString()}
            link={link}
            title={link.edge_type}
          />
        ))}
      </Segments>
      {selectionGraphData.nodes.map((node: NodeExtendedNew) => (
        <SelectionNode key={`${node.ref_id}-compact`} node={node} />
      ))}
    </>
  )
})

SelectionDataNodes.displayName = 'SelectionDataNodes'
