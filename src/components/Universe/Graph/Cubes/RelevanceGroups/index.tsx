import { memo, useMemo } from 'react'
import { Vector3 } from 'three'
import { useShallow } from 'zustand/react/shallow'
import { maxChildrenDisplayed } from '~/components/Universe/constants'
import { Neighbourhood, useGraphStore, useSelectedNodeRelativeIds } from '~/stores/useGraphStore'
import { useSimulationStore } from '~/stores/useSimulationStore'
import { distributeNodesOnCircle } from '~/stores/useSimulationStore/utils/distributeNodesOnCircle/indes'
import { NodeExtended } from '~/types'
import { nodeSize } from '../constants'
import { GroupBadge } from './GroupBadge'

type TGroupsMap = Record<string, number>

export const RelevanceGroups = memo(() => {
  const { showSelectionGraph, selectedNode, selectionGraphData } = useGraphStore(useShallow((s) => s))
  const simulation = useSimulationStore((s) => s.simulation)

  const selectedNodeRelativeIds = useSelectedNodeRelativeIds()

  const nodeBadges = useMemo(() => {
    const nodesData = simulation?.nodes() || []
    const nodes = showSelectionGraph ? selectionGraphData.nodes : nodesData

    const childNodes = nodes
      .filter(
        (f: NodeExtended) => selectedNodeRelativeIds.includes(f?.ref_id || '') || selectedNode?.ref_id === f?.ref_id,
      )
      .slice(0, maxChildrenDisplayed)

    const groupsMap: TGroupsMap = childNodes.reduce((acc: TGroupsMap, curr: NodeExtended) => {
      acc[curr.node_type] = (acc[curr.node_type] || 0) + 1

      return acc
    }, {})

    console.log(groupsMap)

    const groups: Neighbourhood[] = Object.keys(groupsMap).map((i) => ({ name: i, ref_id: i }))

    const groupsPositioned = distributeNodesOnCircle(groups, nodeSize * 3)

    const badgesToRender = Object.keys(groupsMap).map((i: string) => {
      const position = new Vector3(groupsPositioned[i].x, groupsPositioned[i].y, groupsPositioned[i].z)

      return <GroupBadge key={i} count={groupsMap[i]} name={i} position={position} />
    })

    return badgesToRender
  }, [simulation, showSelectionGraph, selectionGraphData.nodes, selectedNodeRelativeIds, selectedNode?.ref_id])

  return (
    <group key="node-badges" position={[selectedNode?.x || 0, selectedNode?.y || 0, selectedNode?.z || 0]}>
      {nodeBadges.length ? nodeBadges : null}
    </group>
  )
})

RelevanceGroups.displayName = 'RelevanceGroups'
