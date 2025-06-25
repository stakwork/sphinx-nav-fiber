import { Billboard, Html, ScreenSpace, Text } from '@react-three/drei'
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
import { Layers } from './Layers'
import { LoadingNodes } from './LoadingNodes'
import { Neighbourhoods } from './Neighborhoods'
import { RootNodes } from './RootNodes'
import { NodeDetailsPanel } from './UI'
import { calculateRadius } from './utils/calculateGroupRadius'

type HexagonProps = {
  position: [number, number, number]
  radius?: number
  color?: string
  label?: string
}

const ChapterNodes = [
  // root
  {
    date_added_to_graph: 1750606658, // any timestamp is fine
    node_type: 'chaptersRoot',
    properties: { name: 'Chapters', isRoot: true },
    ref_id: 'chapters-root',
    x: 0,
    y: 0,
    z: 0,
  },
  {
    date_added_to_graph: 1750606659,
    node_type: 'usersRoot',
    properties: { name: 'Users', isRoot: true },
    ref_id: 'users-root',
    x: 0,
    y: 0,
    z: 0,
  },
  {
    date_added_to_graph: 1750606665,
    node_type: 'controversialViewsRoot',
    properties: { name: 'Controversial Views Root', isRoot: true },
    ref_id: 'controversial-views-root',
    x: 0,
    y: 0,
    z: 0,
  },

  // controversial views
  {
    date_added_to_graph: 1750606665,
    node_type: 'ControversialView',
    properties: {
      name: 'Viewpoint A – AI Ethics Skepticism',
    },
    ref_id: 'view-skepticism',
    x: 0,
    y: 0,
    z: 0,
  },
  {
    date_added_to_graph: 1750606665,
    node_type: 'ControversialView',
    properties: {
      name: 'Viewpoint B – LLM Over-Regulation Concern',
    },
    ref_id: 'view-regulation',
    x: 0,
    y: 0,
    z: 0,
  },
  {
    date_added_to_graph: 1750606665,
    node_type: 'ControversialView',
    properties: {
      name: 'Viewpoint C – Swarm AGI Existential Risk',
    },
    ref_id: 'view-existential-risk',
    x: 0,
    y: 0,
    z: 0,
  },

  // users

  {
    date_added_to_graph: 1750606660,
    node_type: 'User',
    properties: { name: 'alice' },
    ref_id: 'user-alice',
    x: 0,
    y: 0,
    z: 0,
  },
  {
    date_added_to_graph: 1750606660,
    node_type: 'User',
    properties: { name: 'bob' },
    ref_id: 'user-bob',
    x: 0,
    y: 0,
    z: 0,
  },
  {
    date_added_to_graph: 1750606660,
    node_type: 'User',
    properties: { name: 'carol' },
    ref_id: 'user-carol',
    x: 0,
    y: 0,
    z: 0,
  },
  {
    date_added_to_graph: 1750606660,
    node_type: 'User',
    properties: { name: 'dave' },
    ref_id: 'user-dave',
    x: 0,
    y: 0,
    z: 0,
  },

  // chapters (unchanged)
  {
    date_added_to_graph: 1750606656.4673522,
    node_type: 'Chapter',
    properties: {
      is_ad: 'False',
      name: 'Introduction to Swarm Agentech: Innovative Multi-Agent System Architectures',
      source_link: 'https://www.youtube.com/watch?v=3tiAvRcviiY',
      timestamp: '00:00:00',
    },
    ref_id: '5e972f6c-c245-4f9e-81e7-760f921d5d94',
    x: 0,
    y: 0,
    z: 0,
  },
  {
    date_added_to_graph: 1750606656.561675,
    node_type: 'Chapter',
    properties: {
      is_ad: 'False',
      name: 'Foundations of Particle Swarm Optimization in AI Systems',
      source_link: 'https://www.youtube.com/watch?v=3tiAvRcviiY',
      timestamp: '00:01:00',
    },
    ref_id: 'd84b38ae-78d8-42d0-bde2-ce13dff3cfc2',
    x: 0,
    y: 0,
    z: 0,
  },
  {
    date_added_to_graph: 1750606656.649143,
    node_type: 'Chapter',
    properties: {
      is_ad: 'False',
      name: 'Activating the Simulation: Initiating Multi-Agent System Processes',
      source_link: 'https://www.youtube.com/watch?v=3tiAvRcviiY',
      timestamp: '00:02:26',
    },
    ref_id: '08f9a888-6914-4d68-817d-d543e607eebd',
    x: 0,
    y: 0,
    z: 0,
  },
  {
    date_added_to_graph: 1750606656.7518668,
    node_type: 'Chapter',
    properties: {
      is_ad: 'False',
      name: 'Experimental Design and Critique: Iterative Multi-Agent Configuration',
      source_link: 'https://www.youtube.com/watch?v=3tiAvRcviiY',
      timestamp: '00:04:53',
    },
    ref_id: '513c4ec4-0cc2-4d6a-a31e-a918943a89d3',
    x: 0,
    y: 0,
    z: 0,
  },
  {
    date_added_to_graph: 1750606656.8570254,
    node_type: 'Chapter',
    properties: {
      is_ad: 'False',
      name: 'Velocity Updates and Symbolic Synthesis: Mapping Physics to AI Strategies',
      source_link: 'https://www.youtube.com/watch?v=3tiAvRcviiY',
      timestamp: '00:09:03',
    },
    ref_id: '1ac01033-ebfa-459e-8266-b1d560d130f1',
    x: 0,
    y: 0,
    z: 0,
  },
  {
    date_added_to_graph: 1750606656.957388,
    node_type: 'Chapter',
    properties: {
      is_ad: 'False',
      name: 'Case Study: Multi-Agent Travel Planning Task',
      source_link: 'https://www.youtube.com/watch?v=3tiAvRcviiY',
      timestamp: '00:13:57',
    },
    ref_id: '85efbf4d-a78b-43bb-bc11-b946a8bf12a6',
    x: 0,
    y: 0,
    z: 0,
  },
  {
    date_added_to_graph: 1750606657.0404751,
    node_type: 'Chapter',
    properties: {
      is_ad: 'False',
      name: 'Enhancing Collaboration with Advanced LLM Reasoning',
      source_link: 'https://www.youtube.com/watch?v=3tiAvRcviiY',
      timestamp: '00:30:13',
    },
    ref_id: '6b1cbda7-dc90-4ec3-a1b0-b74199ea69cb',
    x: 0,
    y: 0,
    z: 0,
  },
  {
    date_added_to_graph: 1750606657.134932,
    node_type: 'Chapter',
    properties: {
      is_ad: 'False',
      name: 'Scaling AI Performance: Benchmarking and Comparative Analysis of LLM Configurations',
      source_link: 'https://www.youtube.com/watch?v=3tiAvRcviiY',
      timestamp: '00:34:04',
    },
    ref_id: 'cfedc0e2-e86c-4f29-b896-fd2ddff8844c',
    x: 0,
    y: 0,
    z: 0,
  },
  {
    date_added_to_graph: 1750606657.2447557,
    node_type: 'Chapter',
    properties: {
      is_ad: 'False',
      name: 'Concluding Thoughts and Future Directions in Swarm Intelligence',
      source_link: 'https://www.youtube.com/watch?v=3tiAvRcviiY',
      timestamp: '00:41:11',
    },
    ref_id: 'a85cd540-bc16-43a4-8e09-b5924fbba5c0',
    x: 0,
    y: 0,
    z: 0,
  },
]

