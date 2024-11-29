import { useThree } from '@react-three/fiber'
import { Fragment, useMemo } from 'react'
import { Vector3 } from 'three'
import { useDataStore } from '~/stores/useDataStore'
import { Link } from '~/types'
import { Edge } from './Edges'
import { Node } from './Node'

const nodeWidth = 144 / 10
const nodeHeight = 84 / 10

type LinkExtended = Link & {
  sourcePositions: {
    x?: number
    y?: number
    z?: number
  }
  targetPositions: {
    x?: number
    y?: number
    z?: number
  }
}

export const Board = () => {
  const state = useThree()
  const { dataInitial } = useDataStore((s) => s)
  const { viewport } = state

  const processedData = useMemo(() => {
    if (!dataInitial) {
      return { nodes: [], edges: [], relatedNodes: {} }
    }

    const edgesMention = dataInitial.links
      .filter((e) => e?.properties?.start)
      .map((edge) => ({
        source: edge.source,
        target: edge.target,
        start: edge.properties?.start as number,
      }))

    // Step 1: Calculate positions for primary nodes
    const nodesWithPositions = dataInitial.nodes
      .filter((node) => dataInitial.links.some((ed) => ed.source === node.ref_id || ed.target === node.ref_id))
      .map((node) => {
        const edge = edgesMention.find((ed) => node.ref_id === ed.source || node.ref_id === ed.target)
        const x = (edge?.start || 0) * (viewport.width / 10)
        const y = 0 // Main node positions are aligned to y = 0
        const z = 0

        return { ...node, x, y, z, start: edge?.start || 0 }
      })
      .filter((node) => node.node_type !== 'Clip' && node.node_type !== 'Episode' && node.node_type !== 'Show')

    // Step 2 & Step 3: Calculate positions for related nodes and edges
    const relatedNodesWithEdges = nodesWithPositions.reduce((acc, marker) => {
      const linksRelatedToNodeWithoutTimestamp = dataInitial.links.filter(
        (link) => !link?.properties?.start && [link.target, link.source].includes(marker.ref_id),
      )

      const relatedNodes = dataInitial.nodes.filter(
        (node) =>
          node.node_type !== 'Episode' &&
          node.node_type !== 'Clip' &&
          node.ref_id !== marker.ref_id &&
          linksRelatedToNodeWithoutTimestamp.some((link) => [link.source, link.target].includes(node.ref_id)),
      )

      const relatedNodesWithPositions = relatedNodes.map((relatedNode, index) => {
        const { x } = marker
        const y = (Math.floor(index / 2) + 1) * nodeHeight * 2 * (index % 2 === 0 ? 1 : -1) // Offset based on index
        const z = 0

        return { ...relatedNode, x, y, z }
      })

      const relatedLinksWithPositions = linksRelatedToNodeWithoutTimestamp.map((link) => {
        if (link.source === marker.ref_id) {
          const targetNode = relatedNodesWithPositions.find((node) => node.ref_id === link.target)

          return {
            ...link,
            sourcePositions: { x: marker.x, y: marker.y, z: marker.z },
            targetPositions: { x: targetNode?.x, y: targetNode?.y, z: targetNode?.z },
          }
        }

        const sourceNode = relatedNodesWithPositions.find((node) => node.ref_id === link.source)

        return {
          ...link,
          sourcePositions: { x: sourceNode?.x, y: sourceNode?.y, z: sourceNode?.z },
          targetPositions: { x: marker.x, y: marker.y, z: marker.z },
        }
      })

      acc[marker.ref_id] = {
        nodes: relatedNodesWithPositions,
        edges: relatedLinksWithPositions,
      }

      return acc
    }, {} as Record<string, { nodes: typeof dataInitial.nodes; edges: LinkExtended[] }>)

    // Combine all edges from relatedNodesWithEdges
    const allEdgesWithPositions = Object.values(relatedNodesWithEdges)
      .flatMap((group) => group.edges)
      .filter((i) => i?.sourcePositions?.x)

    return {
      nodes: nodesWithPositions,
      edges: allEdgesWithPositions,
      relatedNodes: Object.fromEntries(Object.entries(relatedNodesWithEdges).map(([key, group]) => [key, group.nodes])),
    }
  }, [dataInitial, viewport.width])

  return (
    <>
      {/* Render Nodes */}
      {processedData.nodes.map((node) => (
        <Fragment key={node.ref_id}>
          <Node
            color="#353A46"
            height={nodeHeight}
            name={node?.properties?.name || ''}
            onButtonClick={console.log}
            position={[node.x, node.y, node.z]}
            type={node.node_type}
            url={node?.properties?.image_url || 'logo.png'}
            width={nodeWidth}
          />

          {/* Render Related Nodes */}
          {(processedData.relatedNodes[node.ref_id] || []).map((relatedNode) => (
            <Node
              key={`${relatedNode.ref_id}-${node.ref_id}`}
              color="#353A46"
              height={nodeHeight}
              name={relatedNode?.properties?.name || ''}
              onButtonClick={console.log}
              position={[relatedNode.x, relatedNode.y, relatedNode.z]}
              type={relatedNode.node_type}
              url={relatedNode?.properties?.image_url || 'logo.png'}
              width={nodeWidth}
            />
          ))}
        </Fragment>
      ))}

      {/* Render Edges */}
      {processedData.edges.map((edge, index) =>
        edge?.sourcePositions && edge?.targetPositions ? (
          <Edge
            // eslint-disable-next-line react/no-array-index-key
            key={`edge-${index}`}
            label={edge.edge_type || ''}
            sourcePosition={new Vector3(edge.sourcePositions.x, edge.sourcePositions.y, edge.sourcePositions.z)}
            targetPosition={new Vector3(edge.targetPositions.x, edge.targetPositions.y, edge.targetPositions.z)}
          />
        ) : null,
      )}
    </>
  )
}
