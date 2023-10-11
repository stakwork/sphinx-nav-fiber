import { Segments } from '@react-three/drei'
import { useMemo } from 'react'
import { useGraphData } from '~/components/DataRetriever'
import { useDataStore } from '~/stores/useDataStore'
import { GraphData } from '~/types'
import { Cubes } from './Cubes'
import { Earth } from './Earth'
import { GraphLoadingIcon } from './Icons'
import { Particles } from './Particles'
import { Segment } from './Segment'
import { NodeDetailsPanel } from './UI'

export const Graph = () => {
  const data = useGraphData()
  const isLoading = useDataStore((s) => s.isFetching)
  const graphStyle = useDataStore((s) => s.graphStyle)
  const showSelectionGraph = useDataStore((s) => s.showSelectionGraph)

  const lineWidth = useMemo(() => {
    if (showSelectionGraph) {
      return 0
    }

    if (graphStyle === 'force') {
      return 0.2
    }

    return 0.4
  }, [showSelectionGraph, graphStyle])

  if (isLoading) {
    return <GraphLoadingIcon />
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
          key={`links-${data.links.length}-${graphStyle}`}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          fog
          limit={data.links.length}
          lineWidth={lineWidth}
        >
          {(data.links as unknown as GraphData['links']).map((link, index) => (
            <Segment
              // eslint-disable-next-line react/no-array-index-key
              key={index.toString()}
              link={link}
            />
          ))}
        </Segments>
      )}

      <NodeDetailsPanel />
    </>
  )
}
