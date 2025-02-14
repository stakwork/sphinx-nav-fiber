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
import { GraphData, Link, Node, NodeExtended } from '~/types'
import { useDataStore } from '../useDataStore'
import { useMindsetStore } from '../useMindsetStore'

const simulationTicks = 100

type Position = {
  x: number
  y: number
  z: number
}

export type GraphStyle = 'sphere' | 'force' | 'split' | 'earth'

export const distributeNodesOnSphere = (nodes: NodeExtended[], radius = 20) => {
  const count = nodes.length
  const goldenRatio = (1 + Math.sqrt(5)) / 2

  return nodes.reduce((acc: Record<string, Position>, node, i) => {
    const theta = (2 * Math.PI * i) / goldenRatio // Angle for uniform distribution
    const phi = Math.acos(1 - (2 * (i + 0.5)) / count) // Elevation angle

    acc[node.ref_id] = {
      x: radius * Math.sin(phi) * Math.cos(theta),
      y: radius * Math.sin(phi) * Math.sin(theta),
      z: radius * Math.cos(phi),
    }

    return acc
  }, {})
}

interface SimulationHelpers {
  addNodesAndLinks: (nodes: Node[], links: Link[], replace: boolean) => void
  setForces: () => void
  addRadialForce: () => void
  addDefaultForce: () => void
  addSplitForce: () => void
  addClusterForce: () => void
  simulationRestart: () => void
  getLinks: () => Link<NodeExtended>[]
}

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

const defaultSimulationHelpers: SimulationHelpers = {
  addNodesAndLinks: () => {
    /* do nothing */
  },
  setForces: () => {
    /* do nothing */
  },
  addRadialForce: () => {
    /* do nothing */
  },
  addDefaultForce: () => {
    /* do nothing */
  },
  addClusterForce: () => {
    /* do nothing */
  },

  addSplitForce: () => {
    /* do nothing */
  },

  simulationRestart: () => {
    /* do nothing */
  },
  getLinks: () => [],
  /* do nothing */
}

const runSimulationPhase = (simulation: ForceSimulation) => {
  simulation.stop().alpha(1)

  for (let i = 0; i < simulationTicks; i += 1) {
    simulation.tick()
  }
}

export const graphStyles: GraphStyle[] = ['sphere', 'force', 'split', 'earth']

export type GraphStore = {
  graphRadius: number
  selectionGraphRadius: number
  data: { nodes: NodeExtended[]; links: Link[] } | null
  selectionGraphData: GraphData
  graphStyle: GraphStyle
  hoveredNode: NodeExtended | null
  selectedNodeTypes: string[]
  selectedLinkTypes: string[]
  selectedNode: NodeExtended | null
  cameraFocusTrigger: boolean
  showSelectionGraph: boolean
  disableCameraRotation: boolean
  scrollEventsDisabled: boolean
  simulation: ForceSimulation | null
  simulationHelpers: SimulationHelpers
  isHovering: boolean
  activeEdge: Link | null
  activeNode: NodeExtended | null
  highlightNodes: string[]
  selectionPath: string[]
  hoveredNodeSiblings: string[]
  selectedNodeSiblings: string[]
  searchQuery: string
  simulationVersion: number

  setDisableCameraRotation: (rotation: boolean) => void
  setScrollEventsDisabled: (rotation: boolean) => void
  setData: (data: GraphData) => void
  setGraphStyle: (graphStyle: GraphStyle) => void
  setGraphRadius: (graphRadius: number) => void
  setSelectionGraphRadius: (graphRadius: number) => void
  setHoveredNode: (hoveredNode: NodeExtended | null) => void
  setSelectedNode: (selectedNode: NodeExtended | null) => void
  setActiveEdge: (edge: Link | null) => void
  setActiveNode: (activeNode: NodeExtended | null) => void
  setHighlightNodes: (highlightNodes: string[]) => void
  setCameraFocusTrigger: (_: boolean) => void
  setShowSelectionGraph: (_: boolean) => void
  setSelectionData: (data: GraphData) => void
  simulationCreate: (nodes: Node[], links: Link[]) => void
  setIsHovering: (isHovering: boolean) => void
  removeSimulation: () => void
  addToSelectionPath: (id: string) => void
  setSearchQuery: (id: string) => void
  setSelectedNodeTypes: (type: string) => void
  resetSelectedNodeTypes: () => void
  setSelectedLinkTypes: (type: string) => void
  resetSelectedLinkTypes: () => void
  updateSimulationVersion: () => void
}

const defaultData: Omit<
  GraphStore,
  | 'setData'
  | 'setCameraAnimation'
  | 'setScrollEventsDisabled'
  | 'setDisableCameraRotation'
  | 'setHoveredNode'
  | 'setSelectedNode'
  | 'setActiveEdge'
  | 'setActiveNode'
  | 'setHighlightNodes'
  | 'setCameraFocusTrigger'
  | 'setGraphRadius'
  | 'setSelectionGraphRadius'
  | 'setGraphStyle'
  | 'setShowSelectionGraph'
  | 'setSelectionData'
  | 'setHideNodeDetails'
  | 'simulationCreate'
  | 'setIsHovering'
  | 'removeSimulation'
  | 'addToSelectionPath'
  | 'setSearchQuery'
  | 'setSelectedNodeTypes'
  | 'resetSelectedNodeTypes'
  | 'setSelectedLinkTypes'
  | 'resetSelectedLinkTypes'
  | 'updateSimulationVersion'
