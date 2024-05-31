import { Segments } from '@react-three/drei'
import { useEffect, useMemo } from 'react'
import { Vector3 } from 'three'
import { usePrevious } from '~/hooks/usePrevious'
import { getGraphDataPositions } from '~/network/fetchGraphData/const'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore } from '~/stores/useGraphStoreLatest'
import { Link } from '~/types'
import { maxChildrenDisplayed } from '../constants'
import { Cubes } from './Cubes'
import { Earth } from './Earth'
import { LoadingNodes } from './LoadingNodes'
import { Particles } from './Particles'
import { Segment } from './Segment'
import { NodeDetailsPanel } from './UI'

export const Graph = () => {
  const { dataInitial, isLoadingNew, isFetching } = useDataStore((s) => s)

  const { data, setData, graphStyle, showSelectionGraph, selectedNodeRelativeIds, selectionGraphData, selectedNode } =
    useGraphStore((s) => s)

  const prevNodesLength = usePrevious<number>(dataInitial?.nodes ? dataInitial.nodes.length : 0)
  const prevGraphStyle = usePrevious<string>(graphStyle)

  useEffect(() => {
    if (!dataInitial?.nodes) {
      return
    }

    if (prevNodesLength !== dataInitial?.nodes.length || prevGraphStyle !== graphStyle) {
      const { links, nodes } = getGraphDataPositions(graphStyle, dataInitial.nodes)

      console.log('update simulation')

      setData({
        nodes,
        links,
      })
    }
  }, [prevNodesLength, graphStyle, setData, prevGraphStyle, dataInitial?.nodes])

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
      const spos = new Vector3(selectedNode?.x, selectedNode?.y, selectedNode?.z)

      const tpos = new Vector3(n.x, n.y, n.z)

      const l: Link<string> = {
        source: selectedNode?.ref_id ? selectedNode.ref_id : '',
        target: n.ref_id ? n.ref_id : '',
        targetRef: n.ref_id,
        sourceRef: selectedNode?.ref_id,
        sourcePosition: spos,
        targetPosition: tpos,
      }

      return (
        <Segment
          // eslint-disable-next-line react/no-array-index-key
          key={n.ref_id}
          link={l}
        />
      )
    })

    return badgesToRender
  }, [selectedNodeRelativeIds, data?.nodes, showSelectionGraph, selectionGraphData, selectedNode])

  if (!data) {
    return null
  }

  return (
    <>
      <Cubes />
      <Earth />

      <Particles />
      {(isLoadingNew || isFetching) && <LoadingNodes />}

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
      <NodeDetailsPanel />
    </>
  )
}
