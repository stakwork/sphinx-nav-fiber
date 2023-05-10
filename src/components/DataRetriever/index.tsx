import invariant from 'invariant'
import { PropsWithChildren, ReactNode, useCallback, useEffect, useState } from 'react'
import { Vector3 } from 'three'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'

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

const PATHWAY_NODES = 5

type BadgeProps = {
  value: number
  position: Vector3
  userData: NodeExtended
}

export const usePathway = () => {
  const selectedNode = useSelectedNode()

  return useDataStore(
    useCallback(
      (s) => {
        if (selectedNode) {
          const selectedNodeIndex = s.data!.nodes.findIndex((f) => f.ref_id === selectedNode.ref_id)
          const fromIndex = selectedNodeIndex - PATHWAY_NODES > 0 ? selectedNodeIndex - PATHWAY_NODES : 0
          const toIndex =
            selectedNodeIndex + PATHWAY_NODES > s.data!.nodes.length - 1
              ? s.data!.nodes.length - 1
              : selectedNodeIndex + PATHWAY_NODES
          const pathway = s.data!.nodes.slice(fromIndex, toIndex)

          const badges: BadgeProps[] = []

          pathway.forEach((n) => {
            const nodeIndex = s.data!.nodes.findIndex((f) => f.ref_id === n.ref_id)
            const badge = {
              value: nodeIndex,
              position: new Vector3(n.x || 0, n.y || 0, n.z || 0),
              userData: n,
            }
            badges.push(badge)
          })

          return {
            badges,
            pathway,
          }
        }

        return {
          badges: [],
          pathway: [],
        }
      },
      [selectedNode?.id],
    ),
  )
}
