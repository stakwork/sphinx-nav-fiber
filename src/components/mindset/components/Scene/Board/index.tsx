import { useThree } from '@react-three/fiber'
import { Fragment, useEffect, useMemo, useState } from 'react'
import { useDataStore } from '~/stores/useDataStore'
import { Edge } from './Edges'
import { Node } from './Node'

const nodeWidth = 144 / 10
const nodeHeight = 84 / 10

export const Board = () => {
  const state = useThree()
  const { dataInitial } = useDataStore((s) => s)
  const { camera, viewport } = state

  const [zoomState, setZoomState] = useState(camera.zoom)

  useEffect(() => {
    const orthoCamera = camera as THREE.OrthographicCamera

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault() // Prevent default scrolling behavior

      if (event.ctrlKey) {
        // Zoom the camera when ctrlKey is pressed
        orthoCamera.zoom += event.deltaY * -0.1 // Adjust zoom level
        orthoCamera.zoom = Math.max(2, Math.min(orthoCamera.zoom, 20)) // Clamp zoom

        setZoomState(orthoCamera.zoom)
      } else {
        // Move the camera left/right when ctrlKey is NOT pressed
        orthoCamera.position.x += event.deltaX * 0.1 // Horizontal movement
      }

      orthoCamera.updateProjectionMatrix() // Update projection matrix
    }

    // Add the event listener
    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      // Cleanup event listener
      window.removeEventListener('wheel', handleWheel)
    }
  }, [camera])

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

    // 'fc9fc515-d9f8-4e28-ac4a-89597db29a2f'
    // '2f919e76-90cd-41e2-92eb-15d8c89e1fd2'
    // Step 2: Calculate positions for related nodes
    const relatedNodes = nodesWithPositions.reduce((acc, marker) => {
      const related = dataInitial.nodes
        .filter((node) =>
          dataInitial.links.some(
            (edge) =>
              node.node_type !== 'Episode' &&
              node.node_type !== 'Clip' &&
              ((edge.source === marker.ref_id && edge.target === node.ref_id) ||
                (edge.target === marker.ref_id && edge.source === node.ref_id)),
          ),
        )
        .map((relatedNode, index) => {
          // Calculate positions relative to the main node
          const { x } = marker
          const y = (Math.floor(index / 2) + 1) * nodeHeight * 2 * (index % 2 === 0 ? 1 : -1) // Offset based on index
          const z = 0

          return { ...relatedNode, x, y, z }
        })

      acc[marker.ref_id] = related

      return acc
    }, {} as Record<string, typeof dataInitial.nodes>)

    // Step 3: Calculate edge positions based on node and related node positions
    // eslint-disable-next-line camelcase
    const edgesWithPositions = Object.entries(relatedNodes).flatMap(([ref_id, related]) => {
      // Gather all node ids in this group (ref_id + related nodes)
      // eslint-disable-next-line camelcase
      const allNodesInGroup = [ref_id, ...related.map((node) => node.ref_id)]

      // Filter edges that connect nodes within this group
      const edgesInGroup = dataInitial.links.filter(
        (edge) => allNodesInGroup.includes(edge.source) && allNodesInGroup.includes(edge.target),
      )

      // Map these edges to include source and target positions
      return edgesInGroup.map((edge) => {
        const sourceNode =
          nodesWithPositions.find((node) => node.ref_id === edge.source) ||
          related.find((node) => node.ref_id === edge.source)

        const targetNode =
          nodesWithPositions.find((node) => node.ref_id === edge.target) ||
          related.find((node) => node.ref_id === edge.target)

        return {
          ...edge,
          sourcePosition: sourceNode ? { x: sourceNode.x, y: sourceNode.y, z: sourceNode.z } : null,
          targetPosition: targetNode ? { x: targetNode.x, y: targetNode.y, z: targetNode.z } : null,
        }
      })
    })

    return {
      nodes: nodesWithPositions,
      edges: edgesWithPositions,
      relatedNodes,
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
            zoom={zoomState}
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
              zoom={zoomState}
            />
          ))}
        </Fragment>
      ))}

      {/* Render Edges */}
      {processedData.edges.map((edge, index) => {
        if (!edge.sourcePosition || !edge.targetPosition) {
          return null
        }

        const { sourcePosition, targetPosition } = edge

        return (
          // eslint-disable-next-line react/no-array-index-key
          <Fragment key={`edge-${index}`}>
            {/* Line */}
            <Edge sourcePosition={sourcePosition} targetPosition={targetPosition} />
          </Fragment>
        )
      })}
    </>
  )
}
