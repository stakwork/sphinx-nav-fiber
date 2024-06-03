import { forceCenter, forceCollide, forceLink, forceManyBody, forceRadial, forceSimulation, forceY } from 'd3-force-3d'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { ForceSimulation } from '~/transformers/forceSimulation'
import { GraphData, Link, Node, NodeExtended } from '~/types'
import { useDataStore } from '../useDataStore'

export type GraphStyle = 'sphere' | 'force' | 'split' | 'earth'

interface SimulationHelpers {
  addNodesAndLinks: (nodes: Node[], links: Link[]) => void
  addRadialForce: () => void
  resetRadialForce: () => void
  addSplitForce: () => void
  resetSplitForce: () => void
  simulationRestart: () => void
}

const defaultSimulationHelpers: SimulationHelpers = {
  addNodesAndLinks: () => {
    /* do nothing */
  },
  addRadialForce: () => {
    /* do nothing */
  },
  resetRadialForce: () => {
    /* do nothing */
  },
  addSplitForce: () => {
    /* do nothing */
  },
  resetSplitForce: () => {
    /* do nothing */
  },
  simulationRestart: () => {
    /* do nothing */
  },
}

export const graphStyles: GraphStyle[] = ['sphere', 'force', 'split', 'earth']

export type GraphStore = {
  splashDataLoading: boolean
  graphRadius: number | null
  data: { nodes: NodeExtended[]; links: Link[] } | null
  selectionGraphData: GraphData
  graphStyle: GraphStyle
  hoveredNode: NodeExtended | null
  selectedNode: NodeExtended | null
  cameraFocusTrigger: boolean
  selectedNodeRelativeIds: string[]
  nearbyNodeIds: string[]
  showSelectionGraph: boolean
  disableCameraRotation: boolean
  scrollEventsDisabled: boolean
  simulation: ForceSimulation | null
  simulationHelpers: SimulationHelpers

  setDisableCameraRotation: (rotation: boolean) => void
  setScrollEventsDisabled: (rotation: boolean) => void
  setData: (data: GraphData) => void
  setGraphStyle: (graphStyle: GraphStyle) => void
  setGraphRadius: (graphRadius?: number | null) => void
  setHoveredNode: (hoveredNode: NodeExtended | null) => void
  setSelectedNode: (selectedNode: NodeExtended | null) => void
  setCameraFocusTrigger: (_: boolean) => void
  setNearbyNodeIds: (_: string[]) => void
  setShowSelectionGraph: (_: boolean) => void
  setSelectionData: (data: GraphData) => void
  simulationCreate: (nodes: Node[], links: Link[]) => void
}

const defaultData: Omit<
  GraphStore,
  | 'setData'
  | 'setCameraAnimation'
  | 'setScrollEventsDisabled'
  | 'setDisableCameraRotation'
  | 'setHoveredNode'
  | 'setSelectedNode'
  | 'setCameraFocusTrigger'
  | 'setGraphRadius'
  | 'setGraphStyle'
  | 'setNearbyNodeIds'
  | 'setShowSelectionGraph'
  | 'setSelectionData'
  | 'setHideNodeDetails'
  | 'simulationCreate'
> = {
  data: null,
  simulation: null,
  selectionGraphData: { nodes: [], links: [] },
  disableCameraRotation: false,
  scrollEventsDisabled: false,
  graphRadius: 3056, // calculated from initial load
  graphStyle: (localStorage.getItem('graphStyle') as GraphStyle) || 'sphere',
  hoveredNode: null,
  selectedNode: null,
  cameraFocusTrigger: false,
  selectedNodeRelativeIds: [],
  nearbyNodeIds: [],
  showSelectionGraph: false,
  splashDataLoading: true,
  simulationHelpers: defaultSimulationHelpers,
}

