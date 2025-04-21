import { create } from 'zustand'
import { getPathway } from '~/network/fetchSourcesData'
import { Link, Node, NodeExtended } from '~/types'
import { timeToMilliseconds } from '~/utils'
import { useDataStore } from '../useDataStore'
import { useGraphStore } from '../useGraphStore'
import { usePlayerStore } from '../usePlayerStore'

type MindsetStore = {
  clips: NodeExtended[]
  chapters: NodeExtended[] | null
  selectedEpisode: NodeExtended | null
  clipEdges: Link[]
  activeClip: NodeExtended | null
  setSelectedEpisode: (node: NodeExtended) => void
  setClips: (clips: Node[]) => void
  setChapters: (chapters: Node[]) => void
  fetchEpisodeData: (id: string) => void
  setActiveClip: (clip: NodeExtended) => void
}

const defaultData: Omit<
  MindsetStore,
  'setSelectedEpisode' | 'setClips' | 'setChapters' | 'fetchEpisodeData' | 'setActiveClip'
> = {
  selectedEpisode: null,
  clips: [],
  clipEdges: [],
  chapters: [],
  activeClip: null,
}

export const useMindsetStore = create<MindsetStore>((set) => ({
  ...defaultData,
  setSelectedEpisode: (selectedEpisode) => set({ selectedEpisode }),
  setClips: (clips) => set({ clips }),
  setChapters: (chapters) => set({ chapters }),
  fetchEpisodeData: async (id: string) => {
    const { addNewNode } = useDataStore.getState()
    const { setPlayingNode } = usePlayerStore.getState()
    const { setNeighbourhoods } = useGraphStore.getState()

    const data = await getPathway(id, ['Clip', 'Chapter', 'Show', 'Host', 'Guest'], [], '', true, 0, 1, 500)

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

    const neighbourhoods = chapters.map((chapter) => ({
      ref_id: chapter.ref_id,
      name: chapter.properties?.name || '',
    }))

    setNeighbourhoods(neighbourhoods)

    const selectedEpisode = data.nodes.find((node) => node.node_type === 'Episode')

    if (selectedEpisode) {
      setPlayingNode(selectedEpisode)
    }

    const starterData = data.nodes.filter(
      (node) =>
        node.node_type === 'Show' ||
        node.node_type === 'Episode' ||
        node.node_type === 'Host' ||
        node.node_type === 'Guest',
    )

    addNewNode({
      nodes: [...starterData],
      edges: [...data.edges],
    })

    set({ clips, chapters, selectedEpisode, clipEdges })
  },
  setActiveClip: (clip) => set({ activeClip: clip }),
}))
