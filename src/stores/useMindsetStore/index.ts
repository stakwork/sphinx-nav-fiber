import { create } from 'zustand'
import { getPathway } from '~/network/fetchSourcesData'
import { Link, Node, NodeExtended } from '~/types'
import { timeToMilliseconds } from '~/utils'
import { useDataStore } from '../useDataStore'
import { usePlayerStore } from '../usePlayerStore'

type MindsetStore = {
  clips: NodeExtended[]
  chapters: NodeExtended[] | null
  selectedEpisode: NodeExtended | null
  selectedTweet: NodeExtended | null
  tweetPlayingTime: number
  tweetIsPlaying: boolean
  tweetDuration: number
  clipEdges: Link[]
  setSelectedEpisode: (node: NodeExtended) => void
  setSelectedTweet: (node: NodeExtended) => void
  setClips: (clips: Node[]) => void
  setChapters: (chapters: Node[]) => void
  setTweetPlayingTime: (time: number) => void
  setTweetIsPlaying: (playing: boolean) => void
  setTweetDuration: (duration: number) => void
  fetchEpisodeData: (id: string) => void
}

const defaultData: Omit<
  MindsetStore,
  | 'setSelectedEpisode'
  | 'setSelectedTweet'
  | 'setClips'
  | 'setChapters'
  | 'setTweetPlayingTime'
  | 'setTweetIsPlaying'
  | 'setTweetDuration'
  | 'fetchEpisodeData'
> = {
  selectedEpisode: null,
  selectedTweet: null,
  clips: [],
  clipEdges: [],
  chapters: [],
  tweetPlayingTime: 0,
  tweetIsPlaying: false,
  tweetDuration: 1,
}

export const useMindsetStore = create<MindsetStore>((set) => ({
  ...defaultData,
  setSelectedEpisode: (selectedEpisode) => set({ selectedEpisode }),
  setSelectedTweet: (selectedTweet) => set({ selectedTweet }),
  setClips: (clips) => set({ clips }),
  setChapters: (chapters) => set({ chapters }),
  setTweetPlayingTime: (time: number) => set({ tweetPlayingTime: time }),
  setTweetIsPlaying: (isPlaying: boolean) => set({ tweetIsPlaying: isPlaying }),
  setTweetDuration: (tweetDuration: number) => set({ tweetDuration }),
  fetchEpisodeData: async (id: string) => {
    const { addNewNode } = useDataStore.getState()
    const { setPlayingNode } = usePlayerStore.getState()

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

    addNewNode({ nodes: starterData, edges: data.edges })

    set({ clips, chapters, selectedEpisode, clipEdges })
  },
}))
