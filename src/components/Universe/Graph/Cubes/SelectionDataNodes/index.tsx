import { Segments } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useEffect, useRef, useState } from 'react'
import { Group } from 'three'
import { useShallow } from 'zustand/react/shallow'
import { usePrevious } from '~/hooks/usePrevious'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore, useSelectedNode, useSelectedNodeRelativeIds } from '~/stores/useGraphStore'
import { ForceSimulation, runForceSimulation } from '~/transformers/forceSimulation'
import { GraphData, Link, NodeExtended } from '~/types'
import { Segment } from '../../Segment'
import { PathwayBadges } from '../../Segment/LinkBadge'
import { Cube } from '../Cube'
import { TextNode } from '../Text'

export const SelectionDataNodes = memo(() => {
  const [simulation2d, setSimulation2D] = useState<ForceSimulation | null>(null)

  const { dataInitial } = useDataStore((s) => s)
  const selectedNode = useSelectedNode()
  const groupRef = useRef<Group>(null)

  const selectedNodeRelativeIds = useSelectedNodeRelativeIds()

  const prevNodesLength = usePrevious(dataInitial?.nodes.length)

  const { selectionGraphData, setSelectionData } = useGraphStore(useShallow((s) => s))

  useEffect(() => {
    const structuredNodes = structuredClone(dataInitial?.nodes || [])
    const structuredLinks = structuredClone(dataInitial?.links || [])

    if (prevNodesLength === structuredNodes.length || !selectedNodeRelativeIds.length) {
      return
    }

    const nodes = structuredNodes
      .filter(
        (f: NodeExtended) => f.ref_id === selectedNode?.ref_id || selectedNodeRelativeIds.includes(f?.ref_id || ''),
      )
      .map((n: NodeExtended) => {
        const fixedPosition = n.ref_id === selectedNode?.ref_id ? { fx: 0, fy: 0, fz: 0 } : {}

        return { ...n, x: 0, y: 0, z: 0, ...fixedPosition }
      })

    if (nodes) {
      const links = structuredLinks.filter(
        (link) =>
          nodes.some((node: NodeExtended) => node.ref_id === link.target) &&
          nodes.some((node: NodeExtended) => node.ref_id === link.source),
      )

      setSelectionData({ nodes, links: links as unknown as GraphData<NodeExtended>['links'] })
    }
  }, [dataInitial, selectedNode, selectedNodeRelativeIds, setSelectionData, prevNodesLength])

  useEffect(() => {
    if (simulation2d || !selectionGraphData.nodes.length) {
      return
    }

    const simulation = runForceSimulation(selectionGraphData.nodes, selectionGraphData.links as unknown as Link[], {
      numDimensions: 2,
      forceLinkStrength: 0.01,
      forceCenterStrength: 0.85,
      forceChargeStrength: -20,
      velocityDecay: 0.9,
    })

    setSimulation2D(simulation)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectionGraphData, simulation2d])

  useEffect(
    () => () => {
      setSelectionData({ nodes: [], links: [] })
    },
    [setSelectionData],
  )

  useFrame(() => {
    // console.log(simulation2d.alpha())
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
  }, [simulation2d])

  return (
    <>
      <group ref={groupRef} name="simulation-2d-group">
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
        {(selectionGraphData?.links as unknown as GraphData<NodeExtended>['links']).map((link, index) => (
          <Segment
            // eslint-disable-next-line react/no-array-index-key
            key={index.toString()}
            animated
            link={link}
          />
        ))}
      </Segments>
      {simulation2d && <PathwayBadges links={selectionGraphData.links} simulation={simulation2d} />}
    </>
  )
})

SelectionDataNodes.displayName = 'SelectionDataNodes'
