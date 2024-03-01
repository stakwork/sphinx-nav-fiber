import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { isChileGraph } from '~/constants'
import { fetchGraphData } from '~/network/fetchGraphDataNew'
import { EdgeExtendedNew, NodeExtendedNew, NormalizedNodes } from '~/network/fetchGraphDataNew/types'
import { saveSearchTerm } from '~/utils/relayHelper/index'

export type GraphStyle = 'sphere' | 'force' | 'split' | 'earth' | 'v2'

type GraphData = {
  nodes: NodeExtendedNew[]
  links: EdgeExtendedNew[]
}

export const graphStyles: GraphStyle[] = ['sphere', 'force', 'split', 'earth', 'v2']

export type FetchNodeParams = {
  word?: string
  skip_cache?: string
  free?: string
  media_type?: string
}

export type GraphStore = {
  disableCameraRotation: boolean
  graphRadius: number | null
  data: { nodes: NodeExtendedNew[]; links: EdgeExtendedNew[] } | null
  selectionGraphData: GraphData
  graphStyle: GraphStyle
  isFetching: boolean
  hoveredNode: NodeExtendedNew | null
  selectedNode: NodeExtendedNew | null
  cameraFocusTrigger: boolean
  selectedNodeRelativeIds: string[]
  nearbyNodeIds: string[]
  showSelectionGraph: boolean
  nodesNormalized: NormalizedNodes

  setDisableCameraRotation: (rotation: boolean) => void
  fetchData: (setBudget: (value: number | null) => void, params?: FetchNodeParams) => void
  setData: (data: GraphData) => void
  setGraphStyle: (graphStyle: GraphStyle) => void
  setGraphRadius: (graphRadius?: number | null) => void
  setHoveredNode: (hoveredNode: NodeExtendedNew | null) => void
  setSelectedNode: (selectedNode: NodeExtendedNew | null) => void

  setCameraFocusTrigger: (_: boolean) => void
  setIsFetching: (_: boolean) => void
  setNearbyNodeIds: (_: string[]) => void
  setShowSelectionGraph: (_: boolean) => void
  setSelectionData: (data: GraphData) => void
  addNewNode: (node: NodeExtendedNew) => void
  addNewLink: (node: EdgeExtendedNew) => void
}

const defaultData: Omit<
  GraphStore,
  | 'fetchData'
  | 'setIsFetching'
  | 'setData'
  | 'setDisableCameraRotation'
  | 'setHoveredNode'
  | 'setSelectedNode'
  | 'setCameraFocusTrigger'
  | 'setGraphRadius'
  | 'setGraphStyle'
  | 'setNearbyNodeIds'
  | 'setShowSelectionGraph'
  | 'setSelectionData'
  | 'addNewNode'
  | 'addNewLink'
> = {
  data: null,
  selectionGraphData: { nodes: [], links: [] },
  disableCameraRotation: false,
  graphRadius: isChileGraph ? 1600 : 3056, // calculated from initial load
  graphStyle: (localStorage.getItem('graphStyle') as GraphStyle) || 'sphere',
  hoveredNode: null,
  selectedNode: null,
  cameraFocusTrigger: false,
  selectedNodeRelativeIds: [],
  nearbyNodeIds: [],
  showSelectionGraph: false,
  nodesNormalized: {},
  isFetching: false,
}

export const useGraphStore = create<GraphStore>()(
  devtools((set, get) => ({
    ...defaultData,
    fetchData: async (setBudget, params) => {
      if (get().isFetching) {
        return
      }

      set({ isFetching: true })

      const data = await fetchGraphData(get().graphStyle, setBudget, params ?? {})

      const nodesNormalized: NormalizedNodes = {}

      data?.nodes.forEach((item) => {
        const refId = item.ref_id

        if (refId) {
          nodesNormalized[refId] = item
        }
      })

      if (params?.word) {
        await saveSearchTerm()
      }

      set({
        data,
        nodesNormalized,
        isFetching: false,
        disableCameraRotation: false,
        nearbyNodeIds: [],
        selectedNodeRelativeIds: [],
        showSelectionGraph: false,
      })
    },
    setIsFetching: (isFetching) => set({ isFetching }),
    setData: (data) => set({ data }),
    setSelectionData: (selectionGraphData) => set({ selectionGraphData }),
    setDisableCameraRotation: (rotation) => set({ disableCameraRotation: rotation }),
    setGraphRadius: (graphRadius) => set({ graphRadius }),
    setGraphStyle: (graphStyle) => set({ graphStyle }),
    setHoveredNode: (hoveredNode) => set({ hoveredNode }),
    setSelectedNode: (selectedNode) => {
      const stateSelectedNode = get().selectedNode

      if (stateSelectedNode?.ref_id !== selectedNode?.ref_id) {
        const { data } = get()

        console.log(data)

        const relativeIds: string[] = []

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
    addNewNode: (node) => {
      const { data } = get()

      if (!data) {
        return
      }

      const newData = { ...data, nodes: [node, ...data.nodes] }

      set({ data: newData })
    },
    addNewLink: (link: EdgeExtendedNew) => {
      const { data } = get()

      if (!data) {
        return
      }

      const nodes = data.nodes.map((i) =>
        i.ref_id === link.source || i.ref_id === link.target ? { ...i, edge_count: (i.edge_count || 0) + 1 } : i,
      )

      const links = [...data.links, link]

      const newData = { links, nodes }

      set({ data: newData })
    },
  })),
)

export const useSelectedNode = () => useGraphStore((s) => s.selectedNode)
