import { create } from 'zustand'
import { getPathway } from '~/network/fetchSourcesData'
import { NodeExtended } from '~/types'
import { useDataStore } from '../useDataStore'
import { usePlayerStore } from '../usePlayerStore'

type TweetMindsetStore = {
  selectedTweets: NodeExtended[]
  tweetPlayingTime: number
  tweetIsPlaying: boolean
  tweetDuration: number
  selectedTweet: string
  setSelectedTweets: (node: NodeExtended[]) => void
  setTweetPlayingTime: (time: number) => void
  setTweetIsPlaying: (playing: boolean) => void
  setTweetDuration: (duration: number) => void
  fetchTweetData: (id: string) => void
  setSelectedTweet: (selectedTweet: string) => void
}

const defaultData: Omit<
  TweetMindsetStore,
  | 'setSelectedTweets'
  | 'setTweetPlayingTime'
  | 'setTweetIsPlaying'
  | 'setTweetDuration'
  | 'fetchTweetData'
  | 'setSelectedTweet'
> = {
  tweetPlayingTime: 0,
  tweetIsPlaying: false,
  tweetDuration: 1,
  selectedTweets: [],
  selectedTweet: '',
}

export const useTweetMindsetStore = create<TweetMindsetStore>((set) => ({
  ...defaultData,
  setTweetPlayingTime: (time: number) => set({ tweetPlayingTime: time }),
  setSelectedTweets: (selectedTweets) => set({ selectedTweets }),
  setTweetIsPlaying: (isPlaying: boolean) => set({ tweetIsPlaying: isPlaying }),
  setTweetDuration: (tweetDuration: number) => set({ tweetDuration }),
  setSelectedTweet: (selectedTweet: string) => set({ selectedTweet }),
  fetchTweetData: async (id: string) => {
    const { addNewNode } = useDataStore.getState()
    const { setPlayingNode } = usePlayerStore.getState()

    console.log(addNewNode, setPlayingNode)

    const data = await getPathway(id, [], [], '', true, 0, 1, 500)

    console.log(data)
  },
}))
