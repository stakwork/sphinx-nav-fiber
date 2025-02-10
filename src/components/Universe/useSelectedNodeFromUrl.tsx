import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore } from '~/stores/useGraphStore'

export const useSelectedNodeFromUrl = () => {
  const [searchParams] = useSearchParams()
  const selectedNodeId = searchParams.get('node') // Get node ID from query params

  const nodesNormalized = useDataStore((state) => state.nodesNormalized)
  const setSelectedNode = useGraphStore((s) => s.setSelectedNode)

  useEffect(() => {
    if (selectedNodeId) {
      const node = nodesNormalized.get(selectedNodeId)

      if (node) {
        setSelectedNode(node)
      }
    } else {
      setSelectedNode(null)
    }
  }, [selectedNodeId, nodesNormalized, setSelectedNode])
}
