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

  return {
    nodes: [...claimsData.nodes, ...supportClaimsData.nodes],
    edges: [...claimsData.edges, ...supportClaimsData.edges],
  }
}

const sampleData = {
  name: 'Root',
  children: [
    {
      name: 'Child 1',
      children: [{ name: 'Grandchild 1' }, { name: 'Grandchild 2' }],
    },
    {
      name: 'Child 2',
      children: [{ name: 'Grandchild 3' }, { name: 'Grandchild 4' }],
    },
  ],
}

console.log(sampleData)

export const Body = () => {
  const { selectedEpisode } = useMindsetStore((s) => s)
  const [claims, setClaims] = useState<FetchDataResponse | null>()

  console.log(claims)

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
      console.log(data)

      const edgesHasClaim = (claims?.edges || []).filter((edge) => edge.edge_type === 'RELATED_TO')

      console.log(edgesHasClaim)

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

  useEffect(() => {
    const fetchClaims = async (id: string) => {
      const claimsData = await getClaims(id)

      setClaims(claimsData)
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
