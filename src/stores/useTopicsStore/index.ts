import { create } from 'zustand'
import { DATE } from '~/components/SourcesTableModal/SourcesView/constants'
import { TtopicsParams, getTopicsData } from '~/network/fetchSourcesData'
import { FetchTopicResponse, Topic, TopicFilter } from '~/types'

type TopicsStore = {
  data: Record<string, Topic> | null
  ids: string[]
  loading: boolean
  total: number
  filters: TopicFilter
  setTopics: () => void
  terminate: () => void
  setFilters: (filter: Partial<TopicFilter>) => void
}

const defaultData: Omit<TopicsStore, 'setTopics' | 'setFilters' | 'terminate'> = {
  data: null,
  ids: [],
  loading: false,
  total: 0,
  filters: {
    is_muted: false,
    sortBy: DATE,
    page: 0,
    pageSize: 50,
  },
}

let abortController: AbortController | null = null

export const useTopicsStore = create<TopicsStore>((set, get) => ({
  ...defaultData,
  setTopics: async () => {
    set({ loading: true })

    if (abortController) {
      abortController.abort()
    }

    const controller = new AbortController()
    const { signal } = controller

    abortController = controller

    const { data, ids, filters } = get()

    const payload = prepareTopicFilters(filters)

    if (filters.page === 0) {
      set({ data: null, ids: [], total: 0 })
    }

    try {
      const responseData: FetchTopicResponse = await getTopicsData(payload, signal)

      // Instead of replacing the data, append new data to existing data
      const newData: Record<string, Topic> = filters.page === 0 ? {} : { ...(data || {}) }
      const newIds: string[] = filters.page === 0 ? [] : [...ids]

      responseData.data.forEach((topic) => {
        newData[topic.ref_id] = topic
        newIds.push(topic.ref_id)
      })

      set({ data: newData, ids: newIds, total: responseData.totalCount })

      set({ loading: false })
    } catch (error) {
      console.log(error)
    }
  },
  setFilters: (filters: Partial<TopicFilter>) => set({ filters: { ...get().filters, page: 0, ...filters } }),
  terminate: () => set(defaultData),
}))

const prepareTopicFilters = (filters: TopicFilter): TtopicsParams => ({
  muted: filters.is_muted ? 'True' : 'False',
  skip: String(filters.page * filters.pageSize),
  limit: String(filters.pageSize),
  sort_by: filters.sortBy,
  ...(!filters.search ? { node_type: 'Topic' } : { search: filters.search }),
})
