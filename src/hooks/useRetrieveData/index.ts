import { useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { fetchNodeEdges } from '~/network/fetchGraphData'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { useUserStore } from '~/stores/useUserStore'
import { updateBudget } from '~/utils/setBudget'

export const useRetrieveData = () => {
  const [searchParams] = useSearchParams()
  const selectedNodeId = searchParams.get('node')
  const initialLoad = useRef(true)

  const { setBudget } = useUserStore((s) => s)

  const { setSidebarOpen, currentSearch: searchTerm } = useAppStore((s) => s)

  const { fetchData, setAbortRequests, resetData, addNewNode, finishLoading } = useDataStore((s) => s)

  useEffect(() => {
    if (initialLoad.current) {
      const runSearch = async () => {
        if (!searchTerm) {
          resetData()
        }

        await fetchData(setBudget, setAbortRequests)
        setSidebarOpen(true)
        initialLoad.current = false

        if (searchTerm) {
          await updateBudget(setBudget)
        }
      }

      const runSearchForId = async () => {
        const data = await fetchNodeEdges(selectedNodeId || '', 0, 5)

        finishLoading()
        initialLoad.current = false

        if (data) {
          addNewNode({ nodes: data.nodes, edges: data.edges })
        }
      }

      if (selectedNodeId) {
        runSearchForId()

        return
      }

      runSearch()
    }
  }, [
    selectedNodeId,
    searchTerm,
    fetchData,
    setBudget,
    setAbortRequests,
    setSidebarOpen,
    resetData,
    initialLoad,
    finishLoading,
    addNewNode,
  ])

  useEffect(() => {
    if (!initialLoad.current) {
      const runSearch = async () => {
        await fetchData(setBudget, setAbortRequests)
        setSidebarOpen(true)

        if (searchTerm) {
          await updateBudget(setBudget)
        }
      }

      resetData()

      runSearch()
    }
  }, [searchTerm, fetchData, setBudget, setAbortRequests, setSidebarOpen, resetData, initialLoad])
}
