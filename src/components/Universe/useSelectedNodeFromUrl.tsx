import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore } from '~/stores/useGraphStore'

export const useSelectedNodeFromUrl = () => {
  const [searchParams] = useSearchParams()
  const selectedNodeId = searchParams.get('node')

  const nodesNormalized = useDataStore((state) => state.nodesNormalized)
  const setSelectedNode = useGraphStore((s) => s.setSelectedNode)

  const simulationVersion = useGraphStore((s) => s.simulationVersion)

  useEffect(() => {
    if (selectedNodeId) {
      const nodeNormalized = nodesNormalized.get(selectedNodeId)

      if (nodeNormalized) {
        setSelectedNode(nodeNormalized)
      }
    } else {
      setSelectedNode(null)
    }
  }, [selectedNodeId, nodesNormalized, setSelectedNode])

  useEffect(() => {
    if (selectedNodeId && simulationVersion) {
      const nodeNormalized = nodesNormalized.get(selectedNodeId)

      if (nodeNormalized) {
        if (nodeNormalized) {
          setSelectedNode(nodeNormalized)
        }
      }
    }
  }, [selectedNodeId, nodesNormalized, setSelectedNode, simulationVersion])
}
