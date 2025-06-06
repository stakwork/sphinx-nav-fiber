import { Billboard, Html, Line } from '@react-three/drei'
import { memo, useCallback, useMemo } from 'react'
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
  const { showSelectionGraph, selectedNode, selectionGraphData, setSelectedNodeType, selectedNodeType } = useGraphStore(
    useShallow((s) => s),
  )

  const handleSelect = useCallback(
    (type: string) => {
      if (type === selectedNodeType) {
        setSelectedNodeType('')

        return
      }

      setSelectedNodeType(type)
    },
    [selectedNodeType, setSelectedNodeType],
  )

  const simulation = useSimulationStore((s) => s.simulation)

  const selectedNodeRelativeIds = useSelectedNodeRelativeIds()

  const [nodeBadges, connectingLines] = useMemo(() => {
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

    const groups: Neighbourhood[] = Object.keys(groupsMap).map((i) => ({ name: i, ref_id: i }))
    const groupsPositioned = distributeNodesOnCircle(groups, nodeSize * 5)

    const center = new Vector3(0, 0, 0)

    const badges: JSX.Element[] = []

    const posStatic = new Vector3(nodeSize * 5, 0, 0)

    const lines: JSX.Element[] = [
      <group key="line-menu">
        <Line color="white" lineWidth={2} opacity={1} points={[center, posStatic]} transparent />
        <Html
          center
          distanceFactor={100}
          position={[(center.x + posStatic.x) / 2, (center.y + posStatic.y) / 2, (center.z + posStatic.z) / 2]}
          sprite
          transform
          zIndexRange={[0, 0]}
        >
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.6)',
              color: 'white',
              padding: '2px 6px',
              borderRadius: '4px',
              fontSize: '16px',
              whiteSpace: 'nowrap',
              border: '1px solid white',
            }}
          >
            menu
          </div>
        </Html>
      </group>,
    ]

    Object.keys(groupsMap).forEach((groupKey) => {
      const pos = new Vector3(groupsPositioned[groupKey].x, groupsPositioned[groupKey].y, groupsPositioned[groupKey].z)

      badges.push(
        <GroupBadge
          key={groupKey}
          count={groupsMap[groupKey]}
          isActive={selectedNodeType === groupKey}
          name={groupKey}
          onClick={() => handleSelect(groupKey)}
          position={pos}
        />,
      )

      lines.push(
        <group key={`line-${groupKey}`}>
          <Line color="white" lineWidth={2} opacity={1} points={[center, pos]} transparent />
          <Html
            center
            distanceFactor={100}
            position={[(center.x + pos.x) / 2, (center.y + pos.y) / 2, (center.z + pos.z) / 2]}
            sprite
            transform
            zIndexRange={[0, 0]}
          >
            <div
              style={{
                background: 'rgba(0, 0, 0, 0.6)',
                color: 'white',
                padding: '2px 6px',
                borderRadius: '4px',
                fontSize: '16px',
                whiteSpace: 'nowrap',
                border: '1px solid white',
              }}
            >
              {groupKey}
            </div>
          </Html>
        </group>,
      )
    })

    return [badges, lines]
  }, [
    simulation,
    showSelectionGraph,
    selectionGraphData.nodes,
    selectedNodeRelativeIds,
    selectedNode?.ref_id,
    selectedNodeType,
    handleSelect,
  ])

  const centerPos = useMemo(
    () => [selectedNode?.x || 0, selectedNode?.y || 0, selectedNode?.z || 0] as [number, number, number],
    [selectedNode?.x, selectedNode?.y, selectedNode?.z],
  )

  console.log(centerPos)

  return (
    <group>
      <Billboard key="node-badges" position={centerPos}>
        {nodeBadges.length ? nodeBadges : null}
        {connectingLines}
        <mesh>
          <ringGeometry args={[nodeSize / 2 + 2, nodeSize / 2 + 3, 64]} />
          <meshBasicMaterial color="white" opacity={1} side={2} transparent />
        </mesh>
      </Billboard>
    </group>
  )
})

RelevanceGroups.displayName = 'RelevanceGroups'
