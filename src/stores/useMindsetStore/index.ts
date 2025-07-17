import { create } from 'zustand'
import { getPathway } from '~/network/fetchSourcesData'
import { Link, Node, NodeExtended } from '~/types'
import { timeToMilliseconds } from '~/utils'
import { useDataStore } from '../useDataStore'
import { useGraphStore } from '../useGraphStore'
import { usePlayerStore } from '../usePlayerStore'
import { useRootNodesStore } from '../useRootNodesStore'

type Segment = {
  title: string
  description: string
  startTime: number
  endTime: number
  source_link: string
}

const handleRootNodes = (nodes: Node[]) => {
  const show = nodes.find((node) => node.node_type === 'Show')

  const typesMap: Record<string, Node[]> = nodes.reduce((acc, node) => {
    const type = node.node_type

    if (!acc[type]) {
      acc[type] = [node]
    } else if (acc[type].length < 15) {
      acc[type].push(node)
    }

    return acc
  }, {} as Record<string, Node[]>)

  const newEdges: Link[] = []
  const newNodes: Node[] = []
  const rootNodes: Node[] = []

  Object.keys(typesMap).forEach((type) => {
    // Add a root node for each type
    const rootNode: Node = {
      date_added_to_graph: 1750606658, // any timestamp is fine
      node_type: `${type}-root`,
      // @ts-expect-error: properties is typed as {[key: string]: never | undefined}, but we want to allow this
      properties: { name: type, isRoot: true },
      ref_id: `${type}-root`,
      x: 0,
      y: 0,
      z: 0,
      edge_count: 0,
      label: `${type}-root`,
      name: type,
    }

    if (show && false) {
      newEdges.push({
        source: `Show-root`,
        target: rootNode.ref_id,
        ref_id: `show-root-${type}`,
        edge_type: 'Show',
      })
    }

    nodes.push(rootNode)
    rootNodes.push(rootNode)

    const typeNodes = typesMap[type]

    newNodes.push(...typeNodes)

    typeNodes.forEach((node) => {
      const nodeRefId = node.ref_id

      newEdges.push({
        source: `${type}-root`,
        target: nodeRefId,
        ref_id: `${type}-root-${nodeRefId}`,
        edge_type: type,
      })
    })
  })

  return { nodes: [...newNodes, ...rootNodes], links: newEdges }
}

function convertNodeToSegment(input: NodeExtended) {
  const timestamp = input?.properties?.timestamp
  const [hours, minutes, seconds] = timestamp ? (timestamp as string).split(':').map(Number) : [0, 0, 0]
  const startTime = hours * 3600 + minutes * 60 + seconds

  return {
    title: input?.properties?.name || '',
    description: '', // You must manually add or generate this
    startTime,
    endTime: startTime + 30, // Default to 30s duration if not provided
    source_link: input?.properties?.source_link || '',
  }
}

type MindsetStore = {
  clips: NodeExtended[]
  chapters: NodeExtended[] | null
  selectedEpisode: NodeExtended | null
  highlights: Segment[]
  clipEdges: Link[]
  activeClip: NodeExtended | null
  selectedSegment: Segment | null
  isFullScreen: boolean
  setSelectedEpisode: (node: NodeExtended) => void
  setClips: (clips: Node[]) => void
  setChapters: (chapters: Node[]) => void
  fetchEpisodeData: (id: string) => void
  setActiveClip: (clip: NodeExtended) => void
  setSelectedSegment: (segment: Segment | null) => void
  setIsFullScreen: (isFullScreen: boolean) => void
}

const defaultData: Omit<
  MindsetStore,
  | 'setSelectedEpisode'
  | 'setClips'
  | 'setChapters'
  | 'fetchEpisodeData'
  | 'setActiveClip'
  | 'setSelectedSegment'
  | 'setIsFullScreen'
> = {
  selectedEpisode: null,
  clips: [],
  highlights: [],
  isFullScreen: false,
  clipEdges: [],
  chapters: [],
  activeClip: null,
  selectedSegment: null,
}

export const useMindsetStore = create<MindsetStore>((set) => ({
  ...defaultData,
  setSelectedEpisode: (selectedEpisode) => set({ selectedEpisode }),
  setClips: (clips) => set({ clips }),
  setChapters: (chapters) => set({ chapters }),
  fetchEpisodeData: async (id: string) => {
    const { addNewNode } = useDataStore.getState()
    const { setRootStoreData } = useRootNodesStore.getState()
    const { setPlayingNode } = usePlayerStore.getState()
    const { setNeighbourhoods } = useGraphStore.getState()

    const data = await getPathway(id, ['Clip', 'Chapter', 'Show', 'Host', 'Guest', 'Person'], [], '', true, 0, 1, 500)

    const clips = data.nodes
      .filter((node) => node.node_type === 'Clip')
      .filter((i) => i.properties?.timestamp)
      .sort((a, b) => {
        const startA = Number((a.properties?.timestamp as unknown as string)?.split('-')[0])
        const startB = Number((b.properties?.timestamp as unknown as string)?.split('-')[0])

        return startA - startB
      })

    const clipEdges = data.edges.filter(
      (edge) => clips.some((i) => i.ref_id === edge.source) || clips.some((i) => i.ref_id === edge.target),
    )

    const chapters = data.nodes
      .filter((node) => node.node_type === 'Chapter')
      .sort(
        (a, b) =>
          timeToMilliseconds(a?.properties?.timestamp || '') - timeToMilliseconds(b?.properties?.timestamp || ''),
      )

    const highlights = chapters.map(convertNodeToSegment)

    const neighbourhoods = chapters.map((chapter) => ({
      ref_id: chapter.ref_id,
      name: chapter.properties?.name || '',
    }))

    setNeighbourhoods(neighbourhoods)

    const selectedEpisode = data.nodes.find((node) => node.node_type === 'Episode')

    if (selectedEpisode) {
      setPlayingNode(selectedEpisode)
    }

    const starterData = data.nodes
      .filter(
        (node) =>
          node.node_type === 'Show' ||
          node.node_type === 'Episode' ||
          node.node_type === 'Host' ||
          node.node_type === 'Guest' ||
          node.node_type === 'Person' ||
          node.node_type === 'User',
      )
      .filter((node) => {
        if (['Host', 'Guest', 'Person', 'User'].includes(node.node_type)) {
          return data.edges.some(
            (i) =>
              ['IS_GUEST', 'IS_HOST'].includes(i.edge_type) && (i.source === node.ref_id || i.target === node.ref_id),
          )
        }

        return true
      })

    const rootData = handleRootNodes(
      data.nodes.filter(
        (node) =>
          node.node_type === 'Chapter' ||
          (['Host', 'Guest', 'Person', 'User'].includes(node.node_type) &&
            data.edges.some(
              (i) =>
                ['IS_GUEST', 'IS_HOST'].includes(i.edge_type) && (i.source === node.ref_id || i.target === node.ref_id),
            )),
      ),
    )

    setRootStoreData(rootData)

    addNewNode({
      nodes: [...starterData],
      edges: [...data.edges],
    })

    set({ clips, chapters, selectedEpisode, clipEdges, highlights })
  },
  setActiveClip: (clip) => set({ activeClip: clip }),
  setSelectedSegment: (selectedSegment) => set({ selectedSegment }),
  setIsFullScreen: (isFullScreen) => set({ isFullScreen }),
}))
