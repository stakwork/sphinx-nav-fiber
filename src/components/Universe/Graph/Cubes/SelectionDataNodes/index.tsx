import { Html } from '@react-three/drei'
import { forceLink, forceManyBody, forceRadial, forceSimulation } from 'd3-force-3d'
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { Box3, Color, Group, Sphere, Vector3 } from 'three'
import { Line2 } from 'three-stdlib'
import { useShallow } from 'zustand/react/shallow'
import { usePrevious } from '~/hooks/usePrevious'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore, useSelectedNode, useSelectedNodeRelativeIds } from '~/stores/useGraphStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { ForceSimulation } from '~/transformers/forceSimulation'
import { GraphData, Link, Node, NodeExtended } from '~/types'
import { LinkPosition } from '../..'
import { Connections } from './Connections'
import { Node as GraphNode } from './Node'

const MAX_LENGTH = 6

export const SelectionDataNodes = memo(() => {
  const [simulation2d, setSimulation2D] = useState<ForceSimulation | null>(null)

  const { dataInitial, nodesNormalized } = useDataStore((s) => s)
  const selectedNode = useSelectedNode()
  const groupRef = useRef<Group>(null)

  const linksPositionRef = useRef(new Map<string, LinkPosition>())

  const selectedNodeRelativeIds = useSelectedNodeRelativeIds().slice(0, MAX_LENGTH)

  const prevSelectedNodeId = usePrevious(selectedNode?.ref_id)

  const { normalizedSchemasByType } = useSchemaStore((s) => s)

  const { selectionGraphData, selectionPath, setSelectionData, setSelectedNode, setSelectionGraphRadius } =
    useGraphStore(useShallow((s) => s))

  console.log(selectionPath)

  useEffect(() => {
    const structuredLinks = structuredClone(dataInitial?.links || [])

    if (prevSelectedNodeId === selectedNode?.ref_id) {
      return
    }

    const pathNodes: NodeExtended[] = selectionPath
      .slice(-3, -1)
      .filter((id) => !!nodesNormalized.get(id))
      .map((i, index) => {
        const node = nodesNormalized.get(i) as unknown as Node

        return { ...node, fx: -index * 50, fy: 0, fz: 0, x: 0, y: 0, z: 0 }
      })

    const graphNodes: NodeExtended[] = selectedNodeRelativeIds
      .filter((id) => !!nodesNormalized.get(id))
      .map((id: string) => {
        const node = nodesNormalized.get(id) as unknown as Node

        return { ...node, x: 0, y: 0, z: 0 }
      })

    const nodes: NodeExtended[] = [
      ...graphNodes,
      ...pathNodes,
      { ...selectedNode, x: 0, y: 0, z: 0, fx: 0, fy: 0, fz: 0 } as NodeExtended,
    ]

    if (nodes) {
      const links = structuredLinks.filter(
        (link: Link) =>
          nodes.some((node: NodeExtended) => node.ref_id === link.target) &&
          nodes.some((node: NodeExtended) => node.ref_id === link.source),
      )

      setSelectionData({ nodes, links: links as unknown as GraphData['links'] })
      setSimulation2D(null)
      linksPositionRef.current = new Map()
    }
  }, [
    dataInitial,
    selectedNode,
    selectedNodeRelativeIds,
    setSelectionData,
    prevSelectedNodeId,
    selectionPath,
    nodesNormalized,
  ])

  useEffect(() => {
    if (simulation2d || !selectionGraphData.nodes.length) {
      return
    }

    const structuredLinks = structuredClone(selectionGraphData.links)

    const simulation = forceSimulation([])
      .numDimensions(2)
      .stop()
      .nodes(selectionGraphData.nodes)
      .force(
        'link',
        forceLink()
          .links(structuredLinks)
          .id((d: NodeExtended) => d.ref_id)
          .distance(() => 150),
      )
      .force('radial', forceRadial(500, 0, 0, 0).strength(0))
      .force('charge', forceManyBody().strength(-1000))
      .alpha(1)
      .restart()

    setSimulation2D(simulation)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectionGraphData, simulation2d])

  useEffect(
    () => () => {
      setSelectionData({ nodes: [], links: [] })
    },
    [setSelectionData],
  )

  useEffect(() => {
    if (!simulation2d) {
      return
    }

    simulation2d.on('tick', () => {
      if (!groupRef.current) {
        return
      }

      const gr = groupRef.current as Group

      gr.children.forEach((mesh, index) => {
        const simulationNode = simulation2d.nodes()[index]

        if (simulationNode) {
          mesh.position.set(simulationNode.x, simulationNode.y, simulationNode.z)
        }
      })

      const grConnections = groupRef.current.getObjectByName('simulation-3d-group__connections') as Group

      grConnections.children.forEach((g, i) => {
        const r = g.children[0] // Assuming Line is the first child
        const text = g.children[1] // Assuming Text is the second child

        if (r instanceof Line2) {
          const Line = r as Line2
          const link = selectionGraphData?.links[i]

          if (link) {
            const sourceNode = simulation2d.nodes().find((n: NodeExtended) => n.ref_id === link.source)
            const targetNode = simulation2d.nodes().find((n: NodeExtended) => n.ref_id === link.target)

            if (!sourceNode || !targetNode) {
              return
            }

            const { x: sx, y: sy } = sourceNode
            const { x: tx, y: ty } = targetNode

            // Set positions for the link
            linksPositionRef.current.set(link.ref_id, {
              sx,
              sy,
              tx,
              ty,
              sz: 0,
              tz: 0,
            })

            const midPoint = new Vector3((sx + tx) / 2, (sy + ty) / 2, 0)

            // Position the text
            text.position.set(midPoint.x, midPoint.y, 1)

            // Calculate angle of rotation in 2D
            const angle = Math.atan2(ty - sy, tx - sx)

            // Apply rotation to the text
            text.rotation.set(0, 0, angle) // Only Z-axis rotation needed for 2D alignment

            // Set the line positions
            Line.geometry.setPositions([sx, sy, 0, tx, ty, 0])

            const { material } = Line

            material.color = new Color('white')
          }
        }
      })
    })

    simulation2d.on('end', () => {
      const nodesVector = simulation2d.nodes().map((i: NodeExtended) => new Vector3(i.x, i.y, i.z))

      const boundingBox = new Box3().setFromPoints(nodesVector)

      const boundingSphere = new Sphere()

      boundingBox.getBoundingSphere(boundingSphere)

      const sphereRadius = Math.min(5000, boundingSphere.radius)

      setSelectionGraphRadius(sphereRadius)
    })
  }, [normalizedSchemasByType, selectionGraphData?.links, simulation2d, setSelectionGraphRadius])

  const handleSelect = useCallback(
    (node: NodeExtended) => {
      setSelectedNode(node)
    },
    [setSelectedNode],
  )

  return (
    <group ref={groupRef} name="simulation-2d-group">
      {selectionGraphData?.nodes.map((node) => (
        <mesh key={node.ref_id}>
          <Html center sprite zIndexRange={[0, 0]}>
            <GraphNode node={node} onClick={() => handleSelect(node)} selected={node.ref_id === selectedNode?.ref_id} />
          </Html>

          <mesh />
        </mesh>
      ))}
      <Connections linksPosition={linksPositionRef.current} />
    </group>
  )
})

SelectionDataNodes.displayName = 'SelectionDataNodes'
