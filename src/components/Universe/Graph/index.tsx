import { Segments } from '@react-three/drei'
import { useMemo } from 'react'
import { Vector3 } from 'three'
import { useGraphData } from '~/components/DataRetriever'
import { useDataStore } from '~/stores/useDataStore'
import { Link } from '~/types'
import { maxChildrenDisplayed } from '../constants'
import { Cubes } from './Cubes'
import { Earth } from './Earth'
import { Particles } from './Particles'
import { Segment } from './Segment'
import { NodeDetailsPanel } from './UI'

export const Graph = () => {
  const data = useGraphData()
  const isLoading = useDataStore((s) => s.isFetching)
  const graphStyle = useDataStore((s) => s.graphStyle)
  const showSelectionGraph = useDataStore((s) => s.showSelectionGraph)
  const selectedNodeRelativeIds = useDataStore((s) => s.selectedNodeRelativeIds)
  const selectionGraphData = useDataStore((s) => s.selectionGraphData)
  const selectedNode = useDataStore((s) => s.selectedNode)

  const isPerson = selectedNode?.node_type === 'guest'

  const lineWidth = useMemo(() => {
    if (showSelectionGraph) {
      return 0
    }

    if (graphStyle === 'force') {
      return 0.2
    }

    return 0.4
  }, [showSelectionGraph, graphStyle])

  const nodeBadges = useMemo(() => {
    const nodes = showSelectionGraph ? selectionGraphData.nodes : data?.nodes || []

    const childIds = nodes
      .filter((f) => selectedNodeRelativeIds.includes(f?.ref_id || '') || selectedNode?.ref_id === f?.ref_id)
      .slice(0, maxChildrenDisplayed)

    const badgesToRender = childIds.map((n) => {
      // const relativeIds =
      // (data?.nodes || []).filter((f) => f.ref_id && nodesAreRelatives(f, n)).map((nd) => nd?.ref_id || '') || []

      const spos = new Vector3(selectedNode?.x, selectedNode?.y, selectedNode?.z)

      const tpos = new Vector3(n.x, n.y, n.z)

      const l: Link<string> = {
        source: selectedNode?.id ? selectedNode.id : '',
        target: n.id ? n.id : '',
        targetRef: n.ref_id,
        sourceRef: selectedNode?.ref_id,
        sourcePosition: spos,
        targetPosition: tpos,
      }

      return (
        <Segment
          // eslint-disable-next-line react/no-array-index-key
          key={n.id}
          link={l}
        />
      )
    })

    return badgesToRender
  }, [selectedNodeRelativeIds, data?.nodes, showSelectionGraph, selectionGraphData, selectedNode])

  if (isLoading) {
    return null
  }

  return (
    <>
      <Cubes />
      <Earth />

      <Particles />

      {graphStyle !== 'earth' && (
        <Segments
          /** NOTE: using the key in this way the segments re-mounts
           *  everytime the data.links count changes
           * */
          key={`links-${nodeBadges.length}-${graphStyle}`}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          fog
          limit={nodeBadges.length}
          lineWidth={lineWidth}
        >
          {nodeBadges}
        </Segments>
      )}
       { !isPerson && <NodeDetailsPanel />}
    </>
  )
}
