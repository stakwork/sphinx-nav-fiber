import { Segments } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useEffect, useRef } from 'react'
import { Group } from 'three'
import { usePrevious } from '~/hooks/usePrevious'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore, useSelectedNode } from '~/stores/useGraphStore'
import { ForceSimulation, runForceSimulation } from '~/transformers/forceSimulation'
import { GraphData, NodeExtended } from '~/types'
import { Segment } from '../../Segment'
import { Cube } from '../Cube'
import { TextNode } from '../Text'

let simulation2d: ForceSimulation | null = null

export const SelectionDataNodes = memo(() => {
  const { dataInitial } = useDataStore((s) => s)
  const selectedNode = useSelectedNode()
  const groupRef = useRef<Group>(null)

  const prevNodesLength = usePrevious(dataInitial?.nodes.length)

  const { selectedNodeRelativeIds, selectionGraphData, setSelectionData } = useGraphStore((s) => s)

  useEffect(() => {
    if (prevNodesLength === dataInitial?.nodes.length) {
      return
    }

    const nodes = dataInitial?.nodes
      .filter(
        (f: NodeExtended) => f.ref_id === selectedNode?.ref_id || selectedNodeRelativeIds.includes(f?.ref_id || ''),
      )
      .map((n: NodeExtended) => {
        const fixedPosition =
          n.ref_id === selectedNode?.ref_id && n.node_type !== 'topic' ? { fx: 0, fy: 0, fz: 0 } : {}

        return { ...n, x: 0, y: 0, z: 0, ...fixedPosition }
      })

    if (nodes) {
      const links = (dataInitial?.links || []).filter(
        (link) =>
          nodes.some((node: NodeExtended) => node.ref_id === link.target) &&
          nodes.some((node: NodeExtended) => node.ref_id === link.source),
      )

      setSelectionData({ nodes, links })
    }
  }, [dataInitial, selectedNode, selectedNodeRelativeIds, setSelectionData, prevNodesLength])

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
    console.log(simulation2d.alpha())
  })

  useEffect(() => {
    if (!simulation2d) {
      return
    }

    simulation2d.on('tick', () => {
      if (groupRef.current) {
        const gr = groupRef.current as Group

        gr.children.forEach((mesh, index) => {
          const simulationNode = simulation2d.nodes()[index]

          if (simulationNode) {
            mesh.position.set(simulationNode.x, simulationNode.y, simulationNode.z)
          }
        })
      }
    })
  }, [])

  return (
    <>
      <group name="simulation-2d-group">
        {selectionGraphData?.nodes.map((node) => (
          <mesh key={node.ref_id}>
            {node.name ? (
              <TextNode key={node.ref_id || node.id} hide node={node} />
            ) : (
              <Cube key={node.ref_id || node.id} hide node={node} />
            )}
          </mesh>
        ))}
      </group>

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
