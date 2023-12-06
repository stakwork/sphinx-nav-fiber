import create from 'zustand'
import { DATE } from '~/components/SourcesTableModal/SourcesView/constants'
import { TtopicsParams, getTopicsData } from '~/network/fetchSourcesData'
import { FetchTopicResponse, Topic, TopicFilter } from '~/types'

type TopicsStore = {
  data: Record<string, Topic> | null
  ids: string[]
  total: number
  filters: TopicFilter
  setTopics: () => void
  terminate: () => void
  setFilters: (filter: Partial<TopicFilter>) => void
}

const defaultData: Omit<TopicsStore, 'setTopics' | 'setFilters' | 'terminate'> = {
  data: null,
  ids: [],
  total: 0,
  filters: {
    muted: false,
    sortBy: DATE,
    page: 0,
    pageSize: 50,
  },
}

export const useTopicsStore = create<TopicsStore>((set, get) => ({
  ...defaultData,
  setTopics: async () => {
    const { data, ids, filters } = get()

    const payload = prepareTopicFilters(filters)

    if (filters.page < 1) {
      set({ data: null, ids: [], total: 0 })
    }

    const responseData: FetchTopicResponse = await getTopicsData(payload)

    // Apply search filter to new topics if the search term is provided
    const filteredNewTopics =
      filters.search ?? ''
        ? responseData.data.filter((topic) => topic.topic.toLowerCase().includes((filters.search ?? '').toLowerCase()))
        : []

    // Instead of replacing the data, append new filtered data to existing data
    let newData: Record<string, Topic> = { ...(data || {}) }
    const newIds: string[] = [...ids]

    if (!filters.search) {
      newData = {}
    }

    filteredNewTopics.forEach((topic) => {
      newData[topic.ref_id] = topic

      if (!newIds.includes(topic.ref_id)) {
        newIds.push(topic.ref_id)
      }
    })

    set({ data: newData, ids: newIds, total: responseData.topicCount })
  },

  setFilters: (filters: Partial<TopicFilter>) => set({ filters: { ...get().filters, page: 0, ...filters } }),
  terminate: () => set(defaultData),
}))

const prepareTopicFilters = (filters: TopicFilter): TtopicsParams => ({
  muted: filters.muted ? 'True' : 'False',
  skip: String(filters.page * filters.pageSize),
  limit: String(filters.pageSize),
  sort_by: filters.sortBy,
  search: filters.search || '',
})
