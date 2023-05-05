import invariant from 'invariant'
import { PropsWithChildren, ReactNode, useCallback, useEffect, useState } from 'react'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'

type Props = PropsWithChildren<{
  loader?: ReactNode
}>

export const DataRetriever = ({ children, loader }: Props) => {
  const [data, fetchData] = useDataStore((s) => [s.data, s.fetchData])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchData()
  }, [fetchData])

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  if (data === null && loader) {
    return <>{loader}</>
  }

  if (data === null) {
    return null
  }

  return <>{loading ? loader : children}</>
}

export const useGraphData = () => {
  const data = useDataStore((s) => s.data)

  invariant(data !== null, 'This hook is meant to be used inside a DataRetriever component')

  return data
}

const PATHWAY_NODES = 10

export const usePathway = () => {
  const selectedNode = useSelectedNode()

  return useDataStore(
    useCallback(
      (s) => {
        const pathway = s.data!.nodes.slice(0, PATHWAY_NODES)

        const currentNodeIndex = pathway.findIndex((node) => node.id === selectedNode?.id)

        return {
          currentNodeIndex,
          pathway,
        }
      },
      [selectedNode?.id],
    ),
  )
}
