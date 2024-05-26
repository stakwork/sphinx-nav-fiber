import invariant from 'invariant'
import { PropsWithChildren, useCallback, useEffect } from 'react'
import { Vector3 } from 'three'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { useUserStore } from '~/stores/useUserStore'
import { NodeExtended } from '~/types'
import { PATHWAY_RANGE } from './constants'

type Props = PropsWithChildren

export const DataRetriever = ({ children }: Props) => {
  const [fetchData, setAbortRequests] = useDataStore((s) => [s.fetchData, s.setAbortRequests])
  const [setBudget] = useUserStore((s) => [s.setBudget])

  useEffect(() => {
    fetchData(setBudget, setAbortRequests)
  }, [fetchData, setBudget, setAbortRequests])

  return <>{children}</>
}

export const useGraphData = () => {
  const data = useDataStore((s) => s.data)

  invariant(data !== null, 'This hook is meant to be used inside a DataRetriever component')

  return data
}

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
        const nodes = s.showSelectionGraph ? [] : s.data!.nodes || []
        const selectedNodeIndex = selectedNode ? nodes.findIndex((f) => f.ref_id === selectedNode?.ref_id) : 0

        const fromIndex = selectedNodeIndex - PATHWAY_RANGE > 0 ? selectedNodeIndex - PATHWAY_RANGE : 0

        const toIndex =
          selectedNodeIndex + PATHWAY_RANGE > nodes.length - 1 ? nodes.length - 1 : selectedNodeIndex + PATHWAY_RANGE

        const pathway = nodes.slice(fromIndex, toIndex)

        const badges: BadgeProps[] = []

        pathway.forEach((n) => {
          const nodeIndex = nodes.findIndex((f) => f.ref_id === n.ref_id)

          const badge = {
            value: nodeIndex + 1,
            position: new Vector3(n.x || 0, n.y || 0, n.z || 0),
            userData: n,
          }

          badges.push(badge)
        })

        // always include the first result
        const includesFirstResult = badges.find((f) => f.value === 1)

        if (nodes.length && !includesFirstResult) {
          const firstNode = nodes[0]

          badges.unshift({
            value: 1,
            position: new Vector3(firstNode.x || 0, firstNode.y || 0, firstNode.z || 0),
            userData: firstNode,
          })
        }

        return {
          badges,
          pathway,
        }
      },

      [selectedNode],
    ),
  )
}
