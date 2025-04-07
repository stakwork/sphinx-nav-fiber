import {
  forceCenter,
  forceCollide,
  forceLink,
  forceManyBody,
  forceRadial,
  forceSimulation,
  forceX,
  forceY,
  forceZ,
} from 'd3-force-3d'
import { create } from 'zustand'
import { ForceSimulation } from '~/transformers/forceSimulation'
import { Link, Node, NodeExtended } from '~/types'
import { useDataStore } from '../useDataStore'
import { useGraphStore } from '../useGraphStore'
import { distributeNodesOnSphere } from './utils/distributeNodesOnSphere'

const resetPosition = {
  fx: null,
  fy: null,
  fz: null,
  x: null,
  y: null,
  z: null,
  vx: null,
  vy: null,
  vz: null,
}

interface SimulationStore {
  simulation: ForceSimulation | null
  simulationVersion: number
  simulationInProgress: boolean
  simulationCreate: (nodes: Node[]) => void
  removeSimulation: () => void
  addNodesAndLinks: (nodes: Node[], links: Link[], replace: boolean) => void
  setForces: () => void
  addRadialForce: () => void
  addClusterForce: () => void
  addSplitForce: () => void
  simulationRestart: () => void
  getLinks: () => Link<NodeExtended>[]
  updateSimulationVersion: () => void
  setSimulationInProgress: (simulationInProgress: boolean) => void
}

export const useSimulationStore = create<SimulationStore>((set, get) => ({
  simulation: null,
  simulationVersion: 0,
  simulationInProgress: false,
  simulationCreate: (nodes) => {
    const structuredNodes = structuredClone(nodes)

    const simulation = forceSimulation([])
      .numDimensions(3)
      .stop()
      .nodes(structuredNodes)
      .force(
        'link',
        forceLink()
          .strength(0)
          .links([])
          .id((d: Node) => d.ref_id),
      )

    set({ simulation })
  },

  removeSimulation: () => set({ simulation: null }),

  addNodesAndLinks: (newNodes, newLinks, replace) => {
    const { simulation, simulationRestart } = get()

    if (!simulation) {
      return
    }

    simulation.stop()

    const nodes = replace ? [] : simulation.nodes()

    const links = replace
      ? []
      : simulation
          .force('link')
          .links()
          .map((i: Link<NodeExtended>) => ({ ...i, source: i.source.ref_id, target: i.target.ref_id }))

    nodes.push(...structuredClone(newNodes))
    links.push(...structuredClone(newLinks))

    const filteredLinks = links.filter(
      (i: Link) =>
        nodes.some((n: NodeExtended) => n.ref_id === i.source) &&
        nodes.some((n: NodeExtended) => n.ref_id === i.target),
    )

    try {
      simulation.nodes(nodes)
      simulation.force('link').links(filteredLinks)

      simulationRestart()
    } catch (error) {
      console.error(error)
    }
  },

  setForces: () => {
    const { simulationRestart, addRadialForce, addClusterForce, addSplitForce } = get()
    const { graphStyle } = useGraphStore.getState()

    switch (graphStyle) {
      case 'sphere':
        addRadialForce()
        break
      case 'force':
        addClusterForce()
        break
      case 'split':
        addSplitForce()
        break
      default:
        addRadialForce()
        break
    }

    simulationRestart()
  },

  addRadialForce: () => {
    const { simulation } = get()

    simulation
      .nodes(simulation.nodes().map((n: Node) => ({ ...n, ...resetPosition })))
      .force('y', null)
      .force('radial', forceRadial(900, 0, 0, 0).strength(0.1))
      .force('center', forceCenter().strength(1))
      .force(
        'charge',
        forceManyBody().strength((node: NodeExtended) => (node.scale || 1) * -100),
        // .distanceMax(90),
      )
      .force('x', forceX().strength(0))
      .force('y', forceY().strength(0))
      .force('z', forceZ().strength(0))
      .force(
        'link',
        forceLink()
          .links(
            simulation
              .force('link')
              .links()
              .map((i: Link<NodeExtended>) => ({ ...i, source: i.source.ref_id, target: i.target.ref_id })),
          )
          .strength(1)
          .distance(300)
          .id((d: Node) => d.ref_id),
      )
      .force(
        'collide',
        forceCollide()
          .radius((node: NodeExtended) => (node.scale || 1) * 80)
          .strength(0.5)
          .iterations(1),
      )
  },

  addClusterForce: () => {
    const { simulation } = get()
    const { neighbourhoods } = useGraphStore.getState()
    const neighborhoodCenters = neighbourhoods?.length ? distributeNodesOnSphere(neighbourhoods, 3000) : null

    simulation
      .nodes(simulation.nodes().map((n: Node) => ({ ...n, ...resetPosition })))
      .force(
        'charge',
        forceManyBody().strength((node: NodeExtended) => (node.scale || 1) * 0),
      )
      .force(
        'x',
        forceX((n: NodeExtended) => {
          const neighborhood = neighborhoodCenters && n.neighbourHood ? neighborhoodCenters[n.neighbourHood] : null

          return neighborhood?.x || 0
        }).strength(0.1), // Attract to X
      )
      .force(
        'y',
        forceY((n: NodeExtended) => {
          const neighborhood = neighborhoodCenters && n.neighbourHood ? neighborhoodCenters[n.neighbourHood] : null

          return neighborhood?.y || 0
        }).strength(0.1), // Attract to X
      )
      .force(
        'z',
        forceZ((n: NodeExtended) => {
          const neighborhood = neighborhoodCenters && n.neighbourHood ? neighborhoodCenters[n.neighbourHood] : null

          return neighborhood?.z || 0
        }).strength(0.1), // Attract to X
      )
      .force(
        'link',
        forceLink()
          .links(
            simulation
              .force('link')
              .links()
              .map((i: Link<NodeExtended>) => ({ ...i, source: i.source.ref_id, target: i.target.ref_id })),
          )
          .strength(0)
          .distance(400)
          .id((d: NodeExtended) => d.ref_id),
      )
      .force(
        'collide',
        forceCollide()
          .radius((node: NodeExtended) => (node.scale || 1) * 95)
          .strength(0.5)
          .iterations(1),
      )
  },

  addSplitForce: () => {
    const { simulation } = get()
    const { nodeTypes } = useDataStore.getState()

    simulation
      // .stop()
      .force('cluster', null)
      .nodes(
        simulation.nodes().map((n: Node) => {
          const index = nodeTypes.indexOf(n.node_type) + 1
          const yOffset = Math.floor(index / 2) * 500

          return {
            ...n,
            ...resetPosition,
            fy: index % 2 === 0 ? yOffset : -yOffset,
          }
        }),
      )
      // .force('radial', forceRadial(2000, 0, 0, 0).strength(0.1))
      .force(
        'collide',
        forceCollide()
          .radius(() => 200)
          .strength(1)
          .iterations(1),
      )
  },

  getLinks: () => {
    const { simulation } = get()

    return simulation ? simulation.force('link').links() : []
  },

  simulationRestart: () => {
    const { simulation, setSimulationInProgress } = get()

    if (!simulation) {
      return
    }

    setSimulationInProgress(true)

    simulation.alpha(0.4).restart()
  },

  updateSimulationVersion: () => {
    set((state) => ({ simulationVersion: state.simulationVersion + 1 }))
  },

  setSimulationInProgress: (simulationInProgress: boolean) => {
    set({ simulationInProgress })
  },
}))
