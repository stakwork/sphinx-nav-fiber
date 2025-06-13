import { Billboard, Html, ScreenSpace, Text } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { isEqual } from 'lodash'
import { useEffect, useMemo, useRef } from 'react'
import { DoubleSide, Group, Shape } from 'three'
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
import { TextNode } from './Cubes/Text'
import { Earth } from './Earth'
import { Groups } from './Groups'
import { Highlights } from './Highlights'
import { Layers } from './Layers'
import { LoadingNodes } from './LoadingNodes'
import { Neighbourhoods } from './Neighborhoods'
import { NodeDetailsPanel } from './UI'
import { calculateRadius } from './utils/calculateGroupRadius'

type HexagonProps = {
  position: [number, number, number]
  radius?: number
  color?: string
  label?: string
}

const Hexagon = ({ position, radius = 1, color = 'skyblue', label }: HexagonProps) => {
  const shape = useMemo(() => {
    const hexShape = new Shape()

    for (let i = 0; i < 6; i += 1) {
      const angle = (i / 6) * Math.PI * 2
      const x = radius * Math.cos(angle)
      const y = radius * Math.sin(angle)

      if (i === 0) {
        hexShape.moveTo(x, y)
      } else {
        hexShape.lineTo(x, y)
      }
    }

    hexShape.closePath()

    return hexShape
  }, [radius])

  return (
    <mesh position={position}>
      <mesh rotation={[0, 0, Math.PI / 6]}>
        <shapeGeometry args={[shape]} />
        <meshBasicMaterial color={'#50c878' || color} side={DoubleSide} />
      </mesh>
      {label && (
        <Text
          anchorX="center"
          anchorY="middle"
          color="black"
          fontSize={radius * 0.1}
          position={[0, 0, 0.01]} // Slightly above surface
        >
          {label}
        </Text>
      )}
    </mesh>
  )
}

const node = {
  date_added_to_graph: 1739963879.991741,
  node_type: 'Tweet',
  properties: {
    bookmark_count: 5,
    date: 1739927020,
    image_url: 'https://pbs.twimg.com/profile_images/1740015728105832448/fRPNehGE_normal.png',
    impression_count: 2443,
    like_count: 18,
    name: 'Carlos E. Perez',
    quote_count: 2,
    reply_count: 6,
    retweet_count: 2,
    text: "Ok.  I'm very disappointed with Grok-3.  I'm sharing two chats, one with Grok-3 and the other with OpenAI o3-mini-high.  The quality is not even comparable! \n\nhttps://t.co/6eLOnxzQq1\n\nhttps://t.co/rLsPY1NOkp\n\nI'm unimpressed.",
    tweet_id: '1892017172488052944',
    twitter_handle: 'IntuitMachine',
    verified: false,
  },
  ref_id: '473a666e-fbb3-4c75-bd5a-36827fa15e31',
}

const segments = [
  {
    title: 'Kash Patel’s Role and Reform Agenda at the FBI',
    description:
      'Kash Patel describes his entry into the FBI under the Trump administration and the internal reform movement to decentralize and modernize the agency.',
    start_time: 17.77,
    source_link: 'https://example.com?t=17',
  },
  {
    title: 'Combatting the Fentanyl Crisis: Domestic and Global Strategy',
    description:
      'Patel outlines the U.S. fentanyl crisis, its Chinese chemical origins, Mexican cartel distribution networks, and the FBI’s international operations to combat it.',
    start_time: 237.71,
    source_link: 'https://example.com?t=238',
  },
  {
    title: 'Failure of Prior Administrations to Address Drug Trafficking',
    description:
      'Discussion on how fentanyl was not classified as a national security threat by previous administrations and the consequences of deprioritizing enforcement.',
    start_time: 917.76,
    source_link: 'https://example.com?t=918',
  },
  {
    title: 'Hostage Rescue Operations and National Security Wins',
    description:
      'Details of successful hostage rescues under Trump, including the use of elite forces and the lack of media coverage around these missions.',
    start_time: 1096.1,
    source_link: 'https://example.com?t=1096',
  },
  {
    title: 'The Russiagate Scandal and Institutional Corruption',
    description:
      'A summary of the Russiagate investigation, exposing misuse of the FISA court, media collusion, and partisan targeting within the FBI.',
    start_time: 1384.95,
    source_link: 'https://example.com?t=1385',
  },
  {
    title: 'Long-Term Impact of Disinformation and Media Bias',
    description:
      'Patel explains how years of misinformation surrounding Russiagate shaped public belief and created lasting distrust in institutions.',
    start_time: 1673.93,
    source_link: 'https://example.com?t=1674',
  },
]

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

  const { size } = useThree()

  console.log(size)

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
      {false && <Groups />}
      {true && <Highlights />}
      <NodeDetailsPanel />
      {graphStyle === 'split' && <Layers />}
      {graphStyle === 'earth' && <Earth />}
      {(isLoadingNew || isFetching) && <LoadingNodes />}
      {false && (
        <ScreenSpace depth={1}>
          <Hexagon color="#50c878" label="some text is here" position={[0, 0, -90]} radius={25} />
          <Billboard position={[-50, -50, 0]}>
            <TextNode node={node as unknown as NodeExtended} scale={1} />
          </Billboard>
          <Html>
            <ul style={{ color: '#fff' }}>
              {segments.map((i) => (
                <li key={i.title}>{i.title}</li>
              ))}
            </ul>
          </Html>
        </ScreenSpace>
      )}
      {false && (
        <ScreenSpace depth={1}>
          {segments.map((i, index) => (
            <group key={i.title} position={[index * 15 * 2, 0, -90]}>
              <Hexagon color="#50c878" label="some text is here" position={[0, 0, 0]} radius={15} />
              <Html>
                <ul style={{ color: '#fff' }}>
                  <li key={i.title}>{i.title}</li>
                </ul>
              </Html>
            </group>
          ))}
        </ScreenSpace>
      )}
    </group>
  )
}
