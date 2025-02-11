import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Group } from 'three'
import { useNodeNavigation } from '~/components/Universe/useNodeNavigation'
import { usePrevious } from '~/hooks/usePrevious'
import { fetchNodeEdges } from '~/network/fetchGraphData'
import { useDataStore } from '~/stores/useDataStore'
import { useSelectedNode } from '~/stores/useGraphStore'
import { Link, Node, NodeExtended } from '~/types'
import { LinkPosition } from '../..'
import { Connections } from './Connections'
import { Node as GraphNode } from './Node'

const RADIUS = 50
const MAX_LENGTH = 7

export type PathNode = NodeExtended & {
  isPathNode?: boolean
}

type GraphData<T = string> = {
  links: Link<T>[]
  nodes: NodeExtended[]
}

export const SelectionDataNodes = memo(() => {
  const [selectionData, setSelectionData] = useState<GraphData | null>()

  const { addNewNode, nodesNormalized } = useDataStore((s) => s)
  const dataInitial = useDataStore((s) => s.dataInitial)
  const selectedNode = useSelectedNode()
  const groupRef = useRef<Group>(null)

  const [pathGraph, setPathGraph] = useState<GraphData | null>(null)

  const linksPositionRef = useRef(new Map<string, LinkPosition>())

  const prevSelectedNodeId = usePrevious(selectedNode?.ref_id)

  const { navigateToNode } = useNodeNavigation()

  const newData: GraphData = useMemo(() => {
    if (!selectionData?.nodes.length) {
      return { nodes: [], links: [] }
    }

    const oldNodes = pathGraph?.nodes || []
    const oldLinks = pathGraph?.links.filter((i) => !selectionData.links.some((l) => l.ref_id === i.ref_id)) || []

    // Filter out nodes that already exist in oldNodes
    const newNodes = selectionData.nodes.filter((i) => !oldNodes.some((n) => n.ref_id === i.ref_id))

    // Find the start position from oldNodes
    const startPositionNode = oldNodes.at(-1)
    const startPosition = startPositionNode ? { x: startPositionNode.x, y: startPositionNode.y } : { x: 0, y: 0 }

    // Calculate the starting angle (theta) for the start position
    const startTheta = Math.atan2(startPosition.y, startPosition.x)

    // Total nodes including both old and new ones
    const totalNodes = oldNodes.length + newNodes.length - 1
    const thetaSpan = (Math.PI * 2) / totalNodes // Angle between points

    const nodes = [
      ...oldNodes,
      ...newNodes.map((node, index) => {
        // Calculate angular position for the new node
        const theta = startTheta + thetaSpan * (index + 1) // Start adding from startTheta
        const x = node.ref_id === selectedNode?.ref_id ? 0 : Math.cos(theta) * RADIUS
        const y = node.ref_id === selectedNode?.ref_id ? 0 : Math.sin(theta) * RADIUS
        const z = node.ref_id === selectedNode?.ref_id ? 0 : 0

        return { ...node, x, y, z }
      }),
    ]

    return { nodes, links: [...selectionData.links, ...oldLinks] }
  }, [selectionData?.nodes, selectionData?.links, pathGraph?.nodes, pathGraph?.links, selectedNode?.ref_id])

  const graphData: GraphData = useMemo(() => {
    if (newData?.nodes?.length) {
      return newData
    }

    if (pathGraph) {
      return {
        nodes: pathGraph.nodes,
        links: pathGraph.links,
      }
    }

    const selected = selectedNode?.ref_id ? nodesNormalized.get(selectedNode?.ref_id || '') : null

    return {
      nodes: selected ? [{ ...selected, x: 0, y: 0, z: 0 }] : [],
      links: [],
    }
  }, [newData, pathGraph, selectedNode?.ref_id, nodesNormalized])

  useEffect(() => {
    const init = async () => {
      if (selectedNode?.ref_id && selectedNode.ref_id !== prevSelectedNodeId) {
        try {
          const data = await fetchNodeEdges(selectedNode.ref_id, 0, 5, { useSubGraph: false })

          if (data) {
            const filteredNodes: Node[] = data.nodes.filter(
              (node, index) => node.ref_id !== selectedNode.ref_id && index < MAX_LENGTH,
            )

            const graphNodes = filteredNodes.map((node: Node) => ({ ...node, x: 0, y: 0, z: 0 }))

            const nodes: PathNode[] = [...graphNodes, { ...selectedNode, x: 0, y: 0, z: 0, fx: 0, fy: 0, fz: 0 }]

            const links = data.edges.filter(
              (link: Link) =>
                nodes.some((node: NodeExtended) => node.ref_id === link.target) &&
                nodes.some((node: NodeExtended) => node.ref_id === link.source),
            )

            setSelectionData({ nodes, links: links as unknown as GraphData['links'] })
            linksPositionRef.current = new Map()

            addNewNode({ nodes: filteredNodes, edges: links })
          }
        } catch (error) {
          console.error(error)
        }
      }
    }

    if (selectedNode) {
      if (selectedNode.node_type === 'Question') {
        const normalizedNode = nodesNormalized.get(selectedNode.ref_id)

        if (!normalizedNode) {
          return
        }

        const sourceNodes = (normalizedNode.sources || [])
          .map((i) => nodesNormalized.get(i))
          .filter((i) => !!i) as NodeExtended[]

        const targetNodes = (normalizedNode.targets || [])
          .map((i) => nodesNormalized.get(i))
          .filter((i) => !!i) as NodeExtended[]

        const siblings: NodeExtended[] = [
          ...sourceNodes,
          ...targetNodes,
          { ...selectedNode, x: 0, y: 0, z: 0, fx: 0, fy: 0, fz: 0 },
        ]

        const links = (dataInitial?.links || []).filter((l: Link) =>
          siblings.some(
            (i: NodeExtended) =>
              (i.ref_id === l.source && l.target === selectedNode.ref_id) ||
              (i.ref_id === l.target && l.source === selectedNode.ref_id),
          ),
        )

        setSelectionData({ nodes: siblings, links: links as unknown as GraphData['links'] })
      } else {
        init()
      }
    }
  }, [addNewNode, prevSelectedNodeId, selectedNode, setSelectionData, nodesNormalized, dataInitial?.links])

  const handleSelect = useCallback(
    (id: string) => {
      if (selectedNode) {
        const newSelectedNode = graphData.nodes.find((i) => i.ref_id === id)

        if (!newSelectedNode) {
          return
        }

        const oldPathNodes = pathGraph?.nodes.filter((i) => i.ref_id !== newSelectedNode.ref_id) || []

        // Create new path nodes, keeping up to 2 older nodes
        const newPathNodes = [
          { ...newSelectedNode, isPathNode: false },
          ...(oldPathNodes.length ? oldPathNodes : [{ ...selectedNode, isPathNode: true }]),
        ].slice(0, 3)

        const angle = Math.atan2(-newSelectedNode.y, -newSelectedNode.x)
        const x = RADIUS * Math.cos(angle)
        const y = RADIUS * Math.sin(angle)

        const updatedPathNodes = newPathNodes.map((node, index) => {
          if (index === 0) {
            return { ...node, x: 0, y: 0, z: 0, fx: 0, fy: 0, fz: 0, isPathNode: true }
          }

          if (index === 1) {
            return newPathNodes.length === 3
              ? {
                  ...node,
                  x: x / 2,
                  y: y / 2,
                  z: 0,
                  fx: x / 2,
                  fy: y / 2,
                  fz: 0,
                  isPathNode: true,
                }
              : {
                  ...node,
                  x,
                  y,
                  z: 0,
                  fx: x,
                  fy: y,
                  fz: 0,
                  isPathNode: true,
                }
          }

          return {
            ...node,
            x,
            y,
            z: 0,
            fx: x,
            fy: y,
            fz: 0,
            isPathNode: true,
          }
        })

        const links = graphData.links.filter(
          (i) =>
            updatedPathNodes.some((node) => node.ref_id === i.target) &&
            updatedPathNodes.some((node) => node.ref_id === i.source),
        )

        setSelectionData(null)
        setPathGraph({ nodes: updatedPathNodes as NodeExtended[], links })

        navigateToNode(newSelectedNode.ref_id)
      }
    },
    [graphData.links, graphData.nodes, pathGraph, selectedNode, navigateToNode],
  )

  return (
    <>
      <group ref={groupRef} name="simulation-2d-group">
        {graphData.nodes?.map((node) => (
          <GraphNode
            key={node.ref_id}
            id={node.ref_id}
            node={node}
            onClick={handleSelect}
            selected={node.ref_id === selectedNode?.ref_id}
            x={node.x}
            y={node.y}
            z={node.z}
          />
        ))}
        <Connections links={graphData.links} nodes={graphData.nodes} />
      </group>
    </>
  )
})

SelectionDataNodes.displayName = 'SelectionDataNodes'
