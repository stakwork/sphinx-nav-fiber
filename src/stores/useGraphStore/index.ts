import { create } from 'zustand'
import { GraphData, Link, NodeExtended } from '~/types'
import { useDataStore } from '../useDataStore'
import { useSimulationStore } from '../useSimulationStore'

export type Position = {
  x: number
  y: number
  z: number
}

export type Neighbourhood = {
  name: string
  ref_id: string
}

export type GraphStyle = 'sphere' | 'force' | 'split' | 'earth'

export const graphStyles: GraphStyle[] = ['sphere', 'force', 'split', 'earth']

export type GraphStore = {
  graphRadius: number
  neighbourhoods: Neighbourhood[]
  selectionGraphRadius: number
  data: { nodes: NodeExtended[]; links: Link[] } | null
  selectionGraphData: GraphData
  graphStyle: GraphStyle
  hoveredNode: NodeExtended | null
  selectedNodeTypes: string[]
  selectedNodeType: string
  selectedLinkTypes: string[]
  selectedNode: NodeExtended | null
  cameraFocusTrigger: boolean
  showSelectionGraph: boolean
  disableCameraRotation: boolean
  scrollEventsDisabled: boolean
  isHovering: boolean
  activeEdge: Link | null
  activeNode: NodeExtended | null
  highlightNodes: string[]
  selectionPath: string[]
  hoveredNodeSiblings: string[]
  selectedNodeSiblings: string[]
  searchQuery: string
  followersFilter: string
  isolatedView: string
  dateRangeFilter: string
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
  setIsHovering: (isHovering: boolean) => void
  addToSelectionPath: (id: string) => void
  setSearchQuery: (id: string) => void
  setSelectedNodeTypes: (type: string) => void
  setSelectedNodeType: (type: string) => void
  resetSelectedNodeTypes: () => void
  resetSelectedNodeType: () => void
  setSelectedLinkTypes: (type: string) => void
  resetSelectedLinkTypes: () => void
  setFollowersFilter: (filter: string) => void
  setDateRangeFilter: (filter: string) => void
  setIsolatedView: (isolatedView: string) => void
  setNeighbourhoods: (neighbourhoods: Neighbourhood[]) => void
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
  | 'setIsHovering'
  | 'addToSelectionPath'
  | 'setSearchQuery'
  | 'setSelectedNodeTypes'
  | 'setSelectedNodeType'
  | 'resetSelectedNodeTypes'
  | 'resetSelectedNodeType'
  | 'setSelectedLinkTypes'
  | 'resetSelectedLinkTypes'
  | 'setNodesToHide'
  | 'setFollowersFilter'
  | 'setDateRangeFilter'
  | 'setIsolatedView'
  | 'setNeighbourhoods'
> = {
  data: null,
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
  isHovering: false,
  selectionPath: [],
  activeNode: null,
  highlightNodes: [],
  searchQuery: '',
  selectedNodeTypes: [],
  selectedLinkTypes: [],
  followersFilter: '',
  dateRangeFilter: '',
  isolatedView: '',
  neighbourhoods: [],
  selectedNodeType: '',
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
  setSelectedNodeType: (selectedNodeType) => set({ selectedNodeType }),
  resetSelectedNodeType: () => set({ selectedNodeType: '' }),
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
        selectedNodeType: '',
      })
    }

    const { selectedNode: stateSelectedNode, selectionPath } = get()

    const { simulation } = useSimulationStore.getState()

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
          selectedNodeType: '',
          selectedNodeSiblings: [...(normalizedNode?.sources || []), ...(normalizedNode?.targets || [])],
        })
      }
    }
  },
  setCameraFocusTrigger: (cameraFocusTrigger) => set({ cameraFocusTrigger }),
  setShowSelectionGraph: (showSelectionGraph) => set({ showSelectionGraph }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setFollowersFilter: (filter) => set({ followersFilter: filter }),
  setDateRangeFilter: (filter) => set({ dateRangeFilter: filter }),
  setIsolatedView: (isolatedView) => set({ isolatedView }),
  setNeighbourhoods: (neighbourhoods) => set({ neighbourhoods }),
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
