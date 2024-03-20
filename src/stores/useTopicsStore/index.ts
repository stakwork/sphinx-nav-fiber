import { create } from 'zustand'
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

    if (filters.page === 0) {
      set({ data: null, ids: [], total: 0 })
    }

    try {
      const responseData: FetchTopicResponse = await getTopicsData(payload)

      // Instead of replacing the data, append new data to existing data
      const newData: Record<string, Topic> = filters.page === 0 ? {} : { ...(data || {}) }
      const newIds: string[] = filters.page === 0 ? [] : [...ids]

      responseData.data.forEach((topic) => {
        newData[topic.ref_id] = topic
        newIds.push(topic.ref_id)
      })

      const removeDuplicates = <T>(array: T[]) => [...new Set(array)]

      const searchedIds = Object.keys(newData).filter(
        (key) => filters?.search?.trim() && newData[key].topic.toLowerCase().includes(filters.search?.toLowerCase()),
      )

      set({
        data: newData,
        ...(!filters?.search?.trim() ? { ids: removeDuplicates(newIds) } : { ids: removeDuplicates(searchedIds) }),
        total: responseData.topicCount,
      })
    } catch (error) {
      console.log(error)
    }
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
