/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-loss-of-precision */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-nested-ternary */
// @ts-nocheck

// Body.tsx
import { useEffect } from 'react'
import { getPathway } from '~/network/fetchSourcesData'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore } from '~/stores/useGraphStore'
import { useIsolatedGraphStore } from '~/stores/useIsolatedGraphStore'
import { useMindsetStore } from '~/stores/useMindsetStore'
import { Graph } from './Graph'

const getClaims = async (id: string) => {
  const { nodes, edges } = await getPathway(id, ['Claim'], [], '', true, 0, 3, 500)

  const uniqueNodes = [...new Map(nodes.map((node) => [node.ref_id, node])).values()].filter(
    (node) => node.node_type === 'Claim',
  )

  const uniqueEdges = [...new Map(edges.map((edge) => [`${edge.source}-${edge.target}`, edge])).values()].filter(
    (edge) => edge.edge_type !== 'HAS_CLAIM',
  )

  return { nodes: uniqueNodes, edges: uniqueEdges }
}

export const Body = () => {
  const selectedEpisode = useMindsetStore((s) => s.selectedEpisode)
  const setData = useIsolatedGraphStore((s) => s.setData)
  const isolatedView = useGraphStore((s) => s.isolatedView)

  useEffect(() => {
    const initClaims = async () => {
      try {
        const data: FetchDataResponse = await getClaims(selectedEpisode.ref_id)

        setData(data)
      } catch (error) {
        console.error(error)
      }
    }

    if (isolatedView) {
      const { dataInitial } = useDataStore.getState()

      if (dataInitial) {
        const nodes = dataInitial.nodes.filter((node) => node.node_type === isolatedView)

        const edges = dataInitial.links.filter((edge) =>
          nodes.some((node) => node.ref_id === edge.source && node.ref_id === edge.target),
        )

        setData({ nodes, edges })
      }
    } else if (selectedEpisode?.ref_id) {
      initClaims()
    }
  }, [selectedEpisode?.ref_id])

  return (
    <div className="w-full h-full p-4 bg-white rounded shadow relative">
      <div className="w-full h-96 border border-gray-200 rounded mb-4">
        <Graph />
      </div>
    </div>
  )
}
