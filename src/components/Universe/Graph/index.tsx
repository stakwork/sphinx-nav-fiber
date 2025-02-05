import { Billboard, Html, Text } from '@react-three/drei'
import { useControls } from 'leva'
import { isEqual } from 'lodash'
import { useEffect, useRef } from 'react'
import { Box3, Group, Sphere } from 'three'
import { Line2 } from 'three-stdlib'
import { useDataStore } from '~/stores/useDataStore'
import { distributeNodesOnSphere, useGraphStore } from '~/stores/useGraphStore'
import { useMindsetStore } from '~/stores/useMindsetStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { NodeExtended } from '~/types'
import { Connections } from './Connections'
import { Cubes } from './Cubes'
import { fontProps } from './Cubes/Text/constants'
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

export type NodePosition = {
  x: number
  y: number
  z: number
}

export const Graph = () => {
  const { dataInitial, isLoadingNew, isFetching, dataNew, resetDataNew } = useDataStore((s) => s)
  const groupRef = useRef<Group>(null)
  const { normalizedSchemasByType } = useSchemaStore((s) => s)

  const chapters = useMindsetStore((s) => s.chapters)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { useClustering } = useControls({ useClustering: false })

  const linksPositionRef = useRef(new Map<string, LinkPosition>())
  const nodesPositionRef = useRef(new Map<string, NodePosition>())

  const { setData, simulation, simulationCreate, simulationHelpers, graphStyle, setGraphRadius } = useGraphStore(
    (s) => s,
  )

  const highlightNodes = useGraphStore((s) => s.highlightNodes)

  const removeSimulation = useGraphStore((s) => s.removeSimulation)

  useEffect(() => {
    if (highlightNodes.length) {
      simulationHelpers?.addClusterForce()
      simulationHelpers.simulationRestart()
    }
  }, [simulationHelpers, highlightNodes])

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
  }, [setData, dataNew, simulation, simulationCreate, simulationHelpers, dataInitial])

  useEffect(() => {
    ;() => removeSimulation()
  }, [removeSimulation])

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
      resetDataNew()

      simulation.nodes().forEach((i: NodeExtended) => {
        // eslint-disable-next-line no-param-reassign
        i.fx = i.x
        // eslint-disable-next-line no-param-reassign
        i.fy = i.y
        // eslint-disable-next-line no-param-reassign
        i.fz = i.z
        nodesPositionRef.current.set(i.ref_id, { x: i.x, y: i.y, z: i.z })
      })

      if (groupRef?.current) {
        const gr = groupRef.current.getObjectByName('simulation-3d-group__nodes') as Group
        const grPoints = groupRef.current.getObjectByName('simulation-3d-group__node-points') as Group
        const grConnections = groupRef.current.getObjectByName('simulation-3d-group__connections') as Group

        if (gr) {
          gr.children.forEach((mesh, index) => {
            const simulationNode = simulation.nodes()[index]

            if (simulationNode) {
              mesh.position.set(simulationNode.x, simulationNode.y, simulationNode.z)
            }
          })
        }

        if (grPoints) {
          grPoints.children[0].children.forEach((mesh, index) => {
            const simulationNode = simulation.nodes()[index]

            if (simulationNode) {
              // eslint-disable-next-line no-param-reassign
              mesh.position.set(simulationNode.x, simulationNode.y, simulationNode.z)
            }
          })
        }

        linksPositionRef.current.clear()

        dataInitial?.links.forEach((link) => {
          const sourceNode = nodesPositionRef.current.get(link.source) || { x: 0, y: 0, z: 0 }
          const targetNode = nodesPositionRef.current.get(link.target) || { x: 0, y: 0, z: 0 }

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
                  sx,
                  sy,
                  sz,
                  tx,
                  ty,
                  tz,
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

        const box = new Box3().setFromObject(gr)

        // Compute the center and radius of the bounding sphere
        const sphere = new Sphere()

        box.getBoundingSphere(sphere)

        if (sphere.radius) {
          setGraphRadius(sphere.radius)
        }
      }
    })
  }, [dataInitial, simulation, setGraphRadius, normalizedSchemasByType, resetDataNew])

  if (!simulation) {
    return null
  }

  return (
    <group ref={groupRef}>
      <Cubes />
      {chapters ? (
        <group>
          {Object.values(distributeNodesOnSphere(chapters, 1000)).map((n, index) => (
            <mesh key={n.x} position={[n.x, n.y, n.z]}>
              <boxGeometry args={[400, 400, 400]} />
              <meshBasicMaterial color="orange" opacity={0.1} transparent />
              {false && (
                <Billboard>
                  <Text
                    color="white"
                    fillOpacity={1}
                    name="text"
                    position={[0, -65, 0]}
                    scale={1}
                    {...fontProps}
                    fontSize={20}
                  >
                    {chapters[index].name}
                  </Text>
                  <boxGeometry args={[40, 40, 40]} />
                  <meshStandardMaterial color="blue" />
                </Billboard>
              )}
              <Html position={[0, 200, 0]}>
                <div style={{ color: 'white', display: 'flex', whiteSpace: 'nowrap', transform: 'translateX(-50%)' }}>
                  {chapters[index].name}
                </div>
              </Html>
            </mesh>
          ))}
        </group>
      ) : null}
      <NodeDetailsPanel />
      {graphStyle === 'earth' && <Earth />}
      {(isLoadingNew || isFetching) && <LoadingNodes />}
      {graphStyle !== 'earth' && <Connections linksPosition={linksPositionRef.current} />}
    </group>
  )
}
