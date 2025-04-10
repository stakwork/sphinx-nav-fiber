import { useControls } from 'leva'
import { isEqual } from 'lodash'
import { useEffect, useRef } from 'react'
import { Group } from 'three'
import { Line2 } from 'three-stdlib'
import { useRetrieveSelectedNodeData } from '~/hooks/useRetrieveSelectedNodeData'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore } from '~/stores/useGraphStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { useSimulationStore } from '~/stores/useSimulationStore'
import { NodeExtended } from '~/types'
import { useSelectedNodeFromUrl } from '../useSelectedNodeFromUrl'
import { Connections } from './Connections'
import { Cubes } from './Cubes'
import { Earth } from './Earth'
import { Layers } from './Layers'
import { LoadingNodes } from './LoadingNodes'
import { Neighbourhoods } from './Neighborhoods'
import { NodeDetailsPanel } from './UI'
import { calculateRadius } from './utils/calculateGroupRadius'

export type LinkPosition = {
  sx: number
  sy: number
  sz: number
  tx: number
  ty: number
  tz: number
}

export type NodePosition = {
  x: number
  y: number
  z: number
}

export const Graph = () => {
  const { dataInitial, isLoadingNew, isFetching, dataNew, resetDataNew } = useDataStore((s) => s)
  const groupRef = useRef<Group>(null)
  const { normalizedSchemasByType } = useSchemaStore((s) => s)
  const prevRadius = useRef(0)

  useRetrieveSelectedNodeData()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { useClustering } = useControls({ useClustering: false })

  const linksPositionRef = useRef(new Map<string, LinkPosition>())
  const nodesPositionRef = useRef(new Map<string, NodePosition>())

  const { graphStyle, setGraphRadius, neighbourhoods } = useGraphStore((s) => s)

  const {
    simulation,
    simulationCreate,
    addClusterForce,
    addNodesAndLinks,
    simulationRestart,
    updateSimulationVersion,
    removeSimulation,
    setForces,
    setSimulationInProgress,
  } = useSimulationStore((s) => s)

  const highlightNodes = useGraphStore((s) => s.highlightNodes)
  const isolatedView = useGraphStore((s) => s.isolatedView)

  useSelectedNodeFromUrl()

  useEffect(() => {
    if (highlightNodes.length) {
      addClusterForce()
      simulationRestart()
    }
  }, [highlightNodes, addClusterForce, simulationRestart])

  useEffect(() => {
    if (!dataNew) {
      return
    }

    const nodes = dataNew.nodes || []
    const links = dataNew.links || []

    const nodesClone = structuredClone(nodes)
    const linksClone = structuredClone(links)

    if (simulation) {
      const replace = isEqual(dataNew, dataInitial)

      addNodesAndLinks(nodesClone, linksClone, replace)
    }

    if (!simulation) {
      simulationCreate(nodesClone)
    }
  }, [dataNew, simulation, simulationCreate, dataInitial, addNodesAndLinks])

  useEffect(() => {
    ;() => removeSimulation()
  }, [removeSimulation])

  useEffect(() => {
    if (!simulation) {
      return
    }

    setForces()
  }, [graphStyle, setForces, simulation])

  useEffect(() => {
    if (!simulation) {
      return
    }

    if (!groupRef?.current) {
      return
    }

    const { selectedNode } = useGraphStore.getState()

    const gr = groupRef.current.getObjectByName('simulation-3d-group__nodes') as Group
    const grPoints = groupRef.current.getObjectByName('simulation-3d-group__node-points') as Group
    const grConnections = groupRef.current.getObjectByName('simulation-3d-group__connections') as Group

    simulation.on('tick', () => {
      if (groupRef?.current) {
        if (gr && grPoints) {
          const nodes = simulation.nodes()

          const maxLength = Math.max(gr.children.length)

          for (let index = 0; index < maxLength; index += 1) {
            const simulationNode = nodes[index]

            if (simulationNode) {
              if (gr.children[index]) {
                gr.children[index].position.set(simulationNode.x, simulationNode.y, simulationNode.z)
              }

              if (grPoints.children[0].children[index]) {
                grPoints.children[0].children[index].position.set(simulationNode.x, simulationNode.y, simulationNode.z)
              }
            }
          }
        }

        linksPositionRef.current.clear()

        dataInitial?.links.forEach((link) => {
          const sourceNode = nodesPositionRef.current.get(link.source) || { x: 0, y: 0, z: 0 }
          const targetNode = nodesPositionRef.current.get(link.target) || { x: 0, y: 0, z: 0 }

          const { x: sx, y: sy, z: sz } = sourceNode
          const { x: tx, y: ty, z: tz } = targetNode

          // Set positions for the link
          linksPositionRef.current.set(link.ref_id, {
            sx: sx || 0,
            sy: sy || 0,
            sz: sz || 0,
            tx: tx || 0,
            ty: ty || 0,
            tz: tz || 0,
          })
        })

        if (grConnections) {
          grConnections.children.forEach((g, i) => {
            const r = g.children[0] // Assuming Line is the first child
            const text = g.children[1] // Assuming Text is the second child

            if (r instanceof Line2) {
              // Ensure you have both Line and Text
              const Line = r as Line2
              const link = dataInitial?.links[i]

              if (link) {
                const sourceNode = nodesPositionRef.current.get(link.source) || { x: 0, y: 0, z: 0 }
                const targetNode = nodesPositionRef.current.get(link.target) || { x: 0, y: 0, z: 0 }

                if (!sourceNode || !targetNode) {
                  console.warn(`Missing source or target node for link: ${link?.ref_id}`)

                  return
                }

                const { x: sx, y: sy, z: sz } = sourceNode
                const { x: tx, y: ty, z: tz } = targetNode

                // Set positions for the link
                linksPositionRef.current.set(link.ref_id, {
                  sx: sx || 0,
                  sy: sy || 0,
                  sz: sz || 0,
                  tx: tx || 0,
                  ty: ty || 0,
                  tz: tz || 0,
                })

                text.position.set((sx + tx) / 2, (sy + ty) / 2, (sz + tz) / 2)

                // Set line color and properties
                // const lineColor = normalizedSchemasByType[sourceNode.node_type]?.primary_color || 'white'

                Line.geometry.setPositions([sx, sy, sz, tx, ty, tz])

                const { material } = Line

                // material.color = new Color(lineColor)
                material.transparent = true
                material.opacity = 0.3
              }
            }
          })
        }

        if (gr) {
          if (selectedNode) {
            return
          }

          const newRadius = calculateRadius(gr)

          if (prevRadius.current === 0 || Math.abs(prevRadius.current - newRadius) > 200) {
            setGraphRadius(newRadius)
            prevRadius.current = newRadius
          }
        }
      }
    })

    simulation.on('end', () => {
      resetDataNew()

      simulation.nodes().forEach((i: NodeExtended) => {
        // eslint-disable-next-line no-param-reassign
        i.fx = i.x
        // eslint-disable-next-line no-param-reassign
        i.fy = i.y
        // eslint-disable-next-line no-param-reassign
        i.fz = i.z || 0
        nodesPositionRef.current.set(i.ref_id, { x: i.x, y: i.y, z: i.z || 0 })
      })

      if (groupRef?.current) {
        if (gr && grPoints) {
          const nodes = simulation.nodes()

          const maxLength = Math.max(gr.children.length, grPoints.children[0].children.length)

          for (let index = 0; index < maxLength; index += 1) {
            const simulationNode = nodes[index]

            if (simulationNode) {
              if (gr.children[index]) {
                gr.children[index].position.set(simulationNode.x, simulationNode.y, simulationNode.z)
              }

              if (grPoints.children[0].children[index]) {
                grPoints.children[0].children[index].position.set(simulationNode.x, simulationNode.y, simulationNode.z)
              }
            }
          }
        }

        linksPositionRef.current.clear()

        dataInitial?.links.forEach((link) => {
          const sourceNode = nodesPositionRef.current.get(link.source) || { x: 0, y: 0, z: 0 }
          const targetNode = nodesPositionRef.current.get(link.target) || { x: 0, y: 0, z: 0 }

          const { x: sx, y: sy, z: sz } = sourceNode
          const { x: tx, y: ty, z: tz } = targetNode

          // Set positions for the link
          linksPositionRef.current.set(link.ref_id, {
            sx: sx || 0,
            sy: sy || 0,
            sz: sz || 0,
            tx: tx || 0,
            ty: ty || 0,
            tz: tz || 0,
          })
        })

        if (grConnections) {
          grConnections.children.forEach((g, i) => {
            const r = g.children[0] // Assuming Line is the first child
            const text = g.children[1] // Assuming Text is the second child

            if (r instanceof Line2) {
              // Ensure you have both Line and Text
              const Line = r as Line2
              const link = dataInitial?.links[i]

              if (link) {
                const sourceNode = nodesPositionRef.current.get(link.source) || { x: 0, y: 0, z: 0 }
                const targetNode = nodesPositionRef.current.get(link.target) || { x: 0, y: 0, z: 0 }

                if (!sourceNode || !targetNode) {
                  console.warn(`Missing source or target node for link: ${link?.ref_id}`)

                  return
                }

                const { x: sx, y: sy, z: sz } = sourceNode
                const { x: tx, y: ty, z: tz } = targetNode

                // Set positions for the link
                linksPositionRef.current.set(link.ref_id, {
                  sx: sx || 0,
                  sy: sy || 0,
                  sz: sz || 0,
                  tx: tx || 0,
                  ty: ty || 0,
                  tz: tz || 0,
                })

                text.position.set((sx + tx) / 2, (sy + ty) / 2, (sz + tz) / 2)

                // Set line color and properties
                // const lineColor = normalizedSchemasByType[sourceNode.node_type]?.primary_color || 'white'

                Line.geometry.setPositions([sx, sy, sz, tx, ty, tz])

                const { material } = Line

                // material.color = new Color(lineColor)
                material.transparent = true
                material.opacity = 0.3
              }
            }
          })
        }

        if (gr) {
          if (selectedNode) {
            return
          }

          const newRadius = calculateRadius(gr)

          if (prevRadius.current === 0 || Math.abs(prevRadius.current - newRadius) > 200) {
            setGraphRadius(newRadius)
            prevRadius.current = newRadius
          }
        }

        setSimulationInProgress(false)
        updateSimulationVersion()
      }
    })
  }, [
    dataInitial,
    simulation,
    setGraphRadius,
    normalizedSchemasByType,
    resetDataNew,
    updateSimulationVersion,
    setSimulationInProgress,
  ])

  if (!simulation) {
    return null
  }

  return (
    <group ref={groupRef}>
      <group visible={!isolatedView}>
        <Cubes />

        {graphStyle !== 'earth' && <Connections linksPosition={linksPositionRef.current} />}
      </group>
      {neighbourhoods?.length && graphStyle === 'force' ? <Neighbourhoods /> : null}
      <NodeDetailsPanel />
      {graphStyle === 'split' && <Layers />}
      {graphStyle === 'earth' && <Earth />}
      {(isLoadingNew || isFetching) && <LoadingNodes />}
    </group>
  )
}
