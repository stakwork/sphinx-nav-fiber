import { Billboard, Line } from '@react-three/drei'
import { memo, useCallback, useMemo } from 'react'
import { Shape, Vector3 } from 'three'
import { useShallow } from 'zustand/react/shallow'
import { getLinksBetweenNodes, useDataStore } from '~/stores/useDataStore'
import { Neighbourhood, useGraphStore, useSelectedNodeRelativeIds } from '~/stores/useGraphStore'
import { distributeNodesOnCircle } from '~/stores/useSimulationStore/utils/distributeNodesOnCircle/indes'
import { NodeExtended } from '~/types'
import { nodeSize } from '../constants'
import { GroupBadge } from './GroupBadge'

type TGroupsMap = Record<string, number>

export const RelevanceGroups = memo(() => {
  const { selectedNode, setSelectedNodeType, selectedNodeType } = useGraphStore(useShallow((s) => s))

  const nodesNormalized = useDataStore((s) => s.nodesNormalized)

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

  const selectedNodeRelativeIds = useSelectedNodeRelativeIds()

  const [nodeBadges, connectingLines] = useMemo(() => {
    if (!selectedNode) {
      return [[], []]
    }

    const childNodes: NodeExtended[] = selectedNodeRelativeIds
      .map((id: string) => nodesNormalized.get(id))
      .filter((i): i is NodeExtended => !!i)

    const edges = selectedNodeRelativeIds.map((id: string) => getLinksBetweenNodes(id, selectedNode?.ref_id))

    console.log(edges)

    const groupsMap: TGroupsMap = childNodes.reduce((acc: TGroupsMap, curr: NodeExtended) => {
      acc[curr.node_type] = (acc[curr.node_type] || 0) + 1

      return acc
    }, {})

    const groups: Neighbourhood[] = Object.keys(groupsMap).map((i) => ({ name: i, ref_id: i }))
    const groupsPositioned = distributeNodesOnCircle(groups, nodeSize * 5)

    const center = new Vector3(0, 0, -1)

    const badges: JSX.Element[] = []

    const posStatic = new Vector3(nodeSize * 5, 0, 0)

    const lines: JSX.Element[] = [
      <group key="line-menu">
        <Line color="white" lineWidth={2} opacity={0.5} points={[center, posStatic]} transparent />
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
          <Line color="white" lineWidth={2} opacity={0.5} points={[center, pos]} transparent />
        </group>,
      )
    })

    return [badges, lines]
  }, [selectedNode, selectedNodeRelativeIds, nodesNormalized, selectedNodeType, handleSelect])

  const centerPos = useMemo(
    () => [selectedNode?.x || 0, selectedNode?.y || 0, selectedNode?.z || 0] as [number, number, number],
    [selectedNode?.x, selectedNode?.y, selectedNode?.z],
  )

  // Memoized rounded rectangle shape - LEFT rounded, RIGHT sharp
  const roundedRectShape = useMemo(() => {
    const shape = new Shape()
    const w = nodeSize + 6
    const h = nodeSize + 6
    const r = nodeSize / 4
    const x = -w / 2
    const y = -h / 2
    // Start at top-left (after radius)
    shape.moveTo(x + r, y)
    // Top edge to top-right (sharp corner)
    shape.lineTo(x + w, y)
    // Right edge to bottom-right (sharp corner)
    shape.lineTo(x + w, y + h)
    // Bottom edge to bottom-left (before radius)
    shape.lineTo(x + r, y + h)
    // Bottom-left rounded corner
    shape.quadraticCurveTo(x, y + h, x, y + h - r)
    // Left edge going up
    shape.lineTo(x, y + r)
    // Top-left rounded corner
    shape.quadraticCurveTo(x, y, x + r, y)
    shape.closePath()
    return shape
  }, [])

  return (
    <group>
      <Billboard key="node-badges" position={centerPos}>
        {nodeBadges.length ? nodeBadges : null}
        {connectingLines}
        <mesh>
          <shapeGeometry args={[roundedRectShape]} />
          <meshBasicMaterial color="white" opacity={0.5} side={2} transparent />
        </mesh>
      </Billboard>
    </group>
  )
})

RelevanceGroups.displayName = 'RelevanceGroups'
