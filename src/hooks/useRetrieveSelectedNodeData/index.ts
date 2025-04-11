import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { fetchNodeEdges } from '~/network/fetchGraphData'
import { useDataStore } from '~/stores/useDataStore'

export const useRetrieveSelectedNodeData = () => {
  const [searchParams] = useSearchParams()
  const selectedNodeId = searchParams.get('node')

  const addNewNode = useDataStore((s) => s.addNewNode)

  useEffect(() => {
    const runSearch = async () => {
      const claimsData = await fetchNodeEdges(selectedNodeId || '', 0, 5, {
        nodeType: ['Claim'],
        useSubGraph: false,
      })

      if (claimsData) {
        addNewNode(claimsData)
      }
    }

    if (selectedNodeId) {
      runSearch()
    }
  }, [addNewNode, selectedNodeId])
}
