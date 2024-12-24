import { Html } from '@react-three/drei'
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Box3, Color, Group, Sphere, Vector3 } from 'three'
import { Line2 } from 'three-stdlib'
import { useShallow } from 'zustand/react/shallow'
import { usePrevious } from '~/hooks/usePrevious'
import { fetchNodeEdges } from '~/network/fetchGraphData'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore, useSelectedNode } from '~/stores/useGraphStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { Link, Node, NodeExtended } from '~/types'
import { LinkPosition } from '../..'
import { Connections } from './Connections'
import { Node as GraphNode } from './Node'

const radius = 200
const MAX_LENGTH = 7

type GraphData<T = string> = {
  links: Link<T>[]
  nodes: NodeExtended[]
}

export const SelectionDataNodes = memo(() => {
  const [selectionData, setSelectionData] = useState<GraphData | null>()

  const { addNewNode } = useDataStore((s) => s)
  const selectedNode = useSelectedNode()
  const groupRef = useRef<Group>(null)

  const linksPositionRef = useRef(new Map<string, LinkPosition>())

  const prevSelectedNodeId = usePrevious(selectedNode?.ref_id)

  const { normalizedSchemasByType } = useSchemaStore((s) => s)

  const { setSelectedNode, setSelectionGraphRadius } = useGraphStore(useShallow((s) => s))

  const graphData: GraphData = useMemo(() => {
    if (!selectionData?.nodes.length) {
      return { nodes: [], links: [] }
    }

    const thetaSpan = (Math.PI * 2) / (selectionData.nodes.length - 1) // Angle between points

    const nodes = selectionData.nodes.map((i, index) => {
      const theta = thetaSpan * index
      const x = i.ref_id === selectedNode?.ref_id ? 0 : Math.cos(theta) * radius
      const y = i.ref_id === selectedNode?.ref_id ? 0 : Math.sin(theta) * radius
      const z = i.ref_id === selectedNode?.ref_id ? 0 : 0

      return { ...i, x, y, z }
    })

    return { nodes, links: [] }
  }, [selectionData, selectedNode])

  useEffect(() => {
    const init = async () => {
      if (selectedNode?.ref_id && selectedNode.ref_id !== prevSelectedNodeId) {
        try {
          const data = await fetchNodeEdges(selectedNode.ref_id, 0, 5, { useSubGraph: false })

          if (data) {
            const filteredNodes: NodeExtended[] = data.nodes.filter(
              (node, index) => node.ref_id !== selectedNode.ref_id && index < MAX_LENGTH,
            )

            const graphNodes = filteredNodes.map((node: Node) => ({ ...node, x: 0, y: 0, z: 0 }))

            const nodes: NodeExtended[] = [
              ...graphNodes,
              { ...selectedNode, x: 0, y: 0, z: 0, fx: 0, fy: 0, fz: 0 } as NodeExtended,
            ]

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

  useEffect(() => {
    if (!groupRef.current) {
      return
    }

    const gr = groupRef.current as Group

    gr.children.forEach((mesh, index) => {
      const simulationNode = graphData.nodes[index]

      if (simulationNode) {
        mesh.position.set(simulationNode.x, simulationNode.y, simulationNode.z)
      }
    })

    const grConnections = groupRef.current.getObjectByName('simulation-3d-group__connections') as Group

    grConnections.children.forEach((g, i) => {
      const r = g.children[0]
      const text = g.children[1]

      if (r instanceof Line2) {
        const Line = r as Line2
        const link = selectionData?.links[i]

        if (link) {
          const sourceNode = graphData.nodes.find((n: NodeExtended) => n.ref_id === link.source)
          const targetNode = graphData.nodes.find((n: NodeExtended) => n.ref_id === link.target)

          if (!sourceNode || !targetNode) {
            return
          }

          const { x: sx, y: sy } = sourceNode
          const { x: tx, y: ty } = targetNode

          linksPositionRef.current.set(link.ref_id, {
            sx,
            sy,
            tx,
            ty,
            sz: 0,
            tz: 0,
          })

          const midPoint = new Vector3((sx + tx) / 2, (sy + ty) / 2, 0)

          text.position.set(midPoint.x, midPoint.y, 1)

          let angle = Math.atan2(ty - sy, tx - sx)

          if (tx < sx || (Math.abs(tx - sx) < 0.01 && ty < sy)) {
            angle += Math.PI
          }

          text.rotation.set(0, 0, angle)

          Line.geometry.setPositions([sx, sy, 0, tx, ty, 0])

          const { material } = Line

          material.color = new Color('white')
        }
      }
    })

    const nodesVector = graphData.nodes.map((i: NodeExtended) => new Vector3(i.x, i.y, i.z))

    const boundingBox = new Box3().setFromPoints(nodesVector)

    const boundingSphere = new Sphere()

    boundingBox.getBoundingSphere(boundingSphere)

    const sphereRadius = Math.min(50, boundingSphere.radius)

    setSelectionGraphRadius(sphereRadius)
  }, [normalizedSchemasByType, selectionData?.links, setSelectionGraphRadius, graphData.nodes])

  const handleSelect = useCallback(
    (node: NodeExtended) => {
      if (selectedNode) {
        const newSelectedNode = graphData.nodes.find((i) => i.ref_id === node.ref_id)

        const nodes = [
          { ...newSelectedNode, x: 0, y: 0, z: 0, fx: 0, fy: 0, fz: 0 },
          {
            ...selectedNode,
            ...(newSelectedNode?.x !== undefined ? { fx: newSelectedNode?.x, x: newSelectedNode.x } : { x: 0 }),
            ...(newSelectedNode?.y !== undefined ? { fy: newSelectedNode?.y, y: newSelectedNode.y } : { y: 0 }),
            ...(newSelectedNode?.z !== undefined ? { fz: newSelectedNode?.z, z: newSelectedNode.z } : { z: 0 }),
          },
        ]

        const links = graphData.links.filter(
          (i) =>
            (i.target === selectedNode?.ref_id && i.source === node.ref_id) ||
            (i.source === selectedNode?.ref_id && i.target === node.ref_id),
        )

        setSelectionData({ nodes: nodes as NodeExtended[], links })

        if (false) {
          setSelectedNode(node)
        }
      }
    },
    [graphData.links, graphData.nodes, selectedNode, setSelectedNode],
  )

  return (
    <>
      <group ref={groupRef} name="simulation-2d-group">
        {graphData.nodes?.map((node) => (
          <mesh key={node.ref_id}>
            <Html center sprite zIndexRange={[0, 0]}>
              <GraphNode
                node={node}
                onClick={() => handleSelect(node)}
                selected={node.ref_id === selectedNode?.ref_id}
              />
            </Html>
          </mesh>
        ))}
        <Connections links={graphData.links} linksPosition={linksPositionRef.current} />
      </group>
    </>
  )
})

SelectionDataNodes.displayName = 'SelectionDataNodes'
