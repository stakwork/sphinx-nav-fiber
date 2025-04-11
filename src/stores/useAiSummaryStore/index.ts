import { isEqual } from 'lodash'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { fetchGraphData } from '~/network/fetchGraphData'
import { AIEntity, FetchNodeParams, Link, Node } from '~/types'
import { useAppStore } from '../useAppStore'
import { defaultFilters, useDataStore } from '../useDataStore'

type AIAnswer = {
  [key: string]: AIEntity
}

const QuestionNode = {
  edge_count: 1,
  name: '',
  node_type: 'Question',
  score: 0,
  x: 0,
  y: 0,
  z: 0,
  label: '',
  scale: 2,
}

export type AiSummaryStore = {
  aiSummaryAnswers: AIAnswer
  aiRefId: string
  dataInitial: { nodes: Node[]; edges: Link[] } | null
  setAiSummaryAnswer: (key: string, answer: AIEntity) => void
  setNewLoading: (answer: AIEntity | null) => void
  resetAiSummaryAnswer: () => void
  getAiSummaryAnswer: (key: string) => string
  getKeyExist: (key: string) => boolean
  setAiRefId: (aiRefId: string) => void
  fetchAIData: (
    setBudget: (value: number | null) => void,
    setAbortRequests: (status: boolean) => void,
    AISearchQuery?: string,
    params?: FetchNodeParams,
    context?: string,
  ) => void
  newLoading: AIEntity | null
}

const defaultData = {
  aiSummaryAnswers: {},
  aiRefId: '',
  newLoading: null,
  dataInitial: null,
}

let abortController: AbortController | null = null

export const useAiSummaryStore = create<AiSummaryStore>()(
  devtools((set, get) => ({
    ...defaultData,
    setAiSummaryAnswer: (key, answer) => {
      const summaryAnswers = get().aiSummaryAnswers

      summaryAnswers[key] = { ...(summaryAnswers[key] || {}), ...answer }

      const clone = structuredClone(summaryAnswers)

      set({ aiSummaryAnswers: clone })
    },
    setNewLoading: (newLoading) => {
      set({ newLoading })
    },
    resetAiSummaryAnswer: () => {
      set({ aiSummaryAnswers: {}, aiRefId: '' })
    },
    getAiSummaryAnswer: (key) => {
      const summaryAnswers = get().aiSummaryAnswers

      return summaryAnswers[key].answer || ''
    },

    setAiRefId: (aiRefId) => set({ aiRefId }),

    fetchAIData: async (setBudget, setAbortRequests, AISearchQuery = '', params, context) => {
      const { filters, addNewNode } = useDataStore.getState()
      const currentPage = filters.skip
      const itemsPerPage = filters.limit
      const { currentSearch } = useAppStore.getState()
      const { setAiSummaryAnswer, setNewLoading, aiRefId } = get()
      const fullAiSearchQuery = context ? `${context} ${AISearchQuery}` : AISearchQuery

      const ai = { ai_summary: String(!!AISearchQuery) }

      addNewNode({ nodes: [{ ...QuestionNode, name: fullAiSearchQuery, ref_id: fullAiSearchQuery }], edges: [] })

      if (AISearchQuery) {
        setNewLoading({ question: AISearchQuery, answerLoading: true })
      }

      if (abortController) {
        abortController.abort('abort')
      }

      const controller = new AbortController()
      const { signal } = controller

      abortController = controller

      const { node_type: filterNodeTypes, ...withoutNodeType } = filters
      const word = fullAiSearchQuery || currentSearch

      const isLatest = isEqual(filters, defaultFilters) && !word

      const updatedParams = {
        ...withoutNodeType,
        ...ai,
        skip: currentPage === 0 ? String(currentPage * itemsPerPage) : String(currentPage * itemsPerPage + 1),
        limit: word ? '25' : String(itemsPerPage),
        ...(filterNodeTypes.length > 0 ? { node_type: JSON.stringify(filterNodeTypes) } : {}),
        ...(word ? { word } : {}),
        ...(aiRefId && AISearchQuery ? { previous_search_ref_id: aiRefId } : {}),
        ...(!word && !AISearchQuery ? { sort_by: 'date_added_to_graph' } : {}),
        ...(params?.force_regenerate ? { force_regenerate: 'true' } : {}),
      }

      if (ai.ai_summary === 'true') {
        updatedParams.top_node_count = '5'
        updatedParams.limit = '5'
        updatedParams.depth = '0'
        Reflect.deleteProperty(updatedParams, 'search_method')
      }

      try {
        const data = await fetchGraphData(setBudget, updatedParams, isLatest, signal, setAbortRequests)

        if (data?.query_data?.ref_id) {
          useAiSummaryStore.setState({ aiRefId: data.query_data.ref_id })

          const { aiSummaryAnswers } = useAiSummaryStore.getState()
          const { answer } = aiSummaryAnswers[data.query_data.ref_id] || {}

          setAiSummaryAnswer(data.query_data.ref_id, {
            question: AISearchQuery,
            answer: answer || '',
            answerLoading: !answer,
            sourcesLoading: !answer,
            shouldRender: true,
          })

          setNewLoading(null)
        }

        if (data.query_data?.project_id) {
          useDataStore.setState({ runningProjectId: data.query_data.project_id })
        }

        if (data?.nodes) {
          set({ dataInitial: data })
        }

        // set({ isFetching: false, isLoadingNew: false, splashDataLoading: false })
      } catch (error) {
        console.error(error)

        // if (error !== 'abort') {
        //   set({ isFetching: false, isLoadingNew: false })
        // }
      }
    },

    getKeyExist: (key) => {
      if (key in get().aiSummaryAnswers) {
        return true
      }

      return false
    },
  })),
)

export const useHasAiChats = () =>
  useAiSummaryStore((s) => Object.values(s.aiSummaryAnswers).filter((i) => i.shouldRender).length || !!s.newLoading)

export const useHasAiChatsResponseLoading = () =>
  useAiSummaryStore((s) => {
    const answers = s.aiSummaryAnswers

    return !!s.newLoading || Object.values(answers).at(-1)?.answerLoading
  })
