import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { nodesAreRelatives } from '~/components/Universe/constants'
import { GraphData, Link, NodeExtended } from '~/types'

export type GraphStyle = 'sphere' | 'force' | 'split' | 'earth'

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
> = {
  data: null,
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
      const stateSelectedNode = get().selectedNode

      if (stateSelectedNode?.ref_id !== selectedNode?.ref_id) {
        const { data } = get()

        const relativeIds =
          data?.nodes.filter((f) => f.ref_id && nodesAreRelatives(f, selectedNode)).map((n) => n?.ref_id || '') || []

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
  })),
)

export const useSelectedNode = () => useGraphStore((s) => s.selectedNode)
export const useUpdateSelectedNode = () => useGraphStore((s) => s.setSelectedNode)
