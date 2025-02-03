import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDataStore } from '~/stores/useDataStore'
import { useNodeNavigation } from './useNodeNavigation'

export const useSelectedNodeFromUrl = () => {
  const { selectedNodeId } = useParams()

  const { navigateToNode } = useNodeNavigation()
  const nodesNormalized = useDataStore((state) => state.nodesNormalized)

  useEffect(() => {
    if (selectedNodeId) {
      const node = nodesNormalized.get(selectedNodeId)

      if (node) {
        navigateToNode(node.ref_id)
      }
    } else {
      navigateToNode(null)
    }
  }, [selectedNodeId, nodesNormalized, navigateToNode])
}
