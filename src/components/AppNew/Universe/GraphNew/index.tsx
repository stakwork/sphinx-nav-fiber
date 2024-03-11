import { Segments } from '@react-three/drei'
import { useMemo } from 'react'
import { useGraphStore } from '~/stores/useGraphStore'
import { Connections } from './Connections'
import { Cubes } from './Cubes'
import { Layer } from './Layers'
import { Segment } from './Segment'
import { NodeDetailsPanel } from './UI'

export const GraphNew = () => {
  const [data, isLoading, graphStyle, showSelectionGraph, selectionGraphData] = useGraphStore((s) => [
    s.data,
    s.isFetching,
    s.graphStyle,
    s.showSelectionGraph,
    s.selectionGraphData,
  ])

  const lineWidth = useMemo(() => {
    if (showSelectionGraph) {
      return 0
    }

    if (graphStyle === 'force') {
      return 0.2
    }

    return 0.4
  }, [showSelectionGraph, graphStyle])

  const links = useMemo(() => {
    const edges = showSelectionGraph ? selectionGraphData.links : data?.links

    const badgesToRender = (edges || []).map((n) => (
      // const relativeIds =
      // (data?.nodes || []).filter((f) => f.ref_id && nodesAreRelatives(f, n)).map((nd) => nd?.ref_id || '') || []

      <Segment
        // eslint-disable-next-line react/no-array-index-key
        key={n.source}
        link={n}
      />
    ))

    return badgesToRender
  }, [data?.links, selectionGraphData.links, showSelectionGraph])

  if (isLoading) {
    return null
  }

  return (
    <>
      <Cubes />
      {false && <Connections connections={data?.links || []} />}
      {!showSelectionGraph && (
        <Segments
          /** NOTE: using the key in this way the segments re-mounts
           *  everytime the data.links count changes
           * */
          key={`links-${links.length}-${graphStyle}`}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          fog
          limit={links.length}
          lineWidth={lineWidth}
        >
          {links}
        </Segments>
      )}
      <NodeDetailsPanel />
      {false && <Layer />}
    </>
  )
}