// ─────────────────────────
//  LINKS
// ─────────────────────────
const ChapterLinks = [
  {
    source: 'chapters-root',
    target: '5e972f6c-c245-4f9e-81e7-760f921d5d94',
    ref_id: 'chapters-root-5e972f6c-c245-4f9e-81e7-760f921d5d94',
    weight: 1,
    edge_type: 'chapter',
  },
  {
    source: 'chapters-root',
    target: 'd84b38ae-78d8-42d0-bde2-ce13dff3cfc2',
    ref_id: 'chapters-root-d84b38ae-78d8-42d0-bde2-ce13dff3cfc2',
    weight: 1,
    edge_type: 'chapter',
  },
  {
    source: 'chapters-root',
    target: '08f9a888-6914-4d68-817d-d543e607eebd',
    ref_id: 'chapters-root-08f9a888-6914-4d68-817d-d543e607eebd',
    weight: 1,
    edge_type: 'chapter',
  },
  {
    source: 'chapters-root',
    target: '513c4ec4-0cc2-4d6a-a31e-a918943a89d3',
    ref_id: 'chapters-root-513c4ec4-0cc2-4d6a-a31e-a918943a89d3',
    weight: 1,
    edge_type: 'chapter',
  },
  {
    source: 'chapters-root',
    target: '1ac01033-ebfa-459e-8266-b1d560d130f1',
    ref_id: 'chapters-root-1ac01033-ebfa-459e-8266-b1d560d130f1',
    weight: 1,
    edge_type: 'chapter',
  },
  {
    source: 'chapters-root',
    target: '85efbf4d-a78b-43bb-bc11-b946a8bf12a6',
    ref_id: 'chapters-root-85efbf4d-a78b-43bb-bc11-b946a8bf12a6',
    weight: 1,
    edge_type: 'chapter',
  },
  {
    source: 'chapters-root',
    target: '6b1cbda7-dc90-4ec3-a1b0-b74199ea69cb',
    ref_id: 'chapters-root-6b1cbda7-dc90-4ec3-a1b0-b74199ea69cb',
    weight: 1,
    edge_type: 'chapter',
  },
  {
    source: 'chapters-root',
    target: 'cfedc0e2-e86c-4f29-b896-fd2ddff8844c',
    ref_id: 'chapters-root-cfedc0e2-e86c-4f29-b896-fd2ddff8844c',
    weight: 1,
    edge_type: 'chapter',
  },
  {
    source: 'chapters-root',
    target: 'a85cd540-bc16-43a4-8e09-b5924fbba5c0',
    ref_id: 'chapters-root-a85cd540-bc16-43a4-8e09-b5924fbba5c0',
    weight: 1,
    edge_type: 'chapter',
  },

  // user edges
  {
    source: 'users-root',
    target: 'user-alice',
    ref_id: 'users-root-user-alice',
    weight: 1,
    edge_type: 'user',
  },
  {
    source: 'users-root',
    target: 'user-bob',
    ref_id: 'users-root-user-bob',
    weight: 1,
    edge_type: 'user',
  },
  {
    source: 'users-root',
    target: 'user-carol',
    ref_id: 'users-root-user-carol',
    weight: 1,
    edge_type: 'user',
  },
  {
    source: 'users-root',
    target: 'user-dave',
    ref_id: 'users-root-user-dave',
    weight: 1,
    edge_type: 'user',
  },

  // controversial views
  {
    source: 'controversial-views-root',
    target: 'view-skepticism',
    ref_id: 'controversial-views-root-view-skepticism',
    weight: 1,
    edge_type: 'controversial',
  },
  {
    source: 'controversial-views-root',
    target: 'view-regulation',
    ref_id: 'controversial-views-root-view-regulation',
    weight: 1,
    edge_type: 'controversial',
  },
  {
    source: 'controversial-views-root',
    target: 'view-existential-risk',
    ref_id: 'controversial-views-root-view-existential-risk',
    weight: 1,
    edge_type: 'controversial',
  },
]

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
      <NodeDetailsPanel />
      <ScreenSpace depth={1000}>
        <RootNodes edges={ChapterLinks} nodes={ChapterNodes} />
      </ScreenSpace>
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
