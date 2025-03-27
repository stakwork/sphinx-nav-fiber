import { useEffect, useMemo, useState } from 'react'
import { getPathway } from '~/network/fetchSourcesData'
import { useMindsetStore } from '~/stores/useMindsetStore'
import { FetchDataResponse, Node } from '~/types'
import { Tree } from './Tree'

type TreeNode = {
  name: string
  children?: TreeNode[]
  ref_id: string
}

const getClaims = async (id: string) => {
  const claimsData = await getPathway(id, ['Claim'], [], '', true, 0, 3, 500)
  const supportClaimsData = await getPathway(id, ['Claim'], [], '', true, 1, 3, 500)

  // Filter out duplicate nodes by ref_id
  const uniqueNodes = [
    ...new Map([...claimsData.nodes, ...supportClaimsData.nodes].map((node) => [node.ref_id, node])).values(),
  ]

  // Get all edges
  const allEdges = [...claimsData.edges, ...supportClaimsData.edges]

  // ✅ Find nodes that are the target of RELATED_TO edges
  const nodesWithRelatedTo = new Set(
    allEdges.filter((edge) => edge.edge_type === 'RELATED_TO').map((edge) => edge.target),
  )

  // ✅ Filter edges - remove HAS_CLAIM if the target has a RELATED_TO
  const filteredEdges = allEdges.filter((edge) => {
    if (edge.edge_type === 'HAS_CLAIM' && nodesWithRelatedTo.has(edge.target)) {
      return false
    }

    return true
  })

  // Remove duplicate edges (by source-target)
  const uniqueEdges = [...new Map(filteredEdges.map((edge) => [`${edge.source}-${edge.target}`, edge])).values()]

  return {
    nodes: uniqueNodes,
    edges: uniqueEdges,
  }
}

export const Body = () => {
  const { selectedEpisode } = useMindsetStore((s) => s)
  const [claims, setClaims] = useState<FetchDataResponse | null>()

  const useMemoClaims = useMemo(() => {
    const claimsNormalized = (claims?.nodes || []).reduce((acc: Record<string, Node>, curr) => {
      acc[curr.ref_id] = {
        ...curr,
      }

      return acc
    }, {})

    const data = {
      name: selectedEpisode?.properties?.name || '',
      children: claims?.edges
        .filter((edge) => edge.source === selectedEpisode?.ref_id)
        .map((edge) => ({
          name: claimsNormalized[edge.target]?.properties?.name || '',
          children: [],
          ref_id: edge.target,
        })),
    }

    data.children?.forEach((child: TreeNode) => {
      const edgesHasClaim = (claims?.edges || []).filter((edge) => edge.edge_type === 'RELATED_TO')

      // eslint-disable-next-line no-param-reassign
      child.children = edgesHasClaim
        .filter((edge) => edge.source === child.ref_id)
        .map((edge) => ({
          name: claimsNormalized[edge.target]?.properties?.name || '',
          children: [],
          ref_id: edge.target,
        }))
    })

    return data
  }, [claims?.edges, claims?.nodes, selectedEpisode?.properties?.name, selectedEpisode?.ref_id])

  useEffect(() => {
    const fetchClaims = async (id: string) => {
      const response = await getClaims(id)

      setClaims(response)
    }

    if (selectedEpisode?.ref_id) {
      fetchClaims(selectedEpisode.ref_id)
    }
  }, [selectedEpisode])

  return (
    <div style={{ width: '100%', height: '100%', overflow: 'auto' }}>
      <Tree data={useMemoClaims} />
    </div>
  )
}
