import { isEqual } from 'lodash'
import { useEffect, useRef } from 'react'
import { Box3, Color, Group, Sphere, Vector3 } from 'three'
import { Line2 } from 'three-stdlib'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore } from '~/stores/useGraphStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { NodeExtended } from '~/types'
import { Connections } from './Connections'
import { Cubes } from './Cubes'
import { Earth } from './Earth'
import { LoadingNodes } from './LoadingNodes'
import { NodeDetailsPanel } from './UI'

export type LinkPosition = {
  sx: number
  sy: number
  sz: number
  tx: number
  ty: number
  tz: number
}

export const Graph = () => {
  const { dataInitial, isLoadingNew, isFetching, dataNew, resetDataNew } = useDataStore((s) => s)
  const groupRef = useRef<Group>(null)
  const { normalizedSchemasByType } = useSchemaStore((s) => s)

  const linksPositionRef = useRef(new Map<string, LinkPosition>())

  const { setData, simulation, simulationCreate, simulationHelpers, graphStyle, setGraphRadius } = useGraphStore(
    (s) => s,
  )

  const removeSimulation = useGraphStore((s) => s.removeSimulation)

  useEffect(() => {
    if (!dataNew) {
      return
    }

    const nodes = dataNew.nodes || []
    const links = dataNew.links || []

    const nodesClose = structuredClone(nodes)
    const linksClone = structuredClone(links)

    if (simulation) {
      const replace = isEqual(dataNew, dataInitial)

      simulationHelpers.addNodesAndLinks(nodesClose, linksClone, replace)
    }

    if (!simulation) {
      simulationCreate(nodesClose, linksClone)
    }

    resetDataNew()
  }, [setData, dataNew, simulation, simulationCreate, resetDataNew, simulationHelpers, dataInitial])

  useEffect(() => {
    if (!dataInitial) {
      removeSimulation()
    }
  }, [dataInitial, removeSimulation])

  useEffect(() => {
    if (!simulation) {
      return
    }

    simulationHelpers.setForces()
  }, [graphStyle, simulationHelpers, simulation])

  useEffect(() => {
    if (!simulation) {
      return
    }

    simulation.on('end', () => {
      const nodesVector = simulation.nodes().map((i: NodeExtended) => {
        // eslint-disable-next-line no-param-reassign
        i.fx = i.x
        // eslint-disable-next-line no-param-reassign
        i.fy = i.y
        // eslint-disable-next-line no-param-reassign
        i.fz = i.z

        return new Vector3(i.x, i.y, i.z)
      })

      if (groupRef.current) {
        const grPoints = groupRef.current.getObjectByName('simulation-3d-group__node-points') as Group
        const grConnections = groupRef.current.getObjectByName('simulation-3d-group__connections') as Group

        if (grPoints) {
          grPoints.children[0].children.forEach((mesh, index) => {
            const simulationNode = simulation.nodes()[index]

            if (simulationNode) {
              mesh.position.set(simulationNode.x, simulationNode.y, simulationNode.z)
            }
          })
        }

        if (grConnections) {
          linksPositionRef.current.clear()

          grConnections.children.forEach((g, i) => {
            const r = g.children[0] // Assuming Line is the first child
            const text = g.children[1] // Assuming Text is the second child

            if (r instanceof Line2) {
              // Ensure you have both Line and Text
              const Line = r as Line2
              const link = dataInitial?.links[i]

              if (link) {
                const sourceNode = simulation.nodes().find((n: NodeExtended) => n.ref_id === link.source)
                const targetNode = simulation.nodes().find((n: NodeExtended) => n.ref_id === link.target)

                if (!sourceNode || !targetNode) {
                  console.warn(`Missing source or target node for link: ${link?.ref_id}`)

                  return
                }

                const { x: sx, y: sy, z: sz } = sourceNode
                const { x: tx, y: ty, z: tz } = targetNode

                // Set positions for the link
                linksPositionRef.current.set(link.ref_id, {
                  sx,
                  sy,
                  sz,
                  tx,
                  ty,
                  tz,
                })

                // Calculate midpoint for the text position
                const midPoint = new Vector3((sx + tx) / 2, (sy + ty) / 2, (sz + tz) / 2)

                // Set text position and rotation
                text.position.set(midPoint.x, midPoint.y, midPoint.z)

                // Set line color and properties
                const lineColor = normalizedSchemasByType[sourceNode.node_type]?.primary_color || 'white'

                Line.geometry.setPositions([sx, sy, sz, tx, ty, tz])

                const { material } = Line

                material.color = new Color(lineColor)
                material.transparent = true
                material.opacity = 0.3
              }
            }
          })
        }
      }

      const boundingBox = new Box3().setFromPoints(nodesVector)

      const boundingSphere = new Sphere()

      boundingBox.getBoundingSphere(boundingSphere)

      const sphereRadius = Math.min(5000, boundingSphere.radius)

      console.log(sphereRadius)

      setGraphRadius(sphereRadius)
    })
  }, [dataInitial, simulation, setGraphRadius, normalizedSchemasByType])

  if (!simulation) {
    return null
  }

  return (
    <group ref={groupRef}>
      <Cubes />
      {graphStyle === 'earth' && <Earth />}

      {(isLoadingNew || isFetching) && <LoadingNodes />}

      {graphStyle !== 'earth' && <Connections linksPosition={linksPositionRef.current} />}
      <NodeDetailsPanel />
    </group>
  )
}