> = {
  data: null,
  simulationVersion: 0,
  simulation: null,
  selectionGraphData: { nodes: [], links: [] },
  disableCameraRotation: true,
  scrollEventsDisabled: false,
  graphRadius: 1500, // calculated from initial load
  selectionGraphRadius: 200, // calculated from initial load
  graphStyle: 'sphere',
  hoveredNode: null,
  hoveredNodeSiblings: [],
  selectedNodeSiblings: [],
  selectedNode: null,
  activeEdge: null,
  cameraFocusTrigger: false,
  showSelectionGraph: false,
  simulationHelpers: defaultSimulationHelpers,
  isHovering: false,
  selectionPath: [],
  activeNode: null,
  highlightNodes: [],
  searchQuery: '',
  selectedNodeTypes: [],
  selectedLinkTypes: [],
}

export const useGraphStore = create<GraphStore>()((set, get) => ({
  ...defaultData,
  setData: (data) => {
    set({ data })
  },
  setSelectedNodeTypes: (nodeType: string) => {
    const { selectedNodeTypes } = get()

    const updatedTypes = selectedNodeTypes.includes(nodeType)
      ? selectedNodeTypes.filter((i) => i !== nodeType)
      : [...selectedNodeTypes, nodeType]

    set({ selectedNodeTypes: updatedTypes })
  },
  setSelectedLinkTypes: (linkType: string) => {
    const { selectedLinkTypes } = get()

    const updatedTypes = selectedLinkTypes.includes(linkType)
      ? selectedLinkTypes.filter((i) => i !== linkType)
      : [...selectedLinkTypes, linkType]

    set({ selectedLinkTypes: updatedTypes })
  },
  updateSimulationVersion: () => {
    const { simulationVersion } = get()

    set({ simulationVersion: simulationVersion + 1 })
  },
  resetSelectedNodeTypes: () => set({ selectedNodeTypes: [] }),
  resetSelectedLinkTypes: () => set({ selectedLinkTypes: [] }),
  setSelectionData: (selectionGraphData) => set({ selectionGraphData }),
  setScrollEventsDisabled: (scrollEventsDisabled) => set({ scrollEventsDisabled }),
  setDisableCameraRotation: (rotation) => set({ disableCameraRotation: rotation }),
  setIsHovering: (isHovering) => set({ isHovering }),
  setGraphRadius: (graphRadius) => set({ graphRadius }),
  setSelectionGraphRadius: (selectionGraphRadius) => set({ selectionGraphRadius }),
  setGraphStyle: (graphStyle) => set({ graphStyle }),
  setHoveredNode: (hoveredNode) => {
    const { nodesNormalized } = useDataStore.getState() || {}

    if (hoveredNode) {
      const normalizedNode = nodesNormalized.get(hoveredNode.ref_id)

      const siblings = [...(normalizedNode?.targets || []), ...(normalizedNode?.sources || [])]

      set({ hoveredNode, hoveredNodeSiblings: siblings })
    } else {
      set({ hoveredNode, hoveredNodeSiblings: [] })
    }
  },
  setActiveEdge: (activeEdge) => {
    set({ activeEdge })
  },
  setActiveNode: (activeNode) => {
    set({ activeNode })
  },
  setHighlightNodes: (highlightNodes) => {
    set({ highlightNodes })
  },
  addToSelectionPath: (id: string) => {
    const { selectionPath } = get()

    set({ selectionPath: [...selectionPath, id] })
  },
  setSelectedNode: (selectedNode) => {
    const { nodesNormalized } = useDataStore.getState() || {}

    if (!selectedNode) {
      set({
        hoveredNode: null,
        selectedNode: null,
        disableCameraRotation: false,
        showSelectionGraph: false,
        selectionPath: [],
      })
    }

    const { selectedNode: stateSelectedNode, simulation, selectionPath } = get()

    if (stateSelectedNode?.ref_id !== selectedNode?.ref_id) {
      const selectedNodeWithCoordinates =
        simulation?.nodes()?.find((i: NodeExtended) => i.ref_id === selectedNode?.ref_id) || null

      if (selectedNode?.ref_id && selectedNodeWithCoordinates) {
        const normalizedNode: NodeExtended | undefined = nodesNormalized?.get(selectedNode?.ref_id)

        set({
          hoveredNode: null,
          selectedNode: { ...selectedNodeWithCoordinates, ...(normalizedNode || {}) },
          disableCameraRotation: true,
          selectionPath: [...selectionPath, selectedNodeWithCoordinates.ref_id],
          selectedNodeSiblings: [...(normalizedNode?.sources || []), ...(normalizedNode?.targets || [])],
        })
      }
    }
  },
  setCameraFocusTrigger: (cameraFocusTrigger) => set({ cameraFocusTrigger }),
  setShowSelectionGraph: (showSelectionGraph) => set({ showSelectionGraph }),
  simulationHelpers: {
    addNodesAndLinks: (newNodes, newLinks, replace) => {
      const { simulation, simulationHelpers } = get()

      simulation.stop()

      const structuredNodes = structuredClone(newNodes)
      const structuredLinks = structuredClone(newLinks)

      simulation.stop()

      const nodes = replace ? [] : simulation.nodes()
      const links = replace ? [] : simulation.force('link').links()

      nodes.push(...structuredNodes)
      links.push(...structuredLinks)

      simulation.nodes(nodes)

      simulation.force('link').links([]).links(links)

      simulationHelpers.simulationRestart()

      try {
        console.log('try')
      } catch (error) {
        console.error(error)
        // eslint-disable-next-line no-debugger
      }

      // Add simulation node to reference (so that we can access reference on tick to update position)
    },
    addRadialForce: () => {
      const { simulation } = get()

      simulation
        .nodes(simulation.nodes().map((n: Node) => ({ ...n, ...resetPosition })))
        .force('y', null)
        // .force('radial', forceRadial(200, 0, 0, 0).strength(0.1))
        // .force('center', forceCenter().strength(1))
        .force(
          'charge',
          forceManyBody().strength((node: NodeExtended) => (node.scale || 1) * -5),
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
            .distance(400)
            .id((d: Node) => d.ref_id),
        )
        .force(
          'collide',
          forceCollide()
            .radius((node: NodeExtended) => (node.scale || 1) * 95)
            .strength(0.5)
            .iterations(1),
        )
    },

    addClusterForce: () => {
      const { simulation } = get()
      const { chapters } = useMindsetStore.getState()

      const neighborhoodCenters = chapters?.length ? distributeNodesOnSphere(chapters, 1000) : null

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

    addDefaultForce: () => {
      const { simulation } = get()

      simulation
        .nodes(simulation.nodes().map((n: Node) => ({ ...n, ...resetPosition })))
        .force('y', null)
        .force('charge', forceManyBody().strength(-20))
        .force('center', forceCenter().strength(1))
        .force(
          'collide',
          forceCollide()
            .radius(() => 250)
            .strength(1)
            .iterations(1),
        )
    },

    addSplitForce: () => {
      const { simulation } = get()
      const { nodeTypes } = useDataStore.getState()

      simulation
        .stop()
        .nodes(simulation.nodes().map((n: Node) => ({ ...n, ...resetPosition })))
        .force('radial', forceRadial(200, 0, 0, 0).strength(0.1))
        .force(
          'collide',
          forceCollide()
            .radius(() => 250)
            .strength(1)
            .iterations(1),
        )
        .force(
          'y',
          forceY()
            .y((node: NodeExtended) => {
              const index = nodeTypes.indexOf(node.node_type)
              const yOffset = Math.floor(index / 2) * 400

              return index % 2 === 0 ? yOffset : -yOffset
            })
            .strength(10),
        )
    },

    getLinks: () => {
      const { simulation } = get()

      return simulation ? simulation.force('link').links() : []
    },

    setForces: () => {
      const { graphStyle, simulationHelpers } = get()

      if (graphStyle === 'split') {
        simulationHelpers.addSplitForce()
      }

      if (graphStyle === 'sphere') {
        simulationHelpers.addRadialForce()
      }

      if (graphStyle === 'force') {
        simulationHelpers.addClusterForce()
      }

      simulationHelpers.simulationRestart()
    },

    simulationRestart: () => {
      const { simulation } = get()

      if (false) {
        runSimulationPhase(simulation)
      }

      simulation.alpha(1).restart()
    },
  },
  simulationCreate: (nodes, links) => {
    const structuredNodes = structuredClone(nodes)
    const structuredLinks = structuredClone(links)

    const simulation = forceSimulation([])
      .numDimensions(3)
      .stop()
      .nodes(structuredNodes)
      .force(
        'link',
        forceLink()
          .strength(0)
          .links(structuredLinks)
          .id((d: Node) => d.ref_id),
      )

    set({ simulation })
  },
  removeSimulation: () => set({ simulation: null }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
}))

export const useSelectedNode = () => useGraphStore((s) => s.selectedNode)
export const useHoveredNode = () => useGraphStore((s) => s.hoveredNode)

export const useSelectedNodeRelativeIds = () => {
  const selectedNode = useGraphStore((s) => s.selectedNode)

  if (!selectedNode) {
    return []
  }

  const { dataInitial } = useDataStore.getState()

  const links = dataInitial?.links || []

  const relativeIds = links.reduce<string[]>((acc, curr) => {
    if (curr.source === selectedNode?.ref_id) {
      acc.push(curr.target)
    }

    if (curr.target === selectedNode?.ref_id) {
      acc.push(curr.source)
    }

    return acc
  }, [])

  return relativeIds
}