export const useGraphStore = create<GraphStore>()(
  devtools((set, get) => ({
    ...defaultData,
    setData: (data) => {
      set({ data })
    },
    setSelectionData: (selectionGraphData) => set({ selectionGraphData }),
    setScrollEventsDisabled: (scrollEventsDisabled) => set({ scrollEventsDisabled }),
    setDisableCameraRotation: (rotation) => set({ disableCameraRotation: rotation }),
    setGraphRadius: (graphRadius) => set({ graphRadius }),
    setGraphStyle: (graphStyle) => set({ graphStyle }),
    setHoveredNode: (hoveredNode) => set({ hoveredNode }),
    setSelectedNode: (selectedNode) => {
      const { selectedNode: stateSelectedNode, simulation } = get()

      const links = simulation ? simulation.force('link').links() : []

      if (stateSelectedNode?.ref_id !== selectedNode?.ref_id) {
        const relativeIds = (links as Link[]).reduce<string[]>((acc, curr) => {
          if (curr.source === selectedNode?.ref_id) {
            acc.push(curr.target)
          }

          if (curr.target === selectedNode?.ref_id) {
            acc.push(curr.source)
          }

          return acc
        }, [])

        set({
          hoveredNode: null,
          selectedNode,
          disableCameraRotation: true,
          selectedNodeRelativeIds: relativeIds,
        })
      }
    },
    setCameraFocusTrigger: (cameraFocusTrigger) => set({ cameraFocusTrigger }),
    setNearbyNodeIds: (nearbyNodeIds) => {
      const stateNearbyNodeIds = get().nearbyNodeIds

      if (nearbyNodeIds.length !== stateNearbyNodeIds.length || nearbyNodeIds[0] !== stateNearbyNodeIds[0]) {
        set({ nearbyNodeIds })
      }
    },
    setShowSelectionGraph: (showSelectionGraph) => set({ showSelectionGraph }),
    simulationHelpers: {
      addNodesAndLinks: (newNodes, newLinks) => {
        const { simulation, simulationHelpers } = get()

        const nodes = simulation.nodes().map((n: NodeExtended) => ({ ...n, fx: n.x, fy: n.y, fz: n.z }))
        const links = simulation.force('link').links()

        nodes.push(...newNodes)
        links.push(...newLinks)

        simulation.stop().nodes(nodes).force('link').links(links)

        simulationHelpers.simulationRestart()
        // Add simulation node to reference (so that we can access reference on tick to update position)
      },

      addRadialForce: () => {
        const { simulation } = get()

        console.log('addRadial')

        simulation
          .nodes(simulation.nodes().map((n: Node) => ({ ...n, fx: null, fy: null, fz: null })))
          .force('radial', forceRadial(200, 0, 0, 0).strength(0.1))
          .force('center', forceCenter().strength(1))
          .alpha(1)
          .restart()
        // Add simulation node to reference (so that we can access reference on tick to update position)
      },

      resetRadialForce: () => {
        const { simulation } = get()

        console.log('resetSplit')

        simulation.force('radial', null).alpha(1).restart()
        // Add simulation node to reference (so that we can access reference on tick to update position)
      },

      addSplitForce: () => {
        const { simulation } = get()
        const { nodeTypes } = useDataStore.getState()

        console.log('addSplit')

        simulation
          .stop()
          .nodes(
            simulation.nodes().map((n: Node) => ({ ...n, fx: null, fy: null, fz: null, x: null, y: null, z: null })),
          )

          // .force(
          //   'z',
          //   forceZ().z((node: NodeExtended) => nodeTypes.indexOf(node.node_type) * 200),
          // )
          .force('radial', null)
          .force(
            'y',
            forceY().y((node: NodeExtended) => nodeTypes.indexOf(node.node_type) * 200),
          )
          .alpha(2)
          .restart()
      },

      resetSplitForce: () => {
        const { simulation } = get()

        simulation.force('z', null).alpha(1).restart()
        // Add simulation node to reference (so that we can access reference on tick to update position)
      },
      setInitialForces: () => {
        const { simulation } = get()
        const links = simulation.force('link').links()

        simulation
          .force('charge', forceManyBody().strength(-40).distanceMin(100))
          .force('center', forceCenter().strength(0.85))
          .force('collide', forceCollide().radius(250).strength(1).iterations(1))
          .force(
            'link',
            forceLink()
              .links(links)
              .id((d: Node) => d.ref_id),
            // .strength((l) => {
            //     // console.log(l)
            //     return 2
            // })
            // .distance((l) => {
            //     return 2
            // })
          )
      },

      simulationRestart: () => {
        const { simulation } = get()

        simulation.alpha(1).restart()
      },
    },
    simulationCreate: (nodes, links) => {
      const simulation = forceSimulation([])
        .numDimensions(3)
        .stop()
        .nodes(nodes)
        .force('charge', forceManyBody().strength(-40).distanceMin(100))
        .force('center', forceCenter().strength(0.85))
        .force('collide', forceCollide().radius(250).strength(1).iterations(1))
        .force(
          'link',
          forceLink()
            .links(links)
            .id((d: Node) => d.ref_id),
          // .strength((l) => {
          //     // console.log(l)
          //     return 2
          // })
          // .distance((l) => {
          //     return 2
          // })
        )
        .alpha(1)
        .restart()

      set({ simulation })
    },
  })),
)

export const useSelectedNode = () => useGraphStore((s) => s.selectedNode)
export const useUpdateSelectedNode = () => useGraphStore((s) => s.setSelectedNode)
