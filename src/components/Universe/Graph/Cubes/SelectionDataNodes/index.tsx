import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Group } from 'three'
import { useShallow } from 'zustand/react/shallow'
import { usePrevious } from '~/hooks/usePrevious'
import { fetchNodeEdges } from '~/network/fetchGraphData'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore, useSelectedNode } from '~/stores/useGraphStore'
import { Link, Node, NodeExtended } from '~/types'
import { LinkPosition } from '../..'
import { Connections } from './Connections'
import { Node as GraphNode } from './Node'

const radius = 50
const MAX_LENGTH = 5

type GraphData<T = string> = {
  links: Link<T>[]
  nodes: NodeExtended[]
}

export const SelectionDataNodes = memo(() => {
  const [selectionData, setSelectionData] = useState<GraphData | null>()

  const { addNewNode, nodesNormalized } = useDataStore((s) => s)
  const selectedNode = useSelectedNode()
  const groupRef = useRef<Group>(null)

  const [pathGraph, setPathGraph] = useState<GraphData | null>(null)

  const linksPositionRef = useRef(new Map<string, LinkPosition>())

  const prevSelectedNodeId = usePrevious(selectedNode?.ref_id)

  const { setSelectedNode } = useGraphStore(useShallow((s) => s))

  const newData: GraphData = useMemo(() => {
    if (!selectionData?.nodes.length) {
      return { nodes: [], links: [] }
    }

    const oldNodes = pathGraph?.nodes || []

    // Combine `oldNodes` and `selectionData.nodes` for position calculations
    const combinedNodes = [...oldNodes, ...selectionData.nodes]

    // Calculate the angular spacing considering both old and new nodes
    const totalNodes = combinedNodes.length
    const thetaSpan = (Math.PI * 2) / totalNodes // Angle between points

    const nodes = selectionData.nodes.map((node, index) => {
      // Check if the node exists in oldNodes
      const existingNode = oldNodes.find((oldNode) => oldNode.ref_id === node.ref_id)

      if (existingNode) {
        // Retain the old node's position
        return existingNode
      }

      // Calculate new position for nodes not in oldNodes
      const theta = thetaSpan * (oldNodes.length + index) // Offset by oldNodes count
      const x = node.ref_id === selectedNode?.ref_id ? 0 : Math.cos(theta) * radius
      const y = node.ref_id === selectedNode?.ref_id ? 0 : Math.sin(theta) * radius
      const z = node.ref_id === selectedNode?.ref_id ? 0 : 0

      return { ...node, x, y, z }
    })

    // Retain old nodes with their original positions
    const retainedOldNodes = oldNodes.filter(
      (oldNode) => !selectionData.nodes.some((node) => node.ref_id === oldNode.ref_id),
    )

    // Merge the calculated nodes with retained old nodes
    const mergedNodes = [...nodes, ...retainedOldNodes]

    return { nodes: mergedNodes, links: selectionData.links }
  }, [selectionData, selectedNode, pathGraph?.nodes])

  const graphData: GraphData = useMemo(() => {
    if (newData?.nodes?.length) {
      return newData
    }

    console.log(pathGraph)

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

            const nodes: NodeExtended[] = [...graphNodes, { ...selectedNode, x: 0, y: 0, z: 0, fx: 0, fy: 0, fz: 0 }]

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
      init()
    }
  }, [addNewNode, prevSelectedNodeId, selectedNode, setSelectionData])

  const handleSelect = useCallback(
    (id: string) => {
      if (selectedNode) {
        const newSelectedNode = graphData.nodes.find((i) => i.ref_id === id)

        const nodes = [
          { ...newSelectedNode, x: 0, y: 0, z: 0, fx: 0, fy: 0, fz: 0 },
          {
            ...selectedNode,
            ...(newSelectedNode?.x !== undefined ? { fx: -newSelectedNode.x, x: -newSelectedNode.x } : { x: 0 }),
            ...(newSelectedNode?.y !== undefined ? { fy: -newSelectedNode.y, y: -newSelectedNode.y } : { y: 0 }),
            ...(newSelectedNode?.z !== undefined ? { fz: newSelectedNode?.z, z: newSelectedNode.z } : { z: 0 }),
          },
        ]

        const links = graphData.links.filter(
          (i) =>
            (i.target === selectedNode?.ref_id && i.source === id) ||
            (i.source === selectedNode?.ref_id && i.target === id),
        )

        console.log(links, 'here')
        setSelectionData(null)
        setPathGraph({ nodes: nodes as NodeExtended[], links })

        if (newSelectedNode) {
          setSelectedNode(newSelectedNode)
        }
      }
    },
    [graphData.links, graphData.nodes, selectedNode, setSelectedNode],
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
